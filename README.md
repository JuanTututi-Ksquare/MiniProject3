# MiniProject3

## Juan Pablo Tututi & Andres Cervera

| User Stories     | Juan Pablo | Andres |
| ---------------- | :--: | ---: |
| The API must have the following endpoint: 'v1/balance' that will  return the current balance in the application |    |   X   |
| The API must have the following endpoint: 'v1/transact\ion' that will add a new transaction to the balance history |  X   |    |
| The endpoint 'v1/transaction' must be aware of what kind of amount is given to it and how it affects the balance, if the number is positive the amount should be added to the balance but if negative it should subtract from it |  X   |      |
| The API must keep a history of both the balance changes and the transactions inside a data structure and all of it should be lost after a restart |  X   |      |
| The API must have the following endpoint: 'v1/clear' that upon calling it should set the balance to 0 and remove any transaction from the Data Structure that stored them |     |    X |
| The app must have an element that will show the current balance' |  X  |      |
| The app must have a clickable element that will fetch the balance from the API and show the new value if possible |     |   X  |
| The app must have a form element that will have the following fields 'Description' of type text and 'Amount' of type number |    |  X    |
| The app must have a label that explains to the user what the difference between positive and negative numbers is |     |   X  |
| The app must have a clickable element that will send the Transaction form to the API and update the balance afterward |  X  |      |


# Heroku git Url 
https://git.heroku.com/budget-app-itk.git

# Live Version (Github Pages)
https://juantututi-ksquare.github.io/MiniProject3/


# EndPoints
## Get
> https://budget-app-itk.herokuapp.com/v1/balance

## Post
> https://budget-app-itk.herokuapp.com/v1/transaction
 
```json
"balance": number,
"description": string
```

> https://budget-app-itk.herokuapp.com/v1/clear





