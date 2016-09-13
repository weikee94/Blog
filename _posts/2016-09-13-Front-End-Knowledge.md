---
layout: post
title: Front End Knowledge
date: 2016-09-13
comments: true
---

## Front end developer interview question

	
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
	
