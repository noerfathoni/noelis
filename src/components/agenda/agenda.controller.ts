import * as express from 'express'
import { Request, Response } from 'express'
import { Connection } from 'typeorm';
import { Agenda } from './agenda.entity'
import moment from 'moment'

class AgendaController {
    public path = '/'
    public router = express.Router()
    private db: Promise<Connection>;

    constructor(db: Promise<Connection> = null) {
        this.initRoutes()
        this.db = db
    }

    public initRoutes() {
        this.router.get('/', this.index)
        this.router.post('/simpan-agenda', this.store)
        this.router.post('/data-by-id', this.dataById)
        this.router.post('/update-data', this.ajaxUpdateData)
    }

    index = (req: Request, res: Response) => {
        let agenda: Agenda[] = []

        this.db.then(async connection => {
            const query = await connection.getRepository(Agenda)
                                          .createQueryBuilder('agenda')
                                          .orderBy('id', 'DESC')
                                          .getMany()
            
            if (query) {
                agenda = query
            }
        
            res.render('agenda', { agenda })
        })
    }

    store = (req: Request, res: Response) => {
        let body = req.body

        console.log(req.body)
        
        this.db.then(async connection => {
            let agenda = new Agenda()
            agenda.title = body.agenda_title
            agenda.date = body.agenda_time
            agenda.description = body.agenda_description
            agenda.createdAt = moment().format('YYYY-MM-DD')
            agenda.updatedAt = ''
            agenda.deletedAt = ''

            await connection.manager.save(agenda)

            res.redirect('/')
        }).catch(e => {
            console.error(e)
        })
    }

    dataById = (req: Request, res: Response) => {
        let body = req.body

        let agenda: Agenda

        this.db.then(async connection => {
            connection.getRepository(Agenda)
                    .createQueryBuilder('agenda')
                    .where('id = :id', { id: body.id })
                    .getOne()
                    .then(result => {
                        agenda = result
                        res.send(agenda)
                    })
                    .catch(error => {
                        console.log(error)
                        res.send({ message: 'Error' })
                    })        
        })
    }

    ajaxUpdateData = (req: Request, res: Response) => {
        let body = req.body

        this.db.then(async connection => {
            const query = await connection.createQueryBuilder()
                                          .update(Agenda)
                                          .set({
                                            title: body.agenda_title,
                                            date: body.agenda_time,
                                            description: body.agenda_description,
                                          })
                                          .where('id = :id', { id: body.agenda_id })
                                          .execute()
            res.sendStatus(200)
        })
    }
}

export default AgendaController