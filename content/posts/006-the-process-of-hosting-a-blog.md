---
title: Hosting a blog in 2023
date: 2023-04-26
tags:
  - Software development
  - Writing
category: Software
slug: the-process-of-hosting-a-blog
---
As a developer I’m fortunate to be able to host and code my own blog, but that isn’t what I wanted to do. Initially I launched this blog on WordPress.com. I assumed the benefits would be huge and I could get on with writing.

## It would be no hassle

It wasn’t difficult to set up a WordPress.com blog, but it wasn’t easy or graceful. At the time I couldn’t launch the website because the button for setting it live was broken. It made an error on a blank page. This was fixed by using an incognito session. The writing experience once set up has been great though.

## It would cost very little

All of this was free, but it was a pain to negotiate. There were lots of anti-patterns and bad user experiences trying to sway me towards the paid options. I even had to search the web to figure out how to launch without a domain (which would require payment).

## There would be fast loading times

It seems fast, but I bet it wouldn’t score well on a benchmark. The fast options such as caching and CDN features were paywalled.

## There would be a sleek writing interface

Once you’re past the horrid and legacy admin screens the new editor in WordPress is a joy to use. I couldn’t mark down the experience of writing or even customising the theme. I want a beautiful experience when I write, but I wouldn’t mind firing up an IDE to set the thing up.

## It would index well in search results

I wasn’t expecting the top result for my name or topics, but I was hoping for something. It did not index in Google at all. I’m not sure if this is because I was using a free domain (jackgutts.wordpress.com) but it did not show a thing.

## It would be discoverable

Not indexing in search results was bad, but I was hoping that being a part of WordPress.com would allow me to be visited by similar sites. This was true to an extent and I got a single piece of feedback from another blog on the same platform. The related posts feature wasn’t horrid.

## Advertising would not be intrusive

The adverts were horrendous. I’m not sure if the theme I was using injected some third party services, but being a popular theme on WordPress.com I would hope this would be vetted. A giant block of adverts similar to what you see in a tabloid website all with images and very questionable content followed my writing.

## Onwards to DIY

My current setup is now a Hugo static site built on my gaming PC. I’m manually pushing the distributed files to an old VPS instance I’ve had with 34sp.com since I was sixteen (though it has been reset a few times). For nearly two decades they’ve been amazing and I’ve had no issues, but I’m not exactly straining it.

The downsides to this setup weigh about the same as with WordPress.com, but the reading experience should be much nicer. There are no adverts here, it’s hopefully more discoverable because it’ll be indexed in search. It is not sleek. The writing interface is plain text, and I’m not a fan of writing in Markdown, nor manually pushing my writing like it’s code. It’s probably very fast despite my VPS being the lowest spec I could select. Sadly this amounts to a lot of hassle.

## Next steps

I like the idea of static site generators. I don’t like the idea of writing my files in Markdown. I want an interface available to me on the web and through my desktop, laptop, and phone. I want it to be beautiful when I write. I want it to be really really simple, and only do the things I want it to.

One day I will look for a way to seed a static site generator with written content from a nice application. I had a brief play with Ghost and that came close but was messy when I wanted to change the theme. There was too much going on and it would max out my server resources hosting a heavy Node app.

I wanted to avoid SPAs because I don’t want the user to render an application in their browser. It would make the experience slower and hurt the purist buried somewhere deep inside my soul.

I need to play around with what’s out there. I need to experiment, and be less angry and have more fun.

Thanks for reading. I’m not sure what you’re doing if you’ve made it this far but I apologise and I’ll stop ranting.
