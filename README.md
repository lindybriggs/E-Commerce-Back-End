# E-Commerce Back End

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents

- [Description](#description)
- [Demonstration](#demonstration)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Description

Application builds the back end for an e-commerce site and allows users to view, create, update, and delete categories, products, and tags. Once database models columns are defined and associated relationships are specified, an Express.js API then uses Sequelize to interact with a MySQL database in Insomnia. 

## Demonstration

This application uses MySQL2 and Sequelize to connect to a database. It stores sensitive data using dotenv environment variables. It syncs Sequelize models to the database upon server start, and defines columns for those models. <br>
See a walkthrough video of these requirements being met here: [Technical Acceptance Criteria](https://drive.google.com/file/d/1J6UGYXMIKfIPLMBKBRfH6Krbr9XnMXXI/view?usp=sharing)

See how to install dependencies and invoke application here and below: [Install & Invoke](https://drive.google.com/file/d/15J4oLsQx33ITp8LNBkJQgzZJoBWhH8j_/view?usp=sharing)

![ezgif com-gif-maker (13)](https://user-images.githubusercontent.com/101146153/166951124-4a3592b2-26b4-497d-8e39-56b70d8795cf.gif)

See the GET and GET by ID requests function here and below: [GET & GET ID](https://drive.google.com/file/d/1Gd24d1e06u2POeF8gCNaA5X5qd6VlAk2/view?usp=sharing)

![ezgif com-gif-maker (14)](https://user-images.githubusercontent.com/101146153/167017872-122a5b96-d847-4d3c-b36b-99a2038b3597.gif)

See a full walkthrough video for the POST, PUT, and DELETE requests here: [POST, PUT, & DELETE](https://drive.google.com/file/d/1vawtOQtgD839li1YgczDVpsMDhdtrqLm/view?usp=sharing)

## Installation
After cloning the repo from GitHub, run the following command to install necessary dependencies listed in the package.json file:
``` md
  npm i
```

## Usage
run the following commands to invoke the application:
``` md
  mysql -u root -p

  *enter your password if you have one*

  source db/schema.sql

  quit

  npm run seed

  npm start
```

## Features

* Express.js
* MySQL2
* Sequelize
* dotenv (store sensitive data using environment variables)

### License

Covered under the [MIT](license.txt) license.