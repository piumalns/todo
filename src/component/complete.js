import React, { Component } from 'react';
import { getTodo } from '../service/movie';

class completeTodo extends Component {
    
    state = {
        users: []
     };

     async componentDidMount() {
      let users = await getTodo();
      users = users.filter(x=> x.state1===2)
      this.setState({ users });
        }

        

    render() { 
        return ( 
            <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">description</th>
              <th scope="col">due date</th>
              <th>complete date</th>
              <th></th>
            </tr>
            
          </thead>
          <tbody>
              {this.state.users.map(user => (
                <tr key={user.id}>
                  <td>{user.title}</td>
                  <td>{user.description}</td>
                  <td>{user.due_date}</td>
                  <td>{user.completed_date}</td>
                  <td><button className="btn btn-danger">delete</button></td>
                </tr>

              ))}                                     
          </tbody>
        </table>
         );
    }
}
 
export default completeTodo;