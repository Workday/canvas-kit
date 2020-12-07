import {createMachine, assign, interpret, StateMachine} from '../lib';

describe('@xstate/fsm', () => {
  interface LightContext {
    count: number;
    foo: string | undefined;
    go: boolean;
  }

  type LightEvent = {type: 'TIMER'} | {type: 'INC'} | {type: 'EMERGENCY'; value: number};

  type LightState =
    | {
        value: 'green';
        context: LightContext & {go: true};
      }
    | {
        value: 'yellow';
        context: LightContext & {go: false};
      }
    | {
        value: 'red';
        context: LightContext & {go: false};
      };

  const lightConfig: StateMachine.Config<LightContext, LightEvent, LightState> = {
    id: 'light',
    initial: 'green',
    context: {count: 0, foo: 'bar', go: true},
    states: {
      green: {
        entry: 'enterGreen',
        exit: [
          'exitGreen',
          assign({count: ctx => ctx.count + 1}),
          assign({count: ctx => ctx.count + 1}),
          assign<LightContext>({foo: 'static'}),
          assign({foo: ctx => ctx.foo + '++'}),
        ],
        on: {
          TIMER: {
            target: 'yellow',
            actions: ['g-y 1', 'g-y 2'],
          },
        },
      },
      yellow: {
        entry: assign<LightContext>({go: false}),
        on: {
          INC: {actions: assign({count: ctx => ctx.count + 1})},
          EMERGENCY: {
            target: 'red',
            cond: (ctx, e) => ctx.count + e.value === 2,
          },
        },
      },
      red: {},
    },
  };
  const lightFSM = createMachine<LightContext, LightEvent, LightState>(lightConfig);
  it('should return back the config object', () => {
    expect(lightFSM.config).toBe(lightConfig);
  });
  it('should have the correct initial state', () => {
    const {initialState} = lightFSM;

    expect(initialState.value).toEqual('green');
    expect(initialState.actions).toEqual([{type: 'enterGreen'}]);
  });
  it('should transition correctly', () => {
    const nextState = lightFSM.transition('green', 'TIMER');
    expect(nextState.value).toEqual('yellow');
    expect(nextState.actions.map(action => action.type)).toEqual(['exitGreen', 'g-y 1', 'g-y 2']);
    expect(nextState.context).toEqual({
      count: 2,
      foo: 'static++',
      go: false,
    });
  });

  it('should stay on the same state for undefined transitions', () => {
    const nextState = lightFSM.transition('green', 'FAKE' as any);
    expect(nextState.value).toBe('green');
    expect(nextState.actions).toEqual([]);
  });

  it('should throw an error for undefined states', () => {
    expect(() => {
      lightFSM.transition('unknown', 'TIMER');
    }).toThrow();
  });

  it('should work with guards', () => {
    const yellowState = lightFSM.transition('yellow', 'EMERGENCY');
    expect(yellowState.value).toEqual('yellow');

    const redState = lightFSM.transition('yellow', {
      type: 'EMERGENCY',
      value: 2,
    });
    expect(redState.value).toEqual('red');
    expect(redState.context.count).toBe(0);

    const yellowOneState = lightFSM.transition('yellow', 'INC');
    const redOneState = lightFSM.transition(yellowOneState, {
      type: 'EMERGENCY',
      value: 1,
    });

    expect(redOneState.value).toBe('red');
    expect(redOneState.context.count).toBe(1);
  });

  it('should be changed if state changes', () => {
    expect(lightFSM.transition('green', 'TIMER').changed).toBe(true);
  });

  it('should be changed if any actions occur', () => {
    expect(lightFSM.transition('yellow', 'INC').changed).toBe(true);
  });

  it('should not be changed on unknown transitions', () => {
    expect(lightFSM.transition('yellow', 'UNKNOWN' as any).changed).toBe(false);
  });

  it('should match initialState', () => {
    const {initialState} = lightFSM;

    expect(initialState.matches('green')).toBeTruthy();

    if (initialState.matches('green')) {
      expect(initialState.context.go).toBeTruthy();
    }
  });

  it('should match transition states', () => {
    const {initialState} = lightFSM;
    const nextState = lightFSM.transition(initialState, 'TIMER');

    expect(nextState.matches('yellow')).toBeTruthy();

    if (nextState.matches('yellow')) {
      expect(nextState.context.go).toBeFalsy();
    }
  });
});

