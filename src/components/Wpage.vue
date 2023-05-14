<template>
  <div class="wpage">
    <div class="wpage__container">
      <div
        v-if="this.selectedWish === undefined"
        class="wpage__wrapper_nowish"
      >
      </div>
      <div
        v-if="this.selectedWish !== undefined"
        class="wpage__wrapper"
      >
        <main class="wpage__main">
          <!-- :src="this.selectedWish.img" -->   
          <div class="wpage__img-placeholder">  
            <img
              :src="this.selectedWish.img"
              alt="wishpic"
              class="wpage__img"
            >
          </div>
          <header class="wpage__header">
            <h1
              class="wpage__title"
              v-if="this.wishes.length !== 0"
            >
              {{ this.selectedWish.title }}
            </h1>
          </header>
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
          <div class="wpage__block wpage__block_link">
            <a
              v-if="this.selectedWish.link"
              :href="this.selectedWish.link"
              class="wpage__link"
              target="_blank"
            >
              <img src="./../assets/icons/link.svg" alt="link" class="wpage__link-icon">
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
    height: 100%;
  }
  .wpage__container{
    max-width: 600px;
    background-color: transparent;
    position: relative;
    height: 100%;

    &::before {
    content: "";
    position: absolute;
    background-color: var(--medium);
    top: 0;
    left: -20px;
    width: 600px;
    height: 500px;
    filter: blur(18px);
    z-index: 0;
    border-radius: 40%;
  }

  }

  .wpage__wrapper{
    
    border: none;
    border-radius: 5%;
    padding: 0 2em;
    position: relative;
    height: fit-content;
    transition: all 1s ease-out;
    
  }

  .wpage__wrapper_nowish{
    transition: all 1s ease-out;
  }

  .wpage__header{
    display: flex;
    justify-content: center;
    margin: 0 0 0 0;
  }

  .wpage__title{
    margin: 0;
  }

  .wpage__main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    height: 100%;
    justify-content: center;
  }

  .wpage__img{
    position: relative;
    max-width: 400px;
    border-radius: 5%;
  }

  .wpage__img-placeholder{
    width: 500px;
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .wpage__block{
    // width: 100%;
  }

  .wpage__block_link{
    align-self: center;
  }

  .wpage__link-icon{
    width: 30px;
    height: 30px;
  }

  .wpage__disc{
    display: inline;
  }

</style>
  