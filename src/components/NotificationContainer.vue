<template>
  <div class="notification-container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from "@/components/NotificationBar.vue";
import { mapState } from "vuex";

export default {
  components: {
    NotificationBar,
  },
  computed: mapState("notifications", ["notifications"]),
};
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
}

@media (max-width: 969px) {
  .notification-container {
    position: fixed;
    bottom: 0;
    right: 0;
    padding-right: 0px;
    margin: 20px;
    z-index: 1;
  }
}
</style>
