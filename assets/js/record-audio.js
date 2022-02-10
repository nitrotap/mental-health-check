/*
 * js file for recording audio for in-the-moment help
 */

let record = document.querySelector("#recordButton");
let stop = document.querySelector("#stopButton");
let pastRecordings = document.querySelector("#past-recordings");
let canvas = document.querySelector("#visualizer");
let mainSection = document.querySelector("#recorder-controls");
let revokeMicAccessButtonEl = document.querySelector("#mic-drop");

let clipNames = JSON.parse(localStorage.getItem("clipNames"));
if (!clipNames) {
  let clipNames = [];
  localStorage.setItem("clipNames", JSON.stringify(clipNames));
}

stop.disabled = true;
record.disabled = true;
revokeMicAccessButtonEl.disabled = true;

let audioContext;
let canvasContext = canvas.getContext("2d");

function visualize(stream) {
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  const source = audioContext.createMediaStreamSource(stream);

  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  source.connect(analyser);
  //analyser.connect(audioCtx.destination);

  draw();

  function draw() {
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);

    canvasContext.fillStyle = "rgb(200, 200, 200)";
    canvasContext.fillRect(0, 0, WIDTH, HEIGHT);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = "rgb(0, 0, 0)";

    canvasContext.beginPath();

    let sliceWidth = (WIDTH * 1.0) / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let v = dataArray[i] / 128.0;
      let y = (v * HEIGHT) / 2;

      if (i === 0) {
        canvasContext.moveTo(x, y);
      } else {
        canvasContext.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasContext.lineTo(canvas.width, canvas.height / 2);
    canvasContext.stroke();
  }
}

function startRecorder() {
  if (navigator.mediaDevices.getUserMedia) {
    console.log("getUserMedia supported.");

    const constraints = { audio: true };
    let chunks = [];

    let onSuccess = function (stream) {
      const mediaRecorder = new MediaRecorder(stream);
      visualize(stream);

      getMicAccessButtonEl.disabled = true;
      record.disabled = false;
      // revokeMicAccessButtonEl.disabled = true;

      revokeMicAccessButtonEl.addEventListener("click", function () {
        stream.getTracks().forEach((track) => track.stop());
        revokeMicAccessButtonEl.disabled = true;
        getMicAccessButtonEl.disabled = false;
        record.disabled = true;
      });

      record.onclick = function () {
        revokeMicAccessButtonEl.disabled = false;
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        record.style.background = "red";

        stop.disabled = false;
        record.disabled = true;
      };

      stop.onclick = function () {
        mediaRecorder.stop();
        // stream.getTracks().forEach(track => track.stop())
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        record.style.background = "";
        record.style.color = "";
        // mediaRecorder.requestData();

        stop.disabled = true;
        record.disabled = false;

        let clipModal = document.querySelector("#modal1");
        clipModal.className = "modal";

        $(".modal").modal();
        $(".modal").modal("open");
      };

      mediaRecorder.onstop = function (e) {
        console.log("data available after MediaRecorder.stop() called.");

        //const clipName = prompt("Enter a name for your sound clip?", "Clip");

        let clipName;
        let saveButtonEl = document.querySelector("#modal-save");
        saveButtonEl.addEventListener("click", function () {
          let clipInputEl = document.querySelector("#clipTitle");
          let clipInput = clipInputEl.value;
          console.log(clipInput);
          clipName = clipInput;

          const clipContainer = document.createElement("article");
          const clipLabel = document.createElement("h5"); // change p for h5
          const audio = document.createElement("audio");
          const deleteButton = document.createElement("button");
          const saveButton = document.createElement("button");

          clipContainer.classList.add("clip", "col", "s6"); // add class/style
          audio.setAttribute("controls", "");
          deleteButton.textContent = "Delete";
          // deleteButton.className = "delete";
          deleteButton.classList.add("delete", "waves-effect", "waves-light", "indigo", "darken-4", "btn"); // class/style for the button
          deleteButton.style.margin = "10px";

          saveButton.textContent = "Save";
          // saveButton.className = "save";
          saveButton.classList.add("save", "waves-effect", "waves-light", "indigo", "darken-4", "btn"); // class/style for the button
          saveButton.style.margin = "10px";

          if (clipName === null) {
            clipLabel.textContent = "Clip";
          } else {
            clipLabel.textContent = clipName;
          }

          clipContainer.appendChild(audio);
          clipContainer.appendChild(clipLabel);
          clipContainer.appendChild(deleteButton);
          clipContainer.appendChild(saveButton);
          pastRecordings.appendChild(clipContainer);

          audio.controls = true;
          const blob = new Blob(chunks, { type: "audio/mpeg; codecs=opus" });
          chunks = [];
          const audioURL = window.URL.createObjectURL(blob);
          audio.src = audioURL;
          console.log("recorder stopped");

          // moved here, it was not defined
          deleteButton.onclick = function (e) {
            let evtTgt = e.target;
            evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
            // if it's saved into localStorage, then delete it from there
            // check if name is found in localStorage
            for (let i = 0; i < clipNames.length; i++) {
              if (clipName === clipNames[i]) {
                localStorage.removeItem(clipNames[i]);
                clipNames.splice(i, 1);
                console.log(clipNames);
                localStorage.setItem("clipNames", JSON.stringify(clipNames));
              }
            }
          };

          // moved here, it was not defined
          saveButton.onclick = function (e) {
            const reader = new window.FileReader();
            reader.onload = function (e) {
              localStorage.setItem(clipName, event.target.result);
            };
            reader.readAsDataURL(blob);
            saveClipNames(clipName);
            event.stopPropagation();
            location.reload(); // add here to prevent multiple saved
          };
        });

        // moved here, it was not defined
        // clipLabel.onclick = function () {
        //   const existingName = clipLabel.textContent;
        //   const newClipName = prompt("Enter a new name for your sound clip?");
        //   if (newClipName === null) {
        //     clipLabel.textContent = existingName;
        //   } else {
        //     clipLabel.textContent = newClipName;
        //   }
        // };
      };

      mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data);
      };
    };

    let onError = function (err) {
      console.log("The following error occured: " + err);
    };

    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  } else {
    console.log("getUserMedia not supported on your browser!");
  }
}

