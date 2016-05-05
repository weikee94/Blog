---
layout: post
title: Jekyll Setup 
date: 2016-05-05
comments: true
---

## Jekyll Installation

First of all you need to find the path which is contain the folder the cloning one then in open your terminal type in

    jekyll serve --watch --baseurl ""
	
This is the command line to open jekyll

    localhost:4000
	
Type localhost:4000 to use live view function

#### _site

There will be a default folder which is contain the final version of your website which you normally see in the local server.

#### _include

There will be a include folder can contain navigation which means all file using same navigation can simply use include to achieve that 

#### Syntax

     example
	 
#### Simple Demonstration

    ---
	layout: post
	title: First Post
	meta: This is very first post
	source: http
	category: science
	---

Category are used to differentiate which type of post 

#### Limit post

    limit:2
	
#### Permalink

    permalink: pretty
	
Permalink in config.yml set to pretty will hide the extension name

i.e. Instead abc.html become abc/