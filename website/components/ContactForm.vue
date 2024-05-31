<template>
    <form @submit.prevent="submit" novalidate>
      <div class="personal-data">
        <div class="form-elem">
          <label for="name"></label>
          <input 
            type="text"
            id="name"
            v-model="name"
            placeholder="Name"
            aria-label="Name input field"
          />
        </div>
        
        <div class="form-elem">
          <label for="surname"></label>
          <input 
            type="text" 
            id="surname" 
            v-model="surname"
            placeholder="Surname"
            aria-label="Surname input field"
          />
        </div>
      </div>
      
      <div class="form-elem">
        <label for="number"></label>
        <input 
          type="text" 
          id="number" 
          v-model="number"
          :class="{ 'is-invalid': numberErrors.length }"
          @blur="validateNumber" 
          placeholder="Number"
          aria-label="Phone Number input field"
        />
        <div v-if="numberErrors.length" class="error-messages">
          <p v-for="error in numberErrors" :key="error">{{ error }}</p>
        </div>
      </div>
      
      <div class="form-elem">
        <label for="email"></label>
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
      
      <div class="form-elem">
        <label for="text"></label>
        <textarea 
          id="text"
          v-model="text"
          rows="5" 
          :class="{ 'is-invalid': textErrors.length }"
          @blur="validateText" 
          placeholder="Insert your message"
          aria-label="Message input field"
        ></textarea>
        <div v-if="textErrors.length" class="error-messages">
          <p v-for="error in textErrors" :key="error">{{ error }}</p>
        </div>
      </div>
  
      <button 
        class="form-button" 
        :disabled="!isFormValid"
        type="submit"
      >Submit</button>
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
      textErrors: [],
      ack: 0
    };
  },
  computed: {
    isFormValid() {
      return (
        !this.numberErrors.length &&
        !this.emailErrors.length &&
        !this.textErrors.length &&
        this.name &&
        this.surname &&
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
    async submit() {
      this.validateNumber();
      this.validateEmail();
      this.validateText();
      
      if (this.isFormValid) {
        let temp = 0;
        try {
          await this.$fetch('/api/contactForm', {
            method: "POST",
            body: {
              email: this.email,
              message: this.text
            }
          });
          temp = 1;
        } catch {
          temp = -1;
        }
        this.ack = temp;
        if (temp === 1) {
          this.resetForm();
        }
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
.personal-data {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.form-elem {
  margin: 9px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.form-elem input,
.form-elem textarea {
  padding: 5px;
  outline: none;
}

.form-elem textarea {
  resize: none;
}

.form-elem input.is-invalid,
.form-elem textarea.is-invalid {
  border-color: red;
}

.error-messages {
  color: red;
  font-size: 14px;
  margin-top: 8px;
}

.form-button {
  margin: 1.5%;
  padding: 10px 20px;
  background-color: #B96090;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.form-button:hover {
  transform: scale(1.05);
}

.form-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  transform: scale(1);
}
</style>