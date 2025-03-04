const tandemLeftVideo = "tandem-front-left.mp4";
const tandemRightVideo = "tandem-front-right.mp4";
const singleLegLeftVideo = "single-leg-left.mp4";
const singleLegRightVideo = "single-leg-right.mp4";
let gameEnded = false;
let isLeftLeg = false; // Start with the left leg image
const easyQuestions = questions.filter(
  (question) => question.difficulty === "easy"
);
let overlayTimeoutId; // Declare a variable to store the timeout ID for overlay display
let bannerTimeoutId; // Declare a variable to store the timeout ID for banner display
let isTimerPaused = false; // Track the pause state
let countdownIntervalId; // Store the interval ID for the countdown
let end = false;
let includeHardQuestions = false; // New global variable
let correctCount = 0;
let totalCount = 0;
let askedQuestions = [];
let initialCountdown = 5;
const countdownDuration = 120; // 2 minutes
let lastScore = localStorage.getItem("lastScore") || 0;
let highScore = localStorage.getItem("highScore") || 0;

console.log("easyQuestions =" + easyQuestions.length);
console.log("all questions = " + questions.length);

//const easyQuestions = questions.filter(question => question.difficulty === "easy");
// console.log("easyQuestions =" + easyQuestions.length);
//console.log("all questions = " + questions.length);
const filteredQuestions = questions.map((q) => {
  const { question, options, answer } = q;
  return { question, options, answer };
});

const customStringify = (objArray) => {
  return objArray
    .map((obj) => {
      const fields = Object.keys(obj)
        .map((key) => `  ${key}: ${JSON.stringify(obj[key])}`)
        .join(",\n");
      return `{\n${fields}\n}`;
    })
    .join(",\n");
};

//console.log(`const filteredQuestions = [\n${customStringify(filteredQuestions)}\n];`);

function startGame() {
  // Cross dissolve background images
  document.getElementById("intro-section").style.display = "none";
  //document.getElementById('img-back0').style.opacity = '0';
  //document.getElementById('img-back').style.opacity = '1';

  // Start the 5-second countdown before the main countdown
  const countdownElement = document.getElementById("initial-countdown"); // Ensure this element exists
  countdownElement.innerText = initialCountdown;
  document.getElementById("message-block").style.display = "block";
  restartAndPlayVideo();

  const initialCountdownInterval = setInterval(() => {
    initialCountdown -= 1;
    countdownElement.innerText = initialCountdown;

    if (initialCountdown <= 0) {
      clearInterval(initialCountdownInterval);
      countdownElement.style.display = "none";
      document.getElementById("message-block").style.display = "none";

      // Hide the intro section and start the main countdown

      document.getElementById("content").style.display = "block";
      startCountdown2(); // Ensure this function exists and starts the main timer
      // Animate and reposition the video element
      animateAndRepositionVideo();
      pauseVideo();
    }
  }, 1000);
}

function animateAndRepositionVideo() {
  const video = document.getElementById("background-video");
  video.style.position = "absolute";
  video.style.opacity = "0"; // Set opacity to 0 to hide the video
}

function restartAndPlayVideo() {
  var video = document.getElementById("background-video");
  video.currentTime = 0; // Reset the video to the beginning
  video.play(); // Start playing the video
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
      timer--; // Decrement timer at the beginning of the loop

      if (timer < 0) {
        // Timer reached 0 or below, execute end logic
        gameEnded = true; // Set the game ended flag
        clearTimeout(bannerTimeoutId); // Clear the banner show timeout
        document.getElementById("banner").style.display = "none";
        hideBanner(); // Immediately hide the banner
        document.getElementById("score-container").style.textAlign = "left";
        document.getElementById("pause-button").style.display = "none";
        document.getElementById("game-over").style.display = "block";
        document.getElementById("answer-container").style.display = "none";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("question-container").style.display = "none";
        document.getElementById("header").style.display = "none";
        document.getElementById("prompt-container").style.display = "block";
        document.getElementById("footer-top").style.position = "relative";
        document.getElementById("footer-top").style.justifyContent = "center";
        document.getElementById("content").style.position = "relative";
        //document.getElementById("content").style.top = "38vw";
        document.getElementById("content").classList.remove("content-question");
        const scoreElement = document.getElementById("score-container");
        scoreElement.style.position = "relative";
        scoreElement.style.top = "0";
        scoreElement.style.transform = "scale(1)";
        scoreElement.style.left = "0";
        // document.getElementById('img-back').classList.remove("shrink-and-center");

        // Hide the top title
        document.getElementById("top-title").style.display = "none";

        // Change the background image
        //document.getElementById("img-back").src = "tandem-balance-kelsey-rest.png";

        clearInterval(countdownIntervalId);
        end = true;
        // Apply the zoomBounce animation to the score-container
        setTimeout(function () {
          const scoreContainer = document.getElementById("score-container");
          scoreContainer.style.animationName = "zoomBounce";
          scoreContainer.style.animationDuration = ".5s"; // You can adjust the duration
          scoreContainer.style.animationTimingFunction = "ease-out";
        }, 200);

        // Update the scores
        const finalScore = correctCount; // Remove percentage calculation
        const scoreContainer = document.getElementById("score-container");

        // Update high score if needed
        if (finalScore > highScore) {
          highScore = finalScore;
          localStorage.setItem("highScore", highScore);
        }

        // Update last score
        localStorage.setItem("lastScore", finalScore);

        // Update the score display - removed % symbols and showing raw numbers
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

        return; // Exit the function to prevent further execution
      }

      // Continue with the countdown display update
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
  const pauseButtonImage = document.getElementById("pause-button-img"); // Assuming the image has this id

  if (isTimerPaused) {
    pauseButtonImage.src = "play.png"; // Change to play image when paused
  } else {
    pauseButtonImage.src = "pause.png"; // Change back to pause image when unpaused
  }
}

