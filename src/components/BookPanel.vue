<template>
  <div id="card" :style="background">
    <div class="body">
      <router-link :to="book.slug">
        <h2>{{book.index}}. {{book.title}}</h2>
      </router-link>
      <p class="rating">({{book.rating}}/10)</p>
      <br />
      <p class="author">{{book.author}}</p>
      <p>{{book.synopsis.slice(0,200)}}...</p>
      <div v-if="book.upvoted" class="unclickedButton">
        <button @click="addUpvote">Upvoted</button>
        <p class="upvoteLine">Upvoted {{upvotes}} times</p>
      </div>
      <div v-else class="clickedButton">
        <button @click="addUpvote">Upvote</button>
        <p class="upvoteLine">Upvoted {{upvotes}} times</p>
      </div>
    </div>
    <router-link :to="book.slug">
      <div class="image">
        <img :src="book.cover" />
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "BookPanel",
  props: {
    book: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      upvotes: this.book.upvotes
    };
  },
  computed: {
    background() {
      return "background :" + this.book.backgroundColor;
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
@import "../styles/bookPanel.component.scss";
</style>

