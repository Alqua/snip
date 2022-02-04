
import { createApp } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import VueApollo from '@vue/apollo-option'
import ProductComponent from './components/ProductComponent'
import ProductsComponent from './components/ProductsComponent'
import { createRouter, createWebHashHistory } from 'vue-router'

const httpLink = createHttpLink({
    uri: 'https://api-eu-central-1.graphcms.com/v2/ckz7fa0yt0dll01z3g1dm3n17/master',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

const routes = [
    { path: '/', component: ProductsComponent },
    { path: '/product/:id', component: ProductComponent },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

createApp(App)
    .use(router)
    .provide('apollo', apolloProvider)
    .mount('#app')
