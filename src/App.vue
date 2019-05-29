<template>
  <div id="app">
    <h1>Task List</h1>
    <inbox-screen/>
  </div>
</template>


<script>
import store from "./store";
import InboxScreen from "./components/InboxScreen.vue";
import "../src/index.css";

export default {
  name: "app",
  components: {
    InboxScreen
  }
};
</script>
