# Hermyz: The Slack Bot

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Hermyz](./public/favicon.png)

## Description
- It's hard for small businesses to keep track of their invoices. Late or overdue payments may lead to penalties, credit damage, or loss of providers. Many small businesses and startups already use Slack for team management. **Hermyz** Keeps track of your invoices, and allows you to list and pay them, without leaving the Slack window.
- We built Hermyz during [SmallBusinesWeek Hackathon](https://smallbizweek.hackathon.com/), which was organized by [Visa](https://usa.visa.com/) and the [U.S. Small Business Administration](https://www.sba.gov/) in Washington, DC on April 27-29, 2018.

## Team (Ordered Alphabetically)
- [Christopher Phillips](https://github.com/spiffcs)
- [Mike Nabil](https://github.com/maikelnabil)
- [Mohamed Elkarim](https://github.com/Gripholder)
- [David Guras](https://github.com/Gura-San)
- [Zach Bauer](https://github.com/zbauer91)

## Technology
- Hermyz is written in HTML, CSS, JavaScript, JSX and Go.
- Hermyz's backend is built with Node, Express, MongoDB, and Mongoose.
- Hermyz's frontend is build with React.
- Hermyz is deployed on Kubernetes, Slack, and GitHub Pages.
- Docker was used to deploy to Kubernetes.
- Payments are made through [Visa Direct API](https://developer.visa.com/capabilities/visa_direct)

## Important Links
- Planning Repo: https://github.com/spiffcs/visaDeveloperDC
- Back-end Repo: https://github.com/zbauer91/visa-hackathon-backend/
- Front-end Repo: https://github.com/Gripholder/hermyz/
- Bot Repo: https://github.com/spiffcs/vispoc
- Test Slack Channel: https://visapaymentservice.slack.com/
- Slack Bot: https://api.slack.com/apps/AAFTSCW22
- Bot API: http://api.slack.hermyz.com/api/v1/healthz
- Landing Page: http://www.hermyz.com
- Presentation: https://docs.google.com/presentation/d/1dcxa4Lyhwbk6ewUI-5L-VCm0XN_GSsTVT4sNqcY724U/

## How Hermyz was built
Friday, April 27
- We started with a documentation dive in both U.S. Government and VISA APIs and public datasets.
- We brainstormed ideas, and selected our mvp, silver, and gold features for Hermyz.
- We created a project board to manage tasks and work distribution.
- We created a private slack channel to test the bot in.
- We created the bot, and gave it a name and a temporary logo.
- We created the Kubernetes container.
- We created the GitHub repos.
- By Midnight, we received `life ok mon` from our backend.

Saturday, April 28
- We built the backend and the frontend micro-services.
- We configured Hermyz's backend with Visa API.
- We configured Hermyz's backend with the Slack Bot.
- We deployed the frontend to GitHub Pages, and the backend to Kubernetes.
- We built this documentation.

Sunday, April 29
- We wrote the final lines of code, and hit `launch`.
- We presented and pitched our app during the final session of the hackathon.

## Media coverage
- [Visa: Announcing The #SmallBusinessWeek Hackathon Winners](http://visacorporate.tumblr.com/post/173550863178/announcing-the-smallbusinessweek-hackathon)
- [Visa: #SmallBusinessWeek Hackathon. $24,000 prize pool.](https://www.youtube.com/watch?time_continue=2&v=JMbW9IaaDRM)
- [PYMNTS.com: Visa ‘Hackathon’ Produces A Digital Payment Tool For Small Businesses](https://www.pymnts.com/api/2018/visa-hackathon-produces-a-digital-payment-tool-for-small-businesses/)
- [U.S. SBA: Announcing the #SmallBusinessWeek Hackathon Winners](https://www.sba.gov/blogs/announcing-smallbusinessweek-hackathon-winners)

## Merchandise
- [Hermyz Logo](https://www.redbubble.com/people/ib1605/works/31639343-hermyz-logo)
- [Hermyz Logo - Full Size](https://www.redbubble.com/people/ib1605/works/31639776-hermyz-logo-full-size)

## Features we are working on
1. Merging the 2 backends into one, and consolidating the code in one branch
1. Allow users to filter invoices by specific criteria, such as invoice date, vendor, payment status, due date, or balance due.
1. User authentication
1. Connecting Hermyz with Google Sheets API, to pull the list of invoices automatically
1. Deploying the bot on Slack
1. Improving markup in Slack

## License
[MIT](./LICENSE.md). Copyright (c) Christopher Phillips, Mike Nabil, Mohamed Elkarim, David Guras, and Zach Bauer.

## Contributions
Contributions to Hermyz are welcome. Please, check the [Contributions Guidelines](./.github/CONTRIBUTING.md) for reference!
