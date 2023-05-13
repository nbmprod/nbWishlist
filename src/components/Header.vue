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
    font-family: 'DM Serif Display', serif;;
    font-size: 70px;
    margin: 0.1em 0 1em 0;
    letter-spacing: 5px;
  }


</style>
  