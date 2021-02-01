let homepage = document.getElementsByClassName('clothes');
for(let i = 0 ;  i < homepage.length;i++){
homepage[i].addEventListener('click',function(e){



    const userAction = async () => {
    const response = await fetch('/homepage');
    const myJson = await response.json(); 
    console.log(response);
    };
 userAction(); 
});
};