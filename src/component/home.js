import React, { Component } from 'react';
import { getTodo } from '../service/movie';
import axios from "axios";

class home extends Component {

  state = {
    users: []
 }; 

  async componentDidMount() {
    let users = await getTodo();
    users = users.filter(x=> x.state1===1)
    this.setState({ users });
    }

  completeTodo = (user) => {
    
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date);

    //user.id=7;
    //user.completed_date = date;

    console.log(user);
     var data = {title:user.title,description:user.description,due_date:user.due_date,completed_date:date,state1:2}
    const headers = {
      'Content-Type': 'application/json'
    }
    axios.post('http://localhost:1064/api/Values', data, {
        headers: headers
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })


  }

  createTodo = (user) => {
    console.log(user);
     var todo = {id:user.id, title:user.title, description:user.description, due_date:user.due_date, completed_date:user.completed_date, state1:2}
    const headers = {
      'Content-Type': 'application/json'
    }
    axios.put('http://localhost:1064/api/Values/'+user.id, todo, {
        headers: headers
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }



    render() { 
      // console.log(this.state.users.filter(x=> x.state1==1))

        return ( 
          <table class="table">
          <thead>
            <tr>
              <th scope="col">to do</th>
              <th scope="col">Title</th>
              <th scope="col">description</th>
              <th scope="col">due date</th>
              <th></th>
              <th></th>
            </tr>
            
          </thead>
          <tbody>
              {this.state.users.map(user => (
                <tr key="{user.id}">
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.description}</td>
                  <td>{user.due_date}</td>
                  <td><button onClick={() => this.createTodo(user)}  class="btn btn-primary">edit</button></td>
                  <td><button className="btn btn-danger">delete</button></td>
                </tr>

              ))}                                     
          </tbody>
        </table>
         );
    }
}
 
export default home;