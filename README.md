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
  - [x] DockerCompose File
  - [x] Dockerfiles
  - [x] GitHub Actions to Run Tests
  - [x] GitHub Actions to Build Docker Image
  - [x] Deploy On External Server: [EN]('https://oakyf.amirdouzandeh.me/en'), [NL]('https://oakyf.amirdouzandeh.me/nl')

## Key Decisions and Explanations
### 1. **Choice of Technologies**
- **React**: in comparison to Angular and Vue, React has a less learning curve and is more flexible, since you only need to know the JavaScript.
- **NestJs**: I chose NestJs because not only it is a modern, fast (built on top of Express) and powerful framework, but also it is written in TypeScript, which is a superset of JavaScript that adds optional static typing. Also, NestJs is one of the Oaky stack technologies.
- **GraphQL**: I chose GraphQL because according to Oaky's mission, we cannot put a lot of time to develop a new endpoint for a new needs, So GraphQL is the best choice and it helps to have a faster development process.
- **Database**: In the Real World, We don't use a sqlite database, since they are not suitable for production, but for this task, I used sqlite because it is easy to use and doesn't need any configuration.
- **Docker**: I used Docker to make the project more portable and easy to run on any machine.
- **Bash Script**: I used bash script to make the project more developer-friendly and easy to run on dev mode.
- **Translations**: I used i18n to make the project more user-friendly and easy to use for different languages, also I am going to translate all the text to several languages by using public LLM tools.

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

### 4. **Database Structure - Deal Order**
- **id**: The unique identifier of the deal order.
- **dealId**: The deal id of the order.
- **userId**: The user id of the order.
- **status**: The status of the order, which can be one of the following values: `pending`, `completed`, `canceled`.
- **startDateTime**: The start date of the reserved deal.
- **endDateTime**: The end date of the reserved deal.
- **roomNumber**: The room number of the reserved deal.
- **createdAt**: The creation date of the order.
- **updatedAt**: The last update date of the order.
- **deletedAt**: The deletion date of the order, which helps to handle the soft delete instead of hard delete.

### 5. **Multi-Language Support**
According to the Oaky Website Currently You are supporting 5 languages, including `EN`, `DE`, `NL`, `FR`, `ES`, `IT`. 
Which means supporting multi-language is crucial for this team and their future projects.
Also, in the Figma we have a Language Switcher, which means we should support the multi-language in the project.
However, Currently you only can change the language by using the URL.
I used i18n to make the project more user-friendly and easy to use for different languages.
According to the time limitation, I just translated the `EN` to `NL` by using public LLM tools manually.
I think, in the future, we can use the public LLM tools to translate all the text to several languages, on the fly which let us have more dynamic applications.

### 6. **GitHooks**
I used GitHooks to make the project more readable and understandable.
Based on my experience, human errors are the most common errors in the world, and it can affect and the clean codebase.
According to this fact, and after a lot of research, I found that using GitHooks can help to prevent human errors and make the project more readable and understandable.
At least in some cases, by these 2 available GitHooks, we can prevent the faulty `commits` and `branch names`.
Also, to make sure that every developer can see how to contribute to the project, I created a `CONTRIBUTING.md` file.

### 7. **If I had more time**
- **Unit Tests**: I believe that writing tests is crucial for the project, since it helps to have a more stable and reliable project.
- **StoryBooks**: The best way to check the UI components separately is to use StoryBooks, which helps to have a more clean and well-structured codebase.
- **Order Page**: The Order Model is the second important part of the project, so I should create the Order Page to let the users submit the order, this model has relation with deal, and user in the real world scenario.
- **User Model**: In the real world scenario, we should have a user model to handle the user's data, and the relation between the user and the order, also when we have a MultiLingual website, it means we MUST handle the different currencies, and this data should be stored for each user separately.
- **PostMan Collection**: Having a postman collection can help the team to test the API endpoints and make sure that everything is working as expected.

## Contributing Format
Human Errors are the most common errors in the world, so I created a commit convention to make the project more readable and understandable.
I Explain All The Commit Convention and the way you can contribute to this project in the `CONTRIBUTING.md` file.
You Just Need To Read [CONTRIBUTING.md](./CONTRIBUTING.md) and follow the steps.

## Run the project locally
If you want to run the project locally, You don't need to open two different terminals to install the dependencies for each app and run them separately,
you can use the `install.sh` and `runner.sh` scripts to install the dependencies and run the project.
just follow these steps:
#### Better Way:
- ``` git clone git@github.com:amirzenoozi/oaky-fullstack-engineer-interview.git ```
- ``` git config core.hooksPath .githooks ```
- ``` cd oaky-fullstack-engineer-interview ```
- ``` sh install.sh ```
- ``` sh runner.sh ```
