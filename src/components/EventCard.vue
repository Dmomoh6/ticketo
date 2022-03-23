<template>
  <div class="cover">
    <router-link :to="{ name: 'single-event', params: { id: event.id } }">
      <div class="event">
        <h1>{{ event.title }}</h1>
        <p class="date">@{{ event.time }} on {{ event.date }}</p>
        <table>
          <tr>
            <td>Location:</td>
            <td>{{ event.location }}</td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>
              {{ event.category }}
            </td>
          </tr>
          <tr>
            <td>Attendees:</td>
            <td>
              {{
                event.attendees ? event.attendees.length + " People" : "None"
              }}
            </td>
          </tr>
        </table>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.event {
  width: 40vw;
  height: 240px;
  float: left;
  text-align: left;
  padding: 0px 20px 20px 20px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
}

a {
  text-decoration: none;
  color: #000000;
}

p.date {
  margin-top: -20px;
}

table {
  margin-top: 20px;
}

td {
  padding: 0px 15px 30px 0px;
}

tr > td:first-child {
  font-weight: 600;
}

@media (max-width: 969px) {
  .event {
    width: 76.5vw;
    height: 250px;
    float: none;
    display: inline-block;
    text-align: left;
    padding: 5px 20px 20px 20px;
    margin: 15px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
    -webkit-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
    overflow: scroll;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  props: {
    event: Object,
  },
};
</script>
