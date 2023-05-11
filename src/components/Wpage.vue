<template>
  <div class="wpage">
    <div class="wpage__container">
      <div
        v-if="this.selectedWish === undefined"
        class="wpage__wrapper_nowish"
      >
        nothing there
      </div>
      <div
        v-if="this.selectedWish !== undefined"
        class="wpage__wrapper"
      >
        <header class="wpage__header">
          <h1
            class="wpage__title"
            v-if="this.wishes.length !== 0"
          >
            {{ this.selectedWish.title }}
          </h1>
        </header>
        <main class="wpage__main">
          <img :src="this.selectedWish.img" alt="flamingo" class="wpage__img">
          <div class="wpage__block">
            <p
              class="wpage__disc"
              v-if="this.selectedWish.disc"
            >{{ this.selectedWish.disc }}</p>
            <p
              class="wpage__disc"
              v-if="!this.selectedWish.disc"
            >This is something I really need!</p>
          </div>
          <div class="wpage block">
            <a
              v-if="this.selectedWish.link"
              :href="this.selectedWish.link"
              class="wpage__link"
              target="_blank"
            >
              You can buy it here
            </a>
          </div>
        </main>
      </div>
    </div>
  </div>
    
</template>
  
<script>
  
  export default{
    name: 'Wpage',

    props:{
        wishes:{
            type: Array,
        },
        
        selectedWish:{
          type: Object,
          default: undefined,
        },
  
    },


  }
  
</script>
  
<style scoped lang="scss">
  .wpage{
    margin: none;
  }
  .wpage__container{
    max-width: 500px;
  }
  .wpage__wrapper{
    border: 2px solid black;
    border-radius: 5%;
    padding: 2em;
  }

  .wpage__header{
    display: flex;
    justify-content: center;
  }

  .wpage__main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }

  .wpage__img{
    max-width: 300px;
    border-radius: 45%;
    transform: rotate(5deg);
  }

  p{
    display: inline;
  }

</style>
  