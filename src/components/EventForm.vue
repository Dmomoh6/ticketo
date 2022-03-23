<template>
  <div class="cover">
    <div class="event">
      <form @submit.prevent="createEvent">
        <table>
          <tr>
            <td>Title:</td>
            <td><input :class="errorClass.title" v-model="event.title" /></td>
          </tr>
          <tr>
            <td>Date and Time:</td>
            <div>
              <td>
                <Datepicker
                  :errorClass="errorClass.date"
                  format="MM/DD/YYYY h:i"
                  v-on:inputs="setDate($event)"
                  v-model="event.date"
                />
              </td>
            </div>
          </tr>
          <tr>
            <td>Location:</td>
            <td>
              <input :class="errorClass.location" v-model="event.location" />
            </td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>
              <select
                :class="errorClass.category"
                label="Select a category"
                v-model="event.category"
              >
                <option v-for="cat in categories" :key="cat" :value="cat">
                  {{ cat }}
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>
              <textarea
                :class="errorClass.description"
                v-model="event.description"
              />
            </td>
          </tr>
          <tr>
            <td>Attendees ({{ event.attendees.length }})</td>
            <td>
              <input
                :class="{ error: errorClass.attendees }"
                v-model="attendant"
              />
            </td>
            <td>
              <Button v-on:click="addAttendant" type="button"
                >Add Attendee</Button
              >
            </td>
          </tr>
        </table>
        <div class="attendees">
          <h2>Attendees</h2>
          <span v-for="attendant in event.attendees" :key="attendant.id"
            >{{ attendant.name }}<br
          /></span>
        </div>
        <p v-if="v$.event.$error" class="errorMessage">
          Please re-check the highlighted fields.
        </p>
        <div class="create">
          <Button type="submit">Create Event</Button>
        </div>
      </form>
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

input,
select,
textarea {
  width: 350px;
  height: 35px;
  border: 0.5px solid #095321;
  border-radius: 2px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  font-family: poppins;
  font-weight: 500;
}

input.error,
select.error,
textarea.error {
  border: 2px solid #b53737;
}

textarea {
  height: 150px;
  overflow: scroll;
  resize: none;
}

p.date {
  margin-top: -50px;
  float: right;
  font-size: 20px;
}

table {
  margin-top: 20px;
  font-size: 20px;
  width: 100%;
}

td {
  padding: 0px 15px 10px 0px;
  vertical-align: top;
}

tr > td:first-child {
  font-weight: 600;
}

.attendees {
  float: right;
  text-align: right;

  margin-top: -500px;
}

.attendees > span {
  font-size: 18px;
}

.create {
  float: right;
}

@media (min-width: 969px) {
  table > tr {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media (max-width: 969px) {
  td,
  tr {
    width: 100%;
    display: inline-block;
    padding-top: 2px;
  }

  input,
  select,
  textarea {
    width: 30vh;
    height: 35px;
  }

  textarea {
    height: 150px;
    overflow: scroll;
  }

  .attendees {
    float: none;
    padding-bottom: 20px;
    margin-top: 0px;
    font-size: 13px;
  }

  .attendees > span {
    font-size: 12px;
    margin-top: -100px;
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

.errorMessage {
  color: #b53737;
  font-weight: 600;
  margin-right: 20px;
}
</style>

<script>
import Button from "@/components/Button.vue";
import Datepicker from "vuejs-datetimepicker";
import NProgress from "nprogress";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      categories: this.$store.state.categories,
      event: this.createFreshEventObject(),
      date: "",
      time: "",
      attendant: "",
      errorClass: {
        title: "",
        location: "",
        description: "",
        category: "",
        date: "",
        time: "",
        attendees: "",
      },
    };
  },
  components: { Button, Datepicker },
  validations() {
    return {
      event: {
        title: { required },
        description: { required },
        location: { required },
        date: { required },
        time: { required },
        category: { required },
      },
    };
  },
  methods: {
    addAttendant() {
      var attendantId = Math.floor(Math.random() * 10000000);
      if (this.attendant != "") {
        this.errorClass.attendees = "";
        this.event.attendees.push({ id: attendantId, name: this.attendant });
      } else {
        this.errorClass.attendees = "error";
      }
      this.attendant = "";
    },
    createEvent() {
      this.v$.$touch();
      this.validate();
      if (!this.v$.$invalid) {
        NProgress.start();
        this.$store
          .dispatch("event/createEvent", this.event)
          .then(() => {
            this.$router.push({
              name: "single-event",
              params: { id: this.event.id },
            });
          })
          .catch(() => {
            NProgress.done();
          });
      }
    },
    validate() {
      this.v$.event.location.$error
        ? (this.errorClass.location = "error")
        : (this.errorClass.location = "valid");
      this.v$.event.description.$error
        ? (this.errorClass.description = "error")
        : (this.errorClass.description = "valid");
      this.v$.event.title.$error
        ? (this.errorClass.title = "error")
        : (this.errorClass.title = "valid");
      this.v$.event.date.$error || this.v$.event.time.error
        ? (this.errorClass.date = "error")
        : (this.errorClass.date = "valid");
      this.v$.event.category.$error
        ? (this.errorClass.category = "error")
        : (this.errorClass.category = "valid");
    },
    setDate(d) {
      var datetime = d.split(" ");

      this.event.time = datetime[3];

      datetime.pop();

      this.event.date = datetime.join(" ");
    },

    createFreshEventObject() {
      const id = Math.floor(Math.random() * 10000000);

      return {
        id: id,
        category: "",
        organizer: "Emmanuel Momoh",
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: [],
      };
    },
  },
};
</script>
