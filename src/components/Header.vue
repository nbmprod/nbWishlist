<template>
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
            <h1 class="header__text">Wishes...</h1>
        </div>
      </div>
    </header>
</template>
  
<script>
 
  
  export default{
    name: 'Header',

  }
  
</script>
  
<style scoped lang="scss">
  .header{
    margin: 0 0 1em 0;
  }
  .header__wrapper{
    display: flex;
    justify-content: flex-start;
  }

  .header__text{
    color: var(--hard);
    // font-family: 'Merriweather', serif;
    font-family: 'Cabin', sans-serif;
    font-size: 65px;
    margin: 0.1em 0 1em 0;
    letter-spacing: 0;
  }


</style>
  