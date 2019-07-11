import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueResource)

Vue.http.options.root = 'http://www.vue.blog.menut.ro/';
//Vue.http.headers.common['Token'] = ""
//Vue.http.headers.common['IdUser'] = settings.get_id_user()
//Vue.http.headers.common['AppCmd'] = ""

new Vue({
  render: h => h(App),
}).$mount('#app')