// Add an event listener to the pause button
document.getElementById("pause-button").addEventListener("click", togglePause);

function startCountdown2() {
  const countdownDisplay = document.getElementById("countdown");
  startCountdown(countdownDuration, countdownDisplay);
}

function toggleTitle() {
  const title = document.getElementById("foot-title");
  if (title.textContent === "Left Foot") {
    title.textContent = "Right Foot";
  } else {
    title.textContent = "Left Foot";
  }
}

// Shuffle an array randomly
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
  //console.log("available questions = " + availableQuestions.length);
  return availableQuestions[
    Math.floor(Math.random() * availableQuestions.length)
  ];
}

// New toggleChallenge function
function toggleChallenge() {
  includeHardQuestions = !includeHardQuestions;
  document.getElementById("challenge-toggle").textContent = includeHardQuestions
    ? "Less hard"
    : "Harder";
  refreshQuestions();
}

function refreshQuestions() {
  askedQuestions = []; // Reset asked questions
  correctCount = 0; // Reset correct count if needed
  totalCount = 0; // Reset total count if needed
  displayNewQuestion(); // Display a new question based on the updated question pool
}

function preloadImages(imageArray) {
  imageArray.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });
}

function showBanner() {
  if (gameEnded) return;
  const banner = document.getElementById("banner");
  banner.classList.remove("banner-hidden");
  document.getElementById("footer-top").style.display = "none";
  document.getElementById("content2").style.opacity = "0";
  document.getElementById("content").classList.remove("content-question");

  // Reset and start the countdown bar animation
  const countdownBar = document.getElementById("countdown-bar2");
  countdownBar.style.animation = "none";
  countdownBar.offsetHeight; // Trigger reflow
  countdownBar.style.transform = "scaleX(1)"; // Force reset to full width
  countdownBar.offsetHeight; // Another reflow to ensure reset took effect
  countdownBar.style.animation = "shrinkBar 3s linear forwards";

  console.log("remove content-question");
  const currentStyle = window.getComputedStyle(
    document.getElementById("banner")
  );
  bannerTimeoutId = setTimeout(hideBanner, 3000);
}

function hideBanner() {
  const banner = document.getElementById("banner");
  banner.classList.add("banner-hidden");
  document.getElementById("footer-top").style.display = "flex";
  document.getElementById("content2").style.opacity = "1";
  document.getElementById("content").classList.add("content-question");

  // Completely reset the countdown bar
  const countdownBar = document.getElementById("countdown-bar2");
  countdownBar.style.animation = "none";
  countdownBar.style.transform = "scaleX(1)"; // Reset the width to 100%
  countdownBar.offsetHeight; // Force reflow

  console.log("add content-question");
  isLeftLeg = !isLeftLeg;
  toggleTitle();
  pauseVideo();
}

// Add event listener for challenge toggle
document
  .getElementById("challenge-toggle")
  .addEventListener("click", toggleChallenge);

// Display a new question and its answer options
function displayNewQuestion() {
  // Select a random question from the availableQuestions array
  const question = selectRandomQuestion(askedQuestions);

  // If there are no more available questions,
  // display the final score and end the game
  if (!question) {
    alert(`Game Over! You got ${correctCount} out of ${totalCount} correct.`);
    return;
  }

  // Add the question to the askedQuestions array
  askedQuestions.push(question);

  // Shuffle the answer options randomly
  shuffleArray(question.options);

  // Display the question and its answer options
  const questionContainer = document.querySelector(".question-container");
  questionContainer.textContent = question.question;

  const answerContainer = document.querySelector(".answer-container");
  answerContainer.innerHTML = "";

  //evaluate answer
  question.options.forEach((option) => {
    const answer = document.createElement("button");
    answer.classList.add("answer");
    answer.textContent = option;
    answerContainer.appendChild(answer);
    answer.addEventListener("click", () => {
      totalCount++;

      if (option === question.answer) {
        //correct answer
        correctCount++;
        answer.classList.add("correct");
      } //incorrect answer
      else {
        // Show the incorrect answer
        answer.classList.add("incorrect");

        // Show the correct answer
        const correctAnswer = answerContainer.querySelector(
          `.answer:not(.incorrect):not(:disabled):not(.correct)[data-answer="${question.answer}"]`
        );
        if (correctAnswer) {
          correctAnswer.classList.add("correct");
        }

        toggleGradientClasses();

        // Update the second video in the banner
        updateBannerVideo();

        // Update the main background video
        updateBackgroundVideo();

        // Delayed display of the banner
        setTimeout(showBanner, 1000); // Delay before the banner appears
      }

      // Disable all the answer buttons to prevent multiple clicks
      answerContainer
        .querySelectorAll(".answer:not(.correct)")
        .forEach((answer) => {
          answer.disabled = true;
        });

      // Update the score display
      const correctCountElement = document.querySelector(".correct-count");
      const totalCountElement = document.querySelector(".total-count");
      correctCountElement.textContent = correctCount;
      totalCountElement.textContent = totalCount;

      // Wait for 1 seconds before displaying the next question
      setTimeout(displayNewQuestion, 1000);
    });

    answer.setAttribute("data-answer", option);
  });
}

// Start the game by displaying the first question
displayNewQuestion();

document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".title");
  title.addEventListener("click", function () {
    localStorage.removeItem("lastScore");
    localStorage.removeItem("highScore");
    lastScore = 0;
    highScore = 0;
    location.reload(); // Refresh the page
  });
});
