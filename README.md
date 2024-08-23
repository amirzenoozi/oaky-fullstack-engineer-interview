# Oaky FullStack Engineer Technical Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) as Front side and [Nest](https://github.com/nestjs/nest) as backed side.
This Projects Let you get verification Questions from the server and answer them with react application.

## Dependencies
- NodeJs
- Yarn
- Docker

## Contributing Format
Human Errors are the most common errors in the world, so I created a commit convention to make the project more readable and understandable.
I Explain All The Commit Convention and the way you can contribute to this project in the `CONTRIBUTING.md` file.
You Just Need To Read [CONTRIBUTING.md](./CONTRIBUTING.md) and follow the steps.

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

## Run the project
#### First Way:
- ``` git clone git@github.com:amirzenoozi/veriff-interview.git ```
- ``` git config core.hooksPath .githooks ```
- ``` cd veriff-interview/front ```
- ``` yarn install ```
- ``` cd veriff-interview/back ```
- ``` yarn install ```

#### Second Way:
Or you can run the following bash script to install dependencies and run the project:
- ``` git clone git@github.com:amirzenoozi/veriff-interview.git ```
- ``` git config core.hooksPath .githooks ```
- ``` cd veriff-interview ```
- ``` sh install.sh ```
- ``` sh runner.sh ```
