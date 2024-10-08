"use client";
import { getUserCS } from "firebase-nextjs/client/auth"
import { GoogleSignInButton, EmailSignInButton } from "firebase-nextjs/client/components";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import GoogleLogo from "@/components/google-logo/google-logo";
import Spinner from "@/components/spinner";
import { BiAccessibility } from "react-icons/bi";
import useUserAccountStore from "@/store/accountStore";

const LoginPage = () => {
	const { currentUser } = getUserCS();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);
  const { setRole } = useUserAccountStore();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.type === "email") setEmail(e.target.value);
		if (e.target.type === "password") setPassword(e.target.value);
		setErrorMessage("");
	}

  useEffect(() => {
    setRole('');
  }, [])

	return (
		<div className="ppace-y-6 h-screen w-screen bg-white text-[#45A9EA] flex flex-col justify-center items-center transition-all p-2">
			<div className="max-w-md flex flex-col shadow-lg border rounded-xl w-full bg-gray-100/40">
				<div className="flex flex-col border-b rounded-xl w-full p-4 md:p-8 lg:p-10 py-10 items-center bg-white">
					{!currentUser ? (
						<>
							<h1 className="text-xl font-bold italic text-[#45A9EA] flex items-center">
                <BiAccessibility />
                Dash
              </h1>
							<h2 className="text-sm text-[#45A9EA] mb-8">
								Where quick individuals meet
							</h2>
							<input
								type="email"
								placeholder="Email"
								className="w-full p-1.5 rounded-md mb-2 border text-sm focus:border-[#45A9EA] focus:border-2 focus:outline-none"
								onChange={handleChange}
							/>
							<input
								type="password"
								placeholder="Password"
								className="w-full p-1.5 rounded-md mb-2 border text-sm focus:border-[#45A9EA] focus:border-2 focus:outline-none"
								onChange={handleChange}
							/>
							{errorMessage != "" && (
								<span className="text-red-600 text-sm font-medium mb-2 w-full">
									{errorMessage}
								</span>
							)}
							<EmailSignInButton
								email={email}
								password={password}
								setErrorMessage={setErrorMessage}
								setLoading={setLoading}
								className="w-full">
								<button
									className="w-full bg-gradient-to-b bg-[#45A9EA] text-white rounded-lg p-2 text-sm shadow-md hover:shadow-lg transition-all disabled:to-purple-400 disabled:from-purple-400"
									disabled={loading}>
									Sign In
								</button>
							</EmailSignInButton>
							<div className="flex flex-row mt-10 w-full items-center mb-8">
								<div className="w-1/2 h-[1px] bg-gray-300"></div>
								<p className="text-gray-400 text-sm font-normal mx-2">or</p>
								<div className="w-1/2 h-[1px] bg-gray-300"></div>
							</div>
							<GoogleSignInButton className="w-full">
								<button className="w-full bg-white text-gray-500 font-medium rounded-lg p-2 text-sm border shadow-sm hover:shadow-md transition-all flex flex-row items-center justify-center gap-2">
									<GoogleLogo height={18} width={18} />
									Sign in with Google
								</button>
							</GoogleSignInButton>
						</>
					) : (
						<Spinner className="h-5 w-5 my-20" />
					)}
				</div>
				<div className="flex flex-row justify-center text-xs font-regular text-gray-500 my-2">
					New here?
					<Link
						className="text-[#45A9EA] ml-1 cursor-pointer font-medium"
						href={"/register"}>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
}


export default LoginPage;