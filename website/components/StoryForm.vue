<template>
    <div id="app">
        <div class="title">
            <p>Leave your story</p>
        </div>
      <div class="form-container">
        <form @submit.prevent="submitForm" novalidate>
          <label for="yourInfo">Your Info</label>
          <input
            type="text"
            class="your-info"
            v-model="formData.yourInfo"
            :class="{ 'is-invalid': infoErrors.length }"
            @blur="validateInfo"
          >
          <div v-if="infoErrors.length" class="error-messages">
            <p v-for="error in infoErrors" :key="error">{{ error }}</p>
          </div>
  
          <label for="yourStory">Your Story</label>
          <textarea
            class="your-story"
            v-model="formData.yourStory"
            rows="5"
            :class="{ 'is-invalid': textErrors.length }"
            @blur="validateText"
          >
          </textarea>
          <div v-if="textErrors.length" class="error-messages">
            <p v-for="error in textErrors" :key="error">{{ error }}</p>
          </div>
  
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          yourInfo: '',
          yourStory: ''
        },
        infoErrors: [],
        textErrors: []
      }
    },
    methods: {
      validateInfo() {
      this.infoErrors = [];
      if ((/^\s*$/.test(this.formData.yourInfo)) || (!this.formData.yourInfo)) this.infoErrors.push('Insert your info');
    },
      validateText() {
      this.textErrors = [];
      if ((/^\s*$/.test(this.formData.yourStory)) || (!this.formData.yourStory)) this.textErrors.push('The text message can\'t be empty');
    },

    async submitForm() {

      this.validateInfo();
      this.validateText();

        // Resetta il form
        this.formData.yourInfo = '';
        this.formData.yourStory = '';
      }
    }
  }
  </script>
  
  <style scoped>
  #app{
    background-color: #FFCDDC;
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-family: Jost;
    font-size: 30px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    }
  .form-container { 
    display: flex;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 30px;
  }
  .form-container label {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
  .form-container input, .form-container textarea {
    padding: 10px;
    width: 500px;
    border-radius: 10px;
    margin-top: 10px;
    background-color: white;
  }
   .form-container textarea {
        resize: none;
    }
  .form-container button {
    margin-top: 20px;
    padding: 10px 50px;
    border-radius: 1vw;
    background-color: #52417D;
    color: white;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .form-container button:hover {
    transform: scale(1.05); 
  }
  
.error-messages {
  color: red;
  font-size: 14px;
  padding: 10px;
}

  </style>
  