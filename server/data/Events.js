// location_id must match a location id (1-6).
// `remaining` is the full date + time of the event; the client uses it to
// work out how much time is left. Two events are in the past so you can
// test the "event already happened" case.
// Tip: to test the "No events scheduled" message, temporarily change an
// event's location_id so one location ends up with none.
const eventData = [
    {
        title: 'Indie Night',
        date: '2026-11-14',
        time: '19:00:00',
        remaining: '2026-11-14 19:00:00',
        image: 'https://placehold.co/600x400?text=Indie+Night',
        location_id: 1
    },
    {
        title: 'Open Mic Thursday',
        date: '2026-12-03',
        time: '20:30:00',
        remaining: '2026-12-03 20:30:00',
        image: 'https://placehold.co/600x400?text=Open+Mic',
        location_id: 1
    },
    {
        title: 'Blues Revival',
        date: '2026-11-21',
        time: '18:00:00',
        remaining: '2026-11-21 18:00:00',
        image: 'https://placehold.co/600x400?text=Blues+Revival',
        location_id: 2
    },
    {
        title: 'Throwback Dance Party',
        date: '2026-09-12',
        time: '21:00:00',
        remaining: '2026-09-12 21:00:00',
        image: 'https://placehold.co/600x400?text=Throwback+Party',
        location_id: 2
    },
    {
        title: 'Winter Sunset Festival',
        date: '2026-12-19',
        time: '17:00:00',
        remaining: '2026-12-19 17:00:00',
        image: 'https://placehold.co/600x400?text=Sunset+Festival',
        location_id: 3
    },
    {
        title: 'Food Truck Friday',
        date: '2026-10-23',
        time: '12:00:00',
        remaining: '2026-10-23 12:00:00',
        image: 'https://placehold.co/600x400?text=Food+Truck+Friday',
        location_id: 3
    },
    {
        title: 'Mavericks Home Opener',
        date: '2026-10-28',
        time: '19:30:00',
        remaining: '2026-10-28 19:30:00',
        image: 'https://placehold.co/600x400?text=Home+Opener',
        location_id: 2
    },
    {
        title: 'Holiday Skate Spectacular',
        date: '2026-12-12',
        time: '14:00:00',
        remaining: '2026-12-12 14:00:00',
        image: 'https://placehold.co/600x400?text=Skate+Spectacular',
        location_id: 3
    }
    
]

export default eventData