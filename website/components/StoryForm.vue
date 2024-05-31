<template>
    <div id="app">
        <div class="title">
            <p>Leave your story</p>
        </div>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <label for="yourInfo">Your Info</label>
          <input type="text" id="yourInfo" v-model="formData.yourInfo">
  
          <label for="yourStory">Your Story</label>
          <textarea id="yourStory" v-model="formData.yourStory" rows="5" required></textarea>
  
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
        }
      }
    },
    methods: {
      submitForm() {
  
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
    align-items: center;
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
    max-width: 400px;
    border-radius: 5px;
    margin-bottom: 30px;
  }
  .form-container label {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
  .form-container input, .form-container textarea {
    width: 100%;
    padding: 8px;
    border-radius: 10px;
    margin-top: 10px;
    background-color: white;
  }
   .form-container textarea {
        resize: none;
    }
  .form-container button {
    margin-top: 20px;
    padding: 10px 100px;
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
  </style>
  