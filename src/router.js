import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
     component:()=>import('./views/register')
    },
    {
      path: '/login',
     component:()=>import('./views/login')
    },
    {
      path: '/home',
     component:()=>import('./views/Home.vue')
    },
    {
      path: '/spxq',
      component:()=>import('./views/spxq')
    },
    {
      path: '/fl',
     component:()=>import('./views/fl'),
     children:[
      {
        path:'/fl',
        component:()=>import('./views/Ppph.vue')
      },
       {
         path:'/ppph',
         component:()=>import('./views/Ppph.vue')
       },
       {
        path:'/hc',
        component:()=>import('./views/Hc.vue')
      },
      {
        path:'/lc',
        component:()=>import('./views/Lc.vue')
      },
      {
        path:'/wlc',
        component:()=>import('./views/Wlc.vue')
      },
      {
        path:'/bc',
        component:()=>import('./views/Bc.vue')
      },{
        path:'/hc1',
        component:()=>import('./views/Hc1.vue')
      },
      ,{
        path:'/hc2',
        component:()=>import('./views/Hc2.vue')
      },
      ,{
        path:'/pec',
        component:()=>import('./views/Pec.vue')
      },
      ,{
        path:'/hc3',
        component:()=>import('./views/Hc3.vue')
      },
      ,{
        path:'/cj',
        component:()=>import('./views/Cj.vue')
      },
      ,{
        path:'/qt',
        component:()=>import('./views/Qt.vue')
      },
     ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
})
// const router = new VueRouter({ 
//  })

// router.beforeEach((to, from, next) => {
//   let isLogin=sessionStorage.getItem("user");
//     if(isLogin){
//         //如果用户登录了就执行下一步
//         next();
//     }else{
//       if(to.path==='./views/login'){
//          next();
//     }else{
//       next('./views/login');
//       }
//     }
// })
