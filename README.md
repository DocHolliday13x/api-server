# LAB - Class 03

## Project: api-server

### Author: Ryan Eastman

### Problem Domain

Build a RESTful API using Express, by creating a proper series of endpoints that perform CRUD operations on a Postgres SQL Database, using the REST standard.

### Links

- [GitHub Actions ci/cd](https://github.com/DocHolliday13x/api-server/actions)
- [back-end server url](https://api-server.onrender.com/)

### Collaborators

- Ryan Gallaway - showed me everything I know about this becuase before today, I've literally never seen any of this.

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
- GET : `/person` - expects aa query string with a name property

#### Tests

- How do you run tests?
  - `nodemon`
  - open thunder client
  - enter url w/ query string
  - hit send
- Any tests of note?
  - 200 status on a proper request
  - 500 status on a bad request
  - 404 status on a bad route
- Describe any tests that you did not complete, skipped, etc

#### UML

![]()

#### Resources
