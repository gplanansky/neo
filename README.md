<p align="center">
  <img src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/neomjs-logo-250.png">
</p>

<p align="center">
  <a href="https://npmcharts.com/compare/neo.mjs?minimal=true"><img src="https://img.shields.io/npm/dm/neo.mjs.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/neo.mjs"><img src="https://img.shields.io/npm/v/neo.mjs.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/neo.mjs"><img src="https://img.shields.io/npm/l/neo.mjs.svg" alt="License"></a>
  <a href="https://discord.gg/6p8paPq"><img src="https://img.shields.io/discord/656620537514164249?label=discord%20chat" alt="Chat"></a>
  <a href="https://david-dm.org/neomjs/neo"><img src="https://img.shields.io/david/neomjs/neo" alt="Dependencies"></a>
  <a href="./CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-green.svg" alt="PRs Welcome"></a>
</p>

# Welcome to neo.mjs!
neo.mjs enables you to create scalable & high performant Apps using more than just one CPU.
No need to take care of a workers setup, and the cross channel communication on your own.

<p align="center">
<a href="https://youtu.be/pYfM28Pz6_0"><img width="500px" src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/neo33s.png"></a>
</p>

<a href="https://itnext.io/the-webworkers-driven-ui-framework-neo-mjs-version-2-release-announcement-b91b476d6f16?source=friends_link&sk=e6eb21f75475f431ad9215d63a44fb53">Version 2 release announcement</a>

## Content
1. <a href="#sponsors">neo.mjs is in need of more sponsors!</a>
2. <a href="#architectures">Scalable frontend architectures</a>
3. <a href="#sw-covid19-app">Multi Window COVID19 IN NUMBERS Demo App</a>
4. <a href="#covid19-app">COVID19 IN NUMBERS Demo App</a>
5. <a href="#what-if-">What if ...</a> (Short overview of the concept & design goals)
6. <a href="#learn-more">Want to learn more?</a>
7. <a href="#impossible">Impossible? Pick with caution!</a>
8. <a href="#online-examples">Online Examples</a>
9. <a href="#online-docs">Online Docs</a>
10. <a href="#command-line-interface">Command-Line Interface</a>
11. <a href="#get-started">Ready to get started?</a>
12. <a href="#project-history">Project History</a>
13. <a href="#story--vision">Story & Vision</a>
14. <a href="#contributors">neo.mjs is in need of more contributors!</a>
15. <a href="#slack-channel">Slack Channel for questions & feedback</a>

</br></br>
<h2 id="sponsors">1. neo.mjs is in need for more sponsors!</h2>

