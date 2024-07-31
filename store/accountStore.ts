import { FirebaseCredentials, TUserInfoState } from '@/services/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialFirebaseCredentials: FirebaseCredentials = {
  userLoggedIn: false,
  isEmailUser: false,
  currentUser: {
    providerId: '',
    proactiveRefresh: {
      user: {
        uid: '',
        email: '',
        emailVerified: false,
        isAnonymous: false,
        providerData: [],
        stsTokenManager: {
          refreshToken: '',
          accessToken: '',
          expirationTime: 0,
        },
        createdAt: '',
        lastLoginAt: '',
        apiKey: '',
        appName: '',
      },
      isRunning: false,
      timerId: null,
      errorBackoff: 0,
    },
    reloadUserInfo: {
      localId: '',
      email: '',
      passwordHash: '',
      emailVerified: false,
      passwordUpdatedAt: 0,
      providerUserInfo: [],
      validSince: '',
      lastLoginAt: '',
      createdAt: '',
      lastRefreshAt: '',
    },
    reloadListener: null,
    uid: '',
    auth: {
      apiKey: '',
      authDomain: '',
      appName: '',
      currentUser: {
        uid: '',
        email: '',
        emailVerified: false,
        isAnonymous: false,
        providerData: [],
        stsTokenManager: {
          refreshToken: '',
          accessToken: '',
          expirationTime: 0,
        },
        createdAt: '',
        lastLoginAt: '',
        apiKey: '',
        appName: '',
      },
    },
    stsTokenManager: {
      refreshToken: '',
      accessToken: '',
      expirationTime: 0,
    },
    accessToken: '',
    displayName: null,
    email: '',
    emailVerified: false,
    phoneNumber: null,
    photoURL: null,
    isAnonymous: false,
    tenantId: null,
    providerData: [],
    metadata: {
      createdAt: '',
      lastLoginAt: '',
    },
  },
};

export const initialUserInfo = {
  role: '',
  firebaseCredentials: initialFirebaseCredentials,
};

type UserInfoActions = {
  setUserInfo: (userInfo: Partial<TUserInfoState['userInfo']>) => void;
};

export type UserInfoStore = TUserInfoState & UserInfoActions;

export const useUserAccountStore = create<UserInfoStore>()(
  persist(
    (set) => ({
      userInfo: initialUserInfo,
      setUserInfo: (userInfo) => set((state) => ({
        userInfo: {
          role: state.userInfo.role,
          firebaseCredentials: {...state.userInfo.firebaseCredentials}
        },
      })),
    }),
    {
      name: 'user-store',
    },
  )
);

export default useUserAccountStore;
