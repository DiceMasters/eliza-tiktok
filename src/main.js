import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

import "./assets/fonts/ProximaNova/stylesheet.css";
import "./assets/main.css";
import "./assets/fonts/SFPro/stylesheet.css";

const app = createApp(App);
app.use(VueAxios, axios);
app.mount("#app");
