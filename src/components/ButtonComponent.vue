<template>
    <div>
          <button @click="$emit('buttonClick')"> Button compo</button>  
    </div>
</template>

<script setup lang="ts">
   const emit = defineEmits(['buttonClick'])
</script>

<style scoped>

</style>