const responses = {
  sad: [
    "I'm here for you. Do you want to talk about it?",
    "It's okay to feel sad. Try listening to your favorite music!",
    "You can try taking deep breaths and relaxing.",
    "Talking to a friend might help. I'm here to listen.",
  ],

  angry: [
    "Take a deep breath. What's making you feel this way?",
    "It's okay to feel angry, but try to calm yourself.",
    "Would you like some relaxation techniques?",
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
