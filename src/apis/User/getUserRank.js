import axios from "axios"
import { BackEndBaseUrl } from "constants/apiBaseUrl"

export const getUserRank = async () => {
  const getUserRankEndPoint = `${BackEndBaseUrl}/rank/user`
  const { data } = await axios.get(getUserRankEndPoint,)
  return data
}