<template>
    <div 
        v-for="(wish, index) in wishes"
        :class="['wcard', { 'wcard_selected': isSelectedWish(wish) }]"
        @click="$emit('wishSelected', index)"   
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

        selectedWish:{
          type: Object
        },
  
    },

    emits: ['wishSelected'],


    methods: {
      isSelectedWish(wish) {
        return this.selectedWish && this.selectedWish.id === wish.id;
      },
    },

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
    background-color: gray;
    transform: translateY(-25px);
    
  }

  .wcard__text{

  }

</style>
  