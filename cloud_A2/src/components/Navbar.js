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
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand navbar-item">
          <h2>Open Source Library</h2>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
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
                    <a href="/" className="button is-primary">
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
