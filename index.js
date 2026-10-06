import express from 'express'
import pg from 'pg'

const app = express()
const port = 3000
const { Pool } = pg

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: '17Bahari2005',
    port: 5432,
})

app.get('/', (req, res) => {
    pool
        .query('SELECT * FROM biodata ORDER BY id ASC')
        .then((result) => {
            res.send(result.rows)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).send('Internal Server Error')
        })
})

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`)
})