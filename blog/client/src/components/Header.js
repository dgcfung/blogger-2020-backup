import React from 'react'
import { NavLink, Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  container = React.createRef();
  state = {
    open: false,
  };

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };


  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };

  render() {
    let email
    if (this.props.currentUser != undefined) {
      email = this.props.currentUser.email
    }

    return (

      <div className="App">

        <div className="container" ref={this.container}>


          <button type="button" className="button" onClick={this.handleButtonClick}>
            ☰
          </button>
          <h1 className="blogger-header">Blogger 2020</h1>

          <p>Welcome {email}!</p>
          {this.state.open && (
            <div class="dropdown" onClick={this.handleButtonClick}>
              <ul>
                <li>About Blogger 2020</li>
                <li>Profile</li>
                <li>Posts</li>
              </ul>

            </div>

          )}


        </div>
      </div>
    );

  }
}

export default Header