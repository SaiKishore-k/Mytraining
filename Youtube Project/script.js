var Products;
let perPageItems=5;
let totalrecords=15;
let totalPages=totalrecords/perPageItems;
let flag=false;
let temp=1;

function getprod(){
    flag=true;
    var searchValue=document.getElementById('SearchContent').value;
    let url=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC7TfVTE5WaynZlTBlI_s2ZP4qrg8jQYN0&type=video&maxResults=15&q=${searchValue}`
    fetch(url)
    .then((response) => response.json())
    .then(function (data) {
        Products=data
        renderProducts();
    });
}
window.onresize=()=>{
    renderProducts();
}
function renderProducts(){
    document.getElementById("Output").style.justifyContent="space-between";
    if(screen.width <= 500){
        document.getElementById("Output").style.justifyContent = "center";
        perPageItems=1;
        totalPages=totalrecords/perPageItems;
    }
    else if(screen.width <= 960 && screen.width>500){
        perPageItems=3;
        totalPages=totalrecords/perPageItems;
    }
    else{
        perPageItems=5;
        totalPages=totalrecords/perPageItems;
    }
    if(flag){
        pagesCount();
        information(1);
    }
}
function pagesCount(){

    var num=document.getElementById('pagesCount');
    num.innerHTML=``
    let pages=``
    for(let x=1;x<=totalPages;x++){
        pages+=`<button class="pages" id=${x} onclick=information(${x})>${x}</button>`
    }
    num.innerHTML+=pages;
}


function information(pagenumber){
    settingPageNumber(pagenumber);
    let start=(pagenumber-1)*perPageItems;
    let end=start+perPageItems;
    let output=document.getElementById('Output');
    if(start>=0 && end<=Products.items.length){
        html2=``
        for(elements of Products.items.slice(start,end)){
            html2+=`
            <div class="product">
                <div class="product-image">
                    <img src="${elements.snippet.thumbnails.medium.url}" alt="thumbnail-image" width=250px height=150px>
                </div>
                <div class="product-info">
                    <div id ="title">${elements.snippet.title}</div><br>
                    <div id = "channel">${elements.snippet.channelTitle}</div><br>
                    <div id="link">
                        <label>VideoLink: </label>   
                        <a href="https://www.youtube.com/watch?v=${elements.id.videoId}">Click This</a>
                    </div>
                    <div id ="description" >${elements.snippet.description}</div>
                    <div id ="publishTime">
                        <label>publishTime: </label> ${elements.snippet.publishTime}
                    </div>
                </div>
            </div>
            `
        }
        output.innerHTML=html2;
    }
}

function settingPageNumber(pagenumber){
    let previousPage= document.getElementById(temp).style;
    previousPage.backgroundColor="blue";
    previousPage.fontSize="large";
    temp=pagenumber;

    let currentPage=document.getElementById(pagenumber).style;
    currentPage.backgroundColor="red";
    currentPage.fontSize="x-large";
}