const responses = {
  sad: [
    "I'm really sorry you're feeling this way. Want to talk more about it? 💙",
    "That sounds tough. Do you want to share what’s on your mind?",
    "You're not alone. I'm here to listen. What's making you feel this way?",
  ],
  angry: [
    "I get that you're angry. Do you want to vent about what happened?",
    "It sounds frustrating. What do you think could help you feel better?",
    "Anger is valid. Do you want to talk about it or find ways to calm down?",
  ],
  overwhelmed: [
    "I'm sorry you're feeling overwhelmed. What's causing the stress?",
    "That sounds like a lot to handle. Want to break it down together?",
    "Take a deep breath. You're doing your best. How can I support you?",
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

  if (!userInput) return;

  chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  let botReply = "";

  if (waitingForExplanation) {
    botReply = `I understand. That sounds difficult. Here’s something that might help: <br>`;
    botReply += responses[userEmotion]
      ? responses[userEmotion][
          Math.floor(Math.random() * responses[userEmotion].length)
        ]
      : "You're not alone. I'm here to listen. 💙";

    waitingForExplanation = false;
    userEmotion = "";
  } else {
    let foundEmotion = Object.keys(responses).find((key) =>
      userInput.includes(key)
    );

    if (foundEmotion) {
      userEmotion = foundEmotion;
      botReply =
        responses[foundEmotion][
          Math.floor(Math.random() * responses[foundEmotion].length)
        ];
      waitingForExplanation = true;
    } else {
      botReply =
        "I'm here for you. Can you tell me more about how you're feeling?";
    }
  }

  setTimeout(() => {
    chat.innerHTML += `<p><strong>Chatbot:</strong> ${botReply}</p>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  document.getElementById("userInput").value = "";
}
