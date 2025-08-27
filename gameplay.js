const tandemLeftVideo = "tandem-front-left.mp4";
const tandemRightVideo = "tandem-front-right.mp4";
const singleLegLeftVideo = "single-leg-left-4K.mp4";
const singleLegRightVideo = "single-leg-right-4K.mp4";
let gameEnded = false;
let isLeftLeg = false;
const easyQuestions = questions.filter(
  (question) => question.difficulty === "easy"
);
let overlayTimeoutId;
let bannerTimeoutId;
let isTimerPaused = false;
let countdownIntervalId;
let end = false;
let includeHardQuestions = false;
let correctCount = 0;
let totalCount = 0;
let askedQuestions = [];
let initialCountdown = 5;
const countdownDuration = 120;
let lastScore = localStorage.getItem("lastScore") || 0;
let highScore = localStorage.getItem("highScore") || 0;

function startGame() {
  document.getElementById("intro-section").style.display = "none";
  document.getElementById("message-block").style.display = "block";
  restartAndPlayVideo();
  startInitialCountdown();
}

function animateAndRepositionVideo() {
  const video = document.getElementById("background-video");
  video.style.position = "absolute";
  video.style.opacity = "1";
}

function restartAndPlayVideo() {
  var video = document.getElementById("background-video");
  video.currentTime = 0;
  video.play();
}

function pauseVideo() {
  var video = document.getElementById("background-video");
  video.pause();
}

function startCountdown(duration, display) {
  let timer = duration;
  let minutes, seconds;
  countdownIntervalId = setInterval(function () {
    if (!isTimerPaused) {
      if (end) return;
      timer--;

      if (timer < 0) {
        gameEnded = true;
        clearTimeout(bannerTimeoutId);
        document.getElementById("score-container").style.textAlign = "left";
        document.getElementById("pause-button").style.display = "none";
        document.getElementById("game-over").style.display = "block";

        // Add styles to move elements down by 300px
        document.getElementById("game-over").style.top = "300px";
        document.getElementById("footer-top").style.top = "300px";
        document.getElementById("content2").style.top = "300px";

        document.getElementById("answer-container").style.display = "none";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("question-container").style.display = "none";
        document.getElementById("header").style.display = "none";
        document.getElementById("prompt-container").style.display = "block";
        document.getElementById("footer-top").style.position = "relative";
        document.getElementById("footer-top").style.justifyContent = "center";
        document.getElementById("content").style.position = "relative";
        document.getElementById("content").classList.remove("content-question");
        const scoreElement = document.getElementById("score-container");
        scoreElement.style.position = "relative";
        scoreElement.style.top = "0";
        scoreElement.style.transform = "scale(1)";
        scoreElement.style.left = "0";

        clearInterval(countdownIntervalId);
        end = true;
        setTimeout(function () {
          const scoreContainer = document.getElementById("score-container");
          scoreContainer.style.animationName = "zoomBounce";
          scoreContainer.style.animationDuration = ".5s";
          scoreContainer.style.animationTimingFunction = "ease-out";
        }, 200);

        const finalScore = correctCount;
        const scoreContainer = document.getElementById("score-container");

        if (finalScore > highScore) {
          highScore = finalScore;
          localStorage.setItem("highScore", highScore);
        }

        localStorage.setItem("lastScore", finalScore);

        scoreContainer.innerHTML = `
                <div class="score-circle small">
                  <div class="score-label">Last Score</div>
                  <div class="score-value">${lastScore}</div>
                </div>
                <div class="score-circle">
                  <div class="score-label score-label-today">Score</div>
                  <div class="score-value score-value-today">${finalScore}</div>
                </div>
                <div class="score-circle small">
                  <div class="score-label">High Score</div>
                  <div class="score-value">${highScore}</div>
                </div>
              `;

        return;
      }

      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? minutes.toString() : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
    }
  }, 1000);
}

function togglePause() {
  isTimerPaused = !isTimerPaused;
  const pauseButtonImage = document.getElementById("pause-button-img");

  if (isTimerPaused) {
    pauseButtonImage.src = "play.png";
  } else {
    pauseButtonImage.src = "pause.png";
  }
}

