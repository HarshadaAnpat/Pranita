function chatbot() {
  console.log("Chatbot: Hello! How are you feeling today?");
  
  function getUserInput() {
    let userInput = prompt("You:").toLowerCase();

    if (userInput.includes("sad")) {
      let whQuestions = [
        "What happened?",
        "Why are you feeling sad?",
        "Do you want to talk about it?"
      ];
      let question = whQuestions[Math.floor(Math.random() * whQuestions.length)];
      console.log("Chatbot:", question);
      
      let userResponse = prompt("You:");
      
      let solutions = [
        "Try taking a short walk outside.",
        "Listen to your favorite music.",
        "Talk to a close friend or family member.",
        "Take deep breaths and relax.",
        "Watch something funny to lighten your mood."
      ];
      let advice = solutions[Math.floor(Math.random() * solutions.length)];
      console.log("Chatbot:", advice);
      
    } else if (["bye", "exit", "quit"].includes(userInput)) {
      console.log("Chatbot: Take care! If you need to talk, I'm here.");
      return;
    } else {
      console.log("Chatbot: I am here to listen. Tell me more.");
    }
    
    setTimeout(getUserInput, 1000);
  }

  getUserInput();
}

chatbot();
