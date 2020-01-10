<template>
  <div>

    <b-form-group >
      <b-form-radio-group
        id="btn-radios-2"
        v-model="selected"
        :options="options"
        buttons
        button-variant="outline-primary"
        size="lg"
        name="radio-btn-outline"
      ></b-form-radio-group>
    </b-form-group>

    
    
  </div>
</template>

<script>
import axios from "axios";


export default {
    data() {
      return {

        selected: 'Answer',
        options: [
          { text: 'Answer 1', value: 'Answer 1' },
          { text: 'Answer  2', value: 'Answer 2' },
          { text: 'Answer  3', value: 'Answer 3', },
          { text: 'Answer  4', value: 'Answer 4' }
        ],
      }
    },
    mounted(){
      axios
      .get("https://12gzle39q6.execute-api.eu-west-2.amazonaws.com/dev",{
      })
      .then(response=>{
        console.log(response.data)
        console.log(response.data.body)
      })
    }
};


</script>




<style>


</style>