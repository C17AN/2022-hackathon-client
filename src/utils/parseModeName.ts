import STUDYMODE from "constants/studyMode";

export const parseModeName = (studyMode) => {
  switch (studyMode) {
    case STUDYMODE.PRACTICE:
      return "연습 모드";
    case STUDYMODE.TEST:
      return "시험 모드";
    default:
      return;
  }
};
