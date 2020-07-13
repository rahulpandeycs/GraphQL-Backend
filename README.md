# GraphQL + React Event Booking API

Client : https://github.com/rahulpandeycs/GraphQL-FrontEnd

1. An Event booking app created using GraphQL.
2. MongoDB
3. NodeJS
4. React.JS

1.The application allows a user to login/create an account.
2. If user is logged in they are allowed to creat events and book the events not created by them.
3. If the user is not logged in, they can only view the events.

1. Used the Data Loader library introduced by Facebook, to batch and cache query calls and results respectively. 
2. As any application might recurse into multiple calls to the backend for the same data, the data loader helps by batching all the network calls for a single node event loop and calling them all at once. 
3. Moreover, it also checks if this call has already been made, in which case the Cached promise is returned.

Images of the application:
### Without login one can only view events:
![Without login one can only view events](https://i.imgur.com/DMyAjdK.png)
### Sign-UP:
![Sign-UP](https://i.imgur.com/esPRNoU.png)
### Post Login, create an event option:
![Post Login, create an event option](https://i.imgur.com/n6bxfte.png)
### Create event form:
![Create event form](https://i.imgur.com/Cwn9OXJ.png)
### Self created events have no view details option:
![Self created events have no view details option](https://i.imgur.com/n6bxfte.png)
### View Details of an event and book if logged in:
![View Details of an event and book if logged in](https://i.imgur.com/xkAzQDn.png)
### Booking Successful Notification:
![Booking Successful Notification](https://i.imgur.com/gqaWf1W.png)
### View all bookings:
![View all bookings](https://i.imgur.com/CsWtRfc.png)
### Delete Bookings:
![Delete Bookings](https://i.imgur.com/SAShAaQ.png)

# Usage

Install all dependencies
```sh
npm install
```

Run the server
```sh
npm start
```



This project was created as a side project and certain aspects of a full stack projects could be missing as the purpose of this project was purely an introduction to GraphQL and not build a full functional application.
