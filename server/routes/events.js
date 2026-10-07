import express from 'express'
// import controllers for events and locations
import getEvents from '../controllers/getEvents.js'


const router = express.Router()

const { getEvents: getEventsController } = getEvents

// define the routes for events and locations
router.get('/events', getEventsController)
export default router