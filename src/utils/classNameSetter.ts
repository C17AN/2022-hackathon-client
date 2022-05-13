import CATEGORY from "constants/category";
import DIFFICULTY from "constants/difficulty";

export const categoryClassNameSetter = (category) => {
  switch (category) {
    case CATEGORY.ART:
      return "category--art";
    case CATEGORY.DAILY:
      return "category--daily";
    case CATEGORY.TRAVEL:
      return "category--travel";
  }
};

export const difficultyClassNameSetter = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY.EASY:
      return "difficulty--easy";
    case DIFFICULTY.NORMAL:
      return "difficulty--normal";
    case DIFFICULTY.HARD:
      return "difficulty--hard";
  }
};
