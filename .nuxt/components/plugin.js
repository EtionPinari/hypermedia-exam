import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AreaPreview: () => import('../..\\components\\AreaPreview.vue' /* webpackChunkName: "components/area-preview" */).then(c => wrapFunctional(c.default || c)),
  ArticleMini: () => import('../..\\components\\ArticleMini.vue' /* webpackChunkName: "components/article-mini" */).then(c => wrapFunctional(c.default || c)),
  Chat: () => import('../..\\components\\Chat.vue' /* webpackChunkName: "components/chat" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  PersonProfile: () => import('../..\\components\\PersonProfile.vue' /* webpackChunkName: "components/person-profile" */).then(c => wrapFunctional(c.default || c)),
  RedirectButton: () => import('../..\\components\\redirectButton.vue' /* webpackChunkName: "components/redirect-button" */).then(c => wrapFunctional(c.default || c)),
  TheFooter: () => import('../..\\components\\TheFooter.vue' /* webpackChunkName: "components/the-footer" */).then(c => wrapFunctional(c.default || c)),
  TheNavbar: () => import('../..\\components\\TheNavbar.vue' /* webpackChunkName: "components/the-navbar" */).then(c => wrapFunctional(c.default || c)),
  TemporaryComponentsUnderConstruction: () => import('../..\\components\\temporaryComponents\\underConstruction.vue' /* webpackChunkName: "components/temporary-components-under-construction" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
