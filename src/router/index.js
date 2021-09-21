import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import UserProtocol from '../components/user-protocol/UserProtocol.vue'
import PrivateProtocol from '../components/private-protocol/PrivateProtocol.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Main' },
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main,
    meta: {
      CnTitle: 'Home',
      ZnTitle: '首页',
    },
  },
  {
    path: '/user-protocol',
    name: 'user-protocol',
    component: UserProtocol,
    meta: {
      CnTitle: 'Terms of Use',
      ZnTitle: '用户协议',
    },
  },
  {
    path: '/private-protocol',
    name: 'private-protocol',
    component: PrivateProtocol,
    meta: {
      CnTitle: 'Privacy Policy',
      ZnTitle: '隐私协议',
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
