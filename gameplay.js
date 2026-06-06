const tandemLeftVideo = "tandem-front-left.mp4";
const tandemRightVideo = "tandem-front-right.mp4";
const singleLegLeftVideo = "single-leg-left-old.mp4";
const singleLegRightVideo = "single-leg-right-old.mp4";

const isTandem = document.body.dataset.mode === "tandem";
const DEMO_SECS = 5;
const countdownDuration = 120;

let gameEnded = false;
let onRight = true;
const easyQuestions = questions.filter((q) => q.difficulty === "easy");
let countdownIntervalId;
let demoIntervalId;
let switchIntervalId;
let end = false;
let includeHardQuestions = false;
let correctCount = 0;
let totalCount = 0;
let askedQuestions = [];
let timeLeft = countdownDuration;
let lastScore = localStorage.getItem("lastScore") || 0;
let highScore = localStorage.getItem("highScore") || 0;

const videoPreload = document.createElement("video");
videoPreload.preload = "auto";
videoPreload.src = isTandem ? tandemLeftVideo : singleLegRightVideo;

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function pad(n) {
  return n < 10 ? "0" + n : "" + n;
}

function setDemoMode(mode) {
  const readyPanel = document.getElementById("demo-ready-panel");
  const switchPanel = document.getElementById("switch-panel");
  const progressBar = document.getElementById("demoProgressBar");
  if (!readyPanel || !switchPanel) return;

  const isSwitch = mode === "switch";
  readyPanel.hidden = isSwitch;
  switchPanel.hidden = !isSwitch;
  if (progressBar) progressBar.hidden = isSwitch;
}

function startGame() {
  setDemoMode("ready");
  showScreen("demo-screen");
  restartAndPlayVideo("demo-video");

  let secs = DEMO_SECS;
  document.getElementById("demoCount").textContent = secs;
  document.getElementById("demoBar").style.width = "100%";

  clearInterval(demoIntervalId);
  demoIntervalId = setInterval(() => {
    secs--;
    document.getElementById("demoCount").textContent = secs;
    document.getElementById("demoBar").style.width =
      Math.round((secs / DEMO_SECS) * 100) + "%";
    if (secs <= 0) {
      clearInterval(demoIntervalId);
      endDemo();
    }
  }, 1000);
}

function endDemo() {
  clearInterval(demoIntervalId);
  setDemoMode("ready");
  correctCount = 0;
  totalCount = 0;
  askedQuestions = [];
  timeLeft = countdownDuration;
  onRight = true;
  end = false;
  gameEnded = false;

  document.getElementById("scoreDisp").textContent = "0";
  updateFoot();
  showScreen("content");
  restartAndPlayVideo("background-video");
  startCountdown();
  displayNewQuestion();
}

function restartAndPlayVideo(id) {
  const video = document.getElementById(id);
  if (!video) return;
  video.currentTime = 0;
  video.play();
}

function pauseVideo() {
  const video = document.getElementById("background-video");
  if (video) video.pause();
}

function startCountdown() {
  clearInterval(countdownIntervalId);
  const fill = document.getElementById("timerFill");
  const disp = document.getElementById("countdown");

  fill.classList.remove("warn");
  disp.classList.remove("warn");
  fill.style.width = "100%";
  disp.textContent = "2:00";
  resumeCountdown();
}

function getVideoForFoot(right) {
  if (isTandem) {
    return right ? tandemRightVideo : tandemLeftVideo;
  }
  return right ? singleLegLeftVideo : singleLegRightVideo;
}

function setVideoSrc(videoId, src, fade) {
  const video = document.getElementById(videoId);
  if (!video) return;

  const source = video.querySelector("source");
  if (!source) return;

  if (source.getAttribute("src") === src) {
    video.play().catch(() => {});
    return;
  }

  source.src = src;
  if (fade) video.style.opacity = "0";
  video.load();
  video.oncanplay = () => {
    video.play().catch(() => {});
    if (fade) video.style.opacity = "1";
    video.oncanplay = null;
  };
}

function syncFootVideos(fadeBackground) {
  const src = getVideoForFoot(onRight);
  setVideoSrc("background-video", src, fadeBackground);
  setVideoSrc("demo-video", src, false);
  setVideoSrc("go-bg-video", src, false);
  videoPreload.src = getVideoForFoot(!onRight);
}

