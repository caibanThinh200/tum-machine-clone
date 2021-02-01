//rendering
var csurf = require('csurf');
var csurfProctection  = csurf();
var search = require('elasticsearch');
const clients = new search.Client({
    hosts: [ 'http://localhost:3000']
 });
 clients.ping({
    requestTimeout: 30000,
}, function(error) {
// at this point, eastic search ./is down, please check your Elasticsearch service
    if (error) {
        console.error('Elasticsearch cluster is down!: '+error);
    } else {
        console.log('Everything is ok');
    }
    
});
const Mongoose = require('mongoose');
const server = 'localhost:27017';
const database = 'ShoppingCart';
Mongoose.connect(`mongodb://${server}/${database}`)
.then(()=>{
    console.log('mongoose connect success');
})
.catch((err)=>{
    console.log('mongodb connect fail:'+err);
});
var nodemailer =  require('nodemailer');
var express = require('express');
var route = express.Router();
const loginControllers = require('../controllers/loginControllers');
const signUpControllers = require('../controllers/signUpController');
const cartItems = require('../itemList'); 
route.use(csurfProctection);
route.get('/shoppingCart',function(req,res,next){
    
    cartItems.find(function(docs,err,arr){
       // res.render('shoppingCart',{title:"Shopping Cart",product:arr}); 
       res.send(arr)
   });
});     

route.get('/',function(req,res,next){
    let data = [];
    cartItems.forEach(function(docs,num,arr){
        
        // for(let i = 0 ; i< arr.length ; i++){
        //     data.push(arr[i]);
        // };
        
        res.render("home",{product:arr})
    }) ;
      
      
   
});
route.get('/login',function(req,res,next){
    res.render('SignInForm');
});
route.get('/search',function(req,res,next){
    console.log(req.query.search);
   
    var name_search = req.query.search;
   
    var result = cartItems.filter((item)=>{
        return item.imageTitle.toLowerCase().indexOf(name_search.toLowerCase()) !== -1;
    })
     res.render('home',{product:result});   
});
route.post('/login',function(req,res,next){
})
route.get('/SignUp',function(req,res,next){
    res.render('SignUp');
})

route.post('/SignUp',function(req,res,next){

    console.log(true);
});    
route.post('/send',function(req,res,next){
    var transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            username:'mailsever@gmail.com',
            pass:'password'
        }
    });
    console.log(req.body.email)
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'caibanThinh',
        to: 'role1thn@gmail.com',
        subject: 'Test Nodemailer',
        text: 'You recieved message from ' + req.body.email,
        html: '<p>You have got a new message</b><ul><li>Username:' + req.body.name + '</li><li>Email:' + req.body.email + '</li></ul>'
    };
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err);
            res.redirect('home');
        } else {
            console.log('Message sent: ' +  info.response);
            res.redirect('home');
        };
    
    });
});
module.exports = route;

  



    
    



  

 
    
     


             
  
   
    
     



   
    
      


     
 
    








		

    
   
      
     

  
   
