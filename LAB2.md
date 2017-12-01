Async, FullStack Budget Categories
===

Enhance existing lab to use a server to store and retrieve data:

1. Create your express server in another repo (include link in canvas submission to additional repo)
  * Need model and routes for Catagory actions (load -> GET, add -> POST, update -> PUT, remove -> DELETE)
  * Add a good error handler to your express server
1. Change your app:
  * Use `redux-thunk` as middleware
  * Change actions to be async and talk to server before they dispatch to store
  * Need to add load action on `componentDidMount`

  * Make any other adjustments necessary

