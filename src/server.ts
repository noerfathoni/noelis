import App from './app'

import * as bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import flash from 'connect-flash'
import myConnection  from './libs/database'
import AgendaController from './components/agenda/agenda.controller'

const app = new App({
    port: 5000,
    controllers: [
        new AgendaController(myConnection()),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        cookieParser('j01-dek3o2-192m3l4&91089-9*'),
        session({ 
            cookie: { maxAge: 60000 },
            secret: 'j01-08*2#-192m3l4&91089-9*',
            resave: false,
            saveUninitialized: true,
        }),
        flash()
    ]
})

app.listen()