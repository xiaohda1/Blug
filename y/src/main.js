import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDisqus from 'vue-disqus'

createApp(App)
    .use(VueDisqus, { shortname: 'skillbaru-com' })
    .use(router).mount('#app')
