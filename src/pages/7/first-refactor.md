---
title: My First Major Refactor
date: "2019-04-30"
---

One of my flagship projects is a project I call *Popularity Contest*, which regularly records the number of Twitter followers of various politicians for the purpose of graphing the growth or loss of Twitter followers over time as a proxy for popularity. I started running the script that collects the data a few months ago so that when I wanted to start using my proprietary data for visual consumption and analysis I would have plenty to go off of. That was a smart move. I wish I had started that program even earlier. Then around February 2019 I wanted to get familiar with Typescript and NextJS, so I got to work on the front-end for my *Popularity Contest* project, which turned out well for a first attempt. It succesfully uses NextJS for server-side rendering and configuration, D3JS for data visualization, ReactJS, Express for the server, MongoDB for the database, and is all written in Typescript.

I ran into a slight problem with the server-side rendering and with using D3JS with ReactJS. D3JS is a data Javascript visualization library that directly manipulates the DOM. But ReactJS doesn't give you direct access to the DOM... (research this point more).

Thus I found my own virtual DOM to manipulate with D3JS in the form of a library called jsdom, written by ... (Google engineering team).

The problem with this implementation though is that for every chart of Twitter followers (currently 59 handles being tracked) the server has to instantiate a new instance of this Javascript DOM, manipulate it with D3JS, then spit out a string of the appropriate HTML code that is then injected into the component using `dangerouslySetInnerHTML`.

- Studies say that a user will leave if they don't see content within XXXX seconds.
- *Popularity Contest* with 59 virtual JS DOMs plus an API fetch takes 6 seconds for the first bit of data response and 7 seconds until ...first contentful paint... This is way too long. With this render time I've lost virtually all potential visitors.

...I then realized I can use ReactJS refs to get direct access to DOM nodes (clarify this point technically) and used this with great ease and comfort on this subsequent refactor.

...As you can see this sped up the first bit response by XXXX and the time to First Contentful Paint by XXXX, a substantial improvement in performance and comfortably under the required XXXX seconds to prevent bouncing.