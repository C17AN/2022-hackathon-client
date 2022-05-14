import React, { useState } from 'react'
import TalkImage from "assets/images/talk-image.svg"
import "./Hero.css"
import { motion } from 'framer-motion'
import BaseCard from 'components/common/BaseCard/BaseCard'
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { useRecoilState } from 'recoil'
import { accessTokenAtom, usernameAtom } from 'store/store'
import { useNavigate } from 'react-router-dom'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "hackathon-6a27a.firebaseapp.com",
  projectId: "hackathon-6a27a",
  storageBucket: "hackathon-6a27a.appspot.com",
  messagingSenderId: "446447542102",
  appId: "1:446447542102:web:1de6573c968571e79c00f7",
  measurementId: "G-V7KVFXSLYD"
};


const provider = new GoogleAuthProvider();

const Hero = () => {
  const [, setAcessToken] = useRecoilState(accessTokenAtom)
  const [, setUsername] = useRecoilState(usernameAtom)
  const app = initializeApp(firebaseConfig);

  const authService = getAuth();
  const navigation = useNavigate()

  const handleGoogleLogin = async () => {
    await signInWithRedirect(authService, provider);

  }

  getRedirectResult(authService)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const user = result.user;
      // The signed-in user info.
      setUsername(user)
      if (accessToken) {
        sessionStorage.setItem('accessToken', accessToken)
        setAcessToken(accessToken)
      }
      console.log(result)
      navigation('/menu')
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  return (
    <BaseCard className="h-full">
      <img src={TalkImage} className="hero-image" width="240" alt="hero" />
      <section className="hero-title text-center">
        <h1 className="text-3xl mt-4 font-montserrat font-semibold mb-3">
          <span className="text-blue-500">Home</span>peak
        </h1>
        <p className="text-gray-400 text-md">이제, 혼자서 시작하는 회화</p>
        <div className="mt-4 space-y-4">
          <motion.p
            className="mt-8 py-2 rounded-md bg-gray-200 text-gray-500 shadow-md cursor-pointer"
            onClick={handleGoogleLogin}>
            로그인
          </motion.p>
          <motion.p
            className="mt-8 py-2 rounded-md bg-blue-400 text-white shadow-md cursor-pointer">
            Google로 시작하기
          </motion.p>
        </div>
      </section>
    </BaseCard>
  )
}

export default Hero
