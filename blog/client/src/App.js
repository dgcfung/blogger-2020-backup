import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import Post from './components/Post'
import UserPosts from './components/UserPosts'
import CreateNewPost from './components/CreateNewPost'
import EditPost from './components/EditPost'


import {
  registerUser,
  loginUser,
  verifyUser,
} from './api-helper'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      posts: [],
      currentUser: null,
      authFormData: {
        email: "",
        password: ""
      },
    }
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      authFormData: { ...this.state.authFormData, [name]: value }
    })
  }

  handleSignUp = async (e) => {
    e.preventDefault()
    let res = await registerUser(this.state.authFormData)
    this.props.history.push(`/`)
  }

  handleSignIn = async (e) => {
    e.preventDefault()
    let res = await loginUser(this.state.authFormData)
    this.setState({ currentUser: res })
    this.props.history.push(`/profile/${res.id}`)

  }

  componentDidMount() {
    verifyUser()
  }

  render() {
    let { email, password } = this.state.authFormData
    return (
      <div className= "App">
      <React.Fragment>

        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/login/sign_in">
            <SignIn email={email} password={password} handleChange={this.handleChange} handleSubmit={this.handleSignIn} />
          </Route>
          <Route exact path="/login/signup">
            <SignUp email={email} password={password} handleChange={this.handleChange} handleSubmit={this.handleSignUp} />
          </Route>
          <Route exact path="/profile/:user_id" component={Profile} />
          <Route exact path="/profile/:user_id/edit" component={EditProfile} />

          <Route exact path="/posts/all/:user_id" component={UserPosts} />
          <Route exact path="/posts/:user_id/create" component={CreateNewPost} />
          <Route exact path="/posts/:user_id/:post_id" component={Post} />
          <Route exact path="/posts/:user_id/:post_id/edit" component={EditPost} />

        </Switch>
        <Footer />
      </React.Fragment>
      </div>
    );
  }
}

export default withRouter(App)
