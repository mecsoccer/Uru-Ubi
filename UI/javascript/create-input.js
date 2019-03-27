const createInputApp = new Vue({
  el: '#create-input-app',
  data: {
    userInput: {},
    input: {},
    loader: false,
    error: false,
    errorData: {},
  },
  methods: {
    submit() {
      this.loader = true;
      this.clearError();
      this.fadeBackground(0.5);
      const {
        name, batch, price, unitQuantity, qtyUsed,
      } = this.userInput;
      fetch('http://localhost:8000/api/v1/inputs', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({
          name, batch, price, unitQuantity, qtyUsed,
        }),
      })
        .then(data => data.json())
        .then((json) => {
          if (json.error) {
            this.error = true;
            this.errorData = json.error;
            this.fadeBackground(1);
            this.loader = false;
          }
        })
        .then(() => {
          if (!this.error) {
            document.location.assign('./production-inputs.html');
          }
        })
        .catch();
    },
    fadeBackground(opacity) {
      document.querySelector('body').style.opacity = opacity;
    },
    clearError() {
      this.error = false;
      this.errorData = {};
    },
  },
});
