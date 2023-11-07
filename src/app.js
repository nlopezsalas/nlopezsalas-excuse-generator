/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Nueva excusita");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // let randomNumber;
  // randomNumber = Math.random() * who.length;
  // console.log(randomNumber);
  // console.log(Math.round(randomNumber));
  // return who[Math.round(randomNumber)]+" "+action[Math.round(randomNumber)]+" "+what[Math.round(randomNumber)]+" "+when[Math.round(randomNumber)];
  // --> NOTA: con round puede dar un número mayor que el length, ya que si es >.5 pasa al siguiente número

  let whoIndex = Math.random() * who.length;
  let actionIndex = Math.random() * action.length;
  let whatIndex = Math.random() * what.length;
  let whenIndex = Math.random() * when.length;

  return (
    "<strong>" +
    who[Math.floor(whoIndex)] +
    "</strong>" +
    " " +
    action[Math.floor(actionIndex)] +
    " " +
    "<strong>" +
    what[Math.floor(whatIndex)] +
    "</strong>" +
    " " +
    when[Math.floor(whenIndex)] +
    "."
  );
};
