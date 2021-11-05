<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-7 col-xs-12">
          <v-carousel>
            <v-carousel-item
              :src="require('../assets/img/shop/1.jpg')"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="require('../assets/img/shop/1_1.jpg')"
            >
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="Autoparts"></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-0">MOTUL 8100 ECO-nergy</p>
            <p class="subtitle-1 font-weight-thin">
              Моторное масло MOTUL 8100 ECO-NERGY 5W-30 Синтетическое 4 л
            </p>
            <p class="display-0 mb-0">Цена:</p>
            <p class="display-1 mb-0"> 4500.00 ₽ </p>
            <p class="title">Количество</p>

            <v-text-field
                outlined
                style="width:100px"
                :value="1"
                dense
            ></v-text-field>
            <v-btn class="primary white--text" outlined tile dense><v-icon>mdi-cart-arrow-down</v-icon> В корзину</v-btn>
                      </div>
      </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab >Описание</v-tab>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">

                    Энергосберегающее 100% синтетическое моторное масло разработано специально для мощных современных бензиновых и дизельных двигателей автомобилей, в том числе с непосредственным впрыском, для которых предусмотрено использование масел с низкой высокотемпературной вязкостью в условиях высоких скоростей сдвига (HTHS).
                    Предназначено для бензиновых и дизельных двигателей, созданных по новым технологиям, для которых предписаны масла "Fuel Economy" (ACEA A1/B1 и А5/В5). Совместимо с системами нейтрализации отработавших газов.
                    ACEA Стандарты: ACEA A5/B5
                    API Стандарты: SL.
                    Одобрения: FORD WSS M2C 913D; Jaguar, Land Rover STJLR.03.5003; Renault RN0700.
              </p>
            </v-tab-item>
            <v-tab-item>
              <v-list
                three-line="true"
                avatar="true"
              >
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    inactive="true"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title"></v-list-item-title><v-rating v-model="rating" class="" background-color="warning lighten-3"
                                                                                           color="warning" dense></v-rating>
                      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-tab-item>
          </v-tabs>
          <v-card-text
            class="pa-0 pt-4"
            tile
            outlined
          >
            <p class="subtitle-1 font-weight-light pt-3 text-center">С этим товаром смотрят</p>
            <v-divider></v-divider>
            <div class="row text-center">
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../assets/img/shop/11.jpg')"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>3400.00 ₽</div>
                      <div>Total Quarz INEO</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Подробнее
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../assets/img/shop/4.jpg')"
                    >

                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>3500.00 ₽</div>
                      <div>Lukoil Genesis</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Подробнее
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../assets/img/shop/2.jpg')"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>4000.00 ₽</div>
                      <div>Zepro</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Подробнее
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../assets/img/shop/5.jpg')"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>3000.00 ₽</div>
                      <div>Supreme</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Подробнее
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../assets/img/shop/7.jpg')"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>3400.00 ₽</div>
                      <div>Shell HX8</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Подробнее
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('../assets/img/shop/3.jpg')"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>2690.00 ₽</div>
                      <div>Idemitsu</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Подробнее
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </div>
      </div>
    </v-container>
    <v-card  class="accent" >

    </v-card>
  </div>
</template>
<script>
    export default {
        data: () => ({
            Autoparts: [
              {
                text: 'Главная',
                disabled: false,
                href: 'Home',
              },
              {
                text: 'Масла',
                disabled: false,
                href: 'Oil',
              },
              {
                text: 'Моторные',
                disabled: true,
                href: 'Motor_oil',
              },
            ],
        }),
    }
</script>
