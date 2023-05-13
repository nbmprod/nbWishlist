<template>
  <div
    class="wcard__container"
    :class="['wcard', { 'wcard_selected': isSelectedWish(wish) }]"
    v-for="(wish, index) in wishes"
    @click="$emit('wishSelected', index)"
  >
    <div 
        
        
        
      >
        <p class="wcard__text">
            {{ wish.title }}
        </p>
    </div>
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
    // border: 2px solid black;
    // border-radius: 45%;
    // height: 150px;
    // width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: linear 200ms transform;
    height: 100%;
    // transform: rotate(10deg);

    // &:hover{
    //     transform: translateY(-25px);
    // }

  }

  .wcard__container{
    position: relative;
    // border: 2px solid black;
    // border-radius: 45%;
    height: 150px;
    width: 150px;
    transition: linear 2000ms transform;
    cursor: pointer;

    &:hover{
        transform: rotate(50deg);
    }

    &:before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border: 2px solid black;
      border-radius: 45%;      
      transform: rotate(5deg);
      z-index: 1;
}


  }

  .wcard_selected{
    background-color: gray;
    border-radius: 45%;      
  }

  .wcard__text{
    font-weight: 600;

  }

</style>