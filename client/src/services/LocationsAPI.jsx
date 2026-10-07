const getAllLocations = async () => {
    try {
        const response = await fetch('/api/locations') 
    }catch (error) {
        throw error
    }
}

const getLocationById = async (id) => {
    try {
        const response = await fetch(`/api/locations/${id}`)   
    } catch (error) {
        throw error
    }
}
export default {
    getAllLocations,
    getLocationById
}
