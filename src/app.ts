import * as express from 'express'
import { Application } from 'express'

class App {
    public app: Application
    public port: number

    constructor (appInit: {
        port: number,
        middleWares: any,
        controllers: any
    }) {
        this.app = express()
        this.port = appInit.port

        this.middleWares(appInit.middleWares)
        this.routes(appInit.controllers)
        this.assets()
        this.template()
    }

    private middleWares (middleWares: any) {
        middleWares.forEach(element => {
            this.app.use(element)
        });
    }

    private routes (controllers: any) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    private assets () {
        this.app.use(express.static('public'))
        this.app.use(express.static('views'))
    }

    private template () {
        this.app.set('view engine', 'ejs')
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App


