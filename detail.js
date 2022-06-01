

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
