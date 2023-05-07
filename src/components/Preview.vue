<template>
  <main class="preview">
    <div class="container">
      <form
        class="addWish"
        @submit.prevent="addWish"
      >
        <input
          v-model="this.newWish"
          type="text"
          class="addWish__title"
        />
        <button
          type="submit"
          class="addWish__submit"
          :disabled="!this.newWish"  
        >
          Add Wish
        </button>
      </form>
      <div
        class="preview_wrapper">
        <Wcard
        :wishes="wishes"
        @wish-selected="handleWishSelected"         
        />
      </div>
      <div class="preview__delete">
        <button
          class="preview__delete-btn"
          @click="deleteSelected"
        >
          Delete selected
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import Wcard from "./Wcard.vue";

export default {
  name: "Preview",

  components: {
    Wcard,
  },

  methods: {
    addWish() {
      const newWish = {
        id: 5,
        title: this.newWish,
        selected: false,
      }
      this.wishes.push(newWish)
    },

    handleWishSelected(index, selected) {
      const wish = this.wishes[index]
      wish.selected = selected;
      
    },

    deleteSelected(){
      for (let i = this.wishes.length - 1; i >= 0; i--){
        if (this.wishes[i].selected === true){
          this.wishes.splice(i, 1)
        }
      }
      
    },
  },

  data() {
    return {
      newWish: '',
      wishes: [
        {
          id: 1,
          title: 'Lamp',
          selected: false,
        },
        
      ]
    };
  },

  

};
</script>

<style scoped lang="scss">
.preview_wrapper {
  display: flex;
  gap: 2em;
  justify-content: center;
  flex-wrap: wrap;
}


.addWish {
  margin: 0 0 3em 0;
  display: flex;
  justify-content: center;
  gap: 1em;
}

.preview__delete{
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
</style>
