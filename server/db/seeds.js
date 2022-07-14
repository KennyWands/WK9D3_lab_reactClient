const Db = require("mongodb/lib/db");

use bookings_hub;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Michael",
        email: "mic@gmail.com",
        inDate: "13/7/22",
        outDate: "17/7/22",
        status: true
    },
    {
        name: "Kenny",
        email: "ken@gmail.com",
        inDate: "18/7/22",
        outDate: "24/7/22",
        status: false

    },
    {
        name: "Bob",
        email: "bob@gmail.com",
        inDate: "25/7/22",
        outDate: "28/7/22",
        status: false
    }
]);
