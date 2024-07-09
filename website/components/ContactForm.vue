<template>
  <form @submit.prevent="submit" novalidate>
    <div class="personal-data">
      <div class="form-elem-1">
        <input 
          type="text"
          id="name"
          v-model="name"
          placeholder="Name"
          aria-label="Name input field"
        />
      </div>
      <div class="form-elem-1">
        <input 
          type="text" 
          id="surname" 
          v-model="surname"
          placeholder="Surname"
          aria-label="Surname input field"
        />
      </div>
    </div>
    
    <div class="form-elem-2">
      <input 
        type="text" 
        id="number" 
        v-model="number"
        :class="{ 'is-invalid': numberErrors.length }"
        @blur="validateNumber" 
        placeholder="Phone Number"
        aria-label="Phone Number input field"
      />
      <div v-if="numberErrors.length" class="error-messages">
        <p v-for="error in numberErrors" :key="error">{{ error }}</p>
      </div>
    </div>
    
    <div class="form-elem-2">
      <input 
        type="email" 
        id="email"
        v-model="email"  
        :class="{ 'is-invalid': emailErrors.length }"
        @blur="validateEmail" 
        placeholder="Email"
        aria-label="E-mail input field"
      />
      <div v-if="emailErrors.length" class="error-messages">
        <p v-for="error in emailErrors" :key="error">{{ error }}</p>
      </div>
    </div>
    
    <div class="form-elem-2">
      <textarea 
        id="text"
        v-model="text"
        rows="5" 
        :class="{ 'is-invalid': textErrors.length }"
        @blur="validateText" 
        placeholder="Text Message"
        aria-label="Message input field"
      ></textarea>
      <div v-if="textErrors.length" class="error-messages">
        <p v-for="error in textErrors" :key="error">{{ error }}</p>
      </div>
    </div>

    <div class="button-container">
      <button 
        class="form-button" 
        :disabled="!isFormValid"
        type="submit"
      >SUBMIT</button>
    </div>    
  </form>
</template>


<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      number: '',
      email: '',
      text: '',
      numberErrors: [],
      emailErrors: [],
      textErrors: []
    };
  },
  computed: {
    isFormValid() {
      return (
        !this.numberErrors.length &&
        !this.emailErrors.length &&
        !this.textErrors.length &&
        this.number &&
        this.email &&
        this.text
      );
    }
  },
  methods: {
    validateNumber() {
      this.numberErrors = [];
      if ((!/^[0-9]{10}$/.test(this.number)) || (!this.number))  this.numberErrors.push('Insert a valid Phone Number');
    },
    validateEmail() {
      this.emailErrors = [];
      if ((!/^[0-9a-z.-]+@[0-9a-z.-]+\.[a-z]+$/i.test(this.email)) || (!this.email)) this.emailErrors.push('Insert a valid E-mail');
    },
    validateText() {
      this.textErrors = [];
      if ((/^\s*$/.test(this.text)) || (!this.text)) this.textErrors.push('The text message can\'t be empty');
    },

    submit() {
      this.validateNumber();
      this.validateEmail();
      this.validateText();

      if (this.isFormValid) {
        this.resetForm();
      }
    },
    
    resetForm() {
      this.name = '';
      this.surname = '';
      this.number = '';
      this.email = '';
      this.text = '';
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

.personal-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.button-container {
  font-family: Jost;
  display: flex;
  justify-content: center;
  margin-top: 1.5vw;
}

.form-elem-1 {
  font-family: Jost;
  position: relative;
  margin: 1vw 1vw 0vw 1vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0.5vw;
  flex: 1;
}

.form-elem-2 {
  font-family: Jost;
  position: relative;
  margin: 0vw 1vw 0vw 1vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0.5vw;
  flex: 1;
}

.form-elem-1 input,
.form-elem-2 input, 
.form-elem-2 textarea{
  font-family: Jost;
  padding: 0.5vw;
  border-radius: 5px;
  border-color: white;
  outline: none;
  font-size: 1vw;
  transition: border-color 0.3s, padding-top 0.3s;
}

.form-elem-1 input:focus,
.form-elem-2 input:focus,
.form-elem-2 textarea:focus {
  font-family: Jost;
  padding-top: 1.4vw;
}

.form-elem-1 input:focus::placeholder,
.form-elem-2 input:focus::placeholder,
.form-elem-2 textarea:focus::placeholder {
  font-family: Jost;
  font-size: 0.8vw;
  transform: translateY(-1.4vw);
  opacity: 0.7;
}

.form-elem-1 input::placeholder,
.form-elem-2 input::placeholder,
.form-elem-2 textarea::placeholder {
  font-family: Jost;
  transition: font-size 0.3s, transform 0.3s, opacity 0.3s;
}

.form-elem-2 textarea {
  font-family: Jost;
  resize: none;
}


.error-messages {
  font-family: Jost;
  color: red;
  font-size: 0.8vw;
  padding-left: 0.5vw;
}


.form-button {
  font-family: Jost;
  display: inline-block;
  margin: 1vw;
  padding: 1vw 3vw;
  background-color: #FFFFFF;
  color: #871B3B;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.3vw;
  transition: background-color 0.3s, transform 0.3s;
}

.form-button:hover {
  font-family: Jost;
  background-color: #871B3B;
  color: #ffffff;
  transform: scale(1.05);
}

.form-button:disabled {
  font-family: Jost;
  background-color: #ccc;
  color: #ffffff;
  cursor: not-allowed;
  transform: scale(1);
}

@media screen and (max-width: 850px) {
  .form-button {
      margin-top: 2vh;
      margin-bottom: 2vh;
      padding: 1.3vh 6vh;
      font-size: 1.9vh;
  }

  .form-elem-1,
  .form-elem-2 {
    margin: 2vh 2vh 0vh 2vh;
    
  }
  .form-elem-1 input,
  .form-elem-2 input,
  .form-elem-2 textarea {
    font-size: 1.7vh;
    }

  .form-elem-1 input:focus::placeholder,
  .form-elem-2 input:focus::placeholder,
  .form-elem-2 textarea:focus::placeholder {
    font-size: 1.2vh;
  }

  .form-elem-1 input:focus::placeholder,
  .form-elem-2 input:focus::placeholder {
    transform: translateY(-1.5vh);
  }

  .error-messages {
    font-size: 1.4vh;
  }
}
</style>
