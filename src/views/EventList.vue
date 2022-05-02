<template>
  <div class="overall">
    <div class="eventlist">
      <EventCard v-for="event in event.events" :key="event.id" :event="event" />
      <div class="pagination">
        <template v-if="page != 1">
          <Button>
            <router-link
              :to="{ name: 'event-list', query: { page: page - 1 } }"
              rel="prev"
            >
              Previous Page
            </router-link></Button
          >
        </template>

        <template v-if="totalEvents > page * 6">
          <Button>
            <router-link
              :to="{ name: 'event-list', query: { page: page + 1 } }"
              rel="next"
            >
              Next Page
            </router-link></Button
          >
        </template>
      </div>
    </div>
    <div class="footer">DESIGNED AND DEVELOPED BY EMMANUEL MOMOH</div>
  </div>
</template>

<style scoped>
.eventlist {
  background-color: #ffffff;
  width: 95.5vw;
  margin-top: 50px;
  color: #000000;
  padding: 20px 0px 30px 4.5vw;
  min-height: calc(100vh - 210px);
  overflow-y: scroll;
  overflow-x: hidden;
}

.pagination {
  width: 95.5vw !important;
  position: relative !important;
  left: -40px !important;
  max-height: 100px !important;
  overflow-y: hidden;
  overflow-x: hidden;
}

.pagination > button {
  margin: 20px !important;
}

.pagination > button > a {
  color: white;
  text-decoration: none;
}

.footer {
  position: absolute;
  float: right;
  right: 20px;
  color: #ffffff;
  font-weight: 100;
  padding: 10px 0px 10px 0px;
}

@media (max-width: 969px) {
  .footer {
    position: relative;
    text-align: center;
    width: 100%;
    right: 0;
    float: none;
    font-size: 12px;
    font-weight: 100;
    margin-top: 20px;
  }

  .pagination {
    width: calc(100vw - 20px) !important;
    position: relative !important;
    left: -5px !important;
    margin-bottom: 10px !important;
  }

  .eventlist {
    background-color: #ffffff;
    width: calc(100vw - 20px);
    margin-top: 50px;
    color: #000000;
    padding: 10px 10px 0px 10px;
    min-height: calc(100vh - 210px);
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>

<script>
import EventCard from "@/components/EventCard.vue";
import Button from "@/components/Button.vue";
import { mapState } from "vuex";
import store from "@/store";

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1;
  store
    .dispatch("event/fetchEvents", {
      page: currentPage,
    })
    .then(() => {
      routeTo.params.page = currentPage;
      next();
    });
}

export default {
  components: {
    EventCard,
    Button,
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  computed: {
    totalEvents() {
      return this.event.totalEvents || 10;
    },
    ...mapState({
      event: (state) => state.event,
    }),
  },
};
</script>
