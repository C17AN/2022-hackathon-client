import LANGUAGE from "constants/language";

export const parseLanguageName = (language) => {
  switch (language) {
    case LANGUAGE.KOREAN:
      return "한국어";
    case LANGUAGE.ENGLISH:
      return "영어";
    default:
      return;
  }
};
