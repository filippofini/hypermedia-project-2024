<template>
  <div @scroll="showButton()">
    <button @click="toggleChatbot" class="chatbot-button">
      <img src="../assets/img/chatbot.png" alt="Chat Icon" class="chat-icon"/>
    </button>

    <div v-if="isChatbotVisible" class="chatbot-container">
      <div class="chatbot-header">
        <span>Chatbot</span>
        <button @click="toggleChatbot" class="close-button">X</button>
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
  .chatbot-button {
    opacity: 0.5;
    z-index: 1;
    position: fixed;
    text-align: center;
    width: 4vw;
    height: 4vw;
    bottom: 3vw;
    right: 3.5vw;
    background-color: #52417D;
    color: white;
    border: none;
    border-radius: 10vw;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    vertical-align: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 60px;
    min-height: 60px;
  }
  
  .chatbot-button:hover {
    background-color: #281e41;
    opacity: 1.0
  }

  .chat-icon {
    width: 50%;
    height: 50%;
  }

  .ask-text {
    font-size: 1.5vw;
  }

  .chatbot-container {
    z-index: 1;
    position: fixed;
    bottom: 3vw;
    right: 3.5vw;
    width: 40vw;
    height: 45vw;
    background-color: white;
    border: 0.1vw solid #ccc;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
  }

  .chatbot-header {
    font-size: 1.3vw;
    font-weight: bold;
    height: 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #52417D;
    color: white;
    padding: 1vw;
    border-bottom: 0.1vw solid #ccc;
  }

  .close-button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5vw;
    cursor: pointer;
  }
  
  .close-button:hover {
    color: #FFCDDC;
  }

  .chatbot-messages {
    flex: 1;
    padding: 1vw;
    overflow-y: auto;
    background-color: #f9f9f9;
  }

  .message-sender {
    margin-top: 0.3vw;
    display: flex;
    font-weight: bold;
  }

  .bot-message, .user-message {
    padding: 0.6vw;
    width: fit-content;
    display: flex;
    margin-top: 0.5vw;
    margin-bottom: 0.3vw;
    border-radius: 1vw;
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
    background-color: #FFCDDC;
    margin-left: auto;
  }

  .send-button {
    background-color: #52417D;
    color: white;
    border: none;
    border-radius: 1vw;
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
    background-color: #413264;
  }

  .chatbot-input {
    border: 0.1vw solid #ccc;
    padding: 1.5%;
    width: 85%;
    border-radius: 1vw;
    margin-right: 1vw;
  }

  .user-chat {
    height: 8vh;
    display: flex;
    align-items: center;
    padding: 1vw;
    background-color: #f1f1f1;
  }

  .loading-indicator {
    text-align: center;
    padding: 1vw;
    font-size: 1vw;
    color: #999;
  }

  .error-message {
    color: red;
    font-size: 1vw;
    padding: 1vw;
    text-align: center;
  }
</style>