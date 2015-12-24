$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = { part: 'snippet',
  q: searchTerm, 
  //fields: 'items(id(videoId), snippet(title, channelTitle, thumbnails))', 
  key: "AIzaSyCNEAiyl5S5cTRH5EbMPTo5Ii4HoeLntCQ" }; // a JS object containing name:value pairs
var url = 'https://www.googleapis.com/youtube/v3/search?';

$.getJSON(url, params, function(data) {
      myData = data.items; //the array returned by the search
//console.log(myData[0]);
      showResults(myData);
  });

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.snippet.title + '</p>';
    console.log(value.title);
  });
  $('#search-results').html(html); 
}
};
