import { useEffect, useState } from "react";

const useRecorder = () => {
  const [audioURL, setAudioURL] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);

  useEffect(() => {

    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error);
      }
      return;
    }

    // Manage recorder state.
    if (isRecording) {
      recorder.start();
    } else {
      recorder.stop();
    }

    // Obtain the audio when ready.
    const handleData = audio => {
      setAudioURL(URL.createObjectURL(audio.data));
      console.log(audio)
    };

    recorder.addEventListener("dataavailable", handleData);
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
    console.log(JSON.stringify(audioURL))
  };

  const requestMic = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
    console.log('requested mic')
  }

  const revokeMic = (stream) => {
    // todo
    console.log(stream)
  };

  return [audioURL, isRecording, startRecording, stopRecording, requestMic, revokeMic];
};

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  console.log('recorder requested')
  return new MediaRecorder(stream);
}

export default useRecorder;
