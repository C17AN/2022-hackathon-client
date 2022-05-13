import { atom } from "recoil";

export const isSignedIn = atom({
  key: "isSignedIn",
  default: false
})

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

