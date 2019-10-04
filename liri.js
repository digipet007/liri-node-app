//Packages
require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require('axios');
var request = require('request');
var fs = require('fs');
var moment = require("moment");

//import keys.js file and store it in a variable
var keys = require("./keys.js");

//access keys information
var spotify = new Spotify(keys.spotify);

//read the random.txt file
var doWhatItSays = function() {
  fs.readFile('random.txt', 'utf8', function (err, data) {
    if (err) throw err;
    var dataArr = data.split(',');
    var command = dataArr[0];
    var lookThisUp = dataArr[1];
    console.log(lookThisUp);
    switch(command){
      case 'spotify-this-song':
        searchSpotify(lookThisUp);
        break;
      case 'movie-this':
        getMovie(lookThisUp);
        break;
      case 'concert-this':
        getVenue(lookThisUp);
        break;
      default: 
      console.log("LIRI doesn't know that");
    }
  });
}

//search the bands in town API
var getVenue = function(artistName){
  request("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp", function (error, response, body) {
    if (error){
      console.log('error:', error); // Print the error if one occurred
    }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var jsonData1 = JSON.parse(body);
  console.log(artistName);
  console.log('Venue: '  + jsonData1[1].venue.name);
  console.log('Venue location (city): ' + jsonData1[1].venue.city);
  console.log('Venue location (country): ' + jsonData1[1].venue.country);
  console.log("Date of the Event: " + moment(jsonData1[1].datetime).format("L"));
});
}  

//If no song is provided then your program will default to "The Sign" by Ace of Base.
//Search Spotify functions=====================================================================================
var getArtistNames = function(artist){
  return artist.name;
}
var searchSpotify = function(songname) {
  if (!songname){
    songname = "The Sign";
  }
  spotify.search({ type: 'track', query: songname }, function(err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }
    var songs = data.tracks.items;
    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log('artist(s): ' + songs[i].artists.map(getArtistNames));
      console.log('song name: ' + songs[i].name);
      console.log('preview song: ' +songs[i].preview_url);
      console.log('album: ' + songs[i].album.name);
      console.log('-------------------------------------------------------')
    }
  });
}

//Search OMBD =============================================================================================================
var getMovie = function(movieName){
  request('http://www.omdbapi.com/?t=' + movieName + '&apikey=trilogy', function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  //print OMDB movie search results to the console
  var jsonData = JSON.parse(body);
  console.log('Title: ' + jsonData.Title);
  console.log('Year: ' + jsonData.Year);
  console.log('Rated: ' + jsonData.Rated);
  console.log('IMDB Rating: ' + jsonData.imdbRating);
  console.log('Country: ' + jsonData.Country);
  console.log('Language: ' + jsonData.Language);
  console.log('Plot: ' + jsonData.Plot);
  console.log('Actors: ' + jsonData.Actors);
  console.log('Rotten Tomatoes Rating: ' + jsonData.Ratings[1].Value);
  console.log('URL: ' + jsonData.Website);
});
}

//switch cases allow users to specify the function
var pick = function(caseData, functionData) {
  caseData = process.argv[2];
  functionData = process.argv.slice(3).join("+");
  switch(caseData){
    case 'spotify-this-song':
      searchSpotify(functionData);
      break;
    case 'movie-this':
      getMovie(functionData);
      break;
    case 'do-what-it-says':
      doWhatItSays();
      break;
    case 'concert-this':
      getVenue(functionData);
      break;
    default: 
    console.log("LIRI doesn't know that");
  }
}

pick();