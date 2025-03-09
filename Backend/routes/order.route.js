const express = require("express");
const axios = require("axios");
const router = express.Router();
const Order = require("../models/order.model");

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.order_date });

    console.log("Email:", req.body.email);

    // Check if email exists in the database
    let eId = await Order.findOne({ 'email': req.body.email });
    console.log(eId);

    if (eId === null) {
        try {
            console.log(data);
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error: " + error.message);
        }
    } else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.json({ success: true });
                });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error: " + error.message);
        }
    }
});

router.post("/myorderdata", async (req, res) => {
    try {
        let data = await Order.findOne({ "email": req.body.email });
        res.json({ orderData: data });
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
});

router.post('/getlocation', async (req, res) => {
    try {
        let lat = req.body.latlong.lat;
        let long = req.body.latlong.long;
        console.log(lat, long);
        let location = await axios
            .get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`)
            .then(async res => {
                console.log(res.data);
                let response = res.data.address;
                let { village, county, state_district, state, postcode } = response;
                return String(village + "," + county + "," + state_district + "," + state + "\n" + postcode);
            })
            .catch(error => {
                console.error(error);
                return "Location not found";
            });
        res.send({ location });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error: " + error.message);
    }
});

module.exports = router;