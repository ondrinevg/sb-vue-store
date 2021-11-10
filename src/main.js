import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import exportAlertFunction from "./exportImport/exportAlertFunction";
import { variableOne, variableTwo } from "./exportImport/exportVariables";

exportAlertFunction(variableOne);
exportAlertFunction(variableTwo);

createApp(App).use(store).use(router).mount("#app");
