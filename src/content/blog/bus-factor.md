---
title: "Bus factor of top GitHub projects"
description: "What is the bus factor for the top one thousand GitHub repositories with the most stars?"
url: "https://www.metabase.com/blog/bus-factor"
canonical: "bus-factor.html"
image: "https://www.metabase.com/images/posts/bus-factor/bus-factor.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "Bus factor of top GitHub projects"
ogDescription: "What is the bus factor for the top one thousand GitHub repositories with the most stars?"
ogImage: "https://www.metabase.com/images/posts/bus-factor/bus-factor.jpg"
ogUrl: "https://www.metabase.com/blog/bus-factor"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "The Metabase Team"
twitterTitle: "Bus factor of top GitHub projects"
twitterDescription: "What is the bus factor for the top one thousand GitHub repositories with the most stars?"
twitterImage: "https://www.metabase.com/images/posts/bus-factor/bus-factor.jpg"
author: "The Metabase Team"
datePublished: "Nov 14, 2022"
category: "Data explorations"
---

The [Bus factor](https://peerj.com/preprints/1233/) is the number of people on a project that would have to be hit by a bus \(or quit\) before the project is in serious trouble. We were interested in the bus factors for the top 1,000 projects on GitHub \(by stars\).

## Observations

Check out our [dashboard](https://metabase-public.metabaseapp.com/public/dashboard/552f3868-5f09-4b0b-a403-67089952d32c), or read on to learn what we’ve found.

## Dataset

- We used the GitHub API and [truckfactor](https://github.com/HelgeCPH/truckfactor) to get and compute the bus factors of the top 1,000 GitHub repositories by star count.
- Due to memory restrictions, we were only able to compute the bus factors for around 95% of the repos on GitHub.
- To exclude codeless repos \(such as learning resources, or a curated list of a topic\), we removed projects where the primary programming language couldn’t be determined, or if the repo was primarily composed of one of the following file types: Makefile, TeX, Dockerfile, and Markdown.
- If you want to play around with the data yourself, go ahead and [download and explore the dataset](https://metabase-public.metabaseapp.com/public/question/87cd0501-3050-4a55-99cc-59000149ca49) .

## How we computed the bus factor

We used a library called [truckfactor](https://github.com/HelgeCPH/truckfactor) to compute the bus/truck factor. Here’s how truck factor does its calculations. For each repo, truckfactor \(and here we’re quoting directly from the repo\):

- Reads a git log from the repository
  - A contributor has knowledge ownership of a file when she edited the most lines in it.
  - That computation is inspired by [A. Tornhill *Your Code as a Crime Scene*](https://pragprog.com/titles/atcrime/your-code-as-a-crime-scene/) .
  - Note, only for text files knowledge ownership is computed. The tool may not return a good answer for repositories containing only binary files.
- Computes for each file who has the *knowledge ownership* of it.
- Then similar to [G. Avelino et al. *A novel approach for estimating Truck Factors*](https://peerj.com/preprints/1233.pdf) low\-contributing authors are removed from the analysis as long as still more than half of all files have a knowledge owner. The amount of remaining knowledge owners is the truck factor of the given repository.

For some context, studies conducted in [2015](https://peerj.com/preprints/1233/) and [2016](https://arxiv.org/abs/1604.06766v1) calculated the bus/truck factor of 133 popular GitHub projects. The results show that most of the projects had a small bus factor \(65% have bus factor ≤ 2\) and that less than 10% of those projects had a bus factor greater than 10.

## Distribution of bus factors

Almost half of the projects have a bus factor of two or less.

Only 10% of projects have bus factor of 6 or higher.

## There is no correlation between repo stars and bus factor

We initially thought that more popular projects should have more contributors, and therefore a higher bus factor, but that doesn’t seem to be the case.

## Average bus factor of top languages used

We’re talking about languages in general here, so languages like HTML and CSS are in play.

- More than half of all projects use the Shell scripting language \(Bash scripts\).
- The most common languages were web\-based tools: JavaScript, HTML, CSS, and TypeScript. The top general purpose languages included Python, C, and Java.
- Projects that were written in web\-based development languages \(JavaScript, HTML, CSS, TypeScript and SCSS\) tend to have a lower bus factor compared to projects written in general purpose programming languages \(Python, C, Java and C\+\+\)

## Most popular labels

Among the most\-starred repositories, `JavaScript` is the most popular label, led by popular web frameworks and libraries like `React`, `Vue`, `Bootstrap`, and `Angular`. If we combine `Go` and `Golang`, projects written in Go would be the second most\-labeled language \(though it’s possible that some repos include both the `Go` and `Golang` labels, which would inflate the label count\).

`Hacktoberfest` is the second most common label, which makes sense. Hacktoberfest is a month\-long celebration of open\-source projects to encourage the contributions to open\-source projects, and so repo maintainers are incentivized to add the label to attract contributors.

## Bus factors by software types

We also broke out bus factor by software type, and machine learning had the most projects with bus factors in the double digits.

### Backend projects

### Frontend projects

### Machine learning projects

### Business intelligence projects

## Conclusions

- Metabase supports public transportation.
- Software is built on a house of cards.
- Document your code.
- Metabase’s bus factor is *decent* \(4\). Plus, we’re a fully distributed team, so the bus accidents would have to be globally coordinated to put the project in any kind of jeopardy.
- But our bus factor could be better, so, you know, [we’re hiring](../jobs.html) .

<!-- blog-related-posts -->

## You might also enjoy

<!-- blog-related-post-1 -->

![The story behind our AI Dataset Generator Image](../images/posts/ai-dataset-generator.png)

### [The story behind our AI Dataset Generator](story-behind-ai-dataset-generator.html)

Explore the design choices, challenges, and achievements behind our open source AI Dataset Generator.

*Jul 15, 2025 • Data explorations • Matthew Hefferon • 3 min read*

---

<!-- blog-related-post-2 -->

![The story behind our AI Dataset Generator Image](../images/posts/ai-dataset-generator.png)

### [The story behind our AI Dataset Generator](story-behind-ai-dataset-generator.html)

Explore the design choices, challenges, and achievements behind our open source AI Dataset Generator.

*Jul 15, 2025 • Data explorations • Matthew Hefferon • 3 min read*

---

<!-- blog-related-post-3 -->

![The hidden costs of the data stack Image](../images/posts/hidden-costs-of-the-data-stack/hidden-costs.jpg)

### [The hidden costs of the data stack](the-hidden-cost-of-data-stacks.html)

An incomplete list of the less obvious costs associated with maintaining a data stack, and some things you can do to keep those costs under control.

*May 12, 2023 • Data explorations • The Metabase Team • 9 min read*

---

<!-- blog-related-post-4 -->

![The hidden costs of the data stack Image](../images/posts/hidden-costs-of-the-data-stack/hidden-costs.jpg)

### [The hidden costs of the data stack](the-hidden-cost-of-data-stacks.html)

An incomplete list of the less obvious costs associated with maintaining a data stack, and some things you can do to keep those costs under control.

*May 12, 2023 • Data explorations • The Metabase Team • 9 min read*

<!-- /blog-related-posts -->
