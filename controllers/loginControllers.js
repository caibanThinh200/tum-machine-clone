const firebase = require("firebase/app");
require("firebase/auth");
async function loginController(req, res) {
     let email = req.body.email;
    let password = req.body.password;
    console.log(email,password);
            if (email && password) {
                try {
                    const loginResult = await firebase.auth().signInWithEmailAndPassword(email, password);
                    if (!loginResult.user.emailVerified) {
                        console.log(false);
                       
                        res.write('Wrong password');
                       
                    } 
                    else {
                        console.log("done");
                        res.render('home.ejs');
                      }
                } 
                catch (error) {
                    res.send("<p>login fail,wrong password or gmail</p>");
                     console.log(error);
                    
                }
            }
         }                      
module.exports = loginController;  
                          
       
                     
    
   
