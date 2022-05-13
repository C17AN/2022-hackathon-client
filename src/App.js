import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenAtom, usernameAtom } from "store/store";
import MainLayout from "./layout/MainLayout/MainLayout";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "hackathon-6a27a.firebaseapp.com",
  projectId: "hackathon-6a27a",
  storageBucket: "hackathon-6a27a.appspot.com",
  messagingSenderId: "446447542102",
  appId: "1:446447542102:web:1de6573c968571e79c00f7",
  measurementId: "G-V7KVFXSLYD"
};

function App() {
  const [username, setUsername] = useRecoilState(usernameAtom)
  const [, setAccessToken] = useRecoilState(accessTokenAtom)
  const initAccessToken = async () => {
    const app = initializeApp(firebaseConfig);
    const authService = getAuth();
    const user = authService?.currentUser
    console.log(user)
    const { displayName, accessToken } = user || { displayName: "", accessToken: "" };
    setUsername(displayName)
    if (accessToken) {
      sessionStorage.setItem("accessToken", accessToken)
      setAccessToken(accessToken)
    }
    console.log(accessToken)
  }

  useEffect(() => {
    initAccessToken()
  }, [])


  return (
    <MainLayout />
  );
}

export default App;
