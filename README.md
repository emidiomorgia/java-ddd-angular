# java-ddd-angular

[![Build Status](https://www.travis-ci.com/emidiomorgia/java-ddd-angular.svg?branch=main)](https://www.travis-ci.com/emidiomorgia/java-ddd-angular)

java-ddd-angular is a project demonstrating a monolithic java, spring, domain driven design back-end running with angular front-end. It also demonstrates deploy on Heroku with postgres, testing with Travis CI.

## Features
TBD

![](header.png)


## Installation

Clone master branch:

```sh
git clone https://github.com/emidiomorgia/java-ddd-angular.git
```

Restore npm packages:

On Windows:
```sh
mvn clean install
cd clientapp
npm install
```

On MacOS or Linux:
```sh
mvn clean install
cd clientapp
sudo npm install
```
If the previous command fail with EACCESS permission try to run as described on electron wiki:
```sh
mvn clean install
cd clientapp
sudo npm install --unsafe-perm=true
```


## How to run on local

First build angular source on terminal:
```sh
cd clientapp
npm run build 
```
Then run spring boot source:
```sh
mvn clean install
mvn spring-boot:run 
```

_For more examples and usage, please refer to the [Wiki][wiki]._


## Release History

* 0.1.0
    * ADD: First version.

## Meta

Emidio Morgia – [@emidiomorgia](https://twitter.com/emidiomorgia) – emidio@morgia.info

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/emidiomorgia/github-link](https://github.com/emidiomorgia/)

## Contributing

1. Fork it (<https://github.com/emidiomorgia/java-ddd-angular/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[wiki]: https://github.com/emidiomorgia/java-ddd-angular/wiki


