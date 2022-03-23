<template>
  <div id="nav">
    <div class="logo">
      <router-link :to="{ name: 'home' }">
        <img alt="Ticketo" src="../assets/logo.png"
      /></router-link>
    </div>
    <div class="navitems">
      <router-link :to="{ name: 'event-list' }">Event Listing</router-link>
      <router-link :to="{ name: 'event-create' }">Create an Event</router-link>
    </div>
  </div>
</template>

<style scoped></style>

<script>
export default {
  data() {
    return {};
  },
};
</script>
