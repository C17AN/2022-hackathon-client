import LANGUAGE from "constants/language";

type language = "en-US" | "ko-KR" | null;

const setAudioConfig = (language: language) => {
  let languagecode: language = null;
  languagecode = language === LANGUAGE.KOREAN ? "ko-KR" : "en-US";

  return {
    text: "",
    languagecode,
    gender: "MALE",
  };
};

export default setAudioConfig;
