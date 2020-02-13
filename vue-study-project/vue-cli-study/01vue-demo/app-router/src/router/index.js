import Vue from 'vue'
import VueRouter from 'vue-router'

// import Homemy from '../components/Homemy'
// import Aboutmy from '../components/Aboutmy'
// import User from '../components/User.vue'

// 使用路由懒加载动态加载路由，然后在routes中引用
const Homemy = () => import('../components/Homemy.vue')
const HomemyNews = () => import('../components/HomemyNews.vue')
const HomemyReports = () => import('../components/HomemyReports.vue')

const Aboutmy = () => import('../components/Aboutmy.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')

// 第一步：通过Vue.use()使用插件
Vue.use(VueRouter)

// 第二步：创建VueRouter对象
const routes = [
  /* {
    path: '/',
    name: 'Home',
    component: Home
  }, */

  // 设置当页面打开时的默认显示home组件，并把该组件渲染，url显示home路径
  {
    path: '/',
    redirect: '/homemy',
  },
  {
    path: '/homemy',
    component: Homemy,
    meta: {
      title: "首页"
    },
    // children是一个子路由数组，和根级路由类似
    // 使用路由组件在其父路由中
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        // 注意这里的path不需要添加/
        path: 'news',
        component: HomemyNews,
      },
      {
        path: 'reports',
        component: HomemyReports,
      }
    ]
  },
  {
    path: '/aboutmy',
    // 记住这里是component而不是name
    component: Aboutmy,
    meta: {
      title: '关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 动态路由：/user/:xx的形式，还需要在app.vue中标注跳转
    path: '/user/:userID',
    component: User,
    meta: {
      title: '用户'
    },
    

  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

const router = new VueRouter({
  // 路径默认是hash形式显示（有#号），改为history模式（正常url形式）
  mode: 'history',
  base: process.env.BASE_URL,
  // 自定义当活跃状态（点击某路由组件）时的class名字
  linkActiveClass: "its-active",
  // 第三步：配置路由与组件之间的关系
  routes
})


// 全局导航守卫：监测路由跳转信息，还有路由守卫和组件守卫
// 前置钩子
router.beforeEach((to, from, next) => {
  // to.matched匹配跳转的路由
  document.title = to.matched[0].meta.title;
  // console.log("前置" , to)
  next()
})

// 后置钩子
router.afterEach( (to, from) => {
  // console.log(to.matched[0].meta.title + "后置")
})

// 第四步：将routers对象传入到Vue实例
export default router
