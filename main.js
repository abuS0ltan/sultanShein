let products=[];
let productContent=document.querySelector('.productContent');
async function getData(){
    let data =await fetch('https://fakestoreapi.com/products');
    return data.json();
}
(async()=>{
    products= await getData();
    console.log(products);
    await displayData();
})()
async function displayData(){
    let content='';
    for (let index = 0; index < products.length; index++) {
        content=content+`
            <div class="col-md-4">
                    <div class="item mb-3">
                        <div class="image">
                          <div class="overlay"></div>
                            <img src="${products[index].image}" alt="">
                            <button class="btn btn-dark" onclick="displayDataSlider(${index})"> quick view</button>
                          </div>
                        <div class="info">
                            <h3 class="itemTitle">
                                ${products[index].title}.
                            </h3>
                            <div class="d-flex">
                                <span class="price">${products[index].price}$</span>
                                <span><i class="fa-solid fa-heart"></i></span>
                            </div>
                            
                        </div>
                        
                        
                    </div>
            </div>
        `
    }
    productContent.innerHTML=content;
}
//
var item=document.querySelectorAll(".item img");
var slider = document.getElementById("slider");
var closeBtn =document.getElementById("close");
var sliderImg=document.getElementById("sliderImg");
var prevBtn=document.getElementById("prev");
var nextBtn=document.getElementById("next");
var curentIndex;
var number=document.getElementById("number");
var itemsList=document.getElementById("itemsList");
let productInfo =document.querySelector('.productInfo');
let body=document.querySelector('body');
closeBtn.addEventListener("click",function(){
    slider.style.display="none";
    body.style.overflow='auto';
})
prevBtn.addEventListener("click",function(){
    curentIndex--;
    changeImg();
})
nextBtn.addEventListener("click",function(){
    curentIndex++;
    changeImg();
})
function changeImg(){
    if(curentIndex>products.length-1){
        curentIndex=0;
    }
    else if (curentIndex<0){
        curentIndex=products.length-1;
    }
    sliderImg.src=products[curentIndex].image;
    number.innerHTML=`${curentIndex+1}/${products.length}`;
}
//key
document.addEventListener("keydown",function(e){
    if(e.key=="ArrowRight"){
        curentIndex++;
        changeImg();
    }
    else if (e.key=="ArrowLeft"){
        curentIndex--;
        changeImg();
    }
    else if(e.key=="Escape"){
        slider.style.display="none";
    }
});

//displayData
function displayDataSlider(index){
    slider.style.display="flex";
    sliderImg.src=products[index].image;
    curentIndex=index;
    productInfo.innerHTML=products[index].description;
    number.innerHTML=`${curentIndex+1}/${products.length}`;
    body.style.overflow='hidden';
    console.log(index)
}
addEventListener('keyup',function(e){
    console.log(e);
})