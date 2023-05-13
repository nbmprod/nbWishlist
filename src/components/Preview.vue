<template>
  <main class="preview">
    <div class="container">
      <div class="preview__blocks">
        <div class="preview__main">
          <div
            class="preview_wrapper">
            <Wcard
            :wishes="wishes"
            :selectedWish="selectedWish"
            @wish-selected="handleWishSelected"         
            />
          </div>
          <details class="addWish__details">
            <summary class="addWish__summary">
              <div class="addWish__icon">
                <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>
              </div>
            </summary>
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
                <div class="preview__delete">
                  <button
                    class="preview__delete-btn"
                    @click="deleteSelected"
                  >
                    Delete
                  </button>
                </div>
              </form>
              </div>
          </details>
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
    
      if (this.selectedWish === this.wishes[index]) {
        this.selectedWish = undefined; // Unselect if already selected
      } else {
        this.selectedWish = this.wishes[index]; // Select the clicked wish
      }
      
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
  margin: 2em 0 0 0;
  
}

.addWish__details{
  margin: 2em 0 0 0;
}

.addWish__summary{
  list-style: none;
  cursor: pointer;


  &::-webkit-details-marker {
    display: none;
  }

}

.addWish__form {
  margin: 0 0 3em 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: fit-content;
}

.addWish__icon{
  border: 2px solid black;
  width: fit-content;
  margin: 0;
  height: fit-content;
  padding: 10px;
  border-radius: 45%;
  transform: rotate(5deg);
}

.preview__delete{
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
</style>
