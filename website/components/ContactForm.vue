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
      >Submit</button>
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
.personal-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.form-elem-1 {
  position: relative;
  margin: 10px 10px 0px 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
 
}

.form-elem-2 {
  position: relative;
  margin: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.form-elem-1 input,
.form-elem-2 input, 
.form-elem-2 textarea{
  padding: 5px;
  border-radius: 5px;
  outline: none;
  font-size: 15px;
  transition: border-color 0.3s, padding-top 0.3s;
}

.form-elem-1 input:focus,
.form-elem-2 input:focus,
.form-elem-2 textarea:focus {
  border-color: #b96090;
  padding-top: 20px;
}

.form-elem-1 input:focus::placeholder,
.form-elem-2 input:focus::placeholder,
.form-elem-2 textarea:focus::placeholder {
  font-size: 12px;
  transform: translateY(-20px); /* Move placeholder up */
  opacity: 0.7;
}

.form-elem-1 input::placeholder,
.form-elem-2 input::placeholder,
.form-elem-2 textarea::placeholder {
  transition: font-size 0.3s, transform 0.3s, opacity 0.3s;
}

.form-elem-2 textarea {
  resize: none;
}

.form-elem-2 input.is-invalid,
.form-elem-2 textarea.is-invalid {
  border-color: red;
}

.error-messages {
  color: red;
  font-size: 14px;
  margin-top: 8px;
  padding: 5px;
}


.form-button {
  display: inline-block;
  margin: 10px;
  padding: 10px 40px;
  background-color: #b96090;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
}

.form-button:hover {
  background-color: #a14976;
  transform: scale(1.05);
}

.form-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  transform: scale(1);
}
</style>
