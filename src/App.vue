<template>
  <div>
    <NavBar />
    <NotificationContainer />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
#app {
  font-family: montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #0c5078;
  background: -webkit-linear-gradient(to left, #a74b11, #0c5078);
  background: linear-gradient(to left, #a74b11, #0c5078);
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

.navitems {
  float: right;
  right: 5%;
  position: absolute;
}

.logo {
  float: left;
  position: absolute;
  left: 3%;
}

.logo img {
  max-width: 150px;
  margin-top: -8px;
}

#nav {
  padding: 40px 0px 20px 0px;
}

#nav a {
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;
  text-decoration: none;
  padding-left: 40px;
  padding-right: 40px;
}

#nav a.router-link-active {
  color: #fff691;
  font-weight: bold;
}

@media (max-width: 969px) {
  .logo img {
    max-width: 100px;
  }
  #app {
    background: #0c5078;
    background: linear-gradient(270deg, #a74b11 0%, #0c5078 90%);
    background: -webkit-linear-gradient(270deg, #a74b11 0%, #0c5078 90%);
  }

  #nav a {
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;
  }

  #nav {
    padding: 60px 0px 20px 0px;
  }

  .navitems {
    width: 100%;
    right: 0;
    margin-top: 10px;
    position: relative;
  }

  .logo {
    width: 100%;
    left: 0;
    top: -20px;
    position: relative;
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
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import NotificationContainer from "@/components/NotificationContainer.vue";

export default {
  components: {
    NavBar,
    NotificationContainer,
  },
};
</script>
