// who pill
let whoText = "My name is Marco Amico, and I am a Junior Web Developer. I recently completed my studies in Boolean, where I gained a solid foundation in web development. I have a passion for creating clean, functional code that enhances the user experience and is accessible to all.";

const whoTextElement = document.getElementById("who-text");
let currentIndex0 = 0;

function addWhoText() {
  if (currentIndex0 < whoText.length) {
    whoTextElement.innerHTML += whoText.charAt(currentIndex0);
    currentIndex0++;
    setTimeout(addWhoText, 5);
  }
}


document.getElementById("who-pill").addEventListener("mouseenter", () => {
  addWhoText();
});
// training pill
const trainingText = "During my course at Boolean, I gained a solid foundation of knowledge in web development, thanks to a structured and comprehensive educational program. I learned to master fundamental programming languages such as HTML, CSS, JavaScript, and PHP, developing responsive and dynamic websites using frameworks and CMSs such as Bootstrap and WordPress. I also acquired skills in database management with MySQL and code versioning with Git. Furthermore, thanks to collaboration with other students and practical project work, I learned to use agile methodologies such as SCRUM and developed problem-solving and critical analysis skills, which are fundamental for facing the challenges of the Junior Web Developer job market.";

const trainingTextElement = document.getElementById("training-text");
let currentIndex1 = 0;

function addTrainingText() {
  if (currentIndex1 < trainingText.length) {
    trainingTextElement.innerHTML += trainingText.charAt(currentIndex1);
    currentIndex1++;
    setTimeout(addTrainingText, 5);
  }
}

document.getElementById("training-pill").addEventListener("mouseenter", () => {
  addTrainingText();
});
//experience pill
const experienceText = "I had the opportunity to work on real projects and gain skills in different areas of programming, such as website development and database management. Additionally, I was able to collaborate with other interns and industry professionals, learning a lot from their work. The work environment was very stimulating and gave me the opportunity to apply the theoretical knowledge acquired during my studies.";

const experienceTextElement = document.getElementById("experience-text");
let currentIndex2 = 0;

function addExperienceText() {
  if (currentIndex2 < experienceText.length) {
    experienceTextElement.innerHTML += experienceText.charAt(currentIndex2);
    currentIndex2++;
    setTimeout(addExperienceText, 5);
  }
}

document.getElementById("experience-pill").addEventListener("mouseenter", () => {
  addExperienceText();
});