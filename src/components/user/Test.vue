<template >
  <div class="">
    <div class= "">
        
        <div>
        </div>

        <div>
            ------------
        </div>


        <div>
            -------------
        </div>

        <div>
            {{this.username0}}
            
        </div>

        <div>
            {{this.username1}}
        </div>
        <div>
            {{this.username2}}
        </div>

        <div>
            {{this.username3}}
        </div>

        <div>
            {{this.username4}}
        </div>

        <button type= "submit" @click="GetData()"> Get Data </button>
        <button type= "submit" @click="Reset()"> Reset </button>
    </div>
 </div>
  
</template>

<script >
import axios from 'axios'

export default{
  data(){
    return{
        questions: '',
        Results: '',
        UserName: '',
        Quiz1: '',
        TotalData: '',
        i: -1,
        username0: localStorage.getItem('UserName0'),
        username1: localStorage.getItem('UserName1'),
        username2: localStorage.getItem('UserName2'),
        username3: localStorage.getItem('UserName3'),
        username4: localStorage.getItem('UserName4'),

      
    }
  },
  methods:{
    GetData: function(){
        while(this.i <= this.TotalData){
            localStorage.setItem('UserName' + this.i, this.Results.Username);
            this.i++;
            this.Results = this.questions[this.i];
        }
    },
    Reset: function(){
            localStorage.setItem('UserName0', '');
            localStorage.setItem('UserName1', '');
            localStorage.setItem('UserName2', '');
            localStorage.setItem('UserName3', '');

        }
    },
    mounted(){
      axios
        .get("https://uatvc66pz2.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.questions = response.data.body;//sets this.questions as the data from the link
          
          this.TotalData = this.questions.length
      })
    }
}     
</script>

<style>
 
.quiz {
  position: fixed;
  background-image: url('~@/assets/images/treasurehunt.gif');
  width: 100%;
  height: 100%;
  background-size: 100%;
}

</style>