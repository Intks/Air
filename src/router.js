import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from './components/Create'
import General from './components/General'
import Update from './components/Update'
import Payment from './components/Payment'
import Finished from './components/Finished'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/create',
            name: 'Create',
            component: Create
        },
        {
            path: '/general',
            name: 'General',
            component: General
        },
        {
            path: '/update',
            name: 'Update',
            component: Update
        },
        {
            path: '/payment',
            name: 'Payment',
            component: Payment
        },
        {
            path: '/finished',
            name: 'Finished',
            component: Finished
        },
        {
            path: '*',
            redirect: '/create'
        }
    ]
})

export default router;
