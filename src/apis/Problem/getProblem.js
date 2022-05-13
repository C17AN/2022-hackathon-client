import axios from "axios"
import { BackEndBaseUrl } from "constants/apiBaseUrl"

export const getTutorialProblem = async (language) => {
  const getTutorialProblemEndpoint = `${BackEndBaseUrl}/scripts/tutorial`
  const { data } = await axios.get(getTutorialProblemEndpoint, { params: { language } })
  return data
}

export const getCustomProblem = async (language) => {
  const getCustomProblemEndpoint = `${BackEndBaseUrl}/scripts/user`
  const { data } = await axios.get(getCustomProblemEndpoint, { params: { language } })
  return data
}

