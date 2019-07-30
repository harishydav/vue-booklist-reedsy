<template>
  <div id="app">
    <BookList />
    <!-- {{books}} -->
    <!-- <Book /> -->
  </div>
</template>

<script>
import BookList from "./components/BookList";
import Book from "./components/Book";

import axios from "axios";

export default {
  name: "App",
  components: {
    BookList,
    Book
  }
};
</script>

<style>
body {
  background: #fafaf3;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  font-family: Roboto;
  /* margin-top: 60px; */
}

button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
