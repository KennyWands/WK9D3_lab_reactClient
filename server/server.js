const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

app.use(cors());
app.use(express.json());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log(err);
    }
    const db = client.db('bookings_hub');
    const bookingsList = db.collection('bookings');
    const bookingsRouter = createRouter(bookingsList);
    app.use('/api/bookings', bookingsRouter);
})

app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`);
});