export const setTTSRequestBody = (config) => ({
  input: { text: config.text },
  voice: { languageCode: config.languagecode, ssmlGender: config.gender },
  audioConfig: { audioEncoding: "MP3" }
})