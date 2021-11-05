<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-toolbar-title
        style="width: 350px"
      >
        <a href="/" class="white--text" style="text-decoration: none"><v-icon>mdi-car</v-icon>&nbsp;Автозапчасти Лимурика</a>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Поиск"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <v-btn v-on="on" href="/cart" icon>
        <v-badge
          content="2"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-bottom-navigation
        :value="activeBtn"
        color="primary"
        horizontal
      >
        <a href="/" class="v-btn">
          <span>Главная</span>
        </a>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <span>Каталог</span>
            </v-btn>
          </template>
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          >

            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click=""
              href="/shop"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>

          </v-card>
        </v-menu>
      </v-bottom-navigation>
    </v-content>
      <router-view/>
    <v-footer
      :padless="true"
    >
      <v-card
        flat
        tile
        width="100%"
        class="secondary white--text text-center"
      >
        <v-card  class="accent" >
          <v-container>
            <v-row no-gutters>
              <v-col class="col-12 col-md-4 col-sm-12">
                <v-row >
                  <v-col class="col-12 col-sm-3 pr-4" align="right">
                    <v-icon class="display-2">mdi-truck-fast</v-icon>
                  </v-col>
                  <v-col class="col-12 col-sm-9 pr-4">
                    <h3 class="font-weight-light">Бесплатная доставка</h3>
                    <p class="font-weight-thin">по Москве</p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="col-12 col-md-4 col-sm-12">
                <v-row >
                  <v-col class="col-12 col-sm-3 pr-4" align="right">
                    <v-icon class="display-2">mdi-currency-rub</v-icon>
                  </v-col>
                  <v-col  class="col-12 col-sm-9 pr-4">
                    <h3 class="font-weight-light">Оплата при получении</h3>
                    <p class="font-weight-thin">Наличными или картой</p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="col-12 col-md-4 col-sm-12">
                <v-row>
                  <v-col class="col-12 col-sm-3 pr-4" align="right">
                    <v-icon class="display-2">mdi-headset</v-icon>
                  </v-col>
                  <v-col  class="col-12 col-sm-9 pr-4">
                    <h3 class="font-weight-light">499-800-456-747</h3>
                    <p class="font-weight-thin">24/7 Поддержка</p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card-text class="white--text pt-0">
          Сайт по продаже автозапчастей. Разработал Уголев Никита 2021
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Автозапчасти</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
    export default {
        data () {
            return {
                items: [
                    { title: 'Амортизаторы' },
                    { title: 'Кузновные детали' },
                    { title: 'Масла' },
                    { title: 'Тормозная система' },
                ],
                activeBtn: 1,
            }
        },
    }
</script>
