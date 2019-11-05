const express = require('express');
const router = express.Router();
const Contact = require('../model/contacts');

//Retrieving contacts
router.get('/contacts',(req,res,next)=>{
    // res.send('Contact list is working');
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//Add contacts
router.post('/contact',(req,res,next)=>{
    // res.send('Post list is working');
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
    });
    newContact.save((err,contact)=>{
        if(err){
            console.log('###',err);
            res.json({msg:'failed to add contact'});
        }
        else{
            res.json({msg:'Contact Added successfully'});
        }
    })
});

//Delete contacts
router.delete('/contacts/:id',(req,res,next)=>{
    res.send('Delete list is working');
    Contact.findOneAndRemove({_id:req.param.id},function(err,result) {
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});
module.exports = router;


