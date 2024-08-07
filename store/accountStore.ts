import { FirebaseNextJSContextType, TUserInfoState } from '@/services/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialFirebaseCredentials: FirebaseNextJSContextType = {
  userLoggedIn: false,
  isEmailUser: false,
  currentUser: null
};

type UserInfoActions = {
  setRole: (role: string) => void;
  setUserInfo: (userInfo: FirebaseNextJSContextType) => void;
};

export type UserInfoStore = TUserInfoState & UserInfoActions;

export const useUserAccountStore = create<UserInfoStore>()(
  persist(
    (set, get) => ({
      userInfo: initialFirebaseCredentials,
      role: '',
      setRole: (role) => set((state) => ({ ...state, role })),
      setUserInfo: (userInfo) => set((state) => ({ ...state, userInfo })),
    }),
    {
      name: 'user-store',
    },
  )
);

export default useUserAccountStore;
