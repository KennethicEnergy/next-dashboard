import { FirebaseCredentials, ProviderData, STSTokenManager } from '@/services/types';
import { User } from 'firebase/auth'; // Replace with the correct import for the User type from Firebase

export const transformToFirebaseCredentials = (currentUser: any | null): FirebaseCredentials => {
  if (!currentUser) {
    return {
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
  }

  // Extract token manager and metadata properly
  const stsTokenManager: STSTokenManager = {
    refreshToken: currentUser.refreshToken,
    accessToken: '', // Retrieve this value if available
    expirationTime: 0, // Set appropriately
  };

  const providerData: ProviderData[] = currentUser.providerData.map((data:any) => ({
    providerId: data.providerId,
    uid: data.uid,
    displayName: data.displayName || null,
    email: data.email || '',
    phoneNumber: data.phoneNumber || null,
    photoURL: data.photoURL || null,
  }));

  return {
    userLoggedIn: true,
    isEmailUser: currentUser.email !== null,
    currentUser: {
      providerId: currentUser.providerId || '',
      proactiveRefresh: {
        user: {
          uid: currentUser.uid,
          email: currentUser.email || '',
          emailVerified: currentUser.emailVerified,
          isAnonymous: currentUser.isAnonymous,
          providerData: providerData,
          stsTokenManager: stsTokenManager,
          createdAt: currentUser.metadata?.creationTime || '',
          lastLoginAt: currentUser.metadata?.lastSignInTime || '',
          apiKey: '', // Set appropriately
          appName: '', // Set appropriately
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
      uid: currentUser.uid,
      auth: {
        apiKey: '',
        authDomain: '',
        appName: '',
        currentUser: {
          uid: currentUser.uid,
          email: currentUser.email || '',
          emailVerified: currentUser.emailVerified,
          isAnonymous: currentUser.isAnonymous,
          providerData: providerData,
          stsTokenManager: stsTokenManager,
          createdAt: currentUser.metadata?.creationTime || '',
          lastLoginAt: currentUser.metadata?.lastSignInTime || '',
          apiKey: '',
          appName: '',
        },
      },
      stsTokenManager: stsTokenManager,
      accessToken: '', // Set appropriately
      displayName: currentUser.displayName || null,
      email: currentUser.email || '',
      emailVerified: currentUser.emailVerified,
      phoneNumber: currentUser.phoneNumber || null,
      photoURL: currentUser.photoURL || null,
      isAnonymous: currentUser.isAnonymous,
      tenantId: currentUser.tenantId || null,
      providerData: providerData,
      metadata: {
        createdAt: currentUser.metadata?.creationTime || '',
        lastLoginAt: currentUser.metadata?.lastSignInTime || '',
      },
    },
  };
};
