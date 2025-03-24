import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./css/main.css";

// Init Pinia
const pinia = createPinia();

// Create Vue app
createApp(App).use(router).use(pinia).mount("#app");

// Init main store
// const mainStore = useMainStore(pinia)

// Fetch sample data
// mainStore.fetchSampleClients()
// mainStore.fetchSampleHistory()
