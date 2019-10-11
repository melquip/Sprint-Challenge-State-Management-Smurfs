1. What problem does the context API help solve?
  * The context API allows us to `teleport` props instead of having to go through the whole tree of components to pass down any kind of data.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  * `actions` are the bits of information (objects) that send data from the application to the store.
  * `reducers` are functions that determine the way application state changes in response to the actions sent to the store.
  * `store` is the object that brings `actions` and `reducers` together, holding and allowing access to the application's current state. It is known as the `single source of truth` because our state tree (all application state) is the `store` and we can have only one `store` in the application.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
  * `Application State` is when we hold all state on the redux store or the parent of all components, meaning that the state of the application is kept at the top. `Component State` is when we use state inside any component, which prevents other components from accessing that state, for example, `Formik`.
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  * `redux-thunk` is a middleware library that allows us to create asynchronous actions inside our `action-creators`. It intercepts the dispatched actions that return a function and sends the `dispatch` as parameter, allowing us to wait for an api response and `.then` `dispatch` the action.
5. What is your favorite state management system you've learned and this sprint? Please explain why!
  * My favourite would be Redux because it handles all application state and allows for great state management and project organization.
