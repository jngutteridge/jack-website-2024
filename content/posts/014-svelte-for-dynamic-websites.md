---
title: Svelte for dynamic websites and server rendering
date: 2024-01-09
tags:
  - Software development
category: Software
---
Over the weekend I received an opportunity from a friend to build a website for a choir. I got straight to work looking for an appropriate framework to use for web development in 2024.

I wanted something that could spit out flat files, but I also wanted a dynamic website with JavaScript for menus on smaller screens and contact forms. I wanted the website to take content from a different store. I have a Directus instance running and it’s easy to set up content and let editors make changes.

I had a quick think about Eleventy and Hugo. I could wire them to take content from an API, but I would have to inject the JavaScript old-school or use a lightweight framework component for the contact form.

React was the easy choice with many offshoots that can render on the server-side. Ember is my tool in the day job, but I didn’t look into it for rendering flat files.

And then I stumbled on Svelte.

The documentation and the interactive sandbox tutorial had me up and running before I had even decided it was a good idea. I fell in love with how simple everything was. The developer experience was truly beautiful.

SvelteKit is the part of Svelte that renders and serves files. It handles routing and server actions all in one place.

I jumped at this option and had a website working in no time at all.

When I deployed the initial website I realised my ancient hosting setup couldn’t handle a version of Node that could run it. I’ve written about my VPS before and how it needs an upgrade. This wasn’t an issue for SvelteKit though. It can build static files using a different build adapter.

The only issue is I wouldn’t be able to handle server actions through SvelteKit with this option. That wasn’t a blocker though. I can still collect the content at build time and point the contact form to my Directus instance using ‘fetch’ in the browser.

All in all it was a dream to build and manage. You can check out the final product - [a website for the Polyphonics Choir in London](https://www.polyphonics.co.uk/).
