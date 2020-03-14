# Blogger-2020-app

## Overview

Blogger-2020 will be a re-designed modern version of the "Blogger" app. The Blogger-2020 app will include a build out back-end using Rails and allow Full CRUD functionality in adding users. The app will feature 1:m association between users & posts and 1:m association between posts & comments. Users will be able to make blog posts which post to their personal endpoint.

### Permissions

N/A, all rights will be reserved to General Assembly and Donald Fung. Will add additional permissions as project progresses if applicable.

<br>

## MVP


Blogger 2020's Minimum Viable Product will feature a Full-stack application featuring a back-end built on Rails and front-end built on react. The app will feature User Authentication login with full CRUD controller capabilities for users. 

## Backend MVP
The main feature of the backend will be User Authentication. The built out server will use RESTful JSON endpoints with self-created data. The database will include one user table and two additional tables of posts and comments. Users & posts will have a 1:m relationship and posts and comments will have 1:m relationship.

## Frontend MVP

The frontend will have 8 components of Login, createUser, Profile, Posts, Contact Blogger, About Blogger, Header, and Footer. It take data the Rails backend and parse them onto the page. It will also use React Router to route. Frontend will indicate index or show actions to indicate when a user is logged in or not.
 
The front end will also allow for full CRUD capabilities to create, update, and delete posts. CSS styling will be included for a responsive page to suit mobile and desktop.


### MVP Goals

The MVP goal of my site is to allow users to sign up & login. Once a user has created an account they will be able to create/edit/delete posts. The user will have a feed of other users posts. Furthermore, they will be able to comment on others posts. To briefly summarize:

- User Authentication: Ability to login/logout of accounts
- Ability to create/edit/delete User Accounts
- Abilty to edit profile info
- Ability to to create/edit/delete posts
- Ability to create/edit/delete comments


<br>

### MVP Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |	Frontend |
|   React Router   | Set-up Routes for Frontend |
| 	Rails  	   | Backend setup |
| 	Axios  	   | Used to access backend API |
|     Additional   | Will be added as needed|


<br>

### MVP Client (Front End)

The frontend will have 8 components of Login, createUser, Profile, Posts, Contact Blogger, About Blogger, Header, and Footer. It take data the Rails backend and parse them onto the page. It will also use React Router to route. Frontend will indicate index or show actions to indicate when a user is logged in or not.
 
The front end will also allow for full CRUD capabilities to create, update, and delete posts. CSS styling will be included for a responsive page to suit mobile and desktop.

#### Wireframes

![image](https://media.git.generalassemb.ly/user/25138/files/0a99f980-5faf-11ea-8101-2593fc44ab84)


#### Component Hierarchy

![image](https://media.git.generalassemb.ly/user/25138/files/1be30600-5faf-11ea-8762-249ff9d0f8bb)


#### Component Breakdown

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    Header    |   n   | The header will contain the site title and links to About Blogger & Profile|
|    Footer    |   n   | The footer will contain copyright info. |
|   About Blogger   |   y   | Landing page with links to Sign Up/Sing In   |
|    App    |   Y   | Component will manage routes for app hold user login state.  |
| Sign up  |   n   | This component will allow users to sign up for app  |
| Login |   n   | Login Page for Users  |
| Profile |   n   | Page will render  User profile info    |
| Posts |   Y  | Page will display user posts and Full CRUD |
| Comments |   Y  | Page will manage comments Full CRUD|


<br>

### MVP Server (Back End)

The main feature of the backend will be User Authentication. The built out server will use RESTful JSON endpoints with self-created data. The database will include one user table and two additional tables of posts and comments. Users & posts will have a 1:m relationship and posts and comments will have 1:m relationship.

#### ERD Model

![image](https://media.git.generalassemb.ly/user/25138/files/cb79a180-5fca-11ea-960b-92c368af1cd8)


#### Endpoints


- POST `/login/signup`
	- Route submission will create new accounts
- POST `/login/sign_in
	- Rout to sign in a user
- GET `/posts/:user_id`
	- Route returns all posts by user
- POST `/posts/:user_id`
	- Route returns when user's clicks to create new post
- PUT `/posts/:user_id/edit/:post_id`
	- Route to edit post.
- POST `/posts/:user_id/comment`
	- Route returns when user's clicks to create new comment
- PUT `/posts/:user_id/:post_id/comment/:comment_id`
	- Route when user clicks to edit existing comment.
- GET `/profile/:user_id`
	- Route returnss user's profile
- PUT `/profile/edit`
	- Route returns when user wishes to edit profile
- GET `/posts/post_id`
	- Route returns a single post on its own page.
- DELETE `/posts/:user_id/
	- Route returns to post delete.
- DELETE `/posts/:user_id/comment/comment_id`
	- Route returns after comment delete.
- DELETE `/profile/user_id`
	- Route returns when a user deletes user account.
	
  
<br>

***

## Planning

My plan is to reach MVP by Wednesday March 10th

### Timeframes

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Setup Rails Backend including User Auth  |    H     |     20 hrs      |    8 hrs   |
| Set up routes/end points  |    H     |     8 hrs      |   16 hrs   |
| Create CRUD Actions |    H     |     8 hrs      |     12 hrs    |
| Front-end React Components w/ Full CRUD |    H     |     16 hrs      |     20 hrs     |
| CSS |    M    |     8 hrs      |     8 hrs    |
| Unforseen errors & debugging  |    H     |     4 hrs      |    10 hrs    |
| TOTAL               |    H      |     64 hrs      |     74 hrs     |


<br>

### Schedule


|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 5th | project proposal worksheet / psuedocoding |
|Mar 6th | Project pitch / build out endpoints	     |
|Mar 7th | Build out Back-end & User Authentication  |
|Mar 8th | Build out Back-end & User Authentication  |
|Mar 9th | Front-end React componenets/ 	     |
|Mar 10th| MVP, begin post-MVP              |
|Mar 11th| Styling                                  |
|Mar 12th| polishing                                 |
|Mar 13th| final presentations                       |

<br>

***

## Post-MVP

Post MVP ideas:

- Allow users to LIKE/DISLIKE POSTS
- Randomized random feed

Low Priority Post MVP

- Allow users to follow each other in m:m relationship
<br>

***

## Project Change Log

1. Props were passed into Header.js to display login status. 
2. Adjustments were made to front end route:
<br>
- PUT "/profile/:user_id/edit" to edit Profile

## Code Showcase
In order to display the login status I needed to pass props down from App.js to Header.js.

The following code was added to the handleSignIn on App.js to set currentUser state:
<br>
<br>
this.setState({currentUser: res}) 

Next, I used conditional rendering to display the login status in Header.js:
<br>
<br>
 let email
    if (this.props.currentUser != undefined) {
      email = this.props.currentUser.email
      console.log(email)
    }
    
The variable was originally declared inside the conditional statement but needed to be moved outside the function to work properly. 

## Code Issues & Resolutions

After attempting deployment on Friday, March 13th at 4:00pm,  I found my previously working code crashing with a 431 Request Header Fields too large error. I believe this is partially related to changes made to my node modules during deployment and partly due an overly large API request occuring when multiple clicks were made to make a submission request on login (PUT,POST, LOGIN). 

Based on my research, the error could be corrected by clearly out cookies in my browser and waiting a few hours. However, after not seeing results after clearly out cookies and deadline approaching, I decided to pull down an earlier version of my code. The previous version of code was functioning properly.

***
