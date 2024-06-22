document.querySelector(".js-go").addEventListener('click',function(e){
    var input=document.querySelector("input").value;
    getData(input);
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    var input=document.querySelector("input").value;
    console.log(input)
    if(e.which === 13) {
        getData(input);
    }
});


function getData(data) {
    let container = document.querySelector(".keyword");
    container.innerHTML = data;
    var keyword = data.split(" ").join("+");
    var url="https://api.giphy.com/v1/gifs/search?q="+keyword+"&api_key=iQvfwH6oEptRSa5EUeHi5hcrGBQ43O9c";

    // AJAX, Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET',url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e){

        var data=e.target.response;
        pom(data);
    });
}
function pom(input){
    
    var response = JSON.parse(input);
    clearResult();
    var imageUrls = response.data;
   // var container = document.querySelector(".js-container");

    imageUrls.forEach(function(image){
        var src = image.images.fixed_height.url;
        console.log(src);

        var container = document.querySelector(".jscontainer");
        container.innerHTML +=  "<img src=\""+ src + "\" class=\"jscontainer-image\">";
});
}
function clearResult() {
    let container = document.querySelector(".jscontainer");
    container.innerHTML = " ";
}
