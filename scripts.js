const responses = {
  sad: [
    "I'm sorry you're feeling this way. Try expressing yourself to someone you trust. Talking can lighten your burden.",
    "Sadness is a natural emotion. Have you tried engaging in an activity you enjoy? Distractions can help.",
    "Sometimes, a change in environment helps. Go for a walk, breathe in fresh air, and observe nature.",
    "Journaling can help process emotions. Writing down your thoughts may bring clarity and relief.",
    "If this feeling persists, consider reaching out to a professional. Your emotions matter, and help is available.",
  ],
  angry: [
    "It's okay to feel angry. Try taking deep breaths and counting to ten before reacting.",
    "Anger often clouds judgment. Step away from the situation and revisit it when you feel calmer.",
    "Physical activity, like a quick walk or workout, can help release built-up frustration.",
    "Try writing down what made you angry. Seeing it written can help process the situation logically.",
    "Talk to someone you trust about what’s bothering you. Expressing feelings can help release tension.",
  ],
  stressed: [
    "Stress can feel overwhelming, but remember to take breaks and prioritize self-care.",
    "Try meditation or deep breathing exercises to calm your mind and reduce tension.",
    "Listening to calming music or doing something creative can be a great stress reliever.",
    "Sleep is essential for handling stress. Make sure you're getting enough rest.",
    "Organizing your tasks and breaking them into smaller steps can make them feel more manageable.",
  ],
};

let waitingForExplanation = false;
let userEmotion = "";

function sendMessage() {
  let userInput = document
    .getElementById("userInput")
    .value.trim()
    .toLowerCase();
  let chat = document.getElementById("chat");

  if (!userInput) return; // Prevent empty input

  chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  let botReply = "";

  if (waitingForExplanation) {
    botReply = `I understand. Here are some suggestions for you: <br>`;
    botReply += responses[userEmotion]
      ? responses[userEmotion][
          Math.floor(Math.random() * responses[userEmotion].length)
        ]
      : "Expressing yourself can be a relief. Consider talking to someone you trust.";

    waitingForExplanation = false;
    userEmotion = "";
  } else {
    let foundEmotion = Object.keys(responses).find((key) =>
      userInput.includes(key)
    );

    if (foundEmotion) {
      userEmotion = foundEmotion;
      botReply = `I see you're feeling ${foundEmotion}. Why do you feel this way?`;
      waitingForExplanation = true;
    } else {
      botReply = "I'm here to listen. Tell me more about how you're feeling.";
    }
  }

  setTimeout(() => {
    chat.innerHTML += `<p><strong>Chatbot:</strong> ${botReply}</p>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  document.getElementById("userInput").value = "";
}
