# tech-questions

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Planning

* Configuration / Dependencies
  * NPM - npm install
  * Bootstrap - ember install ember-bootstrap
  * Emberfire - ember install emberfire (?)
* Specs
* Integration
  * Models
    * Question
    * Answer
  * Templates
    * Application
    * Index
    * About
    * Contact
    * New Question
    * Question
  * Components
    * Index
      * Question Tile
    * New Question
      * Question New
    * Question
      * Question Detail
      * Question Update
      * Question Delete
      * New Answer
      * Answer Tile
      * Answer Update
      * Answer Delete
  * Routes
    * Index
    * About
    * Contact
    * New Question
    * Question
      * Path: ‘/post/:post_id’
  * UX/UI
    * Utilize bootstrap to quickly divide and style application content
    * Custom styling
  * Polish
    * Review and refactor as necessary
    * Remove unused code, logs, and comments
    * Finalize README

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd tech-questions`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
