import axios from "axios"
import { googleTTSBaseUrl } from "constants/apiBaseUrl";
import { setTTSRequestBody } from "./TTSBodySetter";

export const requestTTSApi = async (config) => {
  const TTSRequest = await axios.post(googleTTSBaseUrl, setTTSRequestBody(config))
  return TTSRequest
}