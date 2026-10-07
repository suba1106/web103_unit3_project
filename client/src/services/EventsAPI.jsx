const getAllEvents = async () => {
    try {
        const response = await fetch('/api/events')
        return response.json()
    } catch (error) {
        throw error
    }
}

const getEventById = async (id) => {
    try {
        const response = await fetch(`/api/events/${id}`)
        return response.json()
    } catch (error) {
        throw error
    }
}

const getEventByLocationId = async (locationId) => {
    try {
        const response = await fetch(`/api/events/location/${locationId}`)    
    return response.json()
    } catch (error) {
        throw error
    }       
}

export default {
    getAllEvents,
    getEventById,
    getEventByLocationId
}