import axios from "axios"
import { AWSGatewayURL, SpeechBaseUrlEn, SpeechBaseUrlKo } from "constants/apiBaseUrl";
import LANGUAGE from "constants/language";
import { setSpeechRequestBody } from "./SpeechBodySetter";

// export const requestSpeechAPI = async ({ language, audio, script }) => {
//   let SpeechEvalRequest = {}
//   if (language === LANGUAGE.KOREAN) {
//     SpeechEvalRequest = await axios.post(SpeechBaseUrlKo, setSpeechRequestBody({ language: "korean", audio, script }))
//   }
//   if (language === LANGUAGE.ENGLISH) {
//     SpeechEvalRequest = await axios.post(SpeechBaseUrlEn, setSpeechRequestBody({ language: 'english', audio, script }))
//   }
//   return SpeechEvalRequest
// }

export const requestSpeechAPI = async ({ language, audio, script }) => {
  let SpeechEvalRequest = {}
  SpeechEvalRequest = await axios.post(AWSGatewayURL, { language, audio, script })
  return JSON.parse(SpeechEvalRequest.data)
}