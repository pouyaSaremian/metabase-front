---
title: "An Enterprising Opening"
description: "We are unifying our OSS and Enterprise repositories, and making the Enterprise codebase publicly accessible"
url: "https://www.metabase.com/blog/Opening-Metabase-Enterprise"
canonical: "Opening-Metabase-Enterprise.html"
image: "https://www.metabase.com/images/posts/an-enterprising-opening.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "An Enterprising Opening"
ogDescription: "We are unifying our OSS and Enterprise repositories, and making the Enterprise codebase publicly accessible"
ogImage: "https://www.metabase.com/images/posts/an-enterprising-opening.jpg"
ogUrl: "https://www.metabase.com/blog/Opening-Metabase-Enterprise"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "The Metabase Team"
twitterTitle: "An Enterprising Opening"
twitterDescription: "We are unifying our OSS and Enterprise repositories, and making the Enterprise codebase publicly accessible"
twitterImage: "https://www.metabase.com/images/posts/an-enterprising-opening.jpg"
author: "The Metabase Team"
datePublished: "Oct 23, 2020"
category: "News"
---

We are making the Enterprise Edition of Metabase source available.

It’s now been a little over a year since we announced a commercial version of [Metabase](they-grow-up-so-fast.html). Over the past year, we’ve learned a lot about how to run an OpenCore business, as well as how to manage offering two versions of Metabase.

The commercial version of Metabase is Source Available, and we have given customers an option to access the codebase via GitHub. The code was forked from the OSS repository and over the last year we have added a number of Enterprise only features. We had originally developed the Enterprise Edition in a private GitHub repository to keep EE development out of the way of the OSS user base. We also wanted to keep the lines between our two versions and which license applied to each codebase crystal clear.

Pretty soon, we ran into some problems. Similar to [GitLab’s experience](https://about.gitlab.com/blog/2019/08/23/a-single-codebase-for-gitlab-community-and-enterprise-edition/), we discovered that having two separate repositories created a lot of extra work.

Specifically, merging and releasing became well over twice as much work. It became a regular occurrence to have massive merge conflicts that would take hours to unravel. The merge process was error prone, and we’d regularly introduce bugs because of changes in the OSS codebase breaking assumptions in the EE codebase. While we often caught these errors before releasing to our Enterprise customers, we have inadvertently shipped a number of embarrassing bugs.

We initially viewed all of this as necessary work to support our paying customers. But it became increasingly clear that it was error\-prone busywork. Over time, the theoretical benefits of keeping OSS and Enterprise features separate were overwhelmed by the real\-world downsides of our users encountering bugs, and our team wasting time they could have spent actively improving our users lives.

Additionally, individually granting paying customers access to the Enterprise source code was time\-consuming and pointless — why hide our Enterprise source code when the root of our success is our Open Source nature?

Like [many](https://github.com/elastic/elasticsearch)[others](https://github.com/timescale/timescaledb) before us, we’ve come to the conclusion that it’s in our users’ ultimate interest to have us spend our time working on things that directly improve the Metabase product rather than protracted and thankless housekeeping.

## What is happening?

- We are releasing the source code for Metabase Enterprise
- The [github.com/metabase/metabase](https://github.com/metabase/metabase) repository will contain both OSS and Metabase Enterprise Code
- The issue tracker will be consolidated
- Any issues in the open source repository asking for Enterprise features will be closed

## Why?

For a few reasons – It’ll give customers and those in trials easy access to the Enterprise codebase, and will reduce the time wasted by our team on resolving merge conflicts. We’ll spend this regained time on making the product better.

## What does this mean going forward?

We’ll be developing both the OSS and the Enterprise editions in the open. Enterprise Edition customers, prospective customers in a trial, and anyone who’s just curious will be free to examine the Enterprise source code.

## FAQ

### Does this mean I will be contributing to your proprietary codebase for free?

Not unless you really, really want to for some reason. You’re welcome to look at it, study it, use it to decide if you’re interested in the Enterprise edition as a customer.

### How can I make sure that my contributions are not going to a proprietary codebase?

All of our Enterprise functionality is in the “enterprise” folder in the root. So long as your submitted Pull Request does not contain any files that go in this directory, it will be part of our Open Source product.

### Does this mean I can use Metabase Enterprise for free?

No. Just because the source is publicly available does not mean that you can run it for free. Metabase Enterprise still requires a license to use.

### Is the Enterprise Edition code Open Source now that it’s public?

No, it is not Open Source. It’s Source Available, which means you can inspect it, modify it and distribute modifications, subject to your license limits, if any.

<!-- blog-related-posts -->

## You might also enjoy

<!-- blog-related-post-1 -->

![Metabase Community Data Stack Report 2025 Image](../images/og-data-stack-report-2025.jpg)

### [Metabase Community Data Stack Report 2025](metabase-community-data-stack-report-2025-key-analysis.html)

We asked 330+ teams how they build and use their data stacks - from tool choices to AI adoption. Here's what we learned.

*Sep 03, 2025 • News • Alex Yarosh • 7 min read*

---

<!-- blog-related-post-2 -->

![Metabase Community Data Stack Report 2025 Image](../images/og-data-stack-report-2025.jpg)

### [Metabase Community Data Stack Report 2025](metabase-community-data-stack-report-2025-key-analysis.html)

We asked 330+ teams how they build and use their data stacks - from tool choices to AI adoption. Here's what we learned.

*Sep 03, 2025 • News • Alex Yarosh • 7 min read*

---

<!-- blog-related-post-3 -->

![The Metabase Community Data Stack Survey: by data teams, for data teams Image](../images/posts/metabase-data-stack-survey-2025-blog.jpg)

### [The Metabase Community Data Stack Survey: by data teams, for data teams](metabase-community-data-stack-survey-2025.html)

How the modern data stack is evolving: share yours and see how it compares

*May 11, 2025 • News • Margaret Rimek • 2 min read*

---

<!-- blog-related-post-4 -->

![The Metabase Community Data Stack Survey: by data teams, for data teams Image](../images/posts/metabase-data-stack-survey-2025-blog.jpg)

### [The Metabase Community Data Stack Survey: by data teams, for data teams](metabase-community-data-stack-survey-2025.html)

How the modern data stack is evolving: share yours and see how it compares

*May 11, 2025 • News • Margaret Rimek • 2 min read*

<!-- /blog-related-posts -->
