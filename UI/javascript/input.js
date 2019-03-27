const modalApp = new Vue({
  el: '#modal-app',
  data: {
    input: {},
    seen: false,
  },
  methods: {
    addListener() {
      this.seen = false;
    },
  },
});

const app2 = new Vue({
  el: '#app-2',
  data: {
    inputs: [],
    index: 0,
  },
  methods: {
    addListener(event) {
      modalApp.seen = true;
      this.index = event.target.id;
      sessionStorage.setItem('id', this.inputs[app2.index].id);
      modalApp.input = this.inputs[app2.index];
    },
  },
  created() {
    fetch('http://localhost:8000/api/v1/inputs', {
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    })
      .then(data => data.json())
      .then((json) => {
        this.inputs = json;
      })
      .catch();
  },
});
