import React, { Component } from 'react';
import '../navbar.css';
class NavBar extends React.Component {
    render() { 

        return (
            <nav class="navbar navbar-expand-sm">
                 <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <span id='headerStyles2' style={this.headerStyles2}>Pop</span><span id='headerStyles' style={this.headerStyles}>corn</span>
                    </a>
                    <a id='headerStyles3' style={this.headerStyles3}class="navbar-brand" href="#">
                        About
                    </a>
                </div>
            </nav>
        )
    }
}
 
export default NavBar;