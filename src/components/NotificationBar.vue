<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 3000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`;
    },
  },
  methods: mapActions("notifications", ["remove"]),
};
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
  padding: 1px 15px 1px 15px;
  border-radius: 10px;
}

.-text-success {
  background-color: #39c16c;
}

.-text-error {
  background-color: #fc100d;
}
</style>
