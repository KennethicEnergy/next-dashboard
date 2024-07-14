// store.ts
import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Action, State } from './types';
import { reducer } from '@/reducers/reducer';

const useStore = create(
  persist(
    (set, get) => ({
      count: 0,
      increase: () => set((state: State) => ({ count: state.count + 1 })),
      decrease: () => set((state: State) => ({ count: state.count - 1 })),
      dispatch: (action: Action) => set((state: State) => reducer(state, action)),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
export default useStore;
