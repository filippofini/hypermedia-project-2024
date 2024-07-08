<template>
    <div id="app">
        <div class="title-page">
            <p>Leave your story</p>
        </div>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <label for="yourInfo" class="title-page-2">Your Info</label>
          <input
            id="yourInfo"
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
            id="yourStory"
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
            >SEND</button>
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
    background-color: #A78BCA;
    margin-top: 4vw;
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
    border-radius: 10px;
    background-color: #FFFFFF;
    color: #871B3B;
    border: none;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  .form-container button:hover {
    background-color: #871B3B;
    color: #ffffff;
    transform: scale(1.05); 
  }

  .form-container button:disabled {
    background-color: #ccc;
    color:#ffffff;
    cursor: not-allowed;
    transform: scale(1);
  }
  
  .error-messages {
    font-family: Jost;
    color: #871B3B;
    font-size: 1.3vw;
  }

  @media screen and (max-width: 850px) {
    .form-container input, .form-container textarea {
      width: 80vw;
      font-size: 1.7vh;
    }

    .form-container label {
      font-size: 2.3vh;
    }

    .form-container button {
      margin-top: 2vh;
      margin-bottom: 2vh;
      padding: 1.3vh 6vh;
      font-size: 1.9vh;
    }

    .error-messages {
      font-size: 1.4vh;
    }


    
  }
  

  </style>
  