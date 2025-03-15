const responses = {
  sad: [
    "I'm here for you. Do you want to talk about it?",
    "It's okay to feel sad. Try listening to your favorite music!",
    "You can try taking deep breaths and relaxing.",
    "Talking to a friend might help. I'm here to listen.",
  ],
  happy: [
    "That's amazing! What’s making you happy?",
    "I love hearing that! Keep smiling! 😊",
    "Happiness is contagious! Tell me more.",
  ],
  angry: [
    "Take a deep breath. What's making you feel this way?",
    "It's okay to feel angry, but try to calm yourself.",
    "Would you like some relaxation techniques?",
  ],
  excited: [
    "Wow! What's the good news?",
    "That sounds exciting! Tell me more!",
    "I love excitement! What’s making your day special?",
  ],
};

function sendMessage() {
  let userInput = document.getElementById("userInput").value.toLowerCase();
  let chat = document.getElementById("chat");

  if (userInput.trim() === "") return;

  chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

  let botReply = "I am here to listen. Tell me more.";

  for (let key in responses) {
    if (userInput.includes(key)) {
      let randomIndex = Math.floor(Math.random() * responses[key].length);
      botReply = responses[key][randomIndex];
      break;
    }
  }

  setTimeout(() => {
    chat.innerHTML += `<p><strong>Chatbot:</strong> ${botReply}</p>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  document.getElementById("userInput").value = "";
}
