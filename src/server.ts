import App from './app'

import * as bodyParser from 'body-parser'

import HomeController from './controllers/HomeController'

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ]
})

app.listen()