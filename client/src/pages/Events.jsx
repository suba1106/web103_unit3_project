import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/Event.css'

const Events = () => {
    const [events, setEvents] = useState([])
    return (
        <div className='events'>
            <header>
                <h2>All Events</h2>
            </header>  
            <div className='event-list'>
                {events.map(event => (
                    <Event key={event.id} event={event} />
                ))}
            </div>
        </div>
    )
}

export default Events