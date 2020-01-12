const questions = [
  {
    question:
      "Did a parent or other adult in the household often…\nSwear at you, insult you, put you down, or humiliate you?",
    id: 1
  },
  {
    question:
      "Did a parent or other adult in the household often or very often… \npush, grab, slap, or throw something at you? \nor \n ever hit you so hard that you had marks or were injured?",
    id: 2
  },
  {
    question:
      "Did an adult or person at least five years older than you ever…touch or fondle you or have you touch their body in a sexual way? or attempt or actually have oral, anal, or vaginal intercourse with you?",
    id: 3
  },
  {
    question:
      "Did you often or very often feel that…no one in your family loved you or thought you were important or special? or your family didn’t look out for each other, feel close to each other, or support each other?",
    id: 4
  },
  {
    question:
      "Did you often or very often feel that…you didn’t have enough to eat, had to wear dirty clothes, and had no one to protect you? or your parents were too drunk or high to take care of you or take you to the doctor if you needed it?",
    id: 5
  },
  {
    question:
      "Was a biological parent ever lost to you through divorce, abandonment, or other reason?",
    id: 6
  },
  {
    question:
      "was your mother or stepmother: often or very often pushed, grabbed, slapped, or had something thrown at her? or sometimes, often, or very often kicked, bitten, hit with a fist, or hit with something hard? or ever repeatedly hit over at least a few minutes or threatened with a gun or knife?",
    id: 7
  },
  {
    question:
      "Did you live with anyone who was a problem drinker or alcoholic, or who used street drugs?",
    id: 8
  },
  {
    question:
      "Was a household member depressed or mentally ill, or did a household member attempt suicide?",
    id: 9
  },
  {
    question: "Did a household member go to prison?",
    id: 10
  }
]; //These are the variables for the questionnaire

var progressBarFull = document.getElementById("progressBarFull");
var progressText = document.getElementById("progressText");
const totalQuestions = questions["length"];
var score = 0; 
var q = 0; //Start test

function transition_hide() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("showQuestion").text(questions[q].question);
  setTimeout(function() {
    document.getElementById("quiz").style.display = "flex";
  }, 200);
  progressBarFull.style.width = "".concat(
    (q / totalQuestions) * 100,
    "%"
  );
  progressText.innerText = "Question "
    .concat(q + 1, "/")
    .concat(totalQuestions);
}

function GoToHomePage() {
  window.location = "/index.html";
}

function starttest() {
  let question = 0;
  score = 0;
  // event.preventDefault();
  document.getElementById("final_result").style.display = "none";
  document.getElementById("initialScreen").style.display = "none";
  document.getElementById("showQuestion").text(questions[q].question);
  setTimeout(function() {
    document.getElementById("quiz").style.display = "flex";
  }, 100);
  progressText.innerText = "Question "
    .concat(q + 1, "/")
    .concat(totalQuestions);
}

  function ACEs_Code(){ 

    return(
    window.onload = function() {

      document.getElementById("startButton").onclick = function() {
        starttest();
      };
    
      document.getElementById("home").onclick = function() {
        GoToHomePage();
      }; //Click on No
    
      document.getElementById("r0").onclick = function() {
        score += 0;
        console.log(score);
        q++;
    
        if (q >= totalQuestions) {
          localStorage.setItem("mostRecentScore", score);
          document.getElementById("initialScreen").style.display = "none";
          document.getElementById("quiz").style.display = "none";
          setTimeout(function() {
            document.getElementById("final_result").style.display = "flex";
          }, 500);
          document.getElementById("finalScore").innerHTML = score;
        } else {
          transition_hide();
        }
      }; //Click on Yes
    
      document.getElementById("r1").onclick = function() {
        score += 1;
        console.log(score);
        q++;
    
        if (q >= totalQuestions) {
          localStorage.setItem("mostRecentScore", score);
          document.getElementById("initialScreen").style.display = "none";
          document.getElementById("quiz").style.display = "none";
          setTimeout(function() {
            document.getElementById("final_result").style.display = "flex";
          }, 500);
          document.getElementById("finalScore").innerHTML = score;
        } else {
          transition_hide();
        }
      };
    
      document.getElementById("restart").onclick = function() {
        document.getElementById("final_result").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("initialScreen").style.display = "flex";
        q = 0;
      };
      document.getElementById("previous").onclick = function() {
        q--;
        transition_hide();
      };
      
      document.getElementById("next").onclick = function() {
        q++;
        transition_hide();
      };
      
      document.getElementById("home").onclick = function() {
        GoToHomePage();
      };
    }
    )}