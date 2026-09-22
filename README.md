# library-management-system

This is a library management system  API backend for the management of user and the books 

# Roots and the Endpoints 

## /user

GET : GET all the list of the user in the system 
POST : create/ register  a new user 

## /user/{id}
GET : get the user by ID 
PUT: updating the user by ID
DELETE : delete the user by ID  ( check if the user still has any issued book ) && ( is there any fine /panalty to be collected ).


## /user/subscription-details/{id}
GET: get the subscription details by their ID 
    >> date of the subscription 
    >> valid till ?
    >> fine if any ? 


## /books
GET : get all the books in the system 
POST : add a new book to the system 

## /book / {id}
GET : get a book by its ID 
PUT : update the book by its ID 
DELETE : delete a book by its ID 

## /books/issued
GET : get all the issued book 

## books/issued/withfine
GET : get all issued books with their fine amount 

## subscription  type 
    >> basic ( 3 month )
    >> standard ( 6 month )
    >> premium ( 12  months )


    >> if a user missed the renewal date , then user should be fine with the 100 rupess 
    >> if a user missed his subscription  , then user should be fine with the 100 rupess
    >> if a user misses both renewa and subscription , then user will bw fined be 200 rupees 



# commands 
1 > npm init  ,
2 > npm i express  ,
3 > npm i nodemon --save-dev  .


how to run the applicatin 
    >> ( npm run dev )





