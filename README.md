# Fast-food-E-commerce-Shop
Full stack Fast food E-commerce Webshop (ReactJS &amp; Node.js) with ADMIN panel.

# Backend - server

<h2>Instalation</h2>

### `npm install` or `npm i`

The command is used in Node.js and JavaScript development to install the dependencies listed in a project's package.json file.

<h2>Project</h2>

Entire backend logic is built using communication between Node.js and mongoDB.

In the project directory, you can run:

### `npm run dev`

The command npm run dev is typically used in a Node.js-based project to start a development server or perform other development-related tasks. Here's what this command does:

* npm: This is the Node Package Manager, which is used to manage and install packages and dependencies for Node.js projects.
* run: This is a subcommand of npm that is used to execute a script defined in your project's package.json file.
* dev: This is the name of the script you want to run. The name "dev" is a common convention, but you can name your scripts as you see fit.

Adding .env file: 

* MONGO_URL - connection to MongoDB cluster.
* JWT_SECRET - random set of strings or numbers.
* PORT - set to 5000 ( in this case ) or you can choose any other localhost
* NODE_ENV - set to development

# Frontend - client 
Front end is built using React JavaScript and consists of 2 parts, client side and dashboard which is designed for admin.

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm install` or `npm i`

The command is used in Node.js and JavaScript development to install the dependencies listed in a project's package.json file.

**Client page** is built using CSS Module.
**Admin panel** is built using CSS-in-JS solution (styled-components)
