import React, { Component } from 'react';
import Calendar from 'react-calendar';

class newTodo extends Component {   
    state = {
        date: new Date(),
        account:{
            title:"",
            description:"",
            date:""
        }
    }
    userName = React.createRef;
    
    componentDidMount = () =>{
        var inputVal = document.getElementById("userDescription").value;
        console.log(inputVal);
    }

    onChange = date =>{
        this.setState({ date });
        console.log(this.state.date.toLocaleDateString())
    } 

    onSubmit= e => {
        e.preventDefault();
        const account = {...this.state.account};
        account[e.current.name] = this.account.value;
        this.setState({account})
        console.log(this.userName.current.value);
    }


    render() { 
        return ( 
            <div className="form-group">
                <div>
                <label>title</label>
                <input  name="userTitle" ref={this.userName} id="userTitle" className="form-control" />
                </div>
                <div>
                <label for="exampleFormControlTextarea1">description</label>
                <textarea class="form-control" id="userDescription" rows="3"></textarea>
                <p></p>
                </div>
                <div>
                    <label>due date</label>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                    <p>{this.state.date.toLocaleDateString()}</p>
                </div>

                <button type="button" onClick={this.onSubmit} class="btn btn-primary">submit</button>

            </div>
         );
    }
}
 
export default newTodo;