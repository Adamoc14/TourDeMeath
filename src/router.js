import Homepage from "./views/Main.vue";
import Register from "./views/Register.vue";
import Event_I from "./views/Event_I.vue";
import Gallery from "./views/Gallery.vue";
import Contact from "./views/Contact.vue";

export default [
  { path: "/", component: Homepage },
  { path: "/register", component: Register },
  { path: "/Event_Info", component: Event_I },
  { path: "/Gallery", component: Gallery },
  { path: "/Contact", component: Contact }
];
