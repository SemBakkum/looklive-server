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

<h1>Service worker</h1>

<h2>Speed without service worker</h2> 

<img src="public/images/withoutsw.png">

<h2>Speed with service worker</h2>

<img src="public/images/withsw.png">

<h1>Progressive web apps research</h1>

<p>
    
    A progressive web app is an app that has native app like user experience. To accomplish this native app like user experience a web app must use modern web capabilities to deliver this user experience. Alex Russell (Google engineer) first espoused progressive web apps in june 2015. 
</p>

<p>

    Progressive web apps (from this point refered to as PWA) don't require any installation on a device, but is able to have an icon on the home screen. 
    Actually PWA's live as a tab in your browser. The more a user visits this URL the more functionality it will get. The PWA can see how manny times you haved used the PWA and after a certain while it can send you a notification to pin the PWA to the home screen. At this point the PWA will get more native app like capabilities. From sending notifications to offline usage. The offline usage is possible because of a service worker (from this point refered to as SW). A SW is one of the three things a web app needs to become a PWA. The remaining two are: the PWA has to run on HTTPS, and you have to Create an app manifest file, which specifies a bunch of information about your app such as its name.
    
    Progressive web apps are: 
    
    <ul>
        <li><b>Progressive</b> - Work for every user, regardless of browser choice because they're built with progressive enhancement as a core tenet.</li>
        <li><b>Respinsive</b> - Fit any factor: desktop, mobile, tablet, or whatever is next.</li>
        <li><b>Connectivity independent</b> - Enhanced with service workers to work offline or on low quality networks.</li>
        <li><b>App-like</b> - Feel like an app to the user with app-style interactions and navigation because it's built on the app shell model.</li>
        <li><b>Fresh</b> - Always up-to-date thanks to the service worker update process.</li>
        <li><b>Safe</b> - Served via HTTPS to prevent snooping and ensure content hasn’t been tampered with.
        <li><b>Discoverable</b> - Are identifiable as “applications” thanks to W3C manifests and service worker registration scope allowing search engines to find them.</li>
        <li><b>Re-engageable</b> - Make re-engagement easy through features like push notifications.</li>
        <li><b>Installable</b> - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.</li>
        <li><b>Linkable</b> - Easily share via URL and not require complex installation.</li>
    </ul>
    
    <a href="https://developers.google.com/web/progressive-web-apps" target="_blank">source</a> 
    <a href="http://developer.telerik.com/featured/what-progressive-web-apps-mean-for-the-web/" target="_blank">source</a> 
    <a href="http://arc.applause.com/2015/11/30/application-shell-architecture/" target="_blank">source</a> 
</p>
