import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./router";

import "./css/main.css";

// Init Pinia
const pinia = createPinia();
const app = createApp(App);

// Create Vue app
app
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    unstyled: true,
  })
  .mount("#app");

// Init main store
// const mainStore = useMainStore(pinia)

// Fetch sample data
// mainStore.fetchSampleClients()
// mainStore.fetchSampleHistory()
