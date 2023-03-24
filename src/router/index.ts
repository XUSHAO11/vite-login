import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../views/Login.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'index',
        meta: {
            loginAuth: true
        },
        component: ()=>import('../views/admin/home.vue')
    }
]



const router = createRouter({
    history: createWebHashHistory(),
    routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
    let _router = to.matched

    // 登录鉴权
    if (_router.length > 0 && _router.some((route) => route.meta.loginAuth)) {
        if (localStorage.getItem('token')) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }

})
export default router;
