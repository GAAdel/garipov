<template>
  <div id="app">
      <header>
            <div class="container-fluid">
                <div class="row text-center alert">
                    <div class="col-12">
                        <h1 class="display-4">Каталог автомобилей</h1>
                    </div>
                    <hr>
                    <div class="col-12">
                        <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, odit aspernatur atque deleniti similique explicabo expedita ea quaerat quia molestias aliquid quidem itaque? Quas facere sed maxime quisquam aspernatur reprehenderit recusandae dolor est at doloribus, expedita, voluptates possimus. Blanditiis voluptas porro, consequuntur odio fugit cupiditate praesentium distinctio suscipit impedit. Eius.</p>
                    </div>
                </div>
            </div>
      </header>
      
      <main>
        <div class="container">
            <div class="row" v-for="car in cars" :key="car.id">
                <div class="col-lg-4 col-xs-6 col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item"><a href="#" @click="onShow(car.description)">{{car.brand}} {{car.model}} {{car.year}}</a></li>
                        <hr><hr><hr>
                    </ul>
                </div>
                <div class="col-lg-8 col-xs-6 col-md-6">
                    {{car.description}}
                </div>
            </div>
        </div>
      </main>

      <footer>
            <div class="container">
              <div class="footer-block">
                <div class="foot-1">
                    <p>Гарипов Адель Равилевич
                    181-361  22.06.2020
                    </p>
                </div>
                <div class="foot-2">
                    <p>Ссылки:  <a href="https://bootstrap-4.ru/docs/4.5/getting-started/introduction/" target="_blank">Boostrap</a></p>
                </div>
              </div>
            </div>
      </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      cars: [],
      brand: '',
      model: '',
      year: '',
      description:'',
    };
  },
  components: {},
  methods: {
    udpdateData() {
      try {
        this.$http
        .get('http://localhost:3000/cars')
        .then((res) => res.json())
        .then((res) => (this.cars = res));        
      } catch(err) {
        console.error(err);
      }
    },
  },
  created() {
    this.udpdateData();
  },
};
</script>

