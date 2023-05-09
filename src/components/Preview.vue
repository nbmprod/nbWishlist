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
import { collection, getDocs, doc, setDoc, addDoc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from './../firebase/index.js';

export default {


  name: "Preview",

  components: {
    Wcard,
  },

  methods: {
    async addWish() {

      const docRef = await addDoc(collection(db, "wishes"), {
      title: this.newWish,
      selected: false,
      });
      this.newWish = ""; // Clear the input field

    },

    handleWishSelected(index, selected) {
      const wish = this.wishes[index]
      wish.selected = selected;
      
    },

    async deleteSelected(){

      const docDel = await deleteDoc(doc(db, "wishes", this.wishes[0].id));

    },

  },

  data() {
    return {
      newWish: '',
      wishes: [],
    };
  },

  
  // FIREBASE 
  
  created() {
    onSnapshot(collection(db, "wishes"), (querySnapshot) => {
      this.wishes = [];
      querySnapshot.forEach((doc) => {
        let wishesDb = 
        {
          id: doc.id,
          title: doc.data().title,
          selected: doc.data().selected
        }
        
        this.wishes.push(wishesDb)
        
      });
    });
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
