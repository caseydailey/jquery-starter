console.log("Hello from next");

let howmanyBeans = 6;
let howmanyCows = 2;

$("#resultsBtn").click(()=>{
    resultFunction(houmanBeans, howmanyCows)
})

function resultFunction(a,b){
    let result = a * b;
    $("#result-1").html(`${result} random items of cows and beans`);
}



$('#scaryBtn').click(()=>{
    $("li").toggle();
    console.log("isHidden", $("li").is(":hidden"));
    $("li").is(":hidden") ? $("#scaryBtn").html("show") : $("#scaryBtn").html("Too Scary")
})

let storyItems = $(".story");

// for (var i = 0; i < storyItems.length; i++) {
//     storyItems[i].onmouseover= over;
//     storyItems[i].onmouseout= out;

// }

storyItems.each((index, story)=>{
    story.onmouseover = over;
    story.onmouseout = out;
})

function over () {
    this.style.backgroundColor = "pink";
}

function out () {
    this.style.backgroundColor = "#ffffff";
}

