const firebase = require("firebase/app");
require("firebase/auth");
function signUpControlller(req,res){
    let fullname = req.body.fullname;
    let birth = req.body.birth;
    let mail = req.body.mail;
    let userName = req.body.username;
    let password = req.body.password;
    let checkPass = req.body.repass;
    console.log(req.body);

    async function check() {
        
        if (fullname && userName  && birth && mail && checkPass  === password) {
            try {
               
                await firebase.auth().createUserWithEmailAndPassword(mail, password);
                firebase.auth().currentUser.updateProfile({});
                    firebase.auth().currentUser.sendEmailVerification();
                    console.log('Hàm này chạy được nè');
                    res.render('SignInForm.ejs');
                } catch (error) {
                    console.log(error);
                }
            }
                  
           
        }
        check();
    }
 module.exports = signUpControlller;
           
  
    
        
       
   
    

