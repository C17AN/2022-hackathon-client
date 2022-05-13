import axios from "axios"
import { BackEndBaseUrl } from "constants/apiBaseUrl"

export const getUser = async (username) => {
  const getUserEndPoint = `${BackEndBaseUrl}/account`
  const { data } = await axios.get(getUserEndPoint, { params: { memberName: username } })
  return data
}