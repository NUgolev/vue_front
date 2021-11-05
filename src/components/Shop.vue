<template>
  <div>
    <v-container>
      <div class="row">
        <div
         class="col-md-3 col-sm-3 col-xs-12"
        >
          <v-card outlined>
            <v-card-title>Фильтры</v-card-title>
            <v-divider></v-divider>
            <template>
              <v-treeview :items="items" :open="[1]" :active="[5]" :selected-color="'#fff'" activatable open-on-click dense></v-treeview>
            </template>
            <v-divider></v-divider>
            <v-card-title>Цена</v-card-title>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              :height="10"
              class="align-center"
              dense
            ></v-range-slider>
            <v-row class="pa-2" dense>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[0]"
                  label="мин."
                  outlined
                  dense
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">до</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[1]"
                  label="макс."
                  outlined
                  dense
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Вязкость по SAE</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox  label="0W-15" hide-details dense></v-checkbox>
              <v-checkbox  label="0W-20" hide-details dense></v-checkbox>
              <v-checkbox  label="0W-30" hide-details dense></v-checkbox>
              <v-checkbox  label="5W-30" hide-details dense></v-checkbox>
              <v-checkbox  label="5W-40" hide-details dense></v-checkbox>
              <v-checkbox  label="10W-40" hide-details dense></v-checkbox>
            </v-container>

          </v-card>
        </div>
        <div
          class="col-md-9 col-sm-9 col-xs-12"
        >

          <v-breadcrumbs class="pb-0" :items="Autoparts"></v-breadcrumbs>

          <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <small>Отображено 1-12 из 50 товаров</small>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px;" outlined dense></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <div class="row text-center">
            <div class="col-md-3 col-sm-6 col-xs-12" :key="pro.id" v-for="pro in products">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="mx-auto"
                  color="grey lighten-4"
                  max-width="600"
                >
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16/9"
                    height="200px"
                    :src="pro.src"
                  >
                    <v-card-title>{{pro.type}} </v-card-title>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn v-if="hover" href="/product" class="" outlined>Подробнее</v-btn>
                      </div>

                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div><a href="/product" style="text-decoration: none">{{pro.name}}</a></div>
                    <div>{{pro.price}}₽</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>
          <div class="text-center mt-12">
            <v-pagination
              v-model="page"
              :length="6"
            ></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
  }
</style>
<script>
    export default {
        data: () => ({
            range: [0, 10000],
            select:'Популярные',
            options: [
                'По умолчанию',
                'Популярные',
                'Цена: по убыванию',
                'Цена: по возростанию',
            ],
            page:1,
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
            min:0,
            max:10000,
            items: [
                {
                    id: 1,
                    name: 'Амортизаторы',
                    children: [
                        { id: 1, name: 'Гидравлические' },
                        { id: 2, name: 'Газовые' },
                        { id: 3, name: 'Комбинированные' },
                    ],
                },
                {
                  id: 2,
                  name: 'Кузновные детали',
                  children: [
                    { id: 1, name: 'Бамперы' },
                    { id: 2, name: 'Крылья' },
                    { id: 3, name: 'Двери' },
                  ],
                },
                {
                    id: 3,
                    name: 'Масла',
                    children: [
                        { id: 1, name: 'Моторные' },
                        { id: 2, name: 'Трансмисионные' },
                        { id: 3, name: 'Для мототехники' },
                    ],
                },
                {
                  id: 4,
                  name: 'Тормозная система',
                  children: [
                    { id: 1, name: 'Барабаны тормозные' },
                    { id: 2, name: 'Диски тормозные' },
                    { id: 3, name: 'Колодки тормозные' },
                  ],
                }
            ],
            products:[
                {
                    id:1,
                    name:'MOTUL 8100 ECO-nergy',
                    price:'4500.00',
                    src:require('../assets/img/shop/1.jpg')
                },
                {
                    id:2,
                    name:'Zepro',
                    price:'4000.00',
                    src:require('../assets/img/shop/2.jpg')
                },
                {
                    id:3,
                    name:'Lukoil Genesis',
                    price:'3500.00',
                    src:require('../assets/img/shop/4.jpg')
                },
                {
                    id:4,
                    name:'Supreme',
                    price:'3000.00',
                    src:require('../assets/img/shop/5.jpg')
                },
                {
                    id:5,
                    name:'Nissan Motor oil',
                    price:'5000.00',
                    src:require('../assets/img/shop/6.jpg')
                },
                {
                    id:6,
                    name:'Shell HX8',
                    price:'3400.00',
                    src:require('../assets/img/shop/7.jpg')
                },
                {
                    id:7,
                    name:'ZAC',
                    price:'3800.00',
                    src:require('../assets/img/shop/8.jpg')
                },
                {
                    id:8,
                    name:'Shell HX7',
                    price:'2950.00',
                    src:require('../assets/img/shop/9.jpg')
                },{
                    id:9,
                    name:'GM Motor oil',
                    price:'5000.00',
                    src:require('../assets/img/shop/10.jpg')
                },
                {
                    id:10,
                    name:'Total Quarz INEO',
                    price:'3400.00',
                    src:require('../assets/img/shop/11.jpg')
                },
                {
                    id:11,
                    name:'HYUNDAI XTeer',
                    price:'3800.00',
                    src:require('../assets/img/shop/12.jpg')
                },
                {
                    id:12,
                    name:'Idemitsu',
                    price:'2690.00',
                    src:require('../assets/img/shop/3.jpg')
                }
            ]
        }),
    }
</script>
