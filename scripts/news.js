//news script-this will cause a news snippet to be displayed for a few seconds then change.
let readTime = 5000;
let newsPage = 0;
let then = Date.now();

let newsText = document.getElementById("news_snippet");

let newsArr = ["My group and I have started working on our project for Adv. Game Dev: Horizontal Tetris.",
                "For Software Engineering, I\'m also in a group project to create a quiz browser app.",
                "This page will continue to get updates as time allows."];

function populateNews(news){
    newsText.innerHTML = newsArr[news];
    then = Date.now();
}

function fetchNews(){


    if(newsPage < (newsArr.length - 1)){
        newsPage++;
    }else{
        newsPage = 0;
    }
    return newsPage;
}

function main(){
    let now = Date.now();
    if(now - then > readTime){
        populateNews(fetchNews());
    }
    requestAnimationFrame(main);
}

main();