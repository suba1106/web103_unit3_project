import express from 'express'
// import controllers for events and locations
import getLocations from '../controllers/getLocations.js'


const router = express.Router()

const { getLocations: getLocationsController } = getLocations

// define the routes for events and locations
router.get('/locations', getLocationsController)
export default router