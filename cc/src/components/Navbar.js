import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

export default class Navbar extends Component {

  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);

    } catch (error) {
      console.log(error.message);

    }
    /*
     <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="logo.png" width="100" height="220" alt="" />
          </a>
        </div>
        
        */
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">


        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {this.props.auth.isAuthenticated && this.props.auth.user && (
              <a href="/" className="navbar-item">
                Home
              </a>
            )}



          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>
                  Hello {this.props.auth.user.username}
                </p>
              )}

              <div className="buttons">
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/register" className="button is-primary">
                      <strong>Register</strong>
                    </a>
                    <a href="/login" className="button is-light">
                      Log in
                      </a>
                  </div>

                )}

                {this.props.auth.isAuthenticated && (
                  <a href="/" className="button is-light" onClick={this.handleLogOut}> Log Out </a>
                )}



              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
