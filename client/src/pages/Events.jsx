import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/Event.css'
import EventsAPI from '../services/EventsAPI'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try { 
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <div className='events'>
            <header>
                <h2>All Events</h2>
            </header>  
            <div className='event-list'>
                {events.map(event => (
                    <Event key={event.id} id={event.id} />
                ))}
            </div>
        </div>
    )
}

export default Events