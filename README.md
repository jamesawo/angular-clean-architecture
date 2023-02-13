# Angular Clean Architecture with Serverless Functions

Note: I am using this project to experiment with different architectural concepts.  This is my attempt at implementing Robert C. Martin (Uncle Bob) Clean Architecture guidelines in an Angular project that uses serverless functions to communicate with a MongoDB cluster.


## Why?

Serverless functions allow for cost-effective, scalable, and event-driven execution of backend logic ... in short, they are cool, making them ideal for Angular projects where the focus is on delivering a smooth frontend experience. But you may soon discover that your application will eventually grow and they will need constant modification or the addition of new features. Without a good structure in place for your application, you will begin to notice:

1.  Tight coupling between components, making the code difficult to modify and maintain.
2.  A lack of separation of concerns, leading to complex, hard-to-test code.
3.  Poor scalability, as the codebase grows and becomes more complex over time.
4.  Difficulty in adapting to changing requirements, as the codebase becomes harder to modify.
5.  Lack of maintainability, as the codebase becomes harder to understand and debug.
6. Developer productivity decreases, as they struggle with complex and poorly organized code.

To learn how to prevent these concerns mentioned above, I am using Clean Architecture Design Pattern as an architectural style that provides some set of guidelines for the project. This is my own way of interpreting The Clean Architecture Design Pattern in a Serverless Angular Blog Website.

Read More on clean architecture:  [Uncle Bob Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## Technologies

- Angular CLI
- Angular 
- Netlify Edge Functions
- MongoDB
- Typescript
- Netlify CLI

## Layers of this project

### Core

The core is the layer where you can create your configuration-related code, utilities, and params.

### Domain

The domain is the layer for all application-wide entities, use cases, and repository contracts.

### Data

Data is the layer that supports and directly utilizes the domain layer. Here we can have our different data source implementation and the interactors that expose data to the outer layer.

### Presentation

This is the layer where you write your UI code.


## How to use

You can read [this article](https://jamesaworo.com/#) explaining my idea of how this code can be used.
A typical programming workflow for a new feature would look like this:

-  You start in the domain layer and write the entities, use cases, and repositories.
-  You set up the data layer that should implement the contracts  in the domain layer
-  You write the UI codes in the presentation layer.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Netlify Edge Functions

All the functions used in this project can be found `netlify/functions` directory
To learn more, check out this [Blog Post From Netlify](https://www.netlify.com/blog/2021/12/11/serverless-functions-made-simple-just-add-files/)


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io/).


## Support

Give this project a star if you like or find it useful.

## License

This project is licensed with the MIT license
