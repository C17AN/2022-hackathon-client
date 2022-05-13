import DIFFICULTY from "constants/difficulty";

export const parseDifficultyName = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY.EASY:
      return "쉬움";
    case DIFFICULTY.NORMAL:
      return "보통";
    case DIFFICULTY.HARD:
      return "어려움";
    default:
      return;
  }
};
