import { User } from "firebase/auth";

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

export type Metadata = {
	createdAt: string;
	lastLoginAt: string;
};

export type TUserInfoState = {
  role: string
  userInfo: FirebaseNextJSContextType
}

export type FirebaseNextJSContextType = {
  userLoggedIn: boolean;
  isEmailUser: boolean;
  currentUser: User | null;
};