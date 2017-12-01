Full Stack Budget Tracker
===

Evolve your project to handle:

* Add/Remove/Update of Categories
* Add/Remove/Update of Expenses that belong to a category

## App

1. Use React Router and have a list of categories where clicking on a category
links to a client side route with the list of expenses for that cateogry, _or_
1. Display a List/Tree of Categories and Child Expenses

For either strategy, manage the expenses in redux store as a (dictionary) object with keys by category id and
value is array of Expenses.

Make sure to handle:
1. Loading indicator
1. Errors returned from server

### reducers, actions, api

* Use promise middleware
* Try out patterns for action creators from classwork. 

What looks and feels most succinct and easy to think about to you?

## Server

You can choose:

1. How to model categories and expenses:
    1. Expenses as child array in Categories
    1. Separate Expense models with category prop that references parent category id

1. Expense route style:
    1. `/api/categories/:id/expenses` (child resource)
    1. `/api/expenses` (independent resource)

## Rubric **20pts**
* App
    * Components **5pts**
    * State Management
        * Action creators **3pts**
        * Middleware **2pts**
        * Reducers **3pts**
    * Project Organization
        * Feature folders **2pts**
        * No dead code **2pts**
* Server
    * Idiomatic Express **2pts**
    * Model/Route choices make sense **1pt**
