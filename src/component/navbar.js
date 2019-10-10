import React, { Component } from 'react';

class Navbar extends Component {

    render() { 
        return ( 
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <a class="nav-link" href="/" to>Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/complete">complete</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/delete">Delete</a>
                </li>
                </ul>
                <button type="button" class="btn btn-success">new </button>
                </div>
                </nav>
            </div>
         );
    }
}
 
export default Navbar;