![Chaplin](http://s3.amazonaws.com/imgly_production/3401027/original.png)

# GUIDELINES
This example attempts to illustrate how to set-up the architecture to use TDD (or BDD) approach in a Chaplin-based application.

## Dependency installs
1. Make sure you have installed node.js +0.6, for OSX we recommend using homebrew: `brew install node`
2. If you haven't yet, install npm +1.0 (the node package manager), that
   is required to install every module for this tutorial.

## What is Buster.js
- Site: http://docs.busterjs.org/en/latest/
- Take a look: http://www.youtube.com/watch?v=VSFGAl1BekY 

## Creating the structure
1. In your base directory, create a folder that will hold all CoffeeScript and compiled Javascript specs, called `specs`.
2. Create a file called `package.json` and add the configuration needed
   for tests.
3. Issue the command `npm install` to locally install all the dependencies used to run
   your future test suite.
4. Create a folder named `js` that will hold your compiled files
   (application and specs). Buster.js will only work with files found
under one unique directory and its sub-directories.
5. Create a config file named `buster.js` under the `specs` directory
   that will hold the configuration for your buster.js environments in
order to run your future test suite(s).
6. Create a folder called `coffee` that will contain your CoffeeScript
   specs that will be executed later by the command `buster-test` under
a running `buster-server` instance.
7. Create a config file named `.travis.yml` in your base directory and write the necessary instructions in order to run automate tests via Travis-CI.


```bash
$ mkdir specs && cd specs
$ touch package.json
# Copy the contents of this repo's package.json file for starters
$ npm install
$ mkdir js
$ touch buster.js
# Copy the contents of this repo's buster.js file for starters
$ mkdir -p coffee/specs
$ cd .. && touch .travis.yml
# Copy the contentsof this repo's .travis.yml file for starters
```

## Writing your first test

Writing a test case for buster.js, once the buster-amd and buster-sinon
modules are installed is fairly simple.

We'll be able to use sinon.js along in our test functions in a sandbox,
which means that mocks and stubs will be automatically verified and
restored respectively.

Create a **hello-world-test.coffee** file under the folder specs/coffee/specs:

```coffee
buster.spec.expose(); # Make some functions global

define ->

  describe 'Hello world', ->

    it "should alert the phrase 'hello world'", ->
      phrase = 'hello world'
      @mock(window).expects('alert').withArgs(phrase)
      window.alert(phrase)
```

We need to compile our spec first. You'd preferably use the Coffee
compiler with the `--watch` option, so you can compile files on save.

Inside the folder specs, run:

```
$ coffee -cw -o js coffee
```

## Enter Buster.js

With Buster.js, you'll be able to run Unit and Integration tests. I've
chosen to run the tests in a 'Browser' environment for this example, as
this will allow you to run the test locally (or remotely) in ANY browser
and version you choose to.

Let's get the Buster Server running. Inside the folder specs, run:

```
$ node_modules/.bin/buster-server &
```

Head to http://localhost:1111 as indicated and **Capture** the browser.

Now let's run the tests, **ommiting** `--environment browser` and the name of
the test `"hello-world"` in the command:
```
$ node_modules/.bin/buster-test
```

Note that you will need to copy `require.js` to your `specs/js/` folder
in this case.

## Continuous Integration with Travis-CI

I won't go into detail about Travis-CI and its set-up. For that, I
recommend you read their documentation about "[Building a Node.js project](http://about.travis-ci.org/docs/user/languages/javascript-with-nodejs/).

Of course you can always take a look at the example in this repository
of .travis.yml

## [The Cast](https://github.com/chaplinjs/chaplin/blob/master/AUTHORS.md#the-cast)

## [The Producers](https://github.com/chaplinjs/chaplin/blob/master/AUTHORS.md#the-producers)

