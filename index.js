const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = window.prompt(`
    What is your favorite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)
    `);
  },
};

poll.registerNewAnswer();
