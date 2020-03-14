import React from 'react';
import {Route, withRouter} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile';
import Posts from './components/Posts'
import EditPost from './components/EditPost'
import UserPosts from './components/UserPosts'
import CreateNewPost from './components/CreateNewPost'
import Comment from './components/Comment'
import CreateComment from './components/CreateComment'


import {
  registerUser,
  loginUser,
  createUser,
  readAllUsers,
  updateUser,
  destroyUser,
  createPost,
  createComment,
  readAllUserPosts,
  readAllPosts,
  updatePost,
  destroyPost
} from './api-helper'


class App extends React.Component {
constructor(props){
  super(props)
  this.state={
    users:[],
    posts:[],
  currentUser: null,
  authFormData: {
    email: "",
    password: ""
  },
  }
}

handleChange = (e)=> {
  let name = e.target.name
  let value = e.target.value
  this.setState({
    authFormData: {...this.state.authFormData, [name]: value}
  })
}

handleSignUp = async(e)=>{
e.preventDefault()
let res = await registerUser(this.state.authFormData)
this.props.history.push(`/`)
}

handleSignIn = async(e)=>{
  e.preventDefault()
  let res = await loginUser(this.state.authFormData)
  this.setState({currentUser: res}) 
  this.props.history.push(`/profile/${res.id}`)
   
}

render () {
  let {email, password} =this.state.authFormData
  return (
      <React.Fragment>

        <Header currentUser= {this.state.currentUser}/>
        <Route exact path="/" component={About}/>
        <Route exact path="/login/sign_in">
          <SignIn email={email} password={password} handleChange={this.handleChange} handleSubmit={this.handleSignIn}/>
        </Route>
        <Route exact path="/login/signup">
          <SignUp email={email} password={password} handleChange={this.handleChange} handleSubmit={this.handleSignUp}/>
        </Route>
        <Route exact path="/profile/:user_id" component={Profile}/>
        <Route exact path= "/profile/:user_id/edit" component={EditProfile}/>
        <Route exact path="/posts/:user_id/:post_id" component={Posts}/>
        <Route exact path= "/posts/:user_id/create" component={CreateNewPost}/>
        <Route exact path="/posts/:user_id" component={UserPosts}/>
        <Route exact path= "/posts/comments/create" component= {CreateComment}/>
        <Footer/>
      </React.Fragment>
  );
}
}

export default withRouter(App)
