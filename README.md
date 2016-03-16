# LookLive server

The project you're looking at is an [express.js](http://expressjs.com) project. You'll use it to get set up a development environment where you're
going to optimize the way this project works. In it's current state, the css is messy, the rendering isn't modern and
overall the product is boring and not efficient. It's up to you to fix this and improve it.

## Getting started

### Step 1 - clone the repo
Github provides some instructions for this and we're assuming that you know how to clone this repo. If you're not sure,
don't hesitate to raise your hand now and ask.

### Step 2 - install dependencies
In order to run the server you'll need to install express.js and it's dependencies. In order to do this, open up a 
terminal and navigate to your project folder (for example `cd ~/Projects/looklive-server`). When you've done this, type
this command to run the instal:

```
npm install
```

That should get you setup.

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
npm start
```

That will get the server to run on port 3000. If you go to [http://localhost:3000](http://localhost:3000) in your browser
you should see an overview page.

## The api

This project comes with a simple API. All you need to know for now is that there's three endpoints:

* `/api/feed/` <- returns a feed of appearances
* `/api/appearance/:uuid` <- returns a single appearance, more detailed than in the feed. Replace `:uuid` with the 
appearance id.
* `/api/product/:uuid` <- returns a single product, including similar and bargain products. Replace `:uuid` with the 
product id.

The API returns JSON (for now).

<html>
    <body>
        <h1> Testing performance Looklive server </h1> 
        <article>
            <p>All these test were done with the throttling at a regular 4g speed. </p>
        </article>
        <h2>Deleted some font weights from the custom google fonts in HTML.</h2>
        <h3>Before</h3>
        <img src="public/images/test2.png">
        <h3>After</h3>
        <img src="public/images/test1.png">
        <h2>Rewrote the HTML of the layout page to be semantic and 
            efficiently</h2>
        <h3>Before</h3>
        <img src="public/images/test1.png">
        <h3>After</h3>
        <img src="public/images/test3.png">
        <h2>Deleted the header image as a background, used srcset instead and reduced the size of the images used in srcset</h2>
        <h3>Before</h3>
        <img src="public/images/test3.png">
        <h3>After</h3>
        <img src="public/images/test4.png">
        <h2>The loading time with jquery turned off</h2>
        <h3>Before</h3>
        <img src="public/images/test5.png">
        <h3>After</h3>
        <img src="public/images/test4.png">
        <h2>Rewrote the app.js script to do the same, but without the use of jquery</h2>
        <p>Special thanks to Emiel Zuurbier</p>
        <h3>Before</h3>
        <img src="public/images/test4.png">
        <h3>After</h3>
        <img src="public/images/test6.png">
        <h2>Rewrote the css to be flexbox</h2>
        <h3>Before</h3>
        <img src="public/images/test6.png">
        <h3>After</h3>
        <img src="public/images/test7.png">
        <h3>This is the result speed of the new website with no throttling</h3>
        <img src="public/images/test8.png">
        <h2>Swaped the PNG icons for a sprite sheet</h2>
        <h3>Before</h3> 
        <img src="public/images/test8.png">
        <h3>After</h3>
        <img src="public/images/test9.png">
    </body>
</html>

<h1>Progressive web apps research</h1>

<p>
    
    A progressive web app is an app that has native app like user experience. To accomplish this native app like user experience a web app must use modern web capabilities to deliver this user experience.
</p>

<p>

    Progressive web apps don't require any installation on a device, but is able to have an icon on the home screen. 
    
    Progressive web apps are: 
    
    <ul>
        <li><b>Progressive</b> - Work for every user, regardless of browser choice because they're built with progressive enhancement as a core tenet.</li>
        <li><b>Respinsive</b> - Fit any factor: desktop, mobile, tablet, or whatever is next.</li>
        <li><b>Connectivity independent</b> - Enhanced with service workers to work offline or on low quality networks.</li>
        <li><b>App-like</b> - Feel like an app to the user with app-style interactions and navigation because it's built on the app shell model.</li>
        <li><b>Fresh</b> - Always up-to-date thanks to the service worker update process.</li>
        <li><b>Safe - Served via HTTPS to prevent snooping and ensure content hasn’t been tampered with.
        <li><b>Discoverable</b> - Are identifiable as “applications” thanks to W3C manifests and service worker registration scope allowing search engines to find them.</li>
        <li><b>Re-engageable</b> - Make re-engagement easy through features like push notifications.</li>
        <li><b>Installable</b> - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.</li>
        <li><b>Linkable</b> - Easily share via URL and not require complex installation.</li>
    </ul>
    
    <a href="https://developers.google.com/web/progressive-web-apps">source</a> 

</p>

