"use strict";

{
  // function render(quiz) {
  //   const main = document.querySelector("main");

  //   const section = document.createElement("section");
  //   const h2 = document.createElement("h2");
  //   h2.textContent = quiz[0];

  //   const ul = document.createElement("ul");

  //   const li0 = document.createElement("li");
  //   li0.textContent = quiz[1];
  //   li0.addEventListener("click", () => {
  //     if (quiz[4] === 0) {
  //       li0.classList.add("correct");
  //     } else {
  //       li0.classList.add("wrong");
  //     }
  //   });
  //   const li1 = document.createElement("li");
  //   li1.textContent = quiz[2];
  //   li1.addEventListener("click", () => {
  //     if (quiz[4] === 1) {
  //       li1.classList.add("correct");
  //     } else {
  //       li1.classList.add("wrong");
  //     }
  //   });
  //   const li2 = document.createElement("li");
  //   li2.textContent = quiz[3];
  //   li2.addEventListener("click", () => {
  //     if (quiz[4] === 2) {
  //       li2.classList.add("correct");
  //     } else {
  //       li2.classList.add("wrong");
  //     }
  //   });

  //   ul.appendChild(li0);
  //   ul.appendChild(li1);
  //   ul.appendChild(li2);

  //   section.appendChild(h2);
  //   section.appendChild(ul);
  //   main.appendChild(section);
  // }

  // const quizzes = [
  //   ["Q1: What's your answer?", "Choice: A", "Choice: B", "Choice: C", 0],
  //   ["Q2: What's your answer?", "Choice: A", "Choice: B", "Choice: C", 1],
  //   ["Q3: What's your answer?", "Choice: A", "Choice: B", "Choice: C", 2],
  // ];

  // quizzes.forEach((quiz) => {
  //   render(quiz);
  // });



  
  // After refactoring
  function render(quiz) {
    const main = document.querySelector("main");

    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = quiz[0];

    const ul = document.createElement("ul");

    const li = {};

    for (let i = 0; i < quiz.length - 2; i++) {
      li[i] = document.createElement("li");
      li[i].textContent = quiz[i + 1];
      li[i].addEventListener("click", () => {
        if (quiz[4] === i) {
          li[i].classList.add("correct");
        } else {
          li[i].classList.add("wrong");
        }
      });
      ul.appendChild(li[i]);
    }

    section.appendChild(h2);
    section.appendChild(ul);
    main.appendChild(section);
  }

  const quizzes = [
    ["Q1: What is the capital of France?", "a) Berlin", "b) London", "c) Paris", 2],
    ['Q2: Which planet is known as the "Red Planet"?', "a) Mars", "b) Jupiter", "c) Saturn", 0],
    [
      'Q3: Who painted the famous artwork "The Mona Lisa"?',
      "a) Vincent van Gogh",
      "b) Leonardo da Vinci",
      "c) Pablo Picasso",
      1,
    ],
  ];

  quizzes.forEach((quiz) => {
    render(quiz);
  });
}
