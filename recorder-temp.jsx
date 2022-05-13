import React, { useEffect, useRef, useState } from 'react'
import { InformationCircleIcon, PlayIcon, StopIcon } from '@heroicons/react/solid'
import "./VoiceRecorder.css"
import { requestSpeechAPI } from 'apis/Speech/postSpeech'
import { useRecoilState } from 'recoil'
import { testResultState } from 'store/store'

// 이 코드는 블로그에 정리하기!!
// 아주 유용할듯!

const VoiceRecorder = ({ text: script, language }) => {
  const [isRecording, setIsRecording] = useState(false)
  const [recordedAudio, setRecordedAudio] = useState(null)
  const [testResult, setTestResult] = useRecoilState(testResultState)

  const playerRef = useRef(null)
  let mediaRecorder = null

  const toggleRecordingState = () => {
    const { state: recordingState } = mediaRecorder
    if (recordingState !== "recording") {
      setIsRecording(true)
      mediaRecorder.start()
    }
    else if (recordingState === "recording") {
      setIsRecording(false)
      mediaRecorder.stop()
    }
  }

  useEffect(() => {
    if (script && language) {
      navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess);
    }
  }, [script, language])

  const handleSuccess = function (stream) {
    const options = {
      mimeType: 'audio/webm;',
      audioBitsPerSecond: 16000,
      bitsPerSecond: 16000
    };
    const recordedBlob = [];
    mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.addEventListener('dataavailable', function (e) {
      // recordedChunks에는 음성 데이터의 fragments가 배열 형태로 축적된다.
      if (e.data.size > 0) recordedBlob.push(e.data);
    });

    mediaRecorder.addEventListener('stop', () => {
      const audioContext = new AudioContext({
        sampleRate: 16000,
      });
      // recordedChunks는 Blob 타입임!
      const audioBlob = recordedBlob[0]
      // 1. BLOB 형태의 데이터를 ArrayBuffer로 치환한다.
      // const reader = new window.FileReader();
      // reader.readAsDataURL(audioBlob)
      // reader.onloadend = async () => {
      //   const audio = new Blob([reader.result.split(',')[1]], { type: "audio/mpeg-3" })
      //   setRecordedAudio(reader.result.split(',')[1])


      //   const { data } = await requestSpeechAPI({ audio: btoa(reader.result.split(',')[1]), script, language: language })
      //   setTestResult(data)
      // }

      // TODO: 여기부터 주석 풀면됨
      const blobReader = new FileReader()
      blobReader.readAsArrayBuffer(audioBlob)

      blobReader.onloadend = async () => {
        let arrayBuffer = blobReader.result;
        // 16킬로헤르츠 다운샘플링 코드 (audioBuffer로 디코딩)
        audioContext.decodeAudioData(arrayBuffer, async (resampledBuffer) => {
          const audioBufferToArray = resampledBuffer.getChannelData(0)
          setRecordedAudio(audioBufferToArray)

          // const audioBufferToArray = new Float32Array(Math.round(resampledBuffer.sampleRate * 10));
          // resampledBuffer.copyFromChannel(audioBufferToArray, 0);
          // console.log(resampledBuffer)
          // console.log(audioBufferToArray)
          // // BLOB 형태로 재인코딩
          const audioBlob = new Blob([audioBufferToArray]);
          blobReader.readAsDataURL(audioBlob)
          blobReader.onloadend = async () => {
            let audio = blobReader.result.split(',')[1]
            console.log(audio)
            // setRecordedAudio(audio)
            // const { data } = await requestSpeechAPI({ audio, script, language: language })
            // setTestResult(data)
          }
        })
      }
    });

    playerRef.current.addEventListener('click', () => {
      toggleRecordingState()
    })
  };


  return (
    <div className="flex justify-between items-center rounded-md mb-4 py-4 px-6 w-full shadow-md border-l-8 border-blue-400">
      <section className="flex flex-col">
        <h2 className="font-semibold text-xl">Step 2. 내 발음 입력하기</h2>
        <div className="flex items-center mt-2 text-gray-400">
          <InformationCircleIcon className="h-4 mr-1" />
          <p className="text-sm">본 기능은 ETRI 발음평가 기술을 활용합니다.</p>
        </div>
      </section>
      <section
        ref={playerRef}
        className="flex items-center text-sm text-gray-400 px-4 py-1 hover:text-blue-200 rounded-md border border-gray-200 cursor-pointer"
      >
        {isRecording ?
          <StopIcon className="h-8 w-8" /> :
          <PlayIcon className="h-8 w-8 transition-colors" />}
        <p className="font-semibold ml-2">녹음 시작</p>
      </section>
      <div className="flex flex-col">
        {recordedAudio && <audio controls autobuffer="autobuffer">
          <source src={`data:audio/mp3;base64, ${recordedAudio}`} />
        </audio>}
        {testResult && <div>{testResult['return_object']?.score}점</div>}
      </div>
    </div>
  )
}

export default VoiceRecorder
