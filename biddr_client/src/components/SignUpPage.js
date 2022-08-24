import React from 'react';
import { User } from '../requests';

const SignUpPage = (props) => {
    const { onSignUp } = props;
    const handleSubmit = event => {
        const { currentTarget } = event
        event.preventDefault()
        const formData = new FormData(currentTarget)
        const params = { user: {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        }
        User.create(params).then(user => {
            if(user?.id){
                onSignUp() // store the user in the App state
                props.history.push('/auctions') //navigate to index
            }
        })
    }

    return(
        <main className="d-flex justify-content-center" >
            <div style={{width: "30em"}} className="my-auto col-sm-12 shadow p-3 mb-5 bg-white rounded my-auto col-sm-12">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-control" type="text" name="username" id="username" required="required"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="text" name="email" id="email" required="required"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" id="password" required="required"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password_confirmation">Password Confiramtion</label>
                    <input className="form-control" type="password" name="password_confirmation" id="password_confirmation" required="required"/>
                </div>
                <input className="btn btn-secondary mt-3" type="submit" value="Sign Up" />
            </form>
            </div>
        </main>
    )
}

export default SignUpPage;
