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
          ${{ amount }}
        </button>
      </div>
      <div class="predefined-amounts2">
        <button
          v-for="amount in predefinedAmounts2"
          :key="amount"
          type="button"
          @click="selectAmount(amount)"
          :class="{'selected': selectedAmount === amount, 'predefined-button': true}"
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
      >DONATE</button>
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
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');
.app {
  height: 36vw;
  padding: 3.5vw 2vw;
  font-family: Jost;
  background-color: #A78BCA;
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

.predefined-amounts1 button,
.predefined-amounts2 button {
  margin: 0.2vw;
  padding: 1vw;
  width: 6vw;
  text-align: center;
  font-size: 1.2vw;
  background-color: #f0f0f0;
  border: 0.1vw solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
}

.predefined-amounts1 button.selected,
.predefined-amounts1 button:hover,
.predefined-amounts2 button.selected,
.predefined-amounts2 button:hover {
  background-color: #871B3B;
  color: #ffffff;
  font-weight: bold;
  border: 0.1vw solid #871B3B;
}

.custom-amount {
  margin-bottom: 7vw;
  margin-top:0.5vw;
  width: calc(3 * 6vw + 4 * 0.2vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}

.donate-button {
  padding: 2vw 7vw;
  background-color: #FFFFFF;
  color: #871B3B;
  font-weight: bold;
  font-size:1.2vw;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 12vw;
}

.donate-button:hover {
  transform: scale(1.05);
  background-color: #871B3B;
  color: #ffffff;
}

.donate-button:disabled {
  background-color: #ccc;
  color: #ffffff;
  cursor: not-allowed;
  transform: scale(1);
}

.input-container {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}

.currency-symbol {
  position: absolute;
  left: 1vw;
  font-size: 1.2vw;
}

.input-container input {
  border: none;
  width: 100%;
  padding: 1vw;
  padding-left: 2vw;
  outline: none;
  font-size: 1.2vw;
}

@media screen and (max-width: 850px) {
  .app {
    width: 100%;
    height: auto;
  }

  .predefined-amounts1, .predefined-amounts2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%
  }

  .predefined-amounts1 button,
  .predefined-amounts2 button {
    flex: 0 1 30%;
    width: 45vw; 
    padding: 4vw; 
    font-size: 2.3vh;
    margin: 2vw 0; 
  }
  .custom-amount {
    margin-top: 2vw;
    width: 60vw;
    height: auto;
    padding: 4vw;
  }

  .donate-button {
    padding: 3vh 10vh; 
    font-size: 2.3vh; 
    width: 45vw; 
    padding: 4vw; 
  }

  .input-container input {
    font-size: 2.3vh;
    padding: 0;
    padding-left: 5vw;
  }

  .currency-symbol {
    font-size: 2.3vh; 
  }
}
</style>