describe('interpreter', () => {
  const toggleMachine = createMachine({
    initial: 'active',
    states: {
      active: {
        on: {TOGGLE: 'inactive'},
      },
      inactive: {},
    },
  });

  it('listeners should immediately get the initial state', done => {
    const toggleService = interpret(toggleMachine).start();
    console.log('running');

    toggleService.subscribe(state => {
      if (state.matches('active')) {
        done();
      }
    });
  });

  it('listeners should subscribe to state changes', done => {
    const toggleService = interpret(toggleMachine).start();

    toggleService.subscribe(state => {
      if (state.matches('inactive')) {
        done();
      }
    });

    toggleService.send('TOGGLE');
  });

  it('should execute actions', done => {
    let executed = false;

    const actionMachine = createMachine({
      initial: 'active',
      states: {
        active: {
          on: {
            TOGGLE: {
              target: 'inactive',
              actions: () => {
                executed = true;
              },
            },
          },
        },
        inactive: {},
      },
    });

    const actionService = interpret(actionMachine).start();

    actionService.subscribe(() => {
      if (executed) {
        done();
      }
    });

    actionService.send('TOGGLE');
  });

  describe('`start` method', () => {
    it('should start the service with initial state by default', () => {
      const machine = createMachine({
        initial: 'foo',
        states: {
          foo: {
            on: {
              NEXT: 'bar',
            },
          },
          bar: {},
        },
      });

      const service = interpret(machine).start();

      expect(service.state.value).toBe('foo');
    });

    it('should rehydrate the state if the state if provided', () => {
      const machine = createMachine({
        initial: 'foo',
        states: {
          foo: {
            on: {
              NEXT: 'bar',
            },
          },
          bar: {
            on: {
              NEXT: 'baz',
            },
          },
          baz: {},
        },
      });

      const service = interpret(machine).start('bar');
      expect(service.state.value).toBe('bar');

      service.send('NEXT');
      expect(service.state.matches('baz')).toBe(true);
    });

    it('should rehydrate the state and the context if both are provided', () => {
      const machine = createMachine({
        initial: 'foo',
        states: {
          foo: {
            on: {
              NEXT: 'bar',
            },
          },
          bar: {
            on: {
              NEXT: 'baz',
            },
          },
          baz: {},
        },
      });

      const context = {hello: 'world'};
      const service = interpret(machine).start({value: 'bar', context});
      expect(service.state.value).toBe('bar');
      expect(service.state.context).toBe(context);

      service.send('NEXT');
      expect(service.state.matches('baz')).toBe(true);
    });
  });

  it('should execute initial entry action', () => {
    let executed = false;

    const machine = createMachine({
      initial: 'foo',
      states: {
        foo: {
          entry: () => {
            executed = true;
          },
        },
      },
    });

    interpret(machine).start();
    expect(executed).toBe(true);
  });

  it('should lookup string actions in options', () => {
    let executed = false;

    const machine = createMachine(
      {
        initial: 'foo',
        states: {
          foo: {
            entry: 'testAction',
          },
        },
      },
      {
        actions: {
          testAction: () => {
            executed = true;
          },
        },
      }
    );

    interpret(machine).start();

    expect(executed).toBe(true);
  });

  it('should reveal the current state', () => {
    const machine = createMachine({
      initial: 'test',
      context: {foo: 'bar'},
      states: {
        test: {},
      },
    });
    const service = interpret(machine);

    service.start();

    expect(service.state.value).toEqual('test');
    expect(service.state.context).toEqual({foo: 'bar'});
  });

  it('should reveal the current state after transition', done => {
    const machine = createMachine({
      initial: 'test',
      context: {foo: 'bar'},
      states: {
        test: {
          on: {CHANGE: 'success'},
        },
        success: {},
      },
    });
    const service = interpret(machine);

    service.start();

    service.subscribe(() => {
      if (service.state.value === 'success') {
        done();
      }
    });

    service.send('CHANGE');
  });
});

describe('actions', () => {
  it('should call the enter action when initialized', () => {
    const enter = jest.fn();
    const machine = createMachine({
      initial: 'first',
      context: {foo: 'bar'},
      states: {
        first: {entry: enter},
      },
    });
    const service = interpret(machine);

    service.start();

    expect(enter).toBeCalledTimes(1);
    expect(enter).toBeCalledWith({foo: 'bar'}, {type: 'xstate.init'});
  });

  it('should call the exit action when leaving a state', () => {
    const exit = jest.fn();
    const machine = createMachine({
      initial: 'first',
      context: {foo: 'bar'},
      states: {
        first: {exit: exit, on: {NEXT: 'second'}},
        second: {on: {}},
      },
    });
    const service = interpret(machine);

    service.start();
    service.send('NEXT');

    expect(exit).toBeCalledTimes(1);
    expect(exit).toBeCalledWith({foo: 'bar'}, {type: 'NEXT'});
  });

  it('should call an action', () => {
    const action = jest.fn();
    const machine = createMachine({
      initial: 'first',
      context: {foo: 'bar'},
      states: {
        first: {
          on: {
            NEXT: {target: 'second', actions: action},
          },
        },
        second: {on: {}},
      },
    });
    const service = interpret(machine);

    service.start();
    service.send('NEXT');

    expect(action).toBeCalledTimes(1);
    expect(action).toBeCalledWith({foo: 'bar'}, {type: 'NEXT'});
  });

  it('should call an array action', () => {
    const action1 = jest.fn();
    const action2 = jest.fn();
    const machine = createMachine({
      initial: 'first',
      context: {foo: 'bar'},
      states: {
        first: {
          on: {
            NEXT: {target: 'second', actions: [action1, action2]},
          },
        },
        second: {on: {}},
      },
    });
    const service = interpret(machine);

    service.start();
    service.send('NEXT');

    expect(action1).toBeCalledTimes(1);
    expect(action2).toBeCalledTimes(1);
    expect(action1).toBeCalledWith({foo: 'bar'}, {type: 'NEXT'});
    expect(action2).toBeCalledWith({foo: 'bar'}, {type: 'NEXT'});
  });

  it('should call an action by name', () => {
    const action = jest.fn();
    const machine = createMachine(
      {
        initial: 'first',
        context: {foo: 'bar'},
        states: {
          first: {
            on: {
              NEXT: {target: 'second', actions: 'first'},
            },
          },
          second: {on: {}},
        },
      },
      {
        actions: {
          first: action,
        },
      }
    );
    const service = interpret(machine);

    service.start();
    service.send('NEXT');

    expect(action).toBeCalledTimes(1);
    expect(action).toBeCalledWith({foo: 'bar'}, {type: 'NEXT'});
  });
});

