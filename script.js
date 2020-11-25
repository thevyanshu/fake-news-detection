// updated 2019
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);


window.onscroll = function() {scrollFunction()};


fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "0ae33e72b6msh9448ce8b201db69p1ef169jsn08e025406b32",
		"x-bingapis-sdk": "true"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});