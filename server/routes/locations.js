import express from 'express'
// import controllers for events and locations
import getLocations from '../controllers/getLocations.js'


const router = express.Router()

const { getLocations: getLocationsController, getLocationById } = getLocations

router.get('/locations', getLocationsController)
router.get('/locations/:id', getLocationById)
export default router