describe('guards', () => {
  it('should call a guard', () => {
    const guard = jest.fn(() => true);
    const machine = createMachine({
      initial: 'first',
      context: {foo: 'bar'},
      states: {
        first: {
          on: {
            NEXT: {target: 'second', cond: guard},
          },
        },
        second: {on: {}},
      },
    });
    const service = interpret(machine);

    service.start();
    service.send('NEXT');

    expect(guard).toBeCalledTimes(1);
    expect(guard).toBeCalledWith({foo: 'bar'}, {type: 'NEXT'});
  });

  it('should not transition if a guard returns false', () => {
    const guard = jest.fn(() => false);
    const machine = createMachine({
      initial: 'first',
      context: {foo: 'bar'},
      states: {
        first: {
          on: {
            NEXT: {target: 'second', cond: guard},
          },
        },
        second: {on: {}},
      },
    });
    const service = interpret(machine);

    service.start();
    service.send('NEXT');

    expect(guard).toBeCalledTimes(1);
    expect(service.state.value).toEqual('first');
  });

  it('should call an array of guards', () => {
    const guard = jest.fn(() => true);
    const machine = createMachine({
      initial: 'first',
      context: {foo: 'bar'},
      states: {
        first: {
          on: {
            NEXT: {target: 'second', cond: [guard]},
          },
        },
        second: {on: {}},
      },
    });
    const service = interpret(machine);

    service.start();
    service.send('NEXT');

    expect(guard).toBeCalledTimes(1);
    expect(guard).toBeCalledWith({foo: 'bar'}, {type: 'NEXT'});
  });

  it('should AND the results of guards', () => {
    const guard1 = jest.fn(() => true);
    const guard2 = jest.fn(() => false);
    const machine = createMachine({
      initial: 'first',
      context: {foo: 'bar'},
      states: {
        first: {
          on: {
            NEXT: {target: 'second', cond: [guard1, guard2]},
          },
        },
        second: {on: {}},
      },
    });
    const service = interpret(machine);

    service.start();
    service.send('NEXT');

    expect(guard1).toBeCalledTimes(1);
    expect(guard1).toBeCalledWith({foo: 'bar'}, {type: 'NEXT'});
    expect(guard2).toBeCalledTimes(1);
    expect(guard2).toBeCalledWith({foo: 'bar'}, {type: 'NEXT'});

    expect(service.state.value).toEqual('first');
  });

  it('should not call the second guard if the first guard returns false', () => {
    const guard1 = jest.fn(() => false);
    const guard2 = jest.fn(() => true);
    const machine = createMachine({
      initial: 'first',
      context: {foo: 'bar'},
      states: {
        first: {
          on: {
            NEXT: {target: 'second', cond: [guard1, guard2]},
          },
        },
        second: {on: {}},
      },
    });
    const service = interpret(machine);

    service.start();
    service.send('NEXT');

    expect(guard1).toBeCalledTimes(1);
    expect(guard1).toBeCalledWith({foo: 'bar'}, {type: 'NEXT'});
    expect(guard2).toBeCalledTimes(0);

    expect(service.state.value).toEqual('first');
  });

  it('should call an guard by name', () => {
    const guard = jest.fn();
    const machine = createMachine(
      {
        initial: 'first',
        context: {foo: 'bar'},
        states: {
          first: {
            on: {
              NEXT: {target: 'second', cond: 'first'},
            },
          },
          second: {on: {}},
        },
      },
      {
        guards: {
          first: guard,
        },
      }
    );
    const service = interpret(machine);

    service.start();
    service.send('NEXT');

    expect(guard).toBeCalledTimes(1);
    expect(guard).toBeCalledWith({foo: 'bar'}, {type: 'NEXT'});
  });
});
