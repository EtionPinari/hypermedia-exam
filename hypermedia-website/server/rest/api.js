import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()
const { Op } = require('sequelize')
// We need this one if we send data inside the body as JSON

app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()

  // Let's extract all the objects we need to perform queries inside the endpoints
  const {
    Area,
    Article,
    Comment,
    Person,
    PeopleAreas,
    Service,
    ServicesAreas,
  } = db._tables

  // API to get all the articles
  app.get('/articles', async (req, res) => {
    const articles = await Article.findAll()
    return res.json(articles)
  })
  // Call this to get all services
  app.get('/services', async (req, res) => {
    const services = await Service.findAll()
    return res.json(services)
  })

  // API to get all people
  app.get('/people', async (req, res) => {
    const people = await Person.findAll({
      include: { model: Area },
    })
    return res.json(people)
  })

  // API to get the first n people people
  app.get('/people/:limit/:index', async (req, res) => {
    const { limit } = req.params
    const { index } = req.params
    const people = await Person.findAll({
      limit,
      where: {
        id: {
          [Op.gt]: index * limit,
        },
      },
      include: { model: Area },
    })
    people.initialNumber = 0
    return res.json(people)
  })

  // API to get an article by ID.
  // This one will return also the comments
  app.get('/article/:id', async (req, res) => {
    const { id } = req.params
    const article = await Article.findOne({
      where: { id },
      include: { model: Comment }, // -> this is the way we "include" also comments inside Articles
    })
    return res.json(article)
  })

  app.get('/employee/:id', async (req, res) => {
    const { id } = req.params
    const person = await Person.findOne({
      where: { id },
      include: { model: Article },
    })
    return res.json(person)
  })
  // Finds ALL PEOPLE that work in :AREA
  app.get('/employeeName/:area', async (req, res) => {
    const { area } = req.params
    // find our area so we can fetch its ID
    const ourArea = await Area.findOne({
      where: { title: area },
    })
    // find all tuples in PeopleAreas (equivalently find all person's ids:) that belong to area with id ourArea.id
    const ourPeople = await PeopleAreas.findAll({
      // select only the personId attribute
      attributes: ['personId'],
      where: { areaId: ourArea.id },
    })
    const peopleResult = []
    for (let i = 0; i < ourPeople.length; i++) {
      peopleResult.push(
        await Person.findOne({
          where: { id: ourPeople[i].dataValues.personId },
        })
      )
    }
    return res.json(peopleResult)
  })

  // Call this to get a service of an area
  // Careful: address is SERVICE (no final s)
  app.get('/service/:area', async (req, res) => {
    const { area } = req.params
    // find our area so we can fetch its ID
    const ourArea = await Area.findOne({
      where: { title: area },
    })
    // find all tuples in ServiceAreas (equivalently find all service's ids:) that belong to area with id ourArea.id
    const ourServices = await ServicesAreas.findAll({
      attributes: ['serviceId'],
      where: { areaId: ourArea.id },
    })
    const servicesResult = []
    for (let i = 0; i < ourServices.length; i++) {
      servicesResult.push(
        await Service.findOne({
          where: { id: ourServices[i].dataValues.serviceId },
        })
      )
    }
    return res.json(servicesResult)
  })

  // This one is just an example
  app.get('/ad', (req, res) => {
    return res.json({
      url:
        'https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/google-display-ads-example-2-final.png?oV7qevVB2XtFyF_O64TG6L27AFM3M2oL&itok=TBfuuTM_',
    })
  })
  app.get('/count', (req, res) => {
    const number = Person.count()
    return number
  })
}

init()

export default app
