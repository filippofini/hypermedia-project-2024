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
  padding: 3.5vw 2vw;
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
  background-color: #B96090;
  color: white;
  font-weight: bold;
  border: 0.1vw solid #B96090;
}

.custom-amount {
  margin-bottom: 7vw;
  margin-top:0.5vw;
  width: calc(3 * 6vw + 4 * 0.2vw); /* width of 3 buttons plus 4 margins */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}

.donate-button {
  padding: 1vw 6vw;
  background-color: white;
  font-weight: bold;
  color: black;
  font-size:1.2vw;
  border: none;
  border-radius: 2.5vw;
  cursor: pointer;
  transition: background-color 0.2s;
}

.donate-button:hover {
  transform: scale(1.1);
}

.donate-button:disabled {
  background-color: #ccc;
  cursor: default;
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
  border: 0.1vw solid #ccc;
  width: 100%;
  padding: 1vw;
  padding-left: 2vw; /* make room for the currency symbol */
  outline: none;
  font-size: 1.2vw;
}
</style>
