import axios from "axios"
import { BackEndBaseUrl } from "constants/apiBaseUrl"

export const postCustomProblem = async ({ username, language, content, tier, isTutorial = 0 }) => {
  const getTutorialProblemEndpoint = `${BackEndBaseUrl}/scripts/tutorial`
  const { data } = await axios.post(getTutorialProblemEndpoint, {
    username, language, content, tier, isTutorial
  })
  return JSON.parse(data)
}

