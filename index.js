const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Question the user
    let answer = window.prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)
    `);

    // Validate the answer
    if (answer === null) return;

    if (answer === "") {
      alert("Write option number!");
      this.registerNewAnswer();
    } else {
      // Convert the input into a number
      answer = +answer;
    }

    // Update the array of answers
    if (Number.isInteger(answer) && answer >= 0 && answer < 4) {
      this.answers[answer]++;
      console.log(this.answers);
      this.registerNewAnswer();
    } else {
      alert("Write option number!");
      this.registerNewAnswer();
    }
  },
};

const button = document.querySelector(".button");

button.addEventListener("click", function () {
  poll.registerNewAnswer();
});
