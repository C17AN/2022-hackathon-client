export const setScoreTextHelper = (score) => {
  switch (true) {
    case score <= 20:
      return { text: "매우 미흡", resultCode: "poor" }
    case score <= 40:
      return { text: "미흡", resultCode: "bad" }
    case score <= 60:
      return { text: "보통", resultCode: "normal" }
    case score <= 80:
      return { text: "우수", resultCode: "good" }
    case score <= 100:
      return { text: "매우 우수", resultCode: "excellent" }
    default:
      return { text: "", resultCode: "" }
  }
}
