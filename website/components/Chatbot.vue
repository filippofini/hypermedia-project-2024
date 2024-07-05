<template>
  <div @scroll="showButton()">
    <button @click="toggleChatbot" class="chatbot-button">
      <img src="../assets/img/chatbot.png" alt="Chat Icon" class="chat-icon" width ="50" height = "50"/>
    </button>

    <div v-if="isChatbotVisible" class="chatbot-container">
      <div class="chatbot-header">
        <span style="margin: 1vh;">Chatbot </span>
        <div class = "circle-close-button"><button @click="toggleChatbot" class="close-button">&times;</button></div>
      </div>
      <div class="chatbot-messages" ref="chatbotMessages">
        <div v-for="message in messages" :key="message.id" :class=" message.sender === 'You' ? 'user-message' : 'bot-message'">
          <div class="message-sender">{{ message.sender }}</div>
          <div :class=" message.sender === 'You' ? 'user-text' : 'bot-text'">{{ message.text }}</div>
        </div>
        <div v-if="isSending" class="loading-indicator">Sending...</div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
      <div class="user-chat">
        <input
          type="text"
          v-model="userInput"
          @keydown.enter="sendMessage"
          class="chatbot-input"
          placeholder="Type a message..."
          :disabled="isSending"
          ref="chatbotInput"
          aria-label="Chatbot input field"
        />
        <button @click="sendMessage" class="send-button" :disabled="isSending">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChatbotVisible: false,
      userInput: '',
      messages: [{ id: 1, sender: 'Bot', text: 'Hello! How can I help you today?' }],
      messageId: 1,
      isSending: false,
      errorMessage: "",
    };
  },

  methods: {
    toggleChatbot() {
      this.isChatbotVisible = !this.isChatbotVisible;
      if (this.isChatbotVisible) {
        this.$nextTick(() => {
          this.$refs.chatbotInput.focus();
        });
      }
    },

    async sendMessage() {
      if (!this.userInput || this.isSending) {
        return;
      }

      this.isSending = true;

      const input = this.userInput;
      this.userInput = '';

      this.messages.push({
        id: this.messageId++,
        sender: 'You',
        text: input,
      });

      this.$nextTick(() => {
        this.$refs.chatbotMessages.scrollTop = this.$refs.chatbotMessages.scrollHeight;
      });

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          body: input,
        });

        const responseText = await response.text();

        if (response.ok && responseText.length>0) {
          this.messages.push({
            id: this.messageId++,
            sender: 'Bot',
            text: responseText,
          });
        } else {
          this.errorMessage = 'Failed to send message';
        }
      } catch (error) {
        this.errorMessage = 'Error communicating with chat endpoint: ' + error.message;
      }

      this.isSending = false;

      this.$nextTick(() => {
        this.$refs.chatbotMessages.scrollTop = this.$refs.chatbotMessages.scrollHeight;
      });
    },
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

  .chatbot-button {
    z-index: 1;
    position: fixed;
    text-align: center;
    width: 4vw;
    height: 4vw;
    bottom: 2vw;
    right: 1vw;
    background-color: #B6244F;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    vertical-align: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 60px;
    min-height: 60px;
    border: 0.7px solid #ffffff;
  }
  
  .chatbot-button:hover {
    background-color: #871b3b;
    opacity: 1.0
  }

  .chat-icon {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }

  .chatbot-container {
    z-index: 1;
    position: fixed;
    bottom: 2vw;
    right: 1vw;
    width: 40vw;
    height: 85%;
    background-color: white;
    border: 0.1vw solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
  }

  .chatbot-header {
    font-family: Jost;
    font-weight: bold;
    font-size: 100%;
    height: 1.2vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #B6244F;
    color: white;
    padding: 1vw;
    border-bottom: 0.1vw solid #ccc;
    min-height: 20px;
  }

  .close-button {
    background: none;
    border: none;
    color: white;
    font-size: 180%;
    cursor: pointer;
    min-width: 35px;
    min-height: 35px;
    opacity: 1;
  }
  .close-button:hover {
    color: #B6244F;
  }

  .circle-close-button{
    text-align: center;
    align-items: center;
    border-radius: 100%;
    background-color: #B6244F;
  }

  .circle-close-button:hover{
    background-color: #ffffff;
    opacity: 0.5;
  }
  .circle-close-button:hover .close-button{
    color: #B6244F;
  }


  .chatbot-messages {
    font-family: Jost;
    flex: 1;
    padding: 1.5vh;
    overflow-y: auto;
    background-color: #f9f9f9;
  }

  .message-sender {
    margin-top: 0.3vh;
    display: flex;
    font-weight: bold;
  }

  .bot-message, .user-message {
    padding: 1.3vh;
    width: fit-content;
    display: flex;
    margin-top: 1vh;
    margin-bottom: 1vh;
    border-radius: 10px;
    min-width: 10%;
    max-width: 85%;
    word-wrap: break-word;
    flex-direction: column;
    transition: opacity 0.3s ease-in-out;
  }

  .bot-message {
    align-self: flex-start;
    background-color: #ebebeb;
  }

  .user-message {
    background-color: #A78BCA;
    margin-left: auto;
  }

  .send-button {
    background-color: #B6244F;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 1.5%;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 15%;
  }

  .send-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .send-button:hover:not(:disabled) {
    background-color: #8b1c3e;
  }

  .chatbot-input {
    font-family: Jost;
    border: 0.1vw solid #ccc;
    padding: 1.5%;
    width: 85%;
    border-radius: 10px;
    margin-right: 1vw;
  }
  
  .user-chat {
    height: 7vh;
    display: flex;
    align-items: center;
    padding: 1vw;
    background-color: #f1f1f1;
  }

  .loading-indicator {
    text-align: center;
    padding: 3vw;
    font-size: 1.5vh;
    color: #999;
  }

  .error-message {
    color: red;
    font-size: 1.5vh;
    padding: 1vw;
    text-align: center;
  }

  @media screen and (max-width: 700px) {
    .chatbot-container {
      width: 100%;
      height: 100%;
      bottom: 0;
      right: 0;
    }

    .chatbot-header {
      font-size: 120%;
      min-height: 40px;
    }

    .close-button {
      min-width: 42px;
      min-height: 42px;
    }

    .chatbot-input {
      font-size: 3vh;
    }

  }
</style>