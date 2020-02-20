<template>
    <div class="container">
        <button @click="test"> Test </button>
        <button @click="test1"> Test1 </button>
    </div>
</template>
     
<script>


import axios from "axios";
export default{
    data(){
        return{
            Username: '',
            Password: '',
            Admin: '',
            
            
        };
    },
    methods: {
        test() {
        var values = crypto.getRandomValues(new Uint32Array(1));

        for (var i = 0; i < values.length; i++) {
            console.log(values[i].toString(16));    
        }
            console.log(values.toString(16))
        axios
            .post("https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev/",
            {
               
                Username: 'Tyler',
                Password: 'paprika',
                Admin: 'false',
                
                
            })

        },
        test1(){
        
    },
    mounted(){
        
    }
    }
}





</script>

<style scoped>
.quiz1 {
  background-color: blueviolet;
  width: 100%;
  height: 800px;
  background-size: 100%;
}

</style>