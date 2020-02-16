const express = require ('express');
const Customer=require('../Model/Customer');
const auth=require('../Middleware/auth');
const router=new express.Router()


router.route("/register")
.post ((req, res,) => {
    var myData = new Customer(req.body);
    myData.save();
    res.send();
})
.get((req, res)=>{
    Customer.find().then(function(user_data)
    {
        res.send(user_data);
    }).catch(function(e)
    {
        res.send(e);
    });
});


router.post("/userlogin", async function(req, res){     
    try{         
    const user = await Customer.checkCrediantialsDb(req.body.username, req.body.password)         
    const token = await  user.generateAuthToken()        
    
    res.send({token:token,
        _id:user._id,
        email:user.email,
        name:user.name,
        address:user.address,
        image:user.image,
        phone:user.phone,
        username:user.username,
        password:user.password});  
    }
    catch{
        res.send("please login");
    }    
})

router.route("/customer/:id")
.get(auth,(req, res)=>{
    console.log(req.params.id)
    Customer.findById(req.params.id).then(function(user_data)
    {
        res.send(user_data);
        console.log(user_data)
    }).catch(function(e)
    {
        res.send(e);
    });
})
.put((req,res)=>
{
    Customer.findByIdAndUpdate({_id: req.params.id},req.body).then(function()
    {
        res.send({_id:user._id,
            
            email:user.email,
            firstname:user.firstname,
            lastname:user.lastname,
            phone:user.phone,
            username:user.username}); 
    }).catch(function(e)
    {
        res.send(e);
    })
});

router.post('/logout', auth, async (req, res) => {
    try {
    req.user.tokens = req.user.tokens.filter((token) => {
    return token.token !== req.token
    })
    await req.user.save()
    res.send("logout success")
    } catch (e) {
    res.status(500).send("failed")
    }
   })



module.exports=router