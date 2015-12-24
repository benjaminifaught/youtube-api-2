$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = { part: 'snippet', 
  type: 'video', 
  q: searchTerm, 
  order: 'viewCount', 
  relevanceLanguage: 'en', 
  maxResults: '10', 
  fields: 'items(id(videoId), snippet(title, channelTitle, thumbnails))', 
  key: AIzaSyCNEAiyl5S5cTRH5EbMPTo5Ii4HoeLntCQ }; // a JS object containing name:value pairs
var url = 'https://www.googleapis.com/youtube/v3/search?';

$.getJSON(url, params, function(data) {
      myData = data.items; //the array returned by the search
//console.log(myData[0]);
      loopAndParse();
  });

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);