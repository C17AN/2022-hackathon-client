import CATEGORY from "constants/category";

export const parseCategoryName = (category) => {
  switch (category) {
    case CATEGORY.ART:
      return "문학";
    case CATEGORY.TRAVEL:
      return "여행";
    case CATEGORY.DAILY:
      return "일상";
    default:
      return;
  }
};
