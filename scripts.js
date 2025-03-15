const responses = {
  breakup: `I'm really sorry you're going through this. Breakups are tough, and it's okay to feel overwhelmed. Here are a few things that might help:<br>
  - **Allow yourself to feel** – It’s okay to be sad, angry, or confused. Don't suppress your emotions.<br>
  - **Lean on your support system** – Talk to close friends or family who can listen and comfort you.<br>
  - **Focus on self-care** – Do things that make you feel good, like listening to music, exercising, or journaling.<br>
  - **Avoid overthinking** – Try not to dwell on the past. Shift your focus to things that bring you peace and joy.<br>
  - **Give yourself time** – Healing takes time, but you will come out stronger. Be patient and kind to yourself.<br>
  - **You're not alone in this. You'll get through it.** 💙`,

  overwhelmed: `I'm sorry you're feeling this way. What's making you feel overwhelmed? 💙`,

  collegeProjects: `That sounds really stressful. College projects can pile up and feel overwhelming. Here are a few things that might help:<br>
  - **Break it down** – Divide your projects into smaller tasks and tackle them one by one.<br>
  - **Prioritize** – Focus on the most urgent or important ones first.<br>
  - **Take breaks** – Short breaks can refresh your mind and improve focus.<br>
  - **Ask for help** – If you're stuck, talking to a classmate or professor might make things easier.<br>
  - **Self-care** – Even during busy times, a little “me time” (like listening to music or going for a walk) can help reduce stress.<br>
  - **You're doing your best, and that’s enough! You got this.** 💙`,
};

let waitingForReason = false;
let lastEmotion = "";

function sendMessage() {
  let userInput = document
    .getElementById("userInput")
    .value.trim()
    .toLowerCase();
  let chat = document.getElementById("chat");

  if (!userInput) return; // Prevents empty input

  chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  let botReply = "";

  if (waitingForReason) {
    if (userInput.includes("breakup")) {
      botReply = responses.breakup;
    } else if (userInput.includes("college")) {
      botReply = responses.collegeProjects;
    } else {
      botReply = "That sounds really tough. Want to tell me more?";
    }
    waitingForReason = false;
  } else {
    if (userInput.includes("sad")) {
      botReply = "I'm sorry you're feeling sad. Why do you feel this way? 💙";
      waitingForReason = true;
      lastEmotion = "sad";
    } else if (userInput.includes("overwhelmed")) {
      botReply = responses.overwhelmed;
      waitingForReason = true;
      lastEmotion = "overwhelmed";
    } else {
      botReply = "I'm here for you. Want to talk about what's on your mind?";
    }
  }

  setTimeout(() => {
    chat.innerHTML += `<p><strong>Chatbot:</strong> ${botReply}</p>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  document.getElementById("userInput").value = "";
}
