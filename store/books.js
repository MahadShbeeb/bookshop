import { defineStore } from "pinia";

export const useBooksStore = defineStore('books', {
  state: () => ({
    booksBySearch:[]
  }),
  actions: {
     async fetchSearchedBook(bookTitle) {  
        console.log(bookTitle)
            bookTitle =bookTitle!==''?bookTitle.replaceAll(' ','+').toString():''
            console.log(bookTitle)
            let {data} = await useFetch('https://openlibrary.org/search.json?title='+bookTitle)
            this.booksBySearch = data._rawValue.docs
            
        },
    
  },
  getters: {
  },
  
})