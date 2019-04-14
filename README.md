# nomorekiddingaround [![Docker Automated build](https://img.shields.io/docker/automated/joegarb/nomorekiddingaround.svg)](https://hub.docker.com/r/joegarb/nomorekiddingaround/)

A wedding RSVP web app built on the AngularJS MEAN stack

Features:
- Optimized for mobile and desktop
- Progressive web app (works offline, and installable to mobile home screen)
  - Mostly disabled in the current deployment; to enable: add start_url to site.webmanifest, and uncomment service-worker-registration script in index.html
- Unlisted RSVP page (see /rsvp and /rsvp-list)
  - RSVP functionality is non-functional on the hosted site since it is currently using a serverless, static site deployment
- JSON API (see /api/rsvp)

---

## Requirements

- node 6.x or greater
- npm 5.x or greater

## Setup

Install dependencies:

    npm install
    
Create a `.env` file to configure things like the database connection string, using `.env_example` as an example.

## Run Development Server

    npm run dev
