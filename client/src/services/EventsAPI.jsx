const getAllEvents = async () => {
    try {
        const response = await fetch('/api/events')
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

const getEventById = async (id) => {
    try {
        const response = await fetch(`/api/events/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

const getEventByLocationId = async (locationId) => {
    try {
        const response = await fetch(`/api/events/location/${locationId}`)    
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }       
}

export default {
    getAllEvents,
    getEventById,
    getEventByLocationId
}