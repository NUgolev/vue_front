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
              <v-select
                class="pa-3"
                v-model="select"
                :items="options"
                style="margin-bottom: -30px;"
                outlined
                dense
                @change="getProducts($event)">
              </v-select>
            </template>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-row class="pa-2" style="margin-bottom: -25px;" dense>

              <v-col cols="12" sm="5">
                <v-text-field
                  :value="min_price"
                  label="Мин."
                  outlined
                  dense
                  v-model.number="minPrice"
                  @change="getProducts($event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">до</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="max_price"
                  label="Макс."
                  outlined
                  dense
                  v-model.number="maxPrice"
                  @change="getProducts($event)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-card-title class="pb-0">filter_name +{{ this.$route.query.category }} + {{ this.$route.query.search }}</v-card-title>
            <v-treeview
              :items="items"
              :load-children="fetchCategories"
              :open.sync="openIds"
              activatable
              color="warning"
              open-on-click
              transition>
              <template slot="label" slot-scope="{ item }">
                <a @click="setCategory(item.id)">{{ item.name }}</a>
              </template>
            </v-treeview>
          </v-card>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-12">
          <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <div>
                <small>Отображено {{ cur_prod_f }} - {{ cur_prod_t }} из {{ products.length }}
                  товаров</small>
              </div>
            </v-col>
            <v-col cols="12" sm="4">

            </v-col>
          </v-row>

          <v-divider></v-divider>

          <div class="row text-center">
            <div class="col-md-3 col-sm-6 col-xs-12"
                 v-for="(product,id) in products">
              <div v-if="id >= 12*page-12">
                <div v-if="id < 12*page">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto"
                      color="grey lighten-4"
                      max-width="600"
                    >
                      <v-img
                        class="white--text align-end"
                        :aspect-ratio="16/9"
                        height="300px"
                        :src="'http://localhost:8000/static/' + product.image_path"
                      >
                        <v-card-title>{{ product.price }}₽</v-card-title>
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                          >
                            <v-btn v-if="hover" :href=" '/product/' + product.id" class="" outlined>Подробнее</v-btn>
                          </div>
                        </v-expand-transition>
                      </v-img>
                      <v-card-text class="text--primary">
                        <div><a :href=" '/product/' + product.id +'/'+ product.category_id" style="text-decoration: none">{{ product.name }}</a>
                        </div>
                        <div>{{ product.price }}₽</div>
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </div>
              </div>

            </div>
          </div>
          <div class="text-center mt-10">
            <v-pagination
              v-model="page"
              :length="pages"
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
import "./../config";
import axios from 'axios';

export default {
  data: () => ({
    select: 'По умолчанию',
    options: [
      'По умолчанию',
      'Цена: по убыванию',
      'Цена: по возрастанию',
    ],
    category: null,
    ordering: {
      "По умолчанию": "-id",
      "Цена: по убыванию": "-price",
      "Цена: по возрастанию": "price"
    },
    page: 1,
    Autoparts: [
      {
        text: 'Каталог',
        disabled: false,
        href: 'shop',
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
    min: 0,
    max: 10000,
    items: [],/*[
      {
        id: 1,
        name: 'Амортизаторы',
        children: [
          {id: 5, name: 'Гидравлические'},
          {id: 6, name: 'Газовые'},
          {id: 7, name: 'Комбинированные'},
        ],
      },
      {
        id: 2,
        name: 'Газовые',
        children: [
          {id: 8, name: 'Бамперы'},
          {id: 9, name: 'Крылья'},
          {id: 10, name: 'Двери'},
        ],
      }
    ],*/
    products: [],
    products_desc: [],
    max_price: 100000,
    min_price: 0,
    minPrice: [],
    maxPrice: [],
    categorys: [],
    filters: [],
    filter_values: [],
    root: true,
    price_max: 0,
    pages: 1,
    cur_prod_f: [],
    openIds: [],
    search:[],
    cur_prod_t: 0
  }),

  methods: {
    getMin_max: function (){
      axios.get('http://127.0.0.1:8000/' + `api/product/max-min-price`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.min_price = response.data.min_price
          this.max_price = response.data.max_price
          this.minPrice = response.data.min_price
          this.maxPrice = response.data.max_price
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    setCategory: function (id) {
      this.category = id
      this.getProducts()
    },
    async fetchCategories(item) {
      return fetch('http://127.0.0.1:8000/api/category/' + item.id + '/children/')
        .then(res => res.json())
        .then(json => (item.children.push(...json)))
        .catch(err => console.warn(err))
    },
    getRootCategories: function () {
      axios.get('http://127.0.0.1:8000/api/category/?root=true'
      ).then(response => {
        this.items = response.data
      })
        .catch(e => {
          this.errors.push(e)
        })
    },
    onOpen: function (items) {
      this.openIds = items
    },
    getProducts: function () {
      var url = 'http://127.0.0.1:8000/' +
        'api/product/?price_gte=' + this.minPrice +
        '&price_lte=' + this.maxPrice +
        '&ordering=' + this.ordering[this.select]
      if (this.$route.query.category) {
        url += '&category=' + this.$route.query.category
      } else if (this.category) {
        url += '&category=' + this.category
      }
      if (this.$route.query.search) {
        url += '&search=' + this.$route.query.search
      }
      axios.get(url).then(response => {
        // JSON responses are automatically parsed.
        this.products = response.data // получение списка продуктов
        this.filters = response.filter
        this.filters_values = response.filter_values
        this.pages = Math.floor(this.products.length / 12) + 1 * (this.products.length % 12 > 0)
        this.page = 1
        this.cur_prod_f = (12 * this.page - 12) + 1
        if (this.products.length >= 12) {
          this.cur_prod_t = (12 * this.page)
        } else {
          this.cur_prod_t = this.products.length
        }
      })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },


  mounted() {
    //this.products = this.products()
    this.getProducts()
    this.getRootCategories()
    this.getMin_max()
  },

  created() {
    this.getMin_max()
  }
}
</script>

