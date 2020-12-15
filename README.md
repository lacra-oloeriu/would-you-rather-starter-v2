# Would You Rather : Lacramioara Oloeriu

## Availeble install and start Scripts

To install necesasery dependencyes you need to run only first time 
``` bash 
npm install
```
to run the project 
```bash
npm start
```

## Application description
This is a simple implementation of the Would You Rather game that enables you to have fun with your friends. 

The app functionality if the following
- It comes with a pre built database with some users and some questions
- you can impersonate any user that you would like. 
- you can vote questions and create new questions.
- you can also view the leaderboard. For each created question or answered question the players receive one point. 

## Application architecture orientation
This section is focussed only inteded to helpy get oriented faster if you plan to extend or debut in the future

## index.js and App.js
This is a standard react application and the main entry point is `index.js` that load the `/componetns/App.js` file

## react router
As expected the main component that links the rest of the components is the App.js. The App.js contains the router and these are the legal routs so far. 
- `/` 
- `/login` This is the only route that can be accessed in case you are not logged in. 
- `/question/:id`

## Redux
The application uses redux. The middleware, reducers and actions can be located in their respective folders
- `actions`: This is where the actions are located
- `middleware`: This is where the middleware is located
- `reducers`: THis is where the reducers are located

## Specific components
The components that the application is composed for are located in the `componets` folder
