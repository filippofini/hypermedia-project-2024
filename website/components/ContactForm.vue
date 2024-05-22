<template>
        <v-form v-model="isFormValid" @submit.prevent>
            <div class="personal-data">
                <v-text-field
                    class="form-elem"
                    v-model="name"
                    label="Name"
                    autocomplete="Name"
                    placeholder="Insert your Name"
                    aria-label="Name input field"
                ></v-text-field>
            
                <v-text-field
                    class="form-elem"
                    v-model="surname"
                    label="Surname"
                    autocomplete="Surname"
                    placeholder="Insert your Surname"
                    aria-label="Surname input field"
                ></v-text-field>
            </div>
    
            <v-text-field
                class="form-elem"
                v-model="number"
                :rules="number_rules"
                label="Phone Number"
                autocomplete="Phone Number"
                placeholder="Insert your Phone Number"
                aria-label="Phone Number input field"
            ></v-text-field>
    
            <v-text-field
                class="form-elem"
                v-model="email"
                :rules="email_rules"
                label="E-mail"
                autocomplete="E-mail"
                placeholder="Insert your E-mail"
                aria-label="E-mail input field"
            ></v-text-field>
    
            <v-textarea
                class="form-text"
                v-model="text"
                :rules="text_rules"
                label="Message"
                autocomplete="Message"
                placeholder="Insert your Message"
                aria-label="Message input field"
            ></v-textarea>

            <v-btn class="form-button"
            :disabled="!isFormValid"
            type="submit"
            @click="submit()"
            >Submit</v-btn>       
    
        </v-form>
 </template>
 
 
 
 <script>
 export default {
     data: () => ({
         name: '',
         surname: '',
         number: '',
         email: '',
         text: '',
         number_rules: [
             value => {
                 if (!value)
                     return 'You must enter a Phone Number';
 
                 if (/^[0-9]{10}$/.test(value))
                     return true;
                 
                 return 'Insert a valid Phone Number'
             },
         ],
         email_rules: [
             value => {
                 if (!value)
                     return 'You must enter an E-mail';
 
                 if (/^[0-9a-z.-]+@[0-9a-z.-]+\.[a-z]+$/i.test(value))
                     return true;
                 
                 return 'Insert a valid e-mail'
             },
         ],
         text_rules: [
             value => {
                 if (!value)       
                     return 'The text message can\'t be empty'
 
                 if (/^\s*$/.test(value))
                     return 'The text message can\'t contain only spaces'
 
                 return true
             }
         ],
         dialog: false,
         isFormValid: false,
         ack: 0
     }),
 
     methods: {
         async submit () {
             let temp = 0;
             try {
                 await $fetch('/api/contactForm', {
                     method: "POST",
                     body: {
                         email: this.email,
                         message: this.text
                     }
                 })
                 
                 temp = 1;
             }
             catch{
                 temp = -1;
             }
             const self = this;
             setTimeout(function() {
                 self.$nextTick(function() {
                     self.ack = temp
                     if(temp==1) {
                         self.email = null;
                         self.text = null;
                     }
                 })
             }, 2000);
         }
     }
 }
 </script>

<style scoped>

    .personal-data {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .form-elem {
        margin: 1.5%;
        background-color: white;
        border-radius: 10px;
        height: 50px;
    }

    .form-button {
        margin: 1.5%;
        background-color: #52417D;
        color: white;
        border-radius: 10px;
    }

    .form-text {
        margin: 1.5%;
        background-color: white;
        border-radius: 10px;
        height: 100px;
    }

    .v-messages__message {
  color: blue;
  font-size: 14px;
  font-weight: bold;
}
</style>