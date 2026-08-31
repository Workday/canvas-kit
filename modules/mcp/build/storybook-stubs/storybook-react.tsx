import type {ComponentType} from 'react';

export type Meta<T = unknown> = {
  title?: string;
  component?: T;
  tags?: string[];
  parameters?: Record<string, unknown>;
};

export type StoryObj<T = unknown> = {
  render?: ComponentType;
  args?: Partial<T>;
};
