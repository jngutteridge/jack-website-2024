---
title: Hosting on Google Cloud
date: 2024-01-24
tags:
  - Software development
category: Software
---
In this post I will detail my experiences with hosting on the cloud and why I came to do so.

## The problem

Before migrating to the cloud I was using a VPS instance with a hosting provider I had been using for around fifteen years. I’ve loved the support I’ve had from them. Every concern or question has been addressed.

I was running an older version of Ubuntu Server and [given my recent playing with SvelteKit](/posts/svelte-for-dynamic-websites/) I had come to realise the latest version of NodeJS I could run wasn’t enough to do much with.

When I raised a ticket to wipe and reinstall the instance I was told they no longer provide support for their VPS packages.

This was a shame. I’ve loved having their support for many years. It looks like they’ve pivoted to providing managed hosting instead now for PHP applications. This wouldn’t be enough for my wants.

It brought about an opportunity. I could have gone with a Digital Ocean instance or something similar, or I could’ve looked for free options for static hosting. I joked with a few friends that I was going to put this thing on a cloud with Kubernetes and automatic deployments. Then I started playing around.

## Playing with Google Cloud

Google makes this easy. At the time of writing you get 300 dollars to play around with to see how cost efficient your solutions are before committing to putting your credit card on the line. I still have concerns that if someone wanted to disrupt me, or if I became popular for some unlikely reason, this could be expensive. I have set up an alert for projected costs, but there is no easy way to turn it off automatically at a price point threshold.

Still, 300 dollars gave me the confidence to play around with a few things to see how well they scale and at what cost.

So far I have used 3 great british pounds of my free trial money, and it’s been a couple of weeks. In that time I’ve built and run containers, set up a SQL instance, load balanced some traffic from a public IP, and stored some static files.

Jumping into Google Cloud’s console was daunting, but I had some supervision from a friend and the excellent documentation. The interface is frankly gigantic.

## Static website with Cloud Storage

My first exploration was to chuck some static content into a cloud bucket and point a load balancer at it from a public IP. Setting up the storage was easy and I followed [a great guide from their official documentation](https://cloud.google.com/storage/docs/hosting-static-website) to make this work.

Google makes it easy to update Cloud Storage with an [Rsync command built into their gcloud utility](https://cloud.google.com/sdk/gcloud/reference/storage/rsync).

Using a Cloud Load Balancer instead of Nginx was a bit of a trial, but once I got the hang of [URL maps](https://cloud.google.com/load-balancing/docs/url-map) and the load balancer console, I was cooking on gas.

I’ve managed to set it up to direct multiple hosts at a single IP address, feeling that this would reduce costs.

## Running web apps with Cloud Run

My next challenge was running a [Directus CMS](https://directus.io/) instance so I can feed these static sites at build time. For my blog I use flat files but for a few projects I’m using the Directus API and its beautiful user interface instead.

I was worried when starting a Cloud SQL instance that my pennies would escape like raindrops from a cloud. That didn’t happen. I imagine this is the most expensive part of my setup but there are options for smaller instances using fewer CPUs and less memory (although Google recommends you do not use them for production apps).

Cloud Run lets you run a Docker container or it will build an app from source code. I built my app with Directus installed as an NPM package and ran it (there is [a simple repo demonstrating it on GitHub](https://github.com/directus-community/gcp-example)).

After changing some environment variables on the container and setting up a connection to my SQL instance (as per [the guides in the documentation](https://cloud.google.com/sql/docs/mysql/connect-run)) I was again, cooking on gas.

The beauty of this is you can specify how long the container stays active for. If I don’t receive any traffic from Directus for 15 minutes the container shuts down. It’ll take another ten seconds (or thereabouts) to start up from a request from a cold start but it proves that you’re not wasting CPU cycles with idle applications.

## Cloud Functions and Cloud Build

My next steps will be using Cloud Functions and Cloud Build. I would love to press a button or push to Git and see my websites automatically update. I have a few tasks that would be well suited to Cloud Functions too. I’m looking forward to playing with these.

I’m not ready to call myself a cloud architect yet (and I doubt I ever will be!) but I feel confident playing around with the cloud now. I get the basic concepts of the simple apps I’ve described. It’ll be a while before I’m playing with virtual private connectors and ingresses.

Google also provides automatic CDN and wires a lot of the load balancing for you. I do not require faster load times so I have made sure not to use these but it’s nice to know they are there.

Considering my job title is “Front-end developer” I feel like I’ve done a fair job on this! But most of all I’ve had a really fun time doing it, apart from waiting for Google managed certificates to propagate on HTTPS…
