import React, { Component } from 'react';
import { getTodo , deleteUserTodo } from '../service/movie';

class deleteTodo extends Component {
    state = {
        users: []
    };

    async componentDidMount() {
      let users = await getTodo();
      users = users.filter(x=> x.state1===3)
      this.setState({ users });
    }

    handleDelete = async user => {
      const originalUsers = this.state.users;
      const users = originalUsers.filter(m => m._id !== user.id);
      this.setState({ users });
  
      try {
        await deleteUserTodo(user.id);
      } catch (ex) {
        if (ex.response && ex.response.status === 404) console.log("x");
        //toast.error("This movie has already been deleted.");
  
        this.setState({ users: originalUsers });
      }
    };


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
                  <td><button onClick={()=> this.handleDelete(user)} type="button" class="btn btn-danger">delete</button></td>
                </tr>

              ))}                                     
          </tbody>
        </table>
         );
    }
}
 
export default deleteTodo;