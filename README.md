# The  Weather Finder 
a Hackerrank coding challenge by Fielmann AG:

- This project is a simple weather finder application build for Fielmann AG Germany. solving the hackerrank weather finder coding challenge as a part of the the Front-End Fokus technical interviewing process. 

# cloning Tips

- After you clone or download the repository code from github to  your pc , you can open it with the visual studio code please be sure that Node.js v12.16.1 or higher is installed on your pc.

- Please navigate to the project directory then write the command 
"npm install" in the terminal to install the required packages.

- It could be  after executing "npm install"  that still some packages dependencies not installed so please read the log message it will recommend you which package to install if need it. for example some package maybe needed for using scss instead of css

- When all packages is installed you can write the command
"ng serve" that will lunch the demo at the url http://localhost:4200/demo/fielmann its a sub routing module as a child from the main application module where you can test the demo as it shown in the animated user guide below.



## Live Demo

This is the latest version of the master branch contain the weather finder demo
which covered this test cases: 

- should suggest items on typing city name.
- selecting a suggestion should change the input field value to the selected city\'s name.
- it add the contents to the selected section on selecting an option.
- result should have final call results and show weather details for the selected city.
- should show "No Info available " message if the data is empty.
- should show "No Info available " message in red color.
- should have a reset button which resets all entries.

## Versions

Angular CLI: 1.7.3
Node: 12.16.1
OS: win32 x64
Angular: 5.2.9
@angular/material: 5.2.4

## Testing Dataset
the demo is using  a constant states array contain the data for a four german cities [Hamburg,Frankfurt,Berlin,Bremen] just to perform the required cities suggestion.

data structure:
State {
  flag: string;
  name: string;
  weather: string;
  status: string;
  }  

beside the hard coded array data there is a flag for every german city which is linked to   https://commons.wikimedia.org/wiki so please keep connected to the internet to be able to see the flags.

## Screenshots
Here is an animated user manual to show the basic functionalities which meet every test case as described as above.  

![The Weather Finder Demo](https://github.com/majorx0xTom/fielmann/blob/master/screenshots/weatherfinderdemo.gif)

