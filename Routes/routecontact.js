const express = require ('express');
const Contact=require('../Model/Contact');

const routeContact=new express.Router()


routeContact.route("/contact")
.post((req, res) => {
    var myData = new Contact(req.body);
    myData.save();
    res.send();
})
.get((req, res) => {
    Contact.find().then(function(user_data)
    {
        res.send(user_data);
    }).catch(function(e)
    {
        res.send(e);
    });
});

module.exports=routeContact