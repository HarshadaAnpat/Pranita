const responses = {
  overwhelmed: `What's making you feel overwhelmed?`,

  sad: "Want to talk about what’s on your mind? Sometimes just sharing can make things feel a little lighter.",

  bad: "I'm here for you, What's wrong? You can talk to me about anything.",

  anxious:
    "Do you want to talk about What’s making you anxious? Any specific reason?",

  nervous:
    "That’s completely okay to feel. Do you want to talk about what’s making you nervous?",

  breakup: `<p><strong>Let Yourself Feel -</strong><br>
  It is okay to be sad, angry, or confused. Do not force yourself to move on instantly. Accept your emotions but do not let them consume you.</p>
  
  <p><strong>Talk to Someone You Trust -</strong><br>
  A close friend, sibling, or someone who understands you can help. Even venting a little can make you feel lighter.</p>
  
  <p><strong>Keep Yourself Busy -</strong><br>
  Code something fun, maybe work on a new ReactJS project or experiment with a cool design.<br>
  Watch anime or a movie, something lighthearted that makes you smile.<br>
  Read or learn something new since you love web development, maybe explore a new library or framework.</p>`,

  presentation: `<p>I totally get that. Public speaking can be intimidating, 
  especially when you feel like all eyes are on you. But remember, 
  most people in the audience are just listening, not judging—they want you to do well.<br>
<h6>If you're worried about forgetting what to say, try this:</h6>
<b>Pause and breathe –</b> It’s okay to take a moment to collect your thoughts.<br>
<b>Have key points in mind –</b> Instead of memorizing word for word, focus on the main ideas.<br>
<b>Practice out loud –</b> Even saying it a few times in front of a mirror or recording yourself can boost confidence.<br>
<h6>If it’s about how people will react, remind yourself:</h6>
<b>You can’t control others, only how you show up –<b> And showing up is already a win.<br>
<b>Most people don’t notice small mistakes –</b> They’ll be focused on your message, not tiny slip-ups.<br>
<b>You bring value –</b> What you’re presenting matters, and your voice is worth hearing. </p>`,

  passed_Away: `I’m really sorry you're going through this. 
  Losing someone is one of the hardest things, and there’s no right or wrong way to grieve. 
  Just take it one moment at a time.<br>
<h6>If it feels overwhelming, maybe try these:</h6>
<b>Talk to someone who understands –</b> A close friend, a family member, or even just writing your feelings down can help. 
You don’t have to go through this alone.<br>
<b>Let yourself feel –</b> If you need to cry, cry. If you need to be quiet, that’s okay too. 
Grief comes in waves, and however you're feeling is valid.<br>
<b>Do something comforting –</b> Watch a favorite movie, take a walk, listen to music that soothes you. 
Little things can bring a sense of normalcy.<br>
<b>Remember the good moments –</br> If it feels right, think about a memory that makes you smile. 
It’s okay to celebrate their life even while you’re hurting.<br>
<b>Take care of yourself –</b> Even if you don’t feel like it, eat something, get some rest, breathe. 
Grief can be exhausting, and your well-being matters.<br>
I know nothing can truly take the pain away, but you’re not alone in this. 
If you ever just want to talk—about anything, even random stuff to distract yourself—I’m here.`,

  collegeProjects: `That sounds really stressful. College projects can pile up and feel overwhelming. Here are a few things that might help:<br>
  - **Break it down** – Divide your projects into smaller tasks and tackle them one by one.<br>
  - **Prioritize** – Focus on the most urgent or important ones first.<br>
  - **Take breaks** – Short breaks can refresh your mind and improve focus.<br>
  - **Ask for help** – If you're stuck, talking to a classmate or professor might make things easier.<br>
  - **Self-care** – Even during busy times, a little “me time” (like listening to music or going for a walk) can help reduce stress.<br>
  - **You're doing your best, and that’s enough! You got this.**`,

  exhausted: `I understand, socializing can be draining. Here’s something that might help:<br>
  - **Take time for yourself** – A quiet moment alone can help recharge your energy.<br>
  - **Set boundaries** – It’s okay to say no to social interactions if you need rest.<br>
  - **Use a grounding activity** – Listening to music, watching a familiar show, or stimming can help regulate emotions.<br>
  - **Remember: It’s okay to be yourself. You don’t have to mask all the time.** `,

  sarcasmConfusion: `Sarcasm can be really hard to understand sometimes. If you ever feel unsure, here’s what you can do:<br>
  - **Ask for clarification** – A simple “Oh, were you joking?” can help.<br>
  - **Look for tone & facial cues** – If the person is smiling or exaggerating, it might be sarcasm.<br>
  - **It’s not your fault!** – Many people struggle with sarcasm, and that’s okay.<br>
  - **If a misunderstanding happens, you can always follow up and explain.**`,

  scheduleChange: `A change in routine can feel really unsettling. Here’s how you might handle it:<br>
  - **Try making a new mini-plan** – Focusing on one task at a time can help.<br>
  - **Use a familiar routine** – Keeping a part of your normal schedule can make things feel more stable.<br>
  - **Remind yourself: It’s okay to feel this way. Adjusting takes time.**`,

  sensoryOverload: `Sensory overload can be really overwhelming. If you're feeling overstimulated, try these:<br>
  - **Find a quiet place** – Removing yourself from loud or crowded spaces can help.<br>
  - **Use noise-canceling headphones** – Blocking out sound can reduce stress.<br>
  - **Try deep pressure or stimming** – Hugging a weighted blanket or fidgeting can help regulate emotions.<br>
  - **Meltdowns aren’t your fault** – You’re doing your best, and that’s what matters.`,
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
    if (userInput.includes("sad")) {
      botReply = responses.sad;
      waitingForReason = true;
    } else if (userInput.includes("bad")) {
      botReply = responses.bad;
      waitingForReason = true;
    } else if (userInput.includes("overwhelmed")) {
      botReply = responses.overwhelmed;
      waitingForReason = true;
    } else if (userInput.includes("breakup")) {
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
  }

  setTimeout(() => {
    chat.innerHTML += `<p><strong>Chatbot:</strong> ${botReply}</p>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  document.getElementById("userInput").value = "";
}
