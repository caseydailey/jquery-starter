
//wrap the whole thing in this to ensure jquery's not trying to get elements that do not yet exist
$(document).ready(function(){


// vanilla
// document.getElementById("top-article");


// jquery

let article = $('#top-article');
console.log("article");

// vanilla
// article.innerText = "whaddup";

// jquery
article.text("WHADDUUUUP?!?!");

// get all the buttons 
let button = $("button");


let mainArticles = $(".articles--main");
mainArticles.each(function(Index, currentElement){
    console.log("jqueryElement", $(currentElement).html());
});

var umbrellaOpen = $("h1[umbrella='open']");
console.log("umbrellaOpen.html(): ", umbrellaOpen.html());
 
var allChildren = $(".container").children();
console.log("allChildren", allChildren);

// TODO show a bunch of cool DOM manipulation......




// super cool ajax api

$.ajax({
    url: "javascripts/songs.json"
}).done(callback);

function callback(songs){
    console.log("songs from ajax", songs);
    for (var i = 0; i < songs.songs.length; i++) {
        var currentSong = songs.songs[i];
        $("#list-of-songs").append("<h1>" + currentSong.title + "</h1>");
        $("#list-of-songs").append("<div>" + currentSong.title + "</div>");
        $("#list-of-songs").append("<div>" + currentSong.title + "</div>");
    }
}


//you can spread the jQuery object into an array
//if you want access to array properties
let $divs = $("div");
console.log("$divs: ",  $divs);

let divsArray = [...$divs];
console.log("divsArray:", divsArray);


});