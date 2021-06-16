import { wrapFunctional } from './utils'

export { default as AreaPreview } from '../..\\components\\AreaPreview.vue'
export { default as ArticleMini } from '../..\\components\\ArticleMini.vue'
export { default as Chat } from '../..\\components\\Chat.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as PersonProfile } from '../..\\components\\PersonProfile.vue'
export { default as RedirectButton } from '../..\\components\\redirectButton.vue'
export { default as TheFooter } from '../..\\components\\TheFooter.vue'
export { default as TheNavbar } from '../..\\components\\TheNavbar.vue'
export { default as TemporaryComponentsUnderConstruction } from '../..\\components\\temporaryComponents\\underConstruction.vue'

export const LazyAreaPreview = import('../..\\components\\AreaPreview.vue' /* webpackChunkName: "components/area-preview" */).then(c => wrapFunctional(c.default || c))
export const LazyArticleMini = import('../..\\components\\ArticleMini.vue' /* webpackChunkName: "components/article-mini" */).then(c => wrapFunctional(c.default || c))
export const LazyChat = import('../..\\components\\Chat.vue' /* webpackChunkName: "components/chat" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPersonProfile = import('../..\\components\\PersonProfile.vue' /* webpackChunkName: "components/person-profile" */).then(c => wrapFunctional(c.default || c))
export const LazyRedirectButton = import('../..\\components\\redirectButton.vue' /* webpackChunkName: "components/redirect-button" */).then(c => wrapFunctional(c.default || c))
export const LazyTheFooter = import('../..\\components\\TheFooter.vue' /* webpackChunkName: "components/the-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyTheNavbar = import('../..\\components\\TheNavbar.vue' /* webpackChunkName: "components/the-navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyTemporaryComponentsUnderConstruction = import('../..\\components\\temporaryComponents\\underConstruction.vue' /* webpackChunkName: "components/temporary-components-under-construction" */).then(c => wrapFunctional(c.default || c))
