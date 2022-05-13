import axios from "axios"
import { BackEndBaseUrl } from "constants/apiBaseUrl"

export const postCustomProblem = async ({ username, language, content, tier, isTutorial = 0 }) => {
  const getTutorialProblemEndpoint = `${BackEndBaseUrl}/problem/setProblem`
  const { data } = await axios.post(getTutorialProblemEndpoint, {
    MemberName: username, language, content, tier, isTutorial
  })
  return data
}

