import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
import VueResource from 'vue-resource'
import Main from './components/main.vue'
import Catalog from './components/catalog.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)  
Vue.use(VueResource)

const router = new VueRouter({        
  mode: 'history',                  
  linkActiveClass: 'active',        
  routes: [                          
    {path: '/main', component:Main},
    {path: '/catalog', component:Catalog},
  ]
}) 

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
