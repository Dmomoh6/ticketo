<template>
  <div class="cover">
    <div class="event">
      <h1>{{ event.title }}</h1>
      <p class="date" v-show="event.time">
        @{{ event.time }} on {{ event.date }}
      </p>
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
          <td>Description:</td>
          <td>
            {{ event.description }}
          </td>
        </tr>
      </table>
      <div class="attendees">
        <h2>
          Attendees ({{
            event.attendees != undefined && event.attendees.length
              ? event.attendees.length
              : 0
          }})
        </h2>
        <span v-for="attendant in event.attendees" :key="attendant.id"
          >{{ attendant.name }}<br
        /></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event {
  width: calc(85vw - 40px);
  min-height: 63.5vh;
  float: left;
  text-align: left;
  padding: 10px 40px 20px 40px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
}

p.date {
  margin-top: -50px;
  float: right;
  font-size: 20px;
}

table {
  margin-top: 20px;
  font-size: 20px;
}

td {
  padding: 0px 15px 10px 0px;
  max-width: 70vw;
  vertical-align: top;
  word-break: break-all;
}

tr > td:first-child {
  font-weight: 600;
}

.attendees {
  float: right;
  text-align: right;
}

.attendees > span {
  font-size: 18px;
}

@media (max-width: 969px) {
  td,
  tr {
    width: 100%;
    display: inline-block;
    padding-top: 2px;
    overflow: hidden;
  }
  .event {
    width: 76.5vw;
    min-height: 80vh;
    float: none;
    display: inline-block;
    text-align: left;
    padding: 5px 20px 20px 20px;
    margin: 15px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
    -webkit-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
  }

  p.date {
    margin-top: -20px;
    float: left;
    font-size: 15px;
  }

  table {
    font-size: 18px;
    float: left;
    margin-top: 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>
