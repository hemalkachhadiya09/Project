function loadCoupon()
{
    document.getElementById("Coupon").style.display="block"
}
function closeCoupon()
{
    document.getElementById("Coupon").style.display="none"
}

function changeMode(){
    
    let mybody = document.body;
    
    mybody.classList.toggle('mydark');
    
    
   
    
   
    
}
function myfunction()
{
    let cdm = Array.from(document.getElementsByClassName('nav1'));
    console.log(cdm)
    cdm.map(element=>element.classList.toggle('cg'))
    
}



