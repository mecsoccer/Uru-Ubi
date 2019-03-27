const updateInputApp = new Vue({
  el: '#update-input-app',
  data: {
    userInput: {},
    id: sessionStorage.getItem('id'),
    input: {},
    loader: false,
    error: false,
    errorData: {},
  },
  created() {
    fetch(`http://localhost:8000/api/v1/inputs/${this.id}`, {
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    })
      .then(data => data.json())
      .then((json) => {
        this.input = json;
      })
      .catch();
  },
  methods: {
    submit() {
      this.loader = true;
      this.clearError();
      this.fadeBackground(0.5);
      const {
        name, batch, price, unitquantity, qtyused,
      } = this.input;
      fetch(`http://localhost:8000/api/v1/inputs/${this.id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({
          name, batch, price, unitQuantity: unitquantity, qtyUsed: qtyused,
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