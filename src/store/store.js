import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { atom } from "recoil";

export const isSignedInAtom = atom({
  key: "isSignedIn",
  default: false
})

export const accessTokenAtom = atom({
  key: "accessToken",
  default: null
})

export const usernameAtom = atom({
  key: "username",
  default: null,
})

export const emailAtom = atom({
  key: "email",
  default: null,
})

export const problemTypeAtom = atom({
  key: "problemType",
  default: "PRE",
});

export const languageState = atom({
  key: "languageState",
  default: null,
});

export const difficultyState = atom({
  key: "difficultyState",
  default: null,
});

export const studyModeState = atom({
  key: "studyModeState",
  default: null,
});

export const categoryState = atom({
  key: "categoryState",
  default: null
})

export const testListState = atom({
  key: "testListState",
  default: []
})

export const testIndexState = atom({
  key: "testIndexState",
  default: 0
})

export const testResultState = atom({
  key: "testResultState",
  default: {
    score: 0,
    accScore: 0,
    scoreList: [],
    resultCode: null
  }
})

export const scoreAtom = atom({
  key: "score",
  default: 0
})

export const solvecountAtom = atom({
  key: "solvecount",
  default: 0
})
