---
title: How I Built My First Full-Stack Web Application
date: "2019-01-31"
---

As I worked on the Free Code Camp curriculum I knew I wanted to work on my own projects. I had built up a list of cool ideas that I thought would be fun, educational, and were well within my capabilities. So after finishing the Free Code Camp curriculum in mid-December 2018 I was ready to go with my first independent, full-stack web application. I was eager to build something from the ground up that was entirely my own.

My best idea for this first project was called Digidex (short for digital-index). The idea is for the app is one that I had been contemplating for a while. In the past when I worked in sales position I usually had access to a customer relationship management software like Salesforce to keep track of leads, progress on deals, track workflow management, and more. Salesforce is a powerful and feature-rich tool for sales people in all fields. But I wanted to have a Salesforce-like tool to keep track of my personal acquaintances that didn't necessarily belong in my employer's Salesforce database. Usually these were, and are, people that I am not looking to sell anything too, but are people that aren't necessarily close friends. I looked for a tool like this but couldn't find anything good. So I figured this would be a great little project for me to pursue, since it was within my technical reach and was a product that I could design and build for the ideal user: me.

The primary goal with building a full-stack project would be to learn. I especially wanted to fill a perceived gap in my knowledge of how to connect all the pieces of a web-application that I had learned as part of FCC. I knew conceptually how I would connect a database, to an Express server, to a React front-end, but I also knew that knowing something conceptually is not the same as being able to do it in practice. So my goal was to use this project as a course in *actually* building a *real*, *live* web application. I would use React and React Router on the front-end, NodeJS and ExpressJS for the server (plus some small er libraries), MongoDB (no Mongoose) for the database, and deploy it to Heroku.

At the very start I knew I needed to keep it simple but to also ensure it could do the following:
* Register a new user
* Secure login/logout of registered users
* Create new "contacts" (people you want to keep notes on)
* Update and edit existing contacts
* Delete contacts

Inevitably it was more complicated and took longer to complete than I had originally estimated, which was a valuable lesson in-and-of-itself. Of course, "art is never finished, only abandoned", as Leonardo da Vinci said. So I recognize this as Version 1.0 with much room to improve.

## Room for Improvement

As I got through the project I knew I was going to have to come back and refactor large portions of the code I was writing. To me this was good because I felt confident that I could recognize where there was room for improvement in the project, and in my own skills. By the end of the project I also had the feeling that I likely did many things in a more verbose way than was necessary simply because of a lack of experience and knowledge. Despite recognizing where there was room for improvement I kept on my originally defined path in order to keep Version 1.0 of the app from ballooning into something I couldn't manage. Here are the things that came to mind while I was creating Version 1.0 that in another scenario I would have included without refactoring:

* Writing unit and functional tests with Mocha/Chai (which I have experience with) and Jest (which I have not used)
* Designing for mobile first
* Better Git messages with consistent format and style (declarative subject line, then empty line, then paragraph describing details of commit)
* Better Git branching (I only committed to Master)
* Redux for easier state management between components
* Sass CSS preprocessor and CSS modules so that the CSS is more manageable and scalable
* Better database modeling (one to many model as opposed to large single documents, which would make it easier to update and delete subdocuments without making it much harder to create or read them)

Luckily Version 1.0 of this project is small enough that refactoring the above will not be unmanageable.

By the end of this milestone I was pushing hard to get to my desired minimum viable product goal. I could see the finish line I had set for myself and was eager to achieve this goal. When I did I felt amazing. Now I have to take a few days to decompress before reading more into React, database modeling, and other techniques that will help me build on this initial success for bigger and better things. I also plan on working on an open-source project I've been eyeing for a while now. I look forward to the new and unique challenge of familiarizing myself with a large, complex, and sophisticated code-base, with the goal of making serious contributions. This will be great for seeing how experienced professionals write better code in a large project. Until next time, code on.