neo.mjs is an MIT-licensed open source project with an ongoing development.</br>
So far the development was made possible with burning all of my (tobiu's) personal savings.</br>

This is obviously not sustainable. To enable me keep pushing like this, please support it.</br>
The benefit of doing so is getting results delivered faster.

<a href="https://github.com/sponsors/tobiu">Sponsor tobiu</a>

More infos: <a href="./BACKERS.md">Sponsors & Backers</a>

<h3 align="center">Bronze Sponsors</h3>
<!--bronze start-->
<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <a href="http://www.stream4.tech/">
          <img width="150px" src="https://raw.githubusercontent.com/neomjs/pages/master/sponsors/bronze/stream4tech.png">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://github.com/sponsors/tobiu">
          <img width="150px" src="https://raw.githubusercontent.com/neomjs/pages/master/sponsors/sponsor_you.jpg">
        </a>
      </td>
    </tr>
  </tbody>
</table>
<!--bronze end-->
Logo contributed by <a href="https://www.linkedin.com/in/dinkheller/">Torsten Dinkheller</a>.

</br></br>
<h2 id="architectures">2. Scalable frontend architectures</h2>
<img src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/apps-today.png">

Most frontends today still look like this. Everything happens inside the main thread (browser window), leading to a poor rendering performance.
The business logic happens inside main as well, which can slow down DOM updates and animations.
The worst case would be a complete UI freeze.

To solve this performance problem, it is not enough to just move expensive tasks into a worker.
Instead, an application worker needs to be the main actor.
neo.mjs offers two different setups which follow the exact same API.
You can switch between <a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker">dedicated</a> and
<a href="https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker">shared</a> workers at any point.

<img src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/workers-setup.png">

The dedicated workers setup uses 4 threads (CPUs).
Most parts of the frameworks as well as your apps and components live within the app worker.
Main threads are as small and idle as possible (42KB) plus optional main thread addons.

<img src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/shared-workers-setup.png">

In case you want to e.g. create a web based IDE or a multi window banking / trading app,
the shared worker setup using 5+ threads (CPUs) is the perfect solution.

All main threads share the same data, resulting in less API calls.
You can move entire component trees across windows, while even keeping the same JS instances.
Cross window state management, cross window drag&drop and cross window delta CSS updates are available.

</br></br>
<h2 id="sw-covid19-app">3. Multi Browser Window COVID19 IN NUMBERS Demo App</h2>
The most compelling way to introduce a new framework might simply be to show what you can do with it.</br>
</br>
Blog post: <a href="https://medium.com/swlh/expanding-single-page-apps-into-multiple-browser-windows-e6d9bd155d59?source=friends_link&sk=bbfe1dada95c5674669e463f93360822">Expanding Single Page Apps into multiple Browser Windows</a></br>
</br>
<a href="https://neomjs.github.io/pages/node_modules/neo.mjs/apps/sharedcovid/index.html#mainview=table">Live Demo: COIN App (Multi Window)</a></br>
Chrome (v83+), Edge, Firefox (Safari does not support SharedWorkers yet).</br>
Desktop only.</br>
</br>
Demo Video on YouTube:</br>
<a href="https://youtu.be/n7m7ZT1kXQk"><img src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/expanding_spa_vid.png"></a></br>

<img src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/covidDashboard/sw_covid.png">

You can find the code of the multi window covid app <a href="https://github.com/neomjs/neo/tree/dev/apps/sharedcovid">here</a>.

</br></br>
<h2 id="covid19-app">4. COVID19 IN NUMBERS Demo App</h2>
<a href="https://neomjs.github.io/pages/node_modules/neo.mjs/dist/production/apps/covid/index.html#mainview=table">Live Demo: COIN App dist/production</a></br>
Desktop only => support for mobile devices is on the roadmap.

Demo Video on YouTube:</br>
<a href="https://www.youtube.com/watch?v=8lqNVaoGNdU"><img src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/covid_app_vid.png"></a></br>

<img src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/covidDashboard/v3/table.png">

You can find the code of the covid app <a href="https://github.com/neomjs/neo/tree/dev/apps/covid">here</a>.

</br></br>
<h2 id="what-if-">5. Short overview of the concept & design goals</h2>

<table>
    <tr>
        <th></th>
        <th>What if ...</th>
        <th>Benefit</th>
    </tr>
    <tr>
        <td>1.</td>
        <td>... a framework & all the apps you build are running inside a separate thread (web worker)?</td>
        <td>You get extreme Performance</td>
    </tr>
    <tr>
        <td>2.</td>
        <td>... the main thread would be mostly idle, only applying the real dom manipulations,
            so there are no background tasks slowing it down?</td>
        <td>You get extreme UI responsiveness</td>
    </tr>
    <tr>
        <td>3.</td>
        <td>... a framework was fully built on top of ES8, but can run inside multiple workers without any Javascript builds?</td>
        <td>Your development speed will increase</td>
    </tr>
    <tr>
        <td>4.</td>
        <td>... you don’t need source-maps to debug your code, since you do get the real code 1:1?</td>
        <td>You get a smoother Debugging Experience</td>
    </tr>
    <tr>
        <td>5.</td>
        <td>... you don’t have to use string based pseudo XML templates ever again?</td>
        <td>You get unreached simplicity, no more scoping nightmares</td>
    </tr>
    <tr>
        <td>6.</td>
        <td>... you don’t have to use any sort of templates at all, ever again?</td>
        <td>You gain full control!</td>
    </tr>
    <tr>
        <td>7.</td>
        <td>... you can use persistent JSON structures instead?</td>
        <td>You gain more simplicity</td>
    </tr>
    <tr>
        <td>8.</td>
        <td>... there is a custom virtual dom engine in place, which is so fast,
            that it will change your mind about the performance of web based user interfaces?</td>
        <td>You get extreme performance</td>
    </tr>
    <tr>
        <td>9.</td>
        <td>... the ES8 class system gets enhanced with a custom config system,
            making it easier to extend and work with config driven design patterns?</td>
        <td>Extensibility, a robust base for solid UI architectures</td>
    </tr>
    <tr>
        <td>10.</td>
        <td>... your user interfaces can truly scale?</td>
        <td>You get extreme Performance</td>
    </tr>
</table>

</br></br>
<h2 id="learn-more">6. Want to learn more?</h2>

<a href=".github/CONCEPT.md">neo.mjs Concepts</a>

</br></br>
<h2 id="impossible">7. Impossible? Pick with caution!</h2>

<a href="https://en.wikipedia.org/wiki/Red_pill_and_blue_pill"><img alt="blue or red pill" src="https://raw.githubusercontent.com/neomjs/pages/master/resources/images/redorbluepill.png"></a>

Still here? Welcome to neo.mjs - The webworkers driven UI framework

</br></br>
<h2 id="online-examples">8. Online Examples</h2>

You can find a full list of (desktop based) online examples here:</br>
<a href="https://neomjs.github.io/pages/">Online Examples</a>

You can pick between the 3 modes (development, dist/development, dist/production) for each one.

</br></br>
<h2 id="online-docs">9. Online Docs</h2>

The Online Docs are also included inside the Online Examples.

dist/production does not support lazy loading the examples yet, but works in every browser:</br>
<a href="https://neomjs.github.io/pages/node_modules/neo.mjs/dist/production/docs/index.html">Online Docs (dist/production)</a>

The development mode only works in Chrome and Safari Technology Preview, but does lazy load the example apps:</br>
<a href="https://neomjs.github.io/pages/node_modules/neo.mjs/docs/index.html">Online Docs (dev mode)</a>

**Hint**: As soon as you create your own apps, you want to use the docs app locally,</br>
since this will include documentation views for your own apps.

</br></br>
<h2 id="command-line-interface">10. Command-Line Interface</h2>
You can run several build programs inside your terminal.</br>
Please take a look at the <a href="./buildScripts/README.md">Command-Line Interface Guide</a>.

</br></br>
<h2 id="get-started">11. Ready to get started?</h2>

There are 3 different ways on how you can get the basics running locally.</br>
Please take a look at the <a href=".github/GETTING_STARTED.md">Getting Started Guide</a>.

</br></br>
<h2 id="project-history">12. Project History</h2>

neo.mjs got released to the public on November 23, 2019.</br>
Before this point, the project was already at 3720 commits.<br>
Find out more about the start of it inside the <a href=".github/NEOMJS_HISTORY.md">Project History</a> file.

</br></br>
<h2 id="story--vision">13. Story & Vision</h2>

Although neo.mjs is ready to craft beautiful & blazing fast UIs,</br>
the current state is just a fraction of a bigger picture.

Take a look at the <a href=".github/STORY.md">Project Story</a> and <a href=".github/VISION.md">Vision</a>.

</br></br>
<h2 id="contributors">14. neo.mjs is in need for more contributors!</h2>

Another way to fasten up the neo.mjs development speed is to actively jump in.</br>
As the shiny "PRs welcome" badge suggests: open source is intended to be improved by anyone who is up for the challenge.

You can also write a guide in case you learned something new while using neo.mjs or just help to get more eyes on this project.

Either way, here are more infos: <a href="./CONTRIBUTING.md">Contributing</a>

</br></br>
<h2 id="slack-channel">15. Slack Channel for questions & feedback</h2>

There are some Javascript legends hiding in the shadows and waiting to be discovered.</br>
Join our community:
<a href="https://join.slack.com/t/neomjs/shared_invite/zt-6c50ueeu-3E1~M4T9xkNnb~M_prEEOA">Slack Channel Invite Link</a>

Build with :heart: in Germany.

</br></br>
Copyright (c) 2015 - today, <a href="https://www.linkedin.com/in/tobiasuhlig/">Tobias Uhlig</a>
& <a href="https://www.linkedin.com/in/richwaters/">Rich Waters</a>
