<template>
    <div class="app">
        <header>
            <div class="container-fluid">
                <div class="row text-center alert">
                    <div class="col-12">
                        <h1 class="display-4">Мир авто</h1>
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
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./bmw1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="./bmw2.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="./bmw3.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row text-center alert">
                    <div class="col-lg-10 col-xs-9 col-md-6">
                        <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, odit aspernatur atque deleniti similique explicabo expedita ea quaerat quia molestias aliquid quidem itaque? Quas facere sed maxime quisquam aspernatur reprehenderit recusandae dolor est at doloribus, expedita, voluptates possimus. Blanditiis voluptas porro, consequuntur odio fugit cupiditate praesentium distinctio suscipit impedit. Eius.</p>
                    </div>
                    <div class="col-lg-2 col-xs-3 col-md-6">
                        <a href="#"><button class="btn btn-success" id="animation-button">Читать далее...</button></a>
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

<style>
#app {
  font-family: 'Lobster', cursive;
}

#animation-button {
    -webkit-transition: all 0.7s ease;
    -moz-transition: all 0.7s ease;
    -o-transition: all 0.7s ease;
    transition: all 0.7s ease;
}

#animation-button:hover{
    border-radius: 100%;
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
</style>