document.getElementById("pause-button").addEventListener("click", togglePause);

function startCountdown2() {
  const countdownDisplay = document.getElementById("countdown");
  startCountdown(countdownDuration, countdownDisplay);
}

function toggleTitle() {
  const title = document.getElementById("foot-title");
  if (title.textContent === "Stand on left foot") {
    title.textContent = "Stand on right foot";
  } else {
    title.textContent = "Stand on left foot";
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function selectRandomQuestion(askedQuestions) {
  let availableQuestions = includeHardQuestions ? questions : easyQuestions;
  availableQuestions = availableQuestions.filter(
    (question) => !askedQuestions.includes(question)
  );
  return availableQuestions[
    Math.floor(Math.random() * availableQuestions.length)
  ];
}

function toggleChallenge() {
  includeHardQuestions = !includeHardQuestions;
  document.getElementById("challenge-toggle").textContent = includeHardQuestions
    ? "Less hard"
    : "Harder";
  refreshQuestions();
}

function refreshQuestions() {
  askedQuestions = [];
  correctCount = 0;
  totalCount = 0;
  displayNewQuestion();
}

function preloadImages(imageArray) {
  imageArray.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });
}

// SVG TIMER LOGIC
let timerAnimationId = null;
let timerEndTime = 0;
let timerDuration = 0;
let onTimerEndCallback = null;

function updateSvgTimer(currentTime) {
  const timerCircleEl = document.querySelector("#countdown-ring .timer-circle");
  const timerTextEl = document.getElementById("countdown-number");
  const remainingTime = timerEndTime - currentTime;

  if (remainingTime <= 0) {
    if (timerTextEl) timerTextEl.textContent = 0;
    if (timerCircleEl) {
      const radius = timerCircleEl.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      timerCircleEl.style.strokeDashoffset = circumference;
    }
    if (onTimerEndCallback) onTimerEndCallback();
    cancelAnimationFrame(timerAnimationId);
    timerAnimationId = null;
    return;
  }

  const elapsed = timerDuration * 1000 - remainingTime;
  const progress = elapsed / (timerDuration * 1000);

  if (timerCircleEl) {
    const radius = timerCircleEl.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * progress;
    timerCircleEl.style.strokeDashoffset = offset;
  }

  if (timerTextEl) {
    timerTextEl.textContent = Math.ceil(remainingTime / 1000);
  }

  timerAnimationId = requestAnimationFrame(updateSvgTimer);
}

function startSvgTimer(duration, onEnd) {
  if (timerAnimationId) cancelAnimationFrame(timerAnimationId);

  const timerCircleEl = document.querySelector("#countdown-ring .timer-circle");
  const timerTextEl = document.getElementById("countdown-number");

  if (!timerCircleEl) {
    console.error("Timer circle SVG element not found!");
    return;
  }

  const radius = timerCircleEl.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  timerCircleEl.style.strokeDasharray = circumference;
  timerCircleEl.style.strokeDashoffset = 0;

  timerDuration = duration;
  timerEndTime = performance.now() + duration * 1000;
  onTimerEndCallback = onEnd;

  if (timerTextEl) timerTextEl.textContent = duration;

  timerAnimationId = requestAnimationFrame(updateSvgTimer);
}

function showMessageBlock(customMessage, duration = 3) {
  const messageBlock = document.getElementById("message-block");
  const messageElement = document.getElementById("message");
  const contentDiv = document.getElementById("content");

  if (customMessage === "Switch feet") {
    updateBackgroundVideo();
    toggleTitle();
  }

  if (messageElement) {
    messageElement.textContent = customMessage;
  }
  messageBlock.style.display = "block";
  if (contentDiv) contentDiv.classList.remove("text-2");

  const content2 = document.getElementById("content2");
  if (content2) content2.style.display = "none";
  const footerTop = document.getElementById("footer-top");
  if (footerTop) footerTop.style.display = "none";
  const header = document.getElementById("header");
  if (header) header.style.display = "none";

  const onEnd = () => {
    messageBlock.style.display = "none";
    if (contentDiv) contentDiv.classList.add("text-2");
    if (content2) content2.style.display = "flex";
    if (footerTop) footerTop.style.display = "flex";
    if (header) header.style.display = "flex";
  };

  startSvgTimer(duration, onEnd);
}

