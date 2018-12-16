# Table of Contents Markdown Generator

[View Generator](https://mikecm1141.github.io/table_of_contents_generator/)

## Table of Contents

* [Description/Purpose](#descriptionpurpose)
* [How To Use](#how-to-use)
* [Issues](#issues)
* [Contributors](#contributors)

## Description/Purpose

This simple application was designed to help developers add a markdown formatted Table of Contents generator to their documentation.

## How To Use

This application is in its very early stages, and is probably prone to some bugs. Right now it works on a very specific setup for your documentation to be valid for it to parse. The `#` level heading is reserved for the very top-level of your documentation. Otherwise, the parser will generate nested links for each level of your documentation from top to bottom, starting with `##` and ending with `######`.

Example Input:
```markdown
## Description

This application manages a fish tank. It helps you out a lot! Its great fun to use and to deploy.

## Installation

1. Clone this repository.
1. Run npm install
1. Run npm start
1. Navigate to http://localhost:8080 to get started!

## Endpoints

This application has two major endpoints for use.

### Endpoint 1

This endpoint is for fish.

#### GET /api/v1/fish

Gathers all your fish.

### Endpoint 2

This endpoint is for coral.

#### POST /api/v1/coral

Creates new coral.

##### Create Coral sad path

If a coral's type is not given, returns a 400.

## Contributors

Spongebob Squarepants
```

Example Output:
```markdown
* [Description](#description)
* [Installation](#installation)
* [Endpoints](#endpoints)
    * [Endpoint 1](#endpoint-1)
        * [GET /api/v1/fish](#get-apiv1fish)
    * [Endpoint 2](#endpoint-2)
        * [POST /api/v1/coral](#post-apiv1coral)
            * [Create Coral sad path](#create-coral-sad-path)
* [Contributors](#contributors)
```

## Issues

If you experience bugs or other bad behavior, please feel free to open up an issue!

## Contributors

Mike McKee
