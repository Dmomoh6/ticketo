<template>
  <div class="overall">
    <div class="eventlist">
      <EventForm />
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
import EventForm from "@/components/EventForm.vue";

export default {
  components: {
    EventForm,
  },
};
</script>
