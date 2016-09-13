---
layout: post
title: Front End Knowledge
date: 2016-09-13
comments: true
---

## Front end developer interview question

# HTML

#### What is three way handshake?
	A three-way-handshake is a method used in TCP/IP network to create a connection between a local host/client and server. Is is a three-step method that requires both client and the server to exchange SYN (Synchronize Sequence Numbers) and ACK (Acknowledgment) packets before actual data communication begins.

	* A client node send a SYN (syn=j) packet over an IP network to a server on the same or an external network and the status will be SYN_SENT.
	* The target server open ports that can accept and initiate new connections. When the server receives the SYN packet from the client node, it will verify the SYN (ack = j+1) then responds and return a confirmation receipt which either ACK packet or SYN/ACk packet and the status will be SYN_RECV.
	* The client node receives the SYN/ACK from the server and responds with an ACK packet (ack = k+1) and the status will be ESTABLISHED. 

#### What is OSI?
	OSI is stands for Open System Interconnection which is a reference model for how applications can communicate over a network and that consists of the following 7 layers.

	Application Layer
	Creates and communicates data to other processes or application
	Internet protocol suite: FTP, HTTP, IMAP, POP, SMTP, Telnet
	
	Transport Layer
	Deals with opening and maintaining connections
	Internet protocol suite: TCP, UDP
	
	Internet Layer
	Move data packets from node to ndoe
	Internet protocol suite: IPv4, IPv6
	
	Data Link Layer
	Describes the local networking topology and the interfaces
	Internet protocol suite: MAC
	
	Physical Layer 
	Conveys the bit stream through network at the electrical and mechanical level
	Internet protocol suite: MAC
	
	Presentation Layer
	Provides independence from differences in data representation by translating from application to network format and vice versa
	Internet protocol suite: None
	
	Session Layer
	Establishes, manages and terminate the connections between applications
	Internet protocol suite: None
	
#### Difference between cookies and sessions
	* Cookies are stored in the user's hard disk and sessions are not
	* A cookie can keep information in the user's browser until deleted or expired while session is available as long as the browser is opened
	* Sessions are popularly used as there is a chance of your cookies getting blocked if the user browser security setting is set high 
	
#### Difference between sessionStorage and localStorage
	sessionStorage and localStorage both extend Storage. The data stores in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site. For sessionStorage change are only availabel for current page and once the window is closed the storage is deleted.
	
#### Different input attributes
	* Value attribute specifies the initial value for an input field.
	* Readonly attribute specifie that the input field is read only.
	* Disabled attribute is unusable and un-clickable and its value will not be sent when submittig the form.
	* Size attribute specifies the size in characters for the input field.
	* Autofocus attributes specifies that the input field should automatically get focus when the page loads.
	* Placeholder attribute specifies a hint that describes the expected value of an input filed.
	* Required attribute specifies that an input field must be filled out before submitting the form.
	
#### How do browsers render a web page?
	* The DOM(Document Object Model) is formed from the HTML that is received from a server.
	* Styles are loaded and parsed forming a CSSOM (CSS Object Model).
	* On top of DOM and CSSOM, a rendering tree is created which is a set of objects to be rendered. Render tree reflects the DOM structure except for the invisible elements like <head> tag or element that have display:none. Each text string is represented in the rendering tree as a separate renderer and each of the rendering object contains its corresponding DOM object. In other words, the render tree describes the visual representation of a DOM.
	* For each render tree element, its coordinates are calculated which is called "layout". Browsers use a flow method which only required one pass to layout al the elements.
	* Finally, this gets actually displayed in a browser window and the process called "painting".
	
#### What is iFrame tag used for?
	An inline frame which usde to embed another document within the current HTML document.
	

	
# CSS

#### What is the "Box Model" in CSS?
	The CSS box model is fundamental to understanding layout and sizing and such. It is made up of width, height, padding, border and margin.
	
#### What are the benefits of SVG?
	SVG is an image format that is vector based and it is an efficient format for small file sizes. Able to scale them and they retain their sharpness at any size and also allow to affect parts of them with CSS and Javascript as well as SVG specific filters that can do things like blurring.
	
#### Vertically center in CSS
	First Method(Flexbox)
	.parent{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	Second Method
	.parent{
		position: relative;
	}
	.child{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	
#### Horizontally center in CSS
	First Method(used for inline elements)
	.center-inline{
		text-align: center;
	}
	
	Second Method(used for block elements)
	.center-block{
		margin:0 auto;
	}
	
#### What are sprites and why would use them?
	Sprites are essentially multiple images combined into one and the reason using is to reduce the request time in order improve the performance. 
	
#### What are the various technique for clearing floats?
	First Method
	<div style= "clear: both;">
	</div>
	
	Second Method
	.clearfix:after{
		content: ".";
		visibility: hidden;
		display: block;
		height: 0;
		clear: both;
	}
	
#### Difference between visibility: hidden and display: none?
	Display: none means that the tag will not appear on the page at all but still able to interact with it through the dom and there are no space allocated for it between the other tags.
	
	Visibility: hidden means that the tag is not visible but space is allocated for it on the page. The tag is rendered it just isn't seen on the page.
	
#### Static, absolute, relative, fixed? How do they differ?
	* Static which is the default for every single page element and it doesn't mean much it just means that the element will flow into the page as it normally would.
	
	* Relative is "relative to itself". Try to imagine if you set position: relative; but no other positioning attributes (top, left, bottom or right), it will no effect on it's positioning at all but if you do give it some other positioning attributes like top: 10px; it will shift position 10 pixels down.
	
	* Absolute which allows you to literally place any page element exactly where you want it. You use the positioning top, left, bottom and right to set the location. One thing to remember which these values will be relative to the next parent element with relative or absolute positioning. If there is no such parent, it will default all the way back up to the <html> element itself meaning it will be placed relatively to the page itself.
	
	* Fixed position element is positioned relative to the viewport or the browser window itself. The viewport doesn't change when the window is scrolled so a fixed positioned element will stay right where it is when the page is scrolled. 
	

# Javascript

#### Difference between call and apply 
	Both can be called on functions which they run in the context of the first argument. In call the subsequent arguments are passed in to the function as they are, while apply expects the second argument to be an array that it unpacks as arguments for the called function. 
	
#### What is JSONP?
	JSONP is stands for JSON with Padding is a JSON extension used by web developers to overcome the cross-domain problems which we normally are not able to send AJAX(XMLHttpRequest) request to a different domain. It works because the script tag does not have the limitation of the domain. 
	
#### How to load scripts asynchronously?

	Method One
	(function(){
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.src = 'http://yourdomain.com/script.js';
		var x = document.getElementsByTagName('script')[0];
		x.parentNode.insertBefore(s,x);
	})();
	
	Method Two (used when there are ```onload``` happens)
	(function(){
		function async_load(){
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.async = true;
			s.src = 'http://yourdomain.com/script.js';
			var x = document.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s,x);
		}
		if(window.attachEvent)
			window.attachEvent('onload', async_load);
		else
			window.addEventListener('load', async_load, false);
	})();
