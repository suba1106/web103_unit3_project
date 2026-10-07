import 'dotenv/config'
import { pool } from './database.js'
import locationData from '../data/locations.js'
import eventData from '../data/events.js'

const createTables = async () => {
    // events references locations, so drop events first
    const createTablesQuery = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(100) NOT NULL,
            state VARCHAR(50) NOT NULL,
            zip VARCHAR(10) NOT NULL,
            image VARCHAR(255) NOT NULL
        );

        CREATE TABLE events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            remaining TIMESTAMP NOT NULL,
            image VARCHAR(255) NOT NULL,
            location_id INTEGER NOT NULL REFERENCES locations(id) ON DELETE CASCADE
        );
    `

    try {
        await pool.query(createTablesQuery)
        console.log('🎉 locations and events tables created successfully')
    } catch (err) {
        console.error('⚠️ error creating tables', err)
        throw err
    }
}

const seedTables = async () => {
    await createTables()

    // locations first so their ids (1-4) exist before events point to them
    for (const location of locationData) {
        const insertQuery = `
            INSERT INTO locations (name, address, city, state, zip, image)
            VALUES ($1, $2, $3, $4, $5, $6)
        `
        const values = [
            location.name,
            location.address,
            location.city,
            location.state,
            location.zip,
            location.image
        ]

        try {
            await pool.query(insertQuery, values)
            console.log(`✅ ${location.name} added successfully`)
        } catch (err) {
            console.error('⚠️ error inserting location', err)
        }
    }

    for (const event of eventData) {
        const insertQuery = `
            INSERT INTO events (title, date, time, remaining, image, location_id)
            VALUES ($1, $2, $3, $4, $5, $6)
        `
        const values = [
            event.title,
            event.date,
            event.time,
            event.remaining,
            event.image,
            event.location_id
        ]

        try {
            await pool.query(insertQuery, values)
            console.log(`✅ ${event.title} added successfully`)
        } catch (err) {
            console.error('⚠️ error inserting event', err)
        }
    }

    await pool.end()
}

seedTables()