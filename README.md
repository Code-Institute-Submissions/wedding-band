# Wedding Band Website

## Overview

### What is this site for?

This is a site to represent a band who specialize in weddings and corporate events.

### What does it do?

This site provides visitors with information about the band, audio examples etc. It also provides a means of contacting the band, signing up to a newsletter and checking available dates, prices etc.

### How does it work?

The site is built using AngularJS which handles page routing and is used for custom directives and services. I built a custom service to provide a list of available dates to the user when they click on a button. This is just to show an example of how a service could be used as there is no backend functionality to this site. As well as this I used custom HTML5, CSS3 and Javascript along with Bootstrap and AngularStrap to give the site it's design and functionality.

### Testing

The site has been tested extensively in Chrome, Firefox and Safari but only briefly in IE.



## Features

### Existing features
- Picture carousel
- Newsletter signup
- Contact form
- Social links
- Audio and video clips
- Button to check available dates


## Bugs

### Existing bugs
- The back-to-top link at the bottom of each page only works once per page refresh. However, as there is also a back-to-top arrow present once the user has scrolled past a certain point on the page which works all the time this bug was not given priority.


## Tech Used

### Some of the tech used includes:
- [AngularJS](https://angularjs.org/)
	- I use **AngularJS** to handle page routing and build custom directives and services
- [Bootstrap](http://getbootstrap.com/)
	- I use **Bootstrap** to give the project a simple, responsive layout
- [AngularStrap](http://mgcrea.github.io/angular-strap/)
	- I use **AngularStrap** for navbar functionality. To highlight the current tab
- [jQuery](https://jquery.com/)
	- I use **jQuery** to simplify Javascript programming
- [npm](https://www.npmjs.com/)
	- I use **npm** to help manage some of the dependencies in the application
- [bower](https://bower.io/)
	- **Bower** is used to manage the installation of libraries and frameworks


### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that done you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request