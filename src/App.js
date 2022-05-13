import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenAtom, emailAtom, usernameAtom } from "store/store";
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
const app = initializeApp(firebaseConfig);

function App() {
  const [username, setUsername] = useRecoilState(usernameAtom)
  const [email, setEmail] = useRecoilState(emailAtom)
  const [, setAccessToken] = useRecoilState(accessTokenAtom)

  const initAccessToken = () => {
    const authService = getAuth();
    const userName = authService?.currentUser?.displayName
    onAuthStateChanged(authService, (user) => {
      if (user) {
        const { accessToken, displayName, email } = user;
        sessionStorage.setItem("accessToken", accessToken)
        setUsername(displayName)
        setEmail(email)
        setAccessToken(accessToken)
      } else {
        // User is signed out
        // ...
      }
    })

    if (userName) {
    }
  }

  useEffect(() => {
    initAccessToken()
  }, [username])


  return (
    <MainLayout />
  );
}

export default App;
