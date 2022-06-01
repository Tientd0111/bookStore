import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from "./components/SignUp";
import Kyc from "./components/Kyc";
import Detail from "./components/Detail";
const CommonMain = ({children}) => {
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>
			<Login/>
			<Kyc/>
			<Detail/>
			<SignUp/>
			<Footer/>
		</>
	);
};

export default CommonMain;