import express from 'express'
import getEvents from '../controllers/getEvents.js'

const router = express.Router()

const { getEvents: getEventsController, getEventById, getEventsByLocation } = getEvents

router.get('/events', getEventsController)
router.get('/events/location/:locationId', getEventsByLocation)  // must come before /events/:id
router.get('/events/:id', getEventById)

export default router