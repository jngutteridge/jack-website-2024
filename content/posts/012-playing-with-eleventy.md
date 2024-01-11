---
title: Using Eleventy to quickly build a website
date: 2023-12-21
tags:
  - Software development
category: Software
slug: playing-with-eleventy
---
It took me a surprisingly short time to make and build a website using [Eleventy](https://www.11ty.dev/). It’s a simple static site generator for Node JS and it brags about being quick and easy to grasp. From my brief experience, that bragging was wholly justified.

I had some prior designs from 2019 for what I wanted the website to be. The content was very rough and it used a lot of tacky free stock photos. It’s also a project that I’ve long abandoned, but still keep around to put a badge on things.

Bespoke Media was my idea of a design agency run by myself. I still have a couple of live projects attributed to it and I keep it around. I have no plans for it but if I do get any leads from it that I think are well aligned with me I’d like to rekindle that.

I attached Tailwind CSS to it with help from an [article I’d found online](https://dev.to/psypher1/lets-learn-11ty-part-7-adding-tailwind-5cdh). I have strong concerns about Tailwind as I’m a vocal proponent of a simple web. There was no need for me to add Tailwind except I’m quicker using it than I am with basic CSS at present.

Eleventy has native support for Pug, a templating syntax that I fell in love with a long time ago when it used to be called Jade. This meant I could mess around and have fun with a simple way of writing HTML.

You can see my efforts on the [Bespoke Media website](https://www.bespokemedia.net/) (nothing much to see really) and the [source code on GitHub](https://github.com/bespoke-media/bespoke-media-website).

The design of the website needs some love. The fonts are too small on bigger screens and the layout is dull. It doesn’t do much but to be honest there isn’t much I need it to do. It’s got a contact button on it and that’s enough.

I’d like to look at ways of plugging dynamic content into a static site - something like an API that provides content rather than using static Markdown files. There’s a lot to like about using flat files to serve content. Version control with Git and the ability to use any editor of choice are a couple of examples I can think of. But I miss the simplicity from the user’s side about having a CMS as a service that one can use at any time and any place, without needing access to version control software and manually syncing the files as I currently do.

I’d like to think about adding a continuous integration pipeline too. Something where I can press a button and have the site deploy itself.

I liked using Hugo and I’m a big fan of Golang. But I dislike its templating language and haven’t really grappled with the data layer. Knowing Eleventy uses plain old JavaScript means I can probably extend it with ease and a lot faster.

I’d also like to redesign this blog into a more comprehensive format. Something with listing and discovery upfront rather than a list of articles where I ramble.

Here’s to playing with the modern web. We’ll see where it goes.
