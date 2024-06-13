<template>
    <div id="app">
        <div class="title-page">
            <p>Leave your story</p>
        </div>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <label for="yourInfo" class="title-page-2">Your Info</label>
          <input
            type="text"
            class="your-info"
            v-model="yourInfo"
            :class="{ 'is-invalid': infoErrors.length }"
            @blur="validateInfo"
          >
          <div v-if="infoErrors.length" class="error-messages">
            <p v-for="error in infoErrors" :key="error">{{ error }}</p>
          </div>
  
          <label for="yourStory" class="title-page-2">Your Story</label>
          <textarea
            class="your-story"
            v-model="yourStory"
            rows="5"
            :class="{ 'is-invalid': textErrors.length }"
            @blur="validateText"
          >
          </textarea>
          <div v-if="textErrors.length" class="error-messages">
            <p v-for="error in textErrors" :key="error">{{ error }}</p>
          </div>
  
          <button
            type="submit"
            :disabled="!isFormValid"
            >Send</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        yourInfo: '',
        yourStory: '',
        infoErrors: [],
        textErrors: []
      }
    },
    computed: {
      isFormValid() {
        return (
          !this.infoErrors.length &&
          !this.textErrors.length &&
          this.yourInfo &&
          this.yourStory
        );
      }
    },
    methods: {
      validateInfo() {
        this.infoErrors = [];
        if ((/^\s*$/.test(this.yourInfo)) || (!this.yourInfo)) this.infoErrors.push('Insert your info');
      },
      validateText() {
        this.textErrors = [];
        if ((/^\s*$/.test(this.yourStory)) || (!this.yourStory)) this.textErrors.push('The text message can\'t be empty');
      },

      submitForm() {

        this.validateInfo();
        this.validateText();
  
        if (this.isFormValid) {
          this.resetForm();
        }
      },
          
      resetForm() {
        this.yourInfo = '';
        this.yourStory = '';
      }
    }
  }
  </script>
  
  <style scoped>
  #app{
    background-color: #FFCDDC;
    margin-top: 4vw;
    margin-bottom: 4vw;
    display: flex;
    flex-direction: column;
  }
  
  .form-container { 
    display: flex;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 3.0vw;
  }
  .form-container label {
    display: block;
    margin-top: 1.0vw;
    text-align: center;
  }
  .form-container input, .form-container textarea {
    border: none;
    padding: 1.0vw;
    width: 50vw;
    border-radius: 10px;
    margin-top: 1.0vw;
    background-color: white;
  }
   .form-container textarea {
        resize: none;
    }
  .form-container button {
    margin-top: 2.0vw;
    padding: 1vw 5vw;
    border-radius: 1vw;
    background-color: #52417D;
    color: white;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .form-container button:hover {
    background-color: #a14976;
    transform: scale(1.05); 
  }

  .form-container button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: scale(1);
  }
  
  .error-messages {
    font-family: Jost;
    color: red;
    font-size: 1.3vw;
  }

  </style>
  