function updateFoot() {
  const lbl = document.getElementById("footLbl");
  const title = document.getElementById("stanceTitle");
  const sub = document.getElementById("stanceSub");
  const dotA = document.getElementById("dotA");
  const dotB = document.getElementById("dotB");

  if (onRight) {
    lbl.textContent = "RIGHT";
    lbl.style.color = "#a78bfa";
    title.textContent = isTandem
      ? "Right heel in front of left toes"
      : "Balance on right foot";
    dotA.className = "foot-dot right-on";
    dotB.className = "foot-dot";
  } else {
    lbl.textContent = "LEFT";
    lbl.style.color = "#fbbf24";
    title.textContent = isTandem
      ? "Left heel in front of right toes"
      : "Balance on left foot";
    dotA.className = "foot-dot";
    dotB.className = "foot-dot left-on";
  }
  sub.textContent = (isTandem ? "Tandem" : "Single leg") + " · stay balanced";
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function selectRandomQuestion(asked) {
  let available = includeHardQuestions ? questions : easyQuestions;
  available = available.filter((q) => !asked.includes(q));
  return available[Math.floor(Math.random() * available.length)];
}

function displayNewQuestion() {
  const question = selectRandomQuestion(askedQuestions);

  if (!question) {
    alert(`Game Over! You got ${correctCount} out of ${totalCount} correct.`);
    return;
  }

  askedQuestions.push(question);
  shuffleArray(question.options);

  totalCount++;
  document.getElementById("qNum").textContent = "Question " + totalCount;
  document.getElementById("question-container").textContent = question.question;

  const answerContainer = document.getElementById("answer-container");
  answerContainer.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  question.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.className = "ans-btn";
    btn.innerHTML = `<span class="ans-letter">${letters[i]}</span>${option}`;
    btn.setAttribute("data-answer", option);
    btn.addEventListener("click", () => handleAnswer(btn, option, question));
    answerContainer.appendChild(btn);
  });
}

function handleAnswer(btn, chosen, question) {
  document.querySelectorAll(".ans-btn").forEach((b) => (b.disabled = true));

  if (chosen === question.answer) {
    btn.classList.add("correct");
    correctCount++;
    document.getElementById("scoreDisp").textContent = correctCount;
    setTimeout(displayNewQuestion, 900);
  } else {
    btn.classList.add("wrong");
    document.querySelectorAll(".ans-btn").forEach((b) => {
      if (b.getAttribute("data-answer") === question.answer) {
        b.classList.add("correct");
      }
    });
    setTimeout(triggerSwitch, 800);
  }
}

function triggerSwitch() {
  clearInterval(countdownIntervalId);
  onRight = !onRight;
  syncFootVideos(true);
  setDemoMode("switch");
  showScreen("demo-screen");
  restartAndPlayVideo("demo-video");

  let c = 3;
  document.getElementById("swCount").textContent = c;
  clearInterval(switchIntervalId);
  switchIntervalId = setInterval(() => {
    c--;
    document.getElementById("swCount").textContent = c;
    if (c <= 0) {
      clearInterval(switchIntervalId);
      setDemoMode("ready");
      updateFoot();
      showScreen("content");
      restartAndPlayVideo("background-video");
      displayNewQuestion();
      resumeCountdown();
    }
  }, 1000);
}

function resumeCountdown() {
  clearInterval(countdownIntervalId);
  const fill = document.getElementById("timerFill");
  const disp = document.getElementById("countdown");

  countdownIntervalId = setInterval(() => {
    if (end) return;
    timeLeft--;

    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    disp.textContent = m + ":" + pad(s);
    fill.style.width = Math.round((timeLeft / countdownDuration) * 100) + "%";

    if (timeLeft <= 30) {
      disp.classList.add("warn");
      fill.classList.add("warn");
    }

    if (timeLeft <= 0) {
      clearInterval(countdownIntervalId);
      endGame();
    }
  }, 1000);
}

function endGame() {
  end = true;
  gameEnded = true;

  const finalScore = correctCount;
  if (finalScore > highScore) {
    highScore = finalScore;
    localStorage.setItem("highScore", highScore);
  }
  localStorage.setItem("lastScore", finalScore);

  document.getElementById("goScore").textContent = finalScore;
  document.getElementById("goCorrect").textContent = correctCount + " / " + totalCount;
  document.getElementById("goMode").textContent = isTandem ? "Tandem" : "Single Leg";

  showScreen("game-over-screen");
  syncFootVideos(false);
  restartAndPlayVideo("go-bg-video");
}

document.addEventListener("DOMContentLoaded", function () {
  const badge = document.querySelector(".intro-badge");
  if (badge) {
    badge.addEventListener("click", function () {
      localStorage.removeItem("lastScore");
      localStorage.removeItem("highScore");
      lastScore = 0;
      highScore = 0;
    });
  }
});
