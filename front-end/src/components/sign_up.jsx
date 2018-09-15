import React from 'react';
//import '/css file'
//import axios for http requests
import axios from 'axios'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            passwordinput: '',
            passwordinput2: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const newUser = {
            username: this.state.name,
            email: this.state.email,
            passwordinput: this.state.passwordinput,
            passwordInput2: this.state.passwordinput2,
        }

        axios.post('/signup', { newUser })
            .then((request, response) => {
                console.log(request);
                console.log(response);
            })
    }


    // onSubmit(value) {
    //     //axios.post('/signup').then(request, response)
    //     // axios.post('/user', {
    //     //     firstName: 'Fred',
    //     //     lastName: 'Flintstone'
    //     // })
    //     //     .then(function(response) {
    //     //         console.log(response);
    //     //     })
    //     //     .catch(function(error) {
    //     //         console.log(error);
    //     //     });
    //     axios.post('/signup').then(
    //         (request, response) => {
    //             console.log(request);
    //             console.log(response);
    //         }
    //     )
    //     this.setState({

    //     })
    // }

    render() {
        return (
            <div className="container-fluid">
                <h1>Smart-Ass Sign Up</h1>
                <div className="row">
                    <div className="col-md-12">
                        <form role="form">

                            <div className="form-group">
                                <label>
                                    Create Username
                                </label>
                                <input type="text" name="username" className="form-control" id="UsernameCreate" onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label>
                                    Email address
					                      </label>
                                <input type="text" name="email" className="form-control" id="EmailInputSign-In" onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label id="passwordInput">
                                    Password
					                      </label>
                                <input type="password" name="passwordinput" className="form-control" id="passwordInputSign-In" onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label id="passwordInput2">
                                    Re-Enter Password to confirm
					                      </label>
                                <input type="password" name="passwordinput2" className="form-control" id="passwordInputSign-InConfirm" onChange={this.handleChange} />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
				                    </button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}




export default SignUp;