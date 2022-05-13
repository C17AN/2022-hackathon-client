import { ETRIAPIKey } from "constants/apiBaseUrl";

export const setSpeechRequestBody = ({ language, audio, script }) => {
  return ({
    access_key: ETRIAPIKey,
    argument: {
      script,
      language_code: language,
      audio: audio
    }
  })
}