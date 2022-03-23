<template>
  <div class="home">
    <h1>404!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>

    <router-link :to="{ name: 'home' }"
      ><button>Back to Home</button></router-link
    >
    <div class="footer">DESIGNED AND DEVELOPED BY EMMANUEL MOMOH</div>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  color: #ffffff;
  font-size: 5.5vw;
  font-weight: 700;
  line-height: 15vh;
  font-family: montserrat;
  padding-top: 50px;
  padding-right: 10%;
  padding-left: 10%;
}

button {
  color: #09421d;
  background-color: #ffffff;
  padding: 20px 40px 20px 40px;
  margin-top: 20px;
  font-family: montserrat;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  text-transform: uppercase;
  border: none;
}

.footer {
  bottom: 10px;
  position: absolute;
  float: right;
  right: 20px;
  font-weight: 100;
}

@media (max-width: 969px) {
  h1 {
    color: #ffffff;
    font-size: 50px;
    font-weight: 700;
    line-height: 70px;
    font-family: montserrat;
    padding-top: 100px;
    padding-right: 10%;
    padding-left: 10%;
  }

  .footer {
    bottom: 10px;
    position: relative;
    text-align: center;
    width: 100%;
    right: 0;
    float: none;
    font-size: 12px;
    font-weight: 100;
  }

  button {
    color: #09421d;
    background-color: #ffffff;
    padding: 15px 30px 15px 30px;
    font-family: montserrat;
    font-size: 15px;
    font-weight: 600;
    border-radius: 7.5px;
    text-transform: uppercase;
    border: none;

    margin-bottom: 50px;
  }
}

@media (max-width: 640px) {
  h1 {
    color: #ffffff;
    font-size: 30px;
    font-weight: 700;
    line-height: 60px;
    font-family: montserrat;
    padding-top: 80px;
    padding-right: 10%;
    padding-left: 10%;
  }
}
</style>
