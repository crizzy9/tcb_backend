# The Code Base express backend

This repository contains the backend logic and api for `The Code Base` application written in ES6. It is part of the JNJ backend eco system, which is a collection of multiple services working together to serve the JNJ backend api. This application is built using MEAN stack.

## Before you get started

Install the following softwares into your system.
`Use apt install if you're using linux.`
`Use brew install if you're using MacOS.`

```shell
# This will be your primary IDE
vscode/webstorm

# For vscode install the following extensions
Angular v4 TypeScript Snippets
Auto Import
AutoFileName
Editor Config
Elastic
ExpressSnippet
GitLens
npm intellisense
path intellisense
tslint
typescript hero
typescript import
typescript toolbox
vscode-icons

# This is the choice of database and its respective IDE
mongodb
robomongo

# Primary coding enviornment
node (6.9.1+)
nvm
npm
nodemon

# Version control
git

# For testing api endpoints
postman

# For analyzing and matching data
elasticsearch
```

## Getting started

To get started simply run:
``` shell
npm install
```

Other dependancies to install
```
brew install mongodb
brew services start mongodb
sudo mkdir -p /data/db
sudo chown -R `id -un` /data/db
mongo
```

Once all the dependencies have been installed, `start` the server using:
``` shell
npm start
```
this will start the server in dev mode

## Folder structure

The following is an outline of the folder structure of this project:

```shell
# The server side Express application.
├─ app

# This folder contains environment specific application config.
├─ config

# This folder contains database migrations.
├─ migrations

# This folder will be used to store and serve static files
├─ public

# This folder contains the main run scripts for the application.
└─ server
```

# Things to keep in mind

Common coding conventions to be followed:

``` shell
always use const and not var
only 4 spaces no tabs
dont change config settings without admin permission
```

# TODO

Read up on common concepts of MEAN Stack. Read up on routing and mongo queries.