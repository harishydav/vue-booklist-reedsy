<template>
  <div id="app">
    <div id="strip">
      <md-card id="baseCard">
        <div id="header">Top books of all time</div>
        <p v-if="loading">Loading...</p>
        <p v-if="error">Some error occurred</p>

        <div class="search-bar">
          <md-field>
            <label>Search here ...</label>
            <md-input v-model="searchText"></md-input>
            <span class="md-helper-text">Search books</span>
          </md-field>
        </div>

        <BookPanel v-for="book in filteredBooks" :book="book" />
      </md-card>
    </div>
  </div>
</template>
<script>
import BookPanel from "../components/BookPanel";
import axios from "axios";
import Fuse from "fuse.js";

export default {
  name: "BookList",
  components: {
    BookPanel
  },
  data() {
    return {
      books: [],
      loading: true,
      error: false,
      searchText: "",
      filteredBooks: []
    };
  },
  watch: {
    searchText: function() {
      const options = {
        shouldSort: true,
        threshold: 0.5,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["title", "author"]
      };
      if (this.searchText === "") return (this.filteredBooks = this.books);
      const fuse = new Fuse(this.books, options); // "list" is the item array
      this.filteredBooks = fuse.search(this.searchText);
    }
  },
  async mounted() {
    try {
      const response = await axios.get(`http://localhost:3000/books`);
      this.books = response.data.books;
      this.books = this.books.map((book, index) => {
        book.backgroundColor = index % 2 === 0 ? "white;" : "#fafaf3;";
        book.key = book.title + index;
        book.index = index + 1;
        return book;
      });
      this.filteredBooks = this.books;
      this.loading = false;
    } catch (error) {
      this.error = true;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/bookList.views.scss";
</style>
