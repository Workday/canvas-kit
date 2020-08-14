// TODO: revise name, maybe? MenuState? MenuVisibilityState? MenuPhase?
// TODO: rename preopen to startopen?
// TODO: rename preclose to startclose?
//
// closed: Menu is completely closed.
// preopen: Menu was previously completely closed and has just been instructed to open. The preopen state
//          is necessary in order to apply an opacity of 0 to the Menu before it is transitioned
//          to an opacity of 1.0 in the opening state.
// opening: Menu is in the process of opening.
// open: Menu is completely open.
// preclose: Menu was previously completely open and has just been instructed to close.
// closing: Menu is in the process of closing.
export type MenuVisibility = 'closed' | 'preopen' | 'opening' | 'open' | 'preclose' | 'closing';
