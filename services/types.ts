export type State = {
  count: number;
  increase: () => void;
  decrease: () => void;
  dispatch: (action: Action) => void;
};

export type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

export type TSidebarItem = {
  title: string,
  path: string
}