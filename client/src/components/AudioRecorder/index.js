/*
 * js file for recording audio for in-the-moment help
 */

import React from 'react';
// import { AUDIO_RECORDINGS } from '../../utils/queries';
import recordAudio from './record-audio';

const AudioRecorder = () => {

    let [audio, recording, startRecorder, stopRecorder, requestMic] = recordAudio();

    return (
        <div className='row'>
            <h3 className="center-align">Personal Audio Recordings</h3>
            <h6 className="center-align">Record a personal affirmation to replay</h6>


            <audio src={audio} controls />
            {/* <button onClick={requestMic} disabled={recording}>Request Mic</button> */}
            <button onClick={startRecorder} disabled={recording}>
                start recording
            </button>
            <button onClick={stopRecorder} disabled={!recording}>
                stop recording
            </button>

        </div>
    )
}

export default AudioRecorder