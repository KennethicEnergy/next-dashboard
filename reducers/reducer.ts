import { Action, State } from "@/services/types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, count: state.count + 1 };
    case 'DECREASE':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};