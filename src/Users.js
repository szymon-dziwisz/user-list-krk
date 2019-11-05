import React, {Component} from "react";

import Heading from './Heading';
import UsersList from './UsersList';

// Pamiętaj że komponenty klasowe nazywamy dużą litera.

class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: ['Adam', 'Olga', 'Kasia']
        }
    }

    addUser = (e) => {
        e.preventDefault();
        this.setState(prevStage=>{
            return({users: [...prevStage.users, this.userInput.value]})
        });
    }

    removeUser = (indexToDelete) => {
        
        let filteredArray = this.state.users.filter((elem, index)=>{
            return index !== indexToDelete;
        });
            console.log(filteredArray);
            
        this.setState({users: filteredArray});
        
    }

    render() {
        
        
        return (<div className="Users">
            {/* dlaczego piszemy className zamiast class -> bo class jest już słowem kluczowym zarezerwowanym w jsie. */}

            <Heading text="User's list"/>

            <form onSubmit={this.addUser} className="add-user-form">
                <input type="text" placeholder="Nazwa użytkownika" ref={input => this.userInput = input} />
                <button>Add user</button>
            </form>

            <UsersList usersList={this.state.users} deleteUser={this.removeUser}/>
            
        </div>
        );
    }
}

export default Users;