<template>
  <main class="preview">
    <div class="container">
      <div class="preview__blocks">
        <div class="preview__main">
          <div class="addWish">
            <form
            class="addWish__form"
            @submit.prevent="addWish"
          >
            <input
              v-model="this.newWish.title"
              type="text"
              class="addWish__title"
              placeholder="title"
            />
            <input
              v-model="this.newWish.disc"
              type="text"
              class="addWish__disc"
              placeholder="disc"
            />
            <input
              v-model="this.newWish.link"
              type="text"
              class="addWish__link"
              placeholder="link"
            />
            <button
              type="submit"
              class="addWish__submit"
              :disabled="!this.newWish"  
            >
              Add Wish
            </button>
          </form>
          </div>
          <div
            class="preview_wrapper">
            <Wcard
            :wishes="wishes"
            :selectedWish="selectedWish"
            @wish-selected="handleWishSelected"         
            />
          </div>
          <div class="preview__delete">
            <button
              class="preview__delete-btn"
              @click="deleteSelected"
            >
              Delete
            </button>
          </div>
        </div>
        <div class="preview__view">
          <Wpage
          :wishes="wishes"
          :selectedWish="selectedWish"
          />
        </div>
      </div>
      
      
    </div>
  </main>
</template>

<script>
import Wcard from "./Wcard.vue";
import { collection, getDocs, doc, setDoc, addDoc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from './../firebase/index.js';
import Wpage from "./Wpage.vue";

export default {


  name: "Preview",

  components: {
    Wcard,
    Wpage
},

  methods: {
    async addWish() {

      const docRef = await addDoc(collection(db, "wishes"), {
      title: this.newWish.title,
      disc: this.newWish.disc,
      link: this.newWish.link,
      img: 'https://picsum.photos/200',
      });
      this.newWish.title = '';
      this.newWish.disc = '';
      this.newWish.link = ''; 

    },

    handleWishSelected(index) {
    
      this.selectedWish = this.wishes[index]
      
    },

    async deleteSelected(){

      const docDel = await deleteDoc(doc(db, "wishes", this.selectedWish.id));
      this.selectedWish = undefined;

    },

  },

  data() {
    return {
      newWish: {
        title: '',
        disc: '',
        link: '',
        img: '',
      },
      wishes: [],
      selectedWish: undefined,
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
          disc: doc.data().disc,
          link: doc.data().link,
          img: doc.data().img,
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

.preview__blocks{
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 2em;
  
}


.addWish {
  display: flex;
  justify-content: center;
  
}

.addWish__form {
  margin: 0 0 3em 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: fit-content;
}

.preview__delete{
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
</style>
