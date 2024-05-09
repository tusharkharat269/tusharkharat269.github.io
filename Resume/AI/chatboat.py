import re

# Define patterns and responses
patterns = {
    r'hi|hello|hey': ['Hello!', 'Hi there!', 'Hey!'],
    r'how are you|how are you doing': ["I'm just a bot, but I'm doing well. How can I assist you?"],
    r'(\d+) (USD|EUR) to (INR|GBP)': ['Sure, I can convert currencies.', 'Let me calculate that for you.'],
    r'bye|goodbye': ['Goodbye!', 'Have a great day!'],
    r'what can you do': ["I can provide information, answer questions, and more. Feel free to ask me anything!"],
    r'weather': ["I'm sorry, I'm just a basic bot and I don't have access to weather information."],
    r'help': ["Sure, I'd be happy to help you with that."],
    r'your name': ["My name is ChatBot."],
}

def respond(message):
    for pattern, responses in patterns.items():
        match = re.match(pattern, message.lower())
        if match:
            response = responses[0]
            return response

    return "I'm sorry, I didn't understand that."

# Main loop
print("Bot: Hi! How can I help you?")
while True:
    user_input = input("You: ")
    if user_input.lower() == 'quit':
        print("Bot: Goodbye!")
        break
    else:
        bot_response = respond(user_input)
        print("Bot:", bot_response)