function hideBanner() {
  const banner = document.getElementById("banner");
  banner.classList.add("banner-hidden");
  document.getElementById("footer-top").style.display = "flex";
  document.getElementById("content2").style.opacity = "1";
  document.getElementById("content").classList.add("content-question");

  isLeftLeg = !isLeftLeg;
  toggleTitle();
  pauseVideo();
}

function displayNewQuestion() {
  const question = selectRandomQuestion(askedQuestions);

  if (!question) {
    alert(`Game Over! You got ${correctCount} out of ${totalCount} correct.`);
    return;
  }

  askedQuestions.push(question);
  shuffleArray(question.options);

  const questionContainer = document.querySelector(".question-container");
  questionContainer.textContent = question.question;

  const answerContainer = document.querySelector(".answer-container");
  answerContainer.innerHTML = "";

  question.options.forEach((option) => {
    const answer = document.createElement("button");
    answer.classList.add("answer");
    answer.textContent = option;
    answerContainer.appendChild(answer);
    answer.addEventListener("click", () => {
      totalCount++;

      if (option === question.answer) {
        correctCount++;
        answer.classList.add("correct");
      } else {
        answer.classList.add("incorrect");
        const correctAnswer = answerContainer.querySelector(
          `.answer:not(.incorrect):not(:disabled):not(.correct)[data-answer="${question.answer}"]`
        );
        if (correctAnswer) {
          correctAnswer.classList.add("correct");
        }

        toggleGradientClasses();
        setTimeout(() => {
          showMessageBlock("Switch feet");
        }, 1000);
      }

      answerContainer
        .querySelectorAll(".answer:not(.correct)")
        .forEach((answer) => {
          answer.disabled = true;
        });

      const correctCountElement = document.querySelector(".correct-count");
      const totalCountElement = document.querySelector(".total-count");
      correctCountElement.textContent = correctCount;
      totalCountElement.textContent = totalCount;

      setTimeout(displayNewQuestion, 1000);
    });

    answer.setAttribute("data-answer", option);
  });
}

displayNewQuestion();

document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".title");
  title.addEventListener("click", function () {
    localStorage.removeItem("lastScore");
    localStorage.removeItem("highScore");
    lastScore = 0;
    highScore = 0;
    location.reload();
  });
});

function updateBackgroundVideo() {
  const video = document.getElementById("background-video");
  const source = video.querySelector("source");

  if (source) {
    const currentSrc = source.getAttribute("src");
    if (currentSrc.includes("single-leg-left")) {
      source.src = "single-leg-right-4K.mp4";
    } else {
      source.src = "single-leg-left-4K.mp4";
    }

    video.load();
    video.play();
  } else {
    console.error("Video source element not found");
  }
}

function updateBannerVideo() {
  const video2 = document.getElementById("video2");
  if (video2) {
    if (video2.src.includes("single-leg-right")) {
      video2.src = "single-leg-left-4K.mp4";
    } else {
      video2.src = "single-leg-right-4K.mp4";
    }

    video2.load();
    video2.play();
  } else {
    console.error("Banner video element not found");
  }
}

function toggleGradientClasses() {
  const elementsToToggle = document.querySelectorAll(
    ".gradient-background-single"
  );

  elementsToToggle.forEach((element) => {
    if (element.classList.contains("gradient-background-flip-single")) {
      element.classList.remove("gradient-background-flip-single");
    } else {
      element.classList.add("gradient-background-flip-single");
    }
  });
}

function startInitialCountdown() {
  const messageBlock = document.getElementById("message-block");
  const messageElement = document.getElementById("message");

  if (messageElement) {
    messageElement.textContent = "Stand on right foot";
  }
  messageBlock.style.display = "block";

  const onEnd = () => {
    if (messageBlock) messageBlock.style.display = "none";
    document.getElementById("content").style.display = "block";
    startCountdown2();
  };

  startSvgTimer(3, onEnd);
}
