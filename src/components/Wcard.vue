<template>
    <div 
        class="wcard"
        :class="{ 'wcard_selected': wish.selected }"
        v-for="(wish, index) in wishes"
        @click="$emit('wishSelected', index, !wish.selected)"   
    >
        <p class="wcard__text">
            {{ wish.title }}
        </p>
    </div>
</template>
  
<script>
  
  export default{
    name: 'Wcard',

    props:{
        wishes:{
            type: Array,
        },
        selectedWishes:{
            type: Array,
        },
    },

    emits: ['wishSelected'],


  }
  
</script>
  
<style scoped lang="scss">
 
  .wcard{
    background-color: none;
    height: 150px;
    width: 150px;
    border: 2px solid black;
    border-radius: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: linear 200ms transform;

    &:hover{
        transform: translateY(-25px);
    }

  }

  .wcard_selected{
    background-color: red;
    transform: translateY(-25px);
    
  }

  .wcard__text{

  }

</style>
  