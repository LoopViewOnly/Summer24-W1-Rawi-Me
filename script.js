const fake = document.getElementById("fake");
const real = document.getElementById("real");
const streak_element = document.getElementById("streak");
let streak = 0;

function game(){
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  const fake_link = "https://thispersondoesnotexist.com/";
  const real_link =`https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
  const fliping_pictures = Math.floor((Math.random()) * 4);
  if(fliping_pictures <=2){
    real.src = real_link;
    real.onclick = real_alert
    fake.src = fake_link;
    fake.onclick = fake_alert
  }
  else{
    real.src = fake_link;
    real.onclick = fake_alert
    fake.src = real_link;
    fake.onclick = real_alert
  }
}

function real_alert() {
  alert("Correct!");
  streak++;
  streak_element.innerText = "Your streak is: " + streak;
  game();
}
function fake_alert() {
  alert("INcorrect!");
  streak=0;
  streak_element.innerText = "Your streak is: " + streak;
  game();
}
game();