<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {ref,onMounted} from "vue"
import NotesForm from "./components/NotesForm.vue"


//import {Modal} from "../src/Modal.js"

const  showForm=ref(false)
const reveal=ref(false)



</script>

<template >
     <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'/>
 <div class="heading">
     <h2 class="heading-text" >Notes </h2>    
     <button id="add-notes" @click="showForm= true">Add Notes</button>        
     <notes-form v-show="showForm" @close-form="showForm=false" @close-form-out =" showForm=false" />
    
    <hr>
    
</div> 


 
</template> 

<style scoped>
body { 
  font-family: Arial, Helvetica, sans-serif;
 
}

.heading {
    padding: 0px;
    background-color: #072A40;
    color:#F9F7F0;
    font-size: xx-large;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    text-decoration: solid;
    height: 100px;
    width: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    position:absolute;
}

.heading-text {
    color: #F9F7F0;
    margin-top: 25px; 
    left: 25%; 
    position: absolute;
    font-size:50px;
}

#add-notes{  
    font-size:15px;
    width:130px;
    height:40px;
    text-align:center;
    border-radius:10px;
    background-color:#072A40;
    color: #F9F7F0;
    border-color:white;
    cursor: pointer;
    margin-top:150px;

}
</style>
