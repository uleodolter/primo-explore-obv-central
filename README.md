# OBV Central Package

A Primo New UI customization package by OBVSG.

## General notes

This is WORK IN PROGRESS.

## Installation

The following instructions are intended for Unix-like operating systems.

- Install [Primo Development Environment](https://github.com/ExLibrisGroup/primo-explore-devenv) unless already done.
- Clone or download this repository into `primo-explore/custom/CENTRAL_PACKAGE` relative to root of primo-explore-devenv.

## Building (running) the package

```
gulp run --view CENTRAL_PACKAGE --browserify
```

This package implements components which are not loaded by default.  You have to explicitly enable them in your view package.

```
cat primo-explore/custom/MY_VIEW/js/main.js

angular.module('viewCustom', ['obvThumbnailLinks'])
    .config(function (obvThumbnailLinksProvider) {
        obvThumbnailLinksProvider.setConfig({ ft_label: { de_DE: 'Volltext Link' } });
    });

gulp run --view MY_VIEW --browserify
```

## Package documentation

The development package allows you to configure :

- css

- images

- html

- JavaScript

- The root directory of the package should be named `CENTRAL_PACKAGE` for this package
- Once deployed the hierarchy is as follows:
    1. For css - use the cascading ability of css and load the consortia level (CENTRAL_PACKAGE) css first and the view level css afterwards
    2. For images and html - the system checks for every file if it exists in each level - and prefers the view level file if exists
    3. For JavaScript - the two package types define 2 different Angular modules:
        - ```var app = angular.module('viewCustom', ['angularLoad']);```
        - ```var app = angular.module('centralCustom', ['angularLoad']);```

  and loads both of the modules,

- For each configuration type there is a specified folder in the custom package folder (that can be downloaded form your Primo Back Office)
- In each folder you will find a specific README.md file with recipes/examples.

  [CSS](./css/README.md "css documentation")

  [HTML](./html/README.md "html documentation")

  [Images](./img/README.md "images documentation")

  [JavaScript](./js/README.md "javascript documentation")

## External documentation

Coding style of this package is based on multiple style guides.

Google search `angular es6 style guide` results:

- https://github.com/rwwagner90/angular-styleguide-es6
- https://github.com/toddmotto/angularjs-styleguide
- https://github.com/orizens/angular-es6-styleguide
- https://github.com/johnpapa/angular-styleguide
- https://github.com/SavageBits/angular-styleguide

