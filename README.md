# liri-node-app

Liri is a language interpretation and recognition interface, written in Javascript. It is a node app that takes in parameters and returns data via the command line.  Liri can be used to search Spotify for songs, Bands in Town for concerts, and OMDB for movies. 
Liri can also read these commands from a random.txt file, rather than the command line, and return the requested data to the command line.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To utilize Liri, you will need access to the command line. You may use the command line within VS Code or any other command line interface, such as Bash (Born-Again-SHell).

You will also need the Node Packet Manager installed.  For more information, visit: <https://www.npmjs.com/get-npm>

### Installing

To install, access the Github page (https://github.com/digipet007/liri-node-app).  You may fork the repository and then clone it to your computer.  

After this, you will need to create a separate file within your repository called `.env` 

NOTE: You will need Spotify API keys for this step. Set up a Spotify account if you don't already have one at: <https://developer.spotify.com/my-applications/#!/> 
Register your application and create your Spotify API keys at <https://developer.spotify.com/my-applications/#!/applications/create>

Then, enter the following code, replacing the values "your-spotify-id" and "your-spotify-secret" with your API keys (no quotes): 

```
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```
Next, you will need to download the required NPM packages.  The required NPM packages include:
```
* "axios": "^0.19.0",
* "dotenv": "^8.1.0",
* "moment": "^2.24.0",
* "node-spotify-api": "^1.1.1",
* "request": "^2.88.0"
```
Because these are listed as dependencies already in the package.json file, you may install these packages by typing `npm install` on the commandline.

Your Liri node app should now be up and running!

## Deployment and General Use

To use this app, enter the following commands on the command line:

liri.js can take in one of the following commands:

   * `node liri.js concert-this` <"bandname" or "band name">

   * `node liri.js spotify-this-song` <"song or artist name">

   * `node liri.js movie-this` <"movie name">

   * `node liri.js do-what-it-says`

For a live demonstration of how to use this app, visit: <https://youtu.be/asly2DCG6dc>

## Built With

* Javascript

The following packages were used to create this app:
* Axios <https://www.npmjs.com/package/axios>
* DotEnv <https://www.npmjs.com/package/dotenv>
* Moment <https://www.npmjs.com/package/moment>
* Node-Spotify-Api <https://www.npmjs.com/package/node-spotify-api>
* Request <https://www.npmjs.com/package/request>
* FS <https://www.npmjs.com/package/file-system>

This app utilizes the following APIs:
* Spotify <https://www.npmjs.com/package/node-spotify-api>
* Bands in Town <http://www.artists.bandsintown.com/bandsintown-api>
* OMDB <http://www.omdbapi.com>

## Author

* **Sarah Arnold** --view my portfolio and bio: <https://digipet007.github.io/Sarahs-Portfolio/>

## Acknowledgments

* Created for UW Full Stack Flex Certificate program, according to program specifications.