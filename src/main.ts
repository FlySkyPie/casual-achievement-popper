/**
 * @credit https://codepen.io/uenify/pen/KxzKVd
 */
import "./style.css";

let achievementSound = new Audio(
  "https://dl.dropboxusercontent.com/s/8qvrpd69ua7wio8/XboxAchievement.mp3"
);
let achievementSoundRare = new Audio(
  "https://dl.dropboxusercontent.com/s/po1udpov43am81i/XboxOneRareAchievement.mp3"
);
const achievement = () => {
  let title = document.querySelector<HTMLInputElement>("#a_title")!.value;
  let score = document.querySelector<HTMLInputElement>("#a_score")!.value;
  let rare = document.querySelector<HTMLInputElement>("#a_rare")!.checked;
  document.querySelector<HTMLElement>(".achiev_name")!.innerText = title;
  document.querySelector<HTMLElement>(".acheive_score")!.innerText = score;
  document.querySelector<HTMLButtonElement>("#a_trigger")!.disabled = true;
  document.querySelector<HTMLElement>(".unlocked")!.innerText = rare
    ? "Rare achievement unlocked"
    : "Achievement unlocked";
  if (rare) {
    achievementSoundRare.play();
    document.querySelector<HTMLElement>(".achievement")!.classList.add("rare");
  } else {
    achievementSound.play();
  }
  document.querySelector<HTMLElement>(".circle")!.classList.add("circle_animate");
  document.querySelector<HTMLElement>(".banner")!.classList.add("banner-animate");
  document.querySelector<HTMLElement>(".achieve_disp")!.classList.add("achieve_disp_animate");
  setTimeout(() => {
    document.querySelector<HTMLElement>(".circle")!.classList.remove("circle_animate");
    document.querySelector<HTMLElement>(".banner")!.classList.remove("banner-animate");
    document
      .querySelector<HTMLElement>(".achieve_disp")!
      .classList.remove("achieve_disp_animate");
    document.querySelector<HTMLButtonElement>("#a_trigger")!.disabled = false;
    if (rare) {
      document.querySelector<HTMLElement>(".achievement")!.classList.remove("rare");
    }
  }, 12000);
};

document.querySelector<HTMLElement>("#a_trigger")!.addEventListener("click", () => {
  achievement();
});
