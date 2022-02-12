import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import Product from '@/components/Product'
import Cart from '@/components/Cart'
import Layout from '@/components/Layout'
import Ordering from '@/components/Ordering'
import Order_complete from '@/components/Order_complete'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
        name: 'Home'
      },
      {
        path: '/shop',
        component: Shop,
        name: 'Shop'
      },
      {
        path: '/product/:id',
        component: Product,
        name: 'Product'
      },
      {
        path: '/cart',
        component: Cart,
        name: 'Cart'
      },
      {
        path: '/ordering',
        component: Ordering,
        name: 'Ordering'
      },
      {
        path: '/Order_complete',
        component: Order_complete,
        name: 'Order_complete'
      }
    ]

  }
]

export default new Router({
    routes: routes, mode: 'history'
  }
)

export function createRouter() {
  return new Router({
    mode: "history",
    routes: routes
  })
}
