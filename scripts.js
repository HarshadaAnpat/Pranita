const responses = {
  breakup: `<p><strong>Let Yourself Feel -</strong><br>
  It is okay to be sad, angry, or confused. Do not force yourself to move on instantly. Accept your emotions but do not let them consume you.</p>
  
  <p><strong>Talk to Someone You Trust -</strong><br>
  A close friend, sibling, or someone who understands you can help. Even venting a little can make you feel lighter.</p>
  
  <p><strong>Keep Yourself Busy -</strong><br>
  Code something fun, maybe work on a new ReactJS project or experiment with a cool design.<br>
  Watch anime or a movie, something lighthearted that makes you smile.<br>
  Read or learn something new since you love web development, maybe explore a new library or framework.</p>`,

  overwhelmed: `I'm sorry you're feeling this way. What's making you feel overwhelmed? 💙`,

  sad: "Want to talk about what’s on your mind? Sometimes just sharing can make things feel a little lighter.",

  bad: "I'm here for you, What's wrong? You can talk to me about anything.",

  collegeProjects: `That sounds really stressful. College projects can pile up and feel overwhelming. Here are a few things that might help:<br>
  - **Break it down** – Divide your projects into smaller tasks and tackle them one by one.<br>
  - **Prioritize** – Focus on the most urgent or important ones first.<br>
  - **Take breaks** – Short breaks can refresh your mind and improve focus.<br>
  - **Ask for help** – If you're stuck, talking to a classmate or professor might make things easier.<br>
  - **Self-care** – Even during busy times, a little “me time” (like listening to music or going for a walk) can help reduce stress.<br>
  - **You're doing your best, and that’s enough! You got this.** 💙`,

  exhausted: `I understand, socializing can be draining. Here’s something that might help:<br>
  - **Take time for yourself** – A quiet moment alone can help recharge your energy.<br>
  - **Set boundaries** – It’s okay to say no to social interactions if you need rest.<br>
  - **Use a grounding activity** – Listening to music, watching a familiar show, or stimming can help regulate emotions.<br>
  - **Remember: It’s okay to be yourself. You don’t have to mask all the time.** 💙`,

  sarcasmConfusion: `Sarcasm can be really hard to understand sometimes. If you ever feel unsure, here’s what you can do:<br>
  - **Ask for clarification** – A simple “Oh, were you joking?” can help.<br>
  - **Look for tone & facial cues** – If the person is smiling or exaggerating, it might be sarcasm.<br>
  - **It’s not your fault!** – Many people struggle with sarcasm, and that’s okay.<br>
  - **If a misunderstanding happens, you can always follow up and explain.** 💙`,

  scheduleChange: `A change in routine can feel really unsettling. Here’s how you might handle it:<br>
  - **Try making a new mini-plan** – Focusing on one task at a time can help.<br>
  - **Use a familiar routine** – Keeping a part of your normal schedule can make things feel more stable.<br>
  - **Remind yourself: It’s okay to feel this way. Adjusting takes time.** 💙`,

  sensoryOverload: `Sensory overload can be really overwhelming. If you're feeling overstimulated, try these:<br>
  - **Find a quiet place** – Removing yourself from loud or crowded spaces can help.<br>
  - **Use noise-canceling headphones** – Blocking out sound can reduce stress.<br>
  - **Try deep pressure or stimming** – Hugging a weighted blanket or fidgeting can help regulate emotions.<br>
  - **Meltdowns aren’t your fault** – You’re doing your best, and that’s what matters. 💙`,
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

  // Display the user's message
  chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  let botReply = "";

  if (waitingForReason) {
    // Handle follow-up responses
    if (userInput.includes("breakup")) {
      botReply = responses.breakup;
      waitingForReason = false;
    } else if (userInput.includes("college")) {
      botReply = responses.collegeProjects;
      waitingForReason = false;
    } else if (userInput.includes("tired") || userInput.includes("drained")) {
      botReply = responses.exhausted;
      waitingForReason = false;
    } else if (
      userInput.includes("sarcasm") ||
      userInput.includes("confused")
    ) {
      botReply = responses.sarcasmConfusion;
      waitingForReason = false;
    } else if (userInput.includes("schedule") || userInput.includes("change")) {
      botReply = responses.scheduleChange;
      waitingForReason = false;
    } else if (
      userInput.includes("sensory") ||
      userInput.includes("meltdown")
    ) {
      botReply = responses.sensoryOverload;
      waitingForReason = false;
    } else {
      botReply = "That sounds really tough. Want to tell me more?";
      waitingForReason = false;
    }
  } else {
    // Handle initial emotional inputs
    if (userInput.includes("sad")) {
      botReply = "I'm sorry you're feeling sad. Why do you feel this way? 💙";
      waitingForReason = true;
      lastEmotion = "sad";
    } else if (userInput.includes("bad")) {
      botReply = responses.bad;
      waitingForReason = false;
      lastEmotion = "bad";
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
