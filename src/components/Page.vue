<template>
  <div class="page">
    <div class="content">
      <Header/>
      <Preview/>
    </div>
    <div class="bottom">
      <Footer/>
    </div>
  </div>


    
</template>
  
<script>

 import Header from './Header.vue';
 import Preview from './Preview.vue';
 import Footer from './Footer.vue';

  
  export default{
    name: 'Page',
    components: {
      Header,
      Preview,
      Footer,
      
  },
  
  }
  
</script>
  
<style lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .content{
    flex: 1 0 auto; 
  }

  .bottom{
    flex: 0 0 auto;
  }

  .container {
  max-width: 1110px;
  margin: 0 auto;
  box-sizing: border-box;
  }

  
  </style>
  