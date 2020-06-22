<template>
  <div id="app">
        <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/main"><img src="./bmw.png" id="main-logo" alt=""></router-link> 
            
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navBarNavM">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navBarNavM">   
              <div class="navbar-nav">
                <router-link class="nav-item nav-link" to="/main">Главная</router-link>
                <router-link class="nav-item nav-link" to="/catalog">Каталог</router-link>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <div class="container">
            <router-view></router-view>     
          </div>
        </main>
        <footer>
        </footer>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

#app {
  font-family: 'Lobster', cursive;
  background-color: gainsboro;
}

#main-logo {
    width: 60px;
    height: 55px;
    -webkit-transition: all 0.7s ease;
    -moz-transition: all 0.7s ease;
    -o-transition: all 0.7s ease;
    transition: all 0.7s ease;
}

#main-logo:hover{
    border-radius: 100%;
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }

.footer-block {
        display: flex;
    }
    
.foot-1 {

        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
.foot-2 {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
