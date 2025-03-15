import random

def chatbot():
    print("Chatbot: Hello! How are you feeling today?")
    
    while True:
        user_input = input("You: ").lower()
        
        if "sad" in user_input:
            wh_questions = ["What happened?", "Why are you feeling sad?", "Do you want to talk about it?"]
            print("Chatbot:", random.choice(wh_questions))
            
            user_response = input("You: ")
            solutions = [
                "Try taking a short walk outside.",
                "Listen to your favorite music.",
                "Talk to a close friend or family member.",
                "Take deep breaths and relax.",
                "Watch something funny to lighten your mood."
            ]
            print("Chatbot:", random.choice(solutions))
        
        elif user_input in ["bye", "exit", "quit"]:
            print("Chatbot: Take care! If you need to talk, I'm here.")
            break
        
        else:
            print("Chatbot: I am here to listen. Tell me more.")

if __name__ == "__main__":
    chatbot()
