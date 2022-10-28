<script setup lang="ts">
import {ref} from "vue"

 const emitted = defineEmits(['close-form','close-form-out'])

</script>

<template>
<div class="notes-form">   
    <div id="modal" @click="$emit('close-form-out')" >
    <div class="notes-tiles">
     <span class="close" @click="$emit('close-form')">&times;</span>
        <form class="form-notes"  @click.stop="">
              <fieldset id="notes-fields">                    
                  <br><p>Title</p><br>
                  <input type="text" id="title-text"  placeholder="Enter your title"><br><br>
                  <p>Description</p><br>
                  <textarea type="text" id="description-text" placeholder="Enter your description"></textarea><br><br> 
                    <button id="notes-btn"> + </button>         
             </fieldset>
         </form> 
    </div>   
</div>  
</div>
</template>



<style scoped>
.noted-form{
    display: block;
}
#modal { 
  position: fixed;
  z-index: 1; 
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}
.notes-tiles {
    background-color: #DADADA;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: 15px;
    border-style: outset;
    width: 500px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .close {
  color: #072A40;;
  float: right;
  font-size: 40px;
  font-weight: bold;  
}
.close:hover,.close:focus {
  color: rgb(9, 12, 68);
  text-decoration: none;
  cursor: pointer;
}  

.notes-tiles p{
    margin:0px;
    font-family: Amaranth;
    font-weight: 800;
    font-size: xx-large;
    color:#072A40;
    
}

#notes-fields{
    background-color:#DADADA; ;
    border:none;
}

#title-text{
    padding:8px;
    border:none;
    border-bottom :3px solid #122620;
    background-color: #DADADA;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px;
    font-size:medium;
    width:220px;
 }
 #title-text:focus{
    outline:none
 }
 
 #description-text{
    padding:8px;
    border:none;
    border-bottom :3px solid #122620;
    background-color: #DADADA;;
    width:300px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px;
    font-size:medium;
 }
 #description-text:focus{
    outline:none
 }
 #notes-btn{
    font-size:20px;
    font-weight: 600;
    color: #F9F7F0;
    background-color:#072A40;
    border-radius:7px;
    cursor: pointer;
    border-color: white;
}


</style>

