# Gatsby Netlify CMS example

## An example site for using the Netlify CMS

This is a Gatsby v2 example using the Netlify CMS with GitHub Auth

## Setup

Creating an Auth Provider:
https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider

Details on that here:
https://www.netlifycms.org/docs/authentication-backends/#github-backend

Amend your `config.yml`

```yml
backend:
  name: github
  repo: owner-name/repo-name # Your GitHub username and repo
```

## Deploy

Click this button to add this repo to your Netlify instance.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/spences10/gatsby-netlify-cms)

##### Bootstrapped wit the default Gatsby starter.
