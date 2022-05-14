import axios from "axios"
import { BackEndBaseUrl } from "constants/apiBaseUrl"

export const  = async () => {
  const getUserRankEndPoint = `${BackEndBaseUrl}/rank/user`
  const { data } = await axios.get(getUserRankEndPoint)
  return data
}