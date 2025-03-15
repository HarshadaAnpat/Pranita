const responses = {
  sad: ["Try listening to music.", "Talk to a friend.", "Take deep breaths."],
  angry: ["Take a deep breath.", "Try relaxation techniques."],
  stressed: ["Go for a walk.", "Take a short break."],
};

let waitingForExplanation = false;
let userEmotion = "";

function sendMessage() {
  let userInput = document.getElementById("userInput").value.toLowerCase();
  let chat = document.getElementById("chat");

  if (!userInput.trim()) return;

  chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  let botReply = "";

  if (waitingForExplanation) {
    botReply = `I understand. Here are some suggestions:`;
    botReply += userEmotion in responses
      ? `<br>- ${responses[userEmotion][Math.floor(Math.random() * responses[userEmotion].length)]}`
      : "<br>- Express yourself or talk to someone you trust.";

    waitingForExplanation = false;
    userEmotion = "";
  } else {
    for (let key in responses) {
      if (userInput.includes(key)) {
        userEmotion = key;
        botReply = `I see you're feeling ${key}. Can you tell me why?`;
        waitingForExplanation = true;
        break;
      }
    }
    if (!botReply) botReply = "I'm here to listen. Tell me more.";
  }

  setTimeout(() => {
    chat.innerHTML += `<p><strong>Chatbot:</strong> ${botReply}</p>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  document.getElementById("userInput").value = "";
}
