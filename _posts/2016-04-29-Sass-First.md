---
layout: post
title: First Post of Sass
date: 2016-04-29
comments: true
---

Hey 
This is my first learning about how to using SCSS/SASS

## Installation (under MAC)
First of all, open your terminal and enter **gem -v** to detect the version of gem in your computer.

After that, enter **sudo gem install sass** this will fetching teh sass packages and install in your os.

Finally, enter **sass -v** to check whether you install the correct version.

**sass -h** will show all the function which is available.

### Useful command 
**cd fileDirectory**
This is the first step which link to the correct directory. 

**sass-convert example.scss example.sass**
This is how normally change the scss file to sass file

**sass example.scss:example.css**
We can simply change the scss file to css by enter this command. Remember there is a example.css.map will be generated which is used for debugging purpose.

**sass --watch example.scss:example.css**
watch meaning that it can constanty see what have been change and terminal will show the changes of the file as well

##### Source map
If you dont want the .map file to be generate, then enter this command **--sourcemap=none**


### Style for embellish 
There are a few style available to allow change the view of css

**sass example.scss:example.css --style compact**

**sass example.scss:example.css --style compressed**
this is the smallest size of file with no white spaces

**sass example.scss:example.css --style expanded
most clear and tidy

### Remember
There is no way to watch scss change to sass, everytime you want to change from scss to sass you must enter this command **sass-convert example.scss example.sass**
Other than that, in sass file indention is everything which the sass file will occur error if there is not indention

### Variable in SCSS
Every variable is started with a dollar sign$ in order to declareand have a name after that (dont allow have special character and spaces)
i.e. **$variable: 100px**

### Variable in SASS
Every variable is occupy one line because the difference between sass and scss is sass dont have the colon to close it 
i.e. **$variableOne: 100px**
i.e. **$variableTwo: 150px**

![alt text]({{ site.baseurl }}/images/sass1.png)

### Demonstration SCSS -> CSS
    'scss'
	

    'css'
	![alt text]({{ site.url }}/images/sass2.png)