var itemDatabase = require('./models/cartItemModels');
const  Mongoose  = require('mongoose');
var itemList = [
    new itemDatabase({
        imageURL:'/images/Web Pictrure/iamge/Web image/T- shirt Toxi.jpg',
        imageTitle:'T-shirt Toxic',
        imagePrice: 500000
    }),
    new itemDatabase({
        imageURL:'/images/Web Pictrure/iamge/Web image/Break-Tshirt.jpg',
        imageTitle:'Break-Tshirt',
        imagePrice: 500000
    }),
    new itemDatabase({
        imageURL:'/images/Web Pictrure/iamge/Web image/The Fallen Coat.jpg',
        imageTitle:'The Fallen Coat',
        imagePrice: 400000
    }),
    new itemDatabase({
        imageURL:'/images/Web Pictrure/iamge/Web image/KURO PANTS.jpg',
        imageTitle:'Retro Texas T-shirt',
        imagePrice:700000
    }),
    new itemDatabase({
        imageURL:'/images/Web Pictrure/iamge/Web image/Sand Wash Skinny Fit Denim.jpg',
        imageTitle:'Sand Wash Skinny Fit Denim',
        imagePrice:300000
    }),
    new itemDatabase({
        imageURL:"/images/Web Pictrure/iamge/Web image/Skinny Low Denim V2- Black.jpg",
        imageTitle:"Black cropped raw jeans",
        imagePrice:300000
    }),
    new itemDatabase({
        imageURL:"/images/Web Pictrure/iamge/Web image/Destroyer Denim - Pale blue.jpg",
        imageTitle:"Destroy Denim",
        imagePrice: 300000
    }),
    new itemDatabase({
        imageURL:"/images/Web Pictrure/iamge/Web image/Fade Denim.jpg",
        imageTitle:"Cropped pants Black",
        imagePrice:300000
    })
    
];
var done = 0;
for(let i = 0; i < itemList.length;i++){
    itemList[i].save(function(err,result){
        done++;
        if(done == itemList.length){
            exit();
        }
       
    });
    console.log(itemList[i]);
};
function exit(){
    Mongoose.disconnect();
}
module.exports=itemList;
