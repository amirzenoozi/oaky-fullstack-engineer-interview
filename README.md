# Oaky FullStack Engineer Technical Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) as Front side and [Nest](https://github.com/nestjs/nest) as backed side.
This Projects Let you get verification Questions from the server and answer them with react application.

## Dependencies
- NodeJs
- Yarn
- Docker

## Objectives
- [ ] Apps
  - [x] Frontend | React
  - [x] Backend | NestJs
  - [ ] Postman Collection
- [ ] Scripts
  - [x] Bash Script to Run Both On Local
  - [x] Bach Script to install dependencies On Local
- [ ] Deployment
  - [ ] DockerCompose File
  - [ ] Dockerfiles
  - [ ] GitHub Actions to Run Tests
  - [ ] GitHub Actions to Build Docker Image
  - [ ] Deploy On External Server

## Key Decisions and Explanations
### 1. **Choice of Technologies**
- **React**: in comparison to Angular and Vue, React has a less learning curve and is more flexible, since you only need to know the JavaScript.
- **NestJs**: I chose NestJs because not only it is a modern, fast (built on top of Express) and powerful framework, but also it is written in TypeScript, which is a superset of JavaScript that adds optional static typing. Also, NestJs is one of the Oaky stack technologies.
- **GraphQL**: I chose GraphQL because according to Oaky's mission, we cannot put a lot of time to develop a new endpoint for a new needs, So GraphQL is the best choice and it helps to have a faster development process.
- **Database**: In the Real World, We don't use a sqlite database, since they are not suitable for production, but for this task, I used sqlite because it is easy to use and doesn't need any configuration.
- **Docker**: I used Docker to make the project more portable and easy to run on any machine.
- **Bash Script**: I used bash script to make the project more developer-friendly and easy to run on dev mode.

### 2. **Development Order**
- **Frontend - Backend**: It's important to have clean and well-structured codebase from the beginning, so I started with creating the project base.
- **Frontend - Deals Page**: As a first step, It should be necessary to start the development with this page, since it has a several common components with the other pages, including Btn, Banner, GridSystem, DealCard.
- **Backend - Deals Model**: I created the model for the deals, since it is the main part of the project, And it helps to develop the more part of the task.
- **Frontend - Deal Details**: I created the Deal Details page, since it is crucial to submit the order by the users.
- **Dockerize**: I dockerized the project to make it more portable and easy to run on any machine.

### 3. **Database Structure - Deal Model**
- **id**: The unique identifier of the deal.
- **title**: The title of the deal.
- **description**: The description of the deal.
- **price**: The price of the deal.
- **image**: The image of the deal.
- **discountPrice**: The discount price of the deal.
- **content**: The content of the deal.
- **createdAt**: The creation date of the deal.
- **updatedAt**: The last update date of the deal.
- **deletedAt**: The deletion date of the deal, which helps to handle the soft delete instead of hard delete.


## Contributing Format
Human Errors are the most common errors in the world, so I created a commit convention to make the project more readable and understandable.
I Explain All The Commit Convention and the way you can contribute to this project in the `CONTRIBUTING.md` file.
You Just Need To Read [CONTRIBUTING.md](./CONTRIBUTING.md) and follow the steps.

## Run the project locally
#### Better Way:
- ``` git clone git@github.com:amirzenoozi/oaky-fullstack-engineer-interview.git ```
- ``` git config core.hooksPath .githooks ```
- ``` cd oaky-fullstack-engineer-interview ```
- ``` sh install.sh ```
- ``` sh runner.sh ```
