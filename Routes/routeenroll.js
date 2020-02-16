const express = require ('express');
const Enroll=require('../Model/Enroll');

const routeEnroll=new express.Router()


routeEnroll.route("/enroll")
.post((req, res) => {
    var myData = new Enroll(req.body);
    myData.save();
    res.send();
})
.get((req, res) => {
    Enroll.find().then(function(user_data)
    {
        res.send(user_data);
    }).catch(function(e)
    {
        res.send(e);
    });
});

module.exports=routeEnroll