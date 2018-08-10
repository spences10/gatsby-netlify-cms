# Gatsby Netlify CMS example

## An example site for using the Netlify CMS

This is a Gatsby v2 example using the Netlify CMS with GitHub Auth

## Setup

### Identity

Go to your Identity setting and invite the accounts you want to use
the CMS. In your identity instance enable Registration preferences to
invite only and add your external providers GitHub and Google.

Amend the `config.yml`:

```yml
backend:
  name: git-gateway
  repo: owner-name/repo-name # Your GitHub username and repo
```

### OAuth

To use an auth provider with Netlify you need to use your ow n OAuth
by creating your own GitHub Authentication provider in your Netlify
settings Access Control section.

Creating an Auth Provider:
https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider

Details on that here:
https://www.netlifycms.org/docs/authentication-backends/#github-backend

Amend your `config.yml`:

```yml
backend:
  name: github
  repo: owner-name/repo-name # Your GitHub username and repo
```

## Deploy

Click this button to add this repo to your Netlify instance.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/spences10/gatsby-netlify-cms)

##### Bootstrapped wit the default Gatsby starter.
