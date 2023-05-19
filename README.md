# LAB - Class 03 and Class 04

## Project: api-server

### Author: Ryan Eastman

### Problem Domain

1. Lab 03:
   - Build a RESTful API using Express, by creating a proper series of endpoints that perform CRUD operations on a Postgres SQL Database, using the REST standard.

2. Lab 04:
    - Modularize the codebase by refactoring it and moving functionality into modules by creating a collections class for my models.

### Links

- [GitHub Actions ci/cd](https://github.com/DocHolliday13x/api-server/actions)
- [back-end server url](https://api-server.onrender.com/)

### Collaborators

- Ryan Gallaway - showed me everything I know about this becuase before today, I've literally never seen any of this.

- Reece Renninger - collabed with

- Ike Steoger - collabed with

- Nick Mullaney - reviewed each others code for Lab 03/04, gave and recieved feedback for improvements.

### Setup

#### `.env` requirements (where applicable)

- PORT=3001

#### How to initialize/run your application (where applicable)

- create repo on GitHub
- clone repo to local machine
- `npm init -y`
- `npm i`
- `nodemon` or `node index.js` to start server

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Details of feature
- GET : `/` - specific route to hit
- GET : `/person` - expects a query string with a name property

#### Tests

- How do you run tests?
  <!-- test the express server -->
  - `nodemon`
  - open thunder client
  - enter url w/ query string
  - hit send

  <!-- test postgres database functionality locally -->
  - `psql`
  - `\c <database name>`
  - `\dt`
  - `\d <table name>`
  - `SELECT * FROM <table name>;`
  - `INSERT INTO <table name> (name, type) VALUES ('<name>', '<type>');`
  - `UPDATE <table name> SET name='<new name>', type='<new type>' WHERE id=<id>;`
  - `DELETE FROM <table name> WHERE id=<id>;`

  <!-- test the /food and /clothes routes -->
  - confirm that the database is empty
  - confirm that the expected food/clothes exist after a POST request
  - confirm that the expected food/clothes are updated after a PUT request
  - confirm that the expected food/clothes are deleted after a DELETE request
  - test all RESTful CRUD routes

  - TDD if possible

- Any tests of note?
  - 200 status on a proper request
  - 500 status on a bad request
  - 404 status on a bad route
  - RESTful CRUD

- Describe any tests that you did not complete, skipped, etc

#### UML

![Lab 03 UML](/public/img/lab03UML.png)
![Lab 04 UML](/public/img/lab04UML.png)

#### Resources

- [Sequelize Docs](https://sequelize.org/docs/v6/core-concepts/assocs/)

#### Code Review Process

- [PR #1]()

- [PR #2]()

- Partner: Nick Mullaney

  - Nick is a fantastic partner. He is very knowledgeable and was able to help me with a lot of the issues I was having. He was able to help me with my error handling, my naming conventions, and my code commenting. He also helped me with my code refactoring and modularization. In return, I was able to help him with his code refactoring and modularization. We were able to help each other with our code reviews and we both learned a lot from each other.

- Key Takeaways:

  - I need to work on my error handling
  - I need to work on my naming conventions
  - I need to work on my code commenting
