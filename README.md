# Diary App

This project is aimed at practicing React whilst using Agile tools for planning such as Jira. The app is an online diary, where a user can login and create entries to keep track of their days. 

## Components Hierarchy
```
App
|___ Registration
|___ Login
|___ Header
|___ Diary
    |___ Page
        |___ EntryForm
        |___ EntryList
            |___ Entry
                |___ Edit
                |___ View
                |___ Delete
```

## How to install
```
$ git clone git@github.com:sandyMax974/react_diary.git
$ cd react_diary
$ npm install
```
## How to run
```
// starts the server on port 8080
$ node server/lib/server.js

// starts the react application on port 3000
$npm start
```

## Tech Stack

#### Backend
- Express
- bcryptjs 
- jsonwebtoken 
- Sequelize
- PostgreSQL

#### Frontend
- React
- react-router-dom 
- axios 
- Semantic-ui