let getMicAccessButtonEl = document.querySelector("#mic-check");
getMicAccessButtonEl.addEventListener("click", function () {
  startRecorder();
});

let saveClipNames = function (clipName) {
  if (clipNames) {
    // if clipNames DNE
    clipNames.push(clipName);
    localStorage.setItem("clipNames", JSON.stringify(clipNames));
  } else {
    clipNames = JSON.parse(localStorage.getItem("clipNames"));
    clipNames.push(clipName);
    localStorage.setItem("clipNames", JSON.stringify(clipNames));
  }
};

window.onresize = function () {
  canvas.width = mainSection.offsetWidth;
};

window.onresize();

function loadAudioFiles() {
  let clipNames = JSON.parse(localStorage.getItem("clipNames"));
  if (clipNames) {
    for (let i = 0; i < clipNames.length; i++) {
      let clip = localStorage.getItem(clipNames[i]);
      let b64AudioFile = clip.slice(36);
      // console.log(clip)
      const byteCharacters = atob(b64AudioFile);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "audio/mpeg" });
      console.log(blob);

      const clipContainer = document.createElement("article");
      const clipLabel = document.createElement("h5"); //change p for h5
      const audio = document.createElement("audio");
      const deleteButton = document.createElement("button");
      const saveButton = document.createElement("button");

      clipContainer.classList.add("clip", "col", "s6"); // add class/style
      audio.setAttribute("controls", "");
      deleteButton.textContent = "Delete";
      // deleteButton.className = "delete";
      deleteButton.classList.add("delete", "waves-effect", "waves-light", "indigo", "darken-4", "btn"); // class/style for the button
      deleteButton.style.margin = "10px";

      saveButton.textContent = "Save";
      // saveButton.className = "save";
      saveButton.classList.add("save", "waves-effect", "waves-light", "indigo", "darken-4", "btn"); // class/style for the button
      saveButton.style.margin = "10px";

      if (clipNames[i] === null) {
        clipLabel.textContent = "Clip";
      } else {
        clipLabel.textContent = clipNames[i];
      }

      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButton);
      clipContainer.appendChild(saveButton);
      pastRecordings.appendChild(clipContainer);

      audio.controls = true;
      chunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");

      deleteButton.onclick = function (e) {
        let evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        localStorage.removeItem(clipNames[i]);
        clipNames.splice(i, 1);
        console.log(clipNames);
        // clipNames[i] = "";
        localStorage.setItem("clipNames", JSON.stringify(clipNames));
      };

      saveButton.onclick = function (e) {
        const reader = new window.FileReader();
        reader.onload = function (e) {
          localStorage.setItem(clipNames[i], event.target.result);
        };
        reader.readAsDataURL(blob);
        saveClipNames(clipNames[i]);
      };

      // clipLabel.onclick = function () {
      //   const existingName = clipLabel.textContent;
      //   const newClipName = prompt("Enter a new name for your sound clip?");
      //   if (newClipName === null) {
      //     clipLabel.textContent = existingName;
      //   } else {
      //     clipLabel.textContent = newClipName;
      //   }
      // };
    }
  }
}

loadAudioFiles();
