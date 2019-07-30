<template>
  <div id="app">
    <md-card id="baseCard">
      <h2>{{book.title}}</h2>
      <div class="upvoteLocation">
        <div v-if="upvotes" class="clickedButton">
          <p class="upvoteLine">Upvoted {{upvotes}} times</p>
          <button @click="addUpvote">Upvoted</button>
        </div>
        <div v-else class="unclickedButton">
          <p class="upvoteLine">Upvoted {{upvotes}} times</p>
          <button @click="addUpvote">Upvote</button>
        </div>
      </div>
      <p class="author">{{book.author}}</p>
      <div class="image">
        <img :src="book.cover" />
      </div>
      <h3>Synopsis</h3>
      <p>{{book.synopsis}}</p>
      <h4>Rating: {{book.rating}}/10</h4>
    </md-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Book",
  data() {
    return {
      book: {},
      upvotes: 0
    };
  },
  computed: {
    slug() {
      // We will see what `params` is shortly
      return this.$route.params.slug;
    }
  },
  async mounted() {
    try {
      const response = await axios.get(
        `http://localhost:3000/books/${this.slug}`
      );
      this.book = response.data;
    } catch (error) {
      this.error = true;
    }
  },
  methods: {
    addUpvote: function() {
      this.upvotes += 1;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/book.views.scss";
</style>