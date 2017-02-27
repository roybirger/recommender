import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import { searchResource } from 'src/util/resources';
import template from './search.html';

export default Vue.extend({
  template,

  data() {
    return {
      user: {},
      message: null,
      results: null
    };
  },

  methods: {
    handleSubmit(){
      this.$validator.validateAll().then((success) => {
        if (success) {
          return this.saveSearch();
        }

        return this;
      });
    },

    showMessage(message = {}, timeout = 2000){
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, timeout);
    },

    validate(){
      console.log(this);
    },

    saveSearch(){
      return searchResource.post('/', this.user)
        .then((response) => {
          //this.results = response.data;
          console.log(response);
          this.results = [
            { 'name': 'Aliens', 'poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BNGYxMTA0M2EtYjg0Yy00NzI5LTg4NjEtZDA2MTcyOWM0YTVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg' }
          ];

          //this.showMessage({
            //type: 'success',
            //text: 'Search created!'
          //});

          // We need to reset the fields after successfull request
          this.fields.reset();
        })
        .catch((errorResponse) => {
          // Handle error...
          this.showMessage({
            type: 'danger',
            text: errorResponse
          });
          console.log('API responded with:', errorResponse);
        });
    }
  }
});
