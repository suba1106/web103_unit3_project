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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_GVGfup_gNoVwRTPQBNXnAJCpVFAZCQ0T_Cf0u_Qrw&s=10',
        location_id: 1
    },
    {
        title: 'Open Mic Thursday',
        date: '2026-12-03',
        time: '20:30:00',
        remaining: '2026-12-03 20:30:00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZlLUXqXquqINdwFxUHkI8kHTQeW0_uHmqTQAlD7HKgw&s',
        location_id: 1
    },
    {
        title: 'Blues Revival',
        date: '2026-11-21',
        time: '18:00:00',
        remaining: '2026-11-21 18:00:00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvfCK6Mf59Qan3Ue2_QORcFEmPevu5SQ_ACmrdLjCCw&s=10',
        location_id: 2
    },
    {
        title: 'Throwback Dance Party',
        date: '2026-09-12',
        time: '21:00:00',
        remaining: '2026-09-12 21:00:00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeddTIqSCnl--QvkcrPM1t3739ZP2nJHUQiF-lB6u2w&s=10',
        location_id: 2
    },
    {
        title: 'Winter Sunset Festival',
        date: '2026-12-19',
        time: '17:00:00',
        remaining: '2026-12-19 17:00:00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrm6LUP1At3sjkAqhywRxomZxzeVOb6_Vr7xvpdVJKQ&s=10',
        location_id: 3
    },
    {
        title: 'Food Truck Friday',
        date: '2026-10-23',
        time: '12:00:00',
        remaining: '2026-10-23 12:00:00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5KomJ3aYJbocjFkE6vb2IVgMmZDL8xXxy3zvW02kVw&s=10',
        location_id: 3
    },
    {
        title: 'Mavericks Home Opener',
        date: '2026-10-28',
        time: '19:30:00',
        remaining: '2026-10-28 19:30:00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSE7ynN5eHUqra1o4DECP8lpeBgzjbMlpam2CKGkZTVw&s=10',
        location_id: 2
    },
    {
        title: 'Holiday Skate Spectacular',
        date: '2026-12-12',
        time: '14:00:00',
        remaining: '2026-12-12 14:00:00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3E1J-luS5GT6eyIl_oOpuuIALfGU1EikUvy8J6N2Krg&s=10',
        location_id: 3
    }
    
]

export default eventData