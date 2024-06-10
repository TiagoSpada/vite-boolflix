import { createApp } from "vue";
// import
import "./assets/scss/main.scss";
//  import vue component
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faStar as starFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as starEmpty } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(starFull, starEmpty);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

// createApp(App).mount("#app");
