from flask import Flask, render_template, request
import random

app = Flask(__name__)

responses = {
    "sad": [
        "I'm sorry to hear that. Want to talk about it?",
        "It's okay to feel sad sometimes. I'm here to listen.",
        "Try taking a deep breath and listening to your favorite song.",
        "Talking to a friend or journaling can help. Do you want to try that?"
    ],
    "happy": [
        "That's amazing! What's making you happy?",
        "I'm glad to hear that! Keep spreading positivity.",
        "Happiness is contagious! Tell me more."
    ],
    "angry": [
        "Take a deep breath. What’s making you feel this way?",
        "Anger is natural, but let’s find a way to calm down.",
        "Would you like some relaxation techniques?"
    ],
    "excited": [
        "Wow! What’s the good news?",
        "That sounds exciting! Tell me more.",
        "I love excitement! What’s making your day special?"
    ]
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def get_response():
    user_input = request.form["user_input"].lower()
    for key in responses.keys():
        if key in user_input:
            return random.choice(responses[key])
    
    if user_input in ["bye", "exit", "quit"]:
        return "Take care! If you need to talk, I'm here."
    
    return "I am here to listen. Tell me more."

if __name__ == "__main__":
    app.run(debug=True)
