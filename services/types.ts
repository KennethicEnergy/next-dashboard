export type State = {
	count: number;
	increase: () => void;
	decrease: () => void;
	dispatch: (action: Action) => void;
};

export type Action = { type: "INCREASE" } | { type: "DECREASE" };

export type TSidebarItem = {
	title: string;
	path: string;
};

export type FirebaseCredentials = {
	userLoggedIn: boolean;
	isEmailUser: boolean;
	currentUser: {
		providerId: string;
		proactiveRefresh: {
			user: {
				uid: string;
				email: string;
				emailVerified: boolean;
				isAnonymous: boolean;
				providerData: ProviderData[];
				stsTokenManager: STSTokenManager;
				createdAt: string;
				lastLoginAt: string;
				apiKey: string;
				appName: string;
			};
			isRunning: boolean;
			timerId: null | string;
			errorBackoff: number;
		};
		reloadUserInfo: ReloadUserInfo;
		reloadListener: null | string;
		uid: string;
		auth: Auth;
		stsTokenManager: STSTokenManager;
		accessToken: string;
		displayName: null | string;
		email: string;
		emailVerified: boolean;
		phoneNumber: null | string;
		photoURL: null | string;
		isAnonymous: boolean;
		tenantId: null | string;
		providerData: ProviderData[];
		metadata: Metadata;
	};
};

export type ProviderData = {
	providerId: string;
	uid: string;
	displayName: null | string;
	email: string;
	phoneNumber: null | string;
	photoURL: null | string;
};

export type STSTokenManager = {
	refreshToken: string;
	accessToken: string;
	expirationTime: number;
};

export type ReloadUserInfo = {
	localId: string;
	email: string;
	passwordHash: string;
	emailVerified: boolean;
	passwordUpdatedAt: number;
	providerUserInfo: ProviderUserInfo[];
	validSince: string;
	lastLoginAt: string;
	createdAt: string;
	lastRefreshAt: string;
};

export type ProviderUserInfo = {
	providerId: string;
	federatedId: string;
	email: string;
	rawId: string;
};

export type Auth = {
	apiKey: string;
	authDomain: string;
	appName: string;
	currentUser: CurrentUser;
};

export type CurrentUser = {
	uid: string;
	email: string;
	emailVerified: boolean;
	isAnonymous: boolean;
	providerData: ProviderData[];
	stsTokenManager: STSTokenManager;
	createdAt: string;
	lastLoginAt: string;
	apiKey: string;
	appName: string;
};

export type Metadata = {
	createdAt: string;
	lastLoginAt: string;
};

export type TUserInfoState = {
  userInfo: {
    role: string,
    firebaseCredentials: FirebaseCredentials
  }
}