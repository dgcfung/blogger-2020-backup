import React from 'react'

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

      <div className="Header">
        
        <div className="container" ref={this.container}>


          <button type="button" className="hamburger-button" onClick={this.handleButtonClick}>
            ☰
          </button>
         

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
        <h1 className="blogger-header">Blogger 2020</h1>
      </div>
    );

  }
}

export default Header