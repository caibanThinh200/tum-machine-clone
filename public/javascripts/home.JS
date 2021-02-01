// change slide 
let j =0;
let images= [];
let time = 1500;
images[0]='/images/Web Pictrure/iamge/Web image/banner 1.jpg';
images[1]='/images/Web Pictrure/iamge/Web image/banner 2.jpg';
images[2]='/images/Web Pictrure/iamge/Web image/banner 3.jpg';
function changeImage(){
document.slides.src = images[j]
if(j < images.length-1){
    
    j++;
}
else
j=0
setTimeout("changeImage()",time);
}
window.onload=changeImage;





// scroll effect
$('.scrollTo').click(function() 
        {
            let getElem = $(this).attr('href');
            let targetDistance = -10;if ($(getElem).length) {
            let getOffset = $(getElem).offset().top;$('html,body').animate({scrollTop: getOffset -targetDistance}, 1000);}
            return false;});


  
    if (!('fetch' in window)) {
    console.log('Fetch API not found, try including the polyfill');
    }
     else console.log('Fetch API is installed');          
 
         
// Modal
let modal = document.getElementsByClassName("modal")[0];
let modalButton = document.getElementsByClassName("btn-success")[0];
let checkButton = document.getElementsByClassName("order")[0];
let close = document.getElementsByClassName("close-footer")[0];
let closeX = document.getElementsByClassName("close")[0];
modalButton.addEventListener('click',function(){
  modal.style.display = "block";
  
})  

close.addEventListener('click',function(){
  modal.style.display = "none";
})
closeX.addEventListener('click',function(){
  modal.style.display = "none";
})
checkButton.addEventListener('click',function(){
  alert("Đã thanh toán thành công");
  modal.style.display = "none";
  let cartRows = document.getElementsByClassName('cart-row');
  for(let i=0; i < cartRows.length; i++){
  let  cartRow = cartRows[i] 
  const product = {
    "url":  cartRow.getElementsByClassName('product-image')[0].src,
    "title": cartRow.getElementsByClassName('cart-item-title')[0].innerHTML,
    "price": cartRow.getElementsByClassName('cart-price')[0].innerHTML
  }
  
  const products = async () => {
    const response = await fetch('/homepage',{
      method: 'POST',
      body: JSON.stringify(product),
       headers: {
      'Content-Type': 'application/json'
    }
    });
    const myJson = response.json();
    }
    products();
  }
})
    
   

 
//Xoa san pham trong gio hang
let removeCart = document.getElementsByClassName("btn-danger")
for(let i = 0; i < removeCart.length;i++){
  let button = removeCart[i];
  button.addEventListener('click',function(){
    del_btn = event.target;
    del_btn.parentElement.parentElement.remove();
    updatecart();
    
  })
}

//cap nhat gio hang
function updatecart() {
  
  let cart_rows = document.getElementsByClassName("cart-row");
  //console.dir(cart_rows[0].cells[1].childNodes[0].value)
  let total = 0;
  let totals = 0;
  
  for(let i = 0; i < cart_rows.length; i++) {
    
    let quantity = cart_rows[i].cells[1].childNodes[0].value;
    //let price = cart_rows[i].cells[2].innerText ;
    total = (cart_rows[i].cells[2].innerText *quantity)
    cart_rows[i].cells[3].innerText = total + 'VND';
    totals = totals + total ;
    document.getElementsByClassName("number")[0].innerText = totals + ' VND';
    }
}
  

  //so luong sp thay doi thi gia cung thay doi theo
  let cart_rows = document.getElementsByClassName("cart-row");
  for(let i = 0;i < cart_rows.length ;i++){
  let quantity_input = cart_rows[i].cells[1].childNodes[0];

  quantity_input.addEventListener('change',function(){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
      }
      updatecart();
    })
   }

   //add sp vao gio hang
var product_list = document.getElementsByClassName('clothe-column')
for(let i = 0 ; i <= product_list.length;i++){
let product_info = product_list[i]
let add_cart = product_info.getElementsByClassName("add-to-cart")[0]
console.log(add_cart);
add_cart.addEventListener("click",function(){
  let product_tittle = product_info.getElementsByClassName("content-product")[0].innerText
  
  let product_iamge = product_info.getElementsByClassName("shop-image")[0].src
  
  let product_price = product_info.getElementsByClassName("clothes-price")[0].innerText
 
  addItemToCart(product_tittle,product_price,product_iamge)
  updatecart()
  
  })
}
  
  function addItemToCart(title, price, img) {
      var cartRow = document.createElement('tr')
    cartRow.classList.add('cart-row')
    console.log(cartRow)
    
    let contentTable = document.getElementsByClassName("content-table")[0]
    
    
   
      
    
     var cartRowContents = `
     <td class="cart-column cart-item "><img name="productImage" class="product-image" src="${img}" /><span class="cart-item-title" name="productTitle">${title}</span></td>
     <td class="cart-column cart-num"><input class="cart-num-input" type="number" value="1"/><button class="btn btn-danger">Xóa</button></td>
     <td class="cart-column"><div class="cart-price" name="cartPrice">${price}</div></td>
     <td class="cart-column"><div class="cart-total"></td>
` 

  cartRow.innerHTML = cartRowContents
    console.log(cartRow);
    contentTable.appendChild(cartRow)
    cart_title = cartRow.getElementsByClassName('cart-item-title')
    console.log(cart_title[0].innerText)
    for(let i = 0 ; i < cart_title.length;i++){
    
    
      
       alert('Đã thêm vào giỏ hàng')
    }
   cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
    console.log(true);
    
   }) 
   cartRow.getElementsByClassName('cart-num-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
   })
  }
  
  
  
  


   
   
  
   
  
  

 
   
   