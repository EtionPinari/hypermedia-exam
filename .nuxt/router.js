import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _11492446 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _6328ff88 = () => interopDefault(import('..\\pages\\allAreas.vue' /* webpackChunkName: "pages/allAreas" */))
const _ae99508a = () => interopDefault(import('..\\pages\\allEmployees.vue' /* webpackChunkName: "pages/allEmployees" */))
const _b83e2fd0 = () => interopDefault(import('..\\pages\\allServices.vue' /* webpackChunkName: "pages/allServices" */))
const _7bb1f214 = () => interopDefault(import('..\\pages\\articles.vue' /* webpackChunkName: "pages/articles" */))
const _4144f5ac = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _716a43f4 = () => interopDefault(import('..\\pages\\area\\_id.vue' /* webpackChunkName: "pages/area/_id" */))
const _124ba691 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _29052485 = () => interopDefault(import('..\\pages\\employee\\_id.vue' /* webpackChunkName: "pages/employee/_id" */))
const _08b7296c = () => interopDefault(import('..\\pages\\employeeName\\_area.vue' /* webpackChunkName: "pages/employeeName/_area" */))
const _3100ff0b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _11492446,
    name: "about"
  }, {
    path: "/allAreas",
    component: _6328ff88,
    name: "allAreas"
  }, {
    path: "/allEmployees",
    component: _ae99508a,
    name: "allEmployees"
  }, {
    path: "/allServices",
    component: _b83e2fd0,
    name: "allServices"
  }, {
    path: "/articles",
    component: _7bb1f214,
    name: "articles"
  }, {
    path: "/contacts",
    component: _4144f5ac,
    name: "contacts"
  }, {
    path: "/area/:id?",
    component: _716a43f4,
    name: "area-id"
  }, {
    path: "/blog/:id?",
    component: _124ba691,
    name: "blog-id"
  }, {
    path: "/employee/:id?",
    component: _29052485,
    name: "employee-id"
  }, {
    path: "/employeeName/:area?",
    component: _08b7296c,
    name: "employeeName-area"
  }, {
    path: "/",
    component: _3100ff0b,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
