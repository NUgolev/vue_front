<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        :src="'http://localhost:8000/static/home/tormoza.jpg'"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Тормозные запчасти</strong></div><br/>
        </v-row>

      </v-carousel-item>
      <v-carousel-item
        :src="'http://localhost:8000/static/home/Shini.jpg'"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Поможем подобрать шины</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="'http://localhost:8000/static/home/kuzovnye-detali.jpg'"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 black--text pl-5 pr-5 hidden-sm-only"><strong>Кузовные детали</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="'http://localhost:8000/static/home/Maslo.jpg'"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 black--text pl-5 pr-5 hidden-sm-only"><strong></strong>Большой ассортимент моторных масел</div><br/>
        </v-row>
      </v-carousel-item>
      </v-carousel>
       <div class="pl-4 pr-4 row">
      <div
       class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card>

          <v-img
            :src="'http://localhost:8000/static/home/Maslo.jpg'"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
           <h1 class="text-center font-size">Моторные масла</h1>
            <div class="text-center">
              <v-btn  href="shop/?category=1" class="white--text " outlined>Перейти в раздел</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
      <div
        class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card>
          <v-img
            :src="'http://localhost:8000/static/home/Shini.jpg'"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size">Шины</h1>
            <div class="text-center">
              <v-btn  href="/shop" class="white--text" outlined>Перейти в раздел</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <div class="pl-4 pr-4 row">
      <div
       class="col-md-4 col-sm-4 col-xs-12"
      >
        <v-card outlined>
          <v-img
            :src="'http://localhost:8000/static/home/amortizatory.jpg'"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Амортизаторы</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="shop/?category=6" text>Перейти в раздел<v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
      <div
        class="col-md-4 col-sm-4 col-xs-12"
      >
        <v-card outlined>
          <v-img
            :src="'http://localhost:8000/static/home/kuzovnye-detali.jpg'"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Кузовные детали</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>Перейти в раздел<v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
      <div
        class="col-md-4 col-sm-4 col-xs-12"
      >
        <v-card outlined>
          <v-img
            :src="'http://localhost:8000/static/home/tormoza.jpg'"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Тормозные запчасти</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>Перейти в раздел<v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text
            class=""
            tile
            outlined
          >

          </v-card-text>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
    export default {
        data () {
            return {
                activeBtn: 1,
            }
        },
    }
</script>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>

