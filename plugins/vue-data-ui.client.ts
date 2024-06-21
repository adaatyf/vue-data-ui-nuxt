import { VueUiDonut } from "vue-data-ui";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("VueUiDonut", VueUiDonut);
})