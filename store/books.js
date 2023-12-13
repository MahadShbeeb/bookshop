import { defineStore } from "pinia";

export const useBooksStore = defineStore('books', {
  state: () => ({
    booksBySearch:[],
    bookByKey:[],
    authorByKey:[],
    authorsByName:[],
    authorsWorksByKey:[],
    authorName:[],
    imgIsbn:[],
    booksBySubject:[],
    isLoading:false
  }),
  actions: {
    async fetchSearchedBook(bookTitle) { 
            this.isLoading=true
            bookTitle =bookTitle!==''?bookTitle.replaceAll(' ','+').toString():''
            let {data} = await useFetch('https://openlibrary.org/search.json?title='+bookTitle)
            this.booksBySearch= data._rawValue.docs 
            this.isLoading=false 
            return data._rawValue.docs            
        },
    async fetchSearchedAuthors(authorName) { 
            this.isLoading=true
            //https://openlibrary.org/search/authors.json?q=william
            authorName = authorName !== '' ? authorName.replaceAll(' ','+').toString():''
            let {data} = await useFetch('https://openlibrary.org/search/authors.json?q='+authorName)
            this.authorsByName= data._rawValue.docs 
            this.isLoading=false 
            console.log(this.authorsByName)
            return this.authorsByName            
        },
    async fetchBookByKey(key) { 
            let {data} = await useFetch('https://openlibrary.org/works/'+key+'.json')
            this.bookByKey= data._rawValue
            return this.bookByKey            
        },
    async fetchBooksBySubject(subject) { 
        this.isLoading=true
        let {data} = await useFetch('https://openlibrary.org/subjects/'+subject+'.json')
        this.booksBySubject= data._rawValue   
        this.isLoading=false
        return this.booksBySubject            
    },
    async fetchAuthorByKey(key) { 
            let {data} = await useFetch('https://openlibrary.org/authors/'+key+'.json')
            this.authorByKey= data._rawValue
            return this.authorByKey           
    },
    async fetchAuthorName(key) { 
            let {data} = await useFetch('https://openlibrary.org'+key+'.json')
            this.authorName= data._rawValue.alternate_names?data._rawValue.alternate_names[0]:data._rawValue.name;
            return this.authorName          
    },
    async fetchAuthorsWorksByKey(key) { 
            let {data} = await useFetch('https://openlibrary.org'+key+'/works.json')    
            this.authorsWorksByKey= data._rawValue.entries
            return this.authorsWorksByKey            
        },
    async fetchBookCoverByTitle(bookTitle) { 
        bookTitle =bookTitle!==''?bookTitle.replaceAll(' ','+').toString():''
        let {data} = await useFetch('https://openlibrary.org/search.json?title='+bookTitle)
        this.imgIsbn= data._rawValue.docs[0].isbn?data._rawValue.docs[0].isbn[0]:'' 
        return this.imgIsbn    
        },

},
  getters: {
  },
  
})