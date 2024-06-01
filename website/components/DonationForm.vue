<template>
    <div class="app">
      <form @submit.prevent="handleSubmit" class="donation-form">
        <div class="predefined-amounts1">
        <button
            v-for="amount in predefinedAmounts1"
            :key="amount"
            type="button"
            @click="selectAmount(amount)"
            :class="{'selected': selectedAmount === amount, 'predefined-button': true}"
            :aria-pressed="selectedAmount === amount"
        >
            ${{ amount  }}
        </button>
        </div>
        <div class="predefined-amounts2">
        <button
            v-for="amount in predefinedAmounts2"
            :key="amount"
            type="button"
            @click="selectAmount(amount)"
            :class="{'selected': selectedAmount === amount , 'predefined-button': true}"
            :aria-pressed="selectedAmount === amount"
          >
            ${{ amount }}
        </button>
        </div>
    
        <div class="custom-amount">
          <label for="custom-amount"></label>
          <div class="input-container">
            <span class="currency-symbol">$</span>
            <input
              type="number"
              id="custom-amount"
              min="1"
              v-model.number="customAmount"
              @input="clearSelectedAmount"
              aria-label="Custom amount input"
            />
          </div>
          </div>
        <button 
          type="submit" 
          class="donate-button"
          :disabled="!isFormValid"
        >Donate</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        predefinedAmounts1: [10, 25, 50],
        predefinedAmounts2: [100, 200, 500],
        selectedAmount: null,
        customAmount: null,
        submitted: false,
        finalAmount: 0,
      };
    },
    computed: {
    isFormValid() {
      return (
        (this.selectedAmount && !this.customAmount) ||
        (!this.selectedAmount && this.customAmount)
      );
    }
  },
    methods: {
      selectAmount(amount) {
        this.selectedAmount = amount;
        this.customAmount = null;
      },
      clearSelectedAmount() {
        this.selectedAmount = null;
      },
      handleSubmit() {
        if (this.isFormValid) {
          this.resetForm();
        }
      },
      resetForm() {
      this.selectedAmount = null;
      this.customAmount = null;
    }
    },
    filters: {
      currency(value) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(value);
      },
    },
  };
  </script>
  
  <style scoped>
  .app {
    max-width: 600px;
    padding: 50px 20px;
    font-family: Arial, sans-serif;
    background-color: #52417D;
  }
  
  .donation-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .predefined-amounts1, .predefined-amounts2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .predefined-button {
  margin: 3px;
  padding: 10px 20px;
  width: 70px;
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}
  
  .predefined-amounts1 button {
    margin: 3px;
    padding: 10px 20px;
    width: 70px;
    text-align: center;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .predefined-amounts2 button {
    margin: 3px;
    margin-bottom: 10px;
    padding: 10px 20px;
    width: 70px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .predefined-amounts1 p {
    text-align: center;
  }

  .predefined-amounts1 button.selected,
  .predefined-amounts1 button:hover {
    background-color: #B96090;
    color: white;
    border: 1px solid  #B96090;
  }
  
  .predefined-amounts2 button.selected,
  .predefined-amounts2 button:hover {
    background-color: #B96090;
    color: white;
    border: 1px solid  #B96090;
  }

  .custom-amount {
    margin-bottom: 50px;
    width: 224px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  }
  
  .custom-amount input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .donate-button {
    padding: 10px 60px;
    background-color: white;
    font-weight: bold;
    color: black;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .donate-button:hover {
    transform: scale(1.1);
  }
  .donate-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: scale(1);
  }

  .input-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  background-color: white;
}

.currency-symbol {
  margin-right: 5px;
  font-size: 16px;
}

.input-container input {
  border: none;
  width: 100%;
  padding: 10px;
  outline: none;
}

  </style>
  