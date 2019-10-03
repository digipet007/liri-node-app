# liri-node-app

Liri is a language interpretation and recognition interface, written in Javascript. It is a node app that takes in parameters and returns data via the command line.  Liri can be used to search Spotify for songs, Bands in Town for concerts, and OMDB for movies. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To utilize Liri, you will need access to the command line. You may use the command line within VS Code or any other command line interface, such as Bash (Born-Again-SHell).

You will also need the Node Packet Manager installed.  For more information, visit: <https://www.npmjs.com/get-npm>

### Installing

To install, access the Github page (https://github.com/digipet007/liri-node-app).  You may fork the repository and then clone it to your computer.  

```
After this, you will need to create a separate file within your repository called `.env` 

NOTE: You will need Spotify API keys for this step. Set up a Spotify account if you don't already have one at: <https://developer.spotify.com/my-applications/#!/> Register your application and create your Spotify API keys at <https://developer.spotify.com/my-applications/#!/applications/create>

Then, enter the following code, replacing the values "your-spotify-id" and "your-spotify-secret" with your API keys (no quotes): 

# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```
Next, you will need to download the required NPM packages.  The required NPM packages include:
    "axios": "^0.19.0",
    "dotenv": "^8.1.0",
    "moment": "^2.24.0",
    "node-spotify-api": "^1.1.1",
    "request": "^2.88.0",
    "spotify": "^0.3.0"

Because these are listed as dependencies already in the package.json file, you may install these packages by typing `npm install` on the commandline.
```
Your Liri node app should now be up and running!
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* Javascript

The following packages wee used to create this app:
* axios
* dotenv
* moment
* node-spotify-api
* request
* spotify

This app utilizes the following APIs:
* Spotify
* Bands in Town
* OMDB

## Author

**Sarah Arnold** --view my portfolio and bio: (https://digipet007.github.io/Sarahs-Portfolio/)

## Acknowledgments

* Created for UW Full Stack Flex Certificate program, according to program specifications.