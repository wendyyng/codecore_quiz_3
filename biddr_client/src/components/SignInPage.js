import React, { useState } from 'react';
import { Session } from '../requests';

function SignInPage(props){
    const { onSignIn } = props;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [errors, setErrors] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        // const { currentTarget } = event;
        // const formData = new FormData(currentTarget)
        const params = {
            email: email,
            password: password
        }

        Session.create(params).then(data => {
            if (data.status === 404) {
                setErrors([...errors, {message: "Wrong email or password"}])
            }
            else if (data.id){
                onSignIn()
                //Navigate to Index page from the browser
                //We can 'push' on history to manipulate the browser
                //and direct our user to any page in our app
                props.history.push('/auctions')
            }
        })
    }

    return(
        <main className="d-flex justify-content-center m-4 " >
             <div style={{width: "30em"}} className="my-auto col-sm-12 shadow p-3 mb-5 bg-white rounded my-auto col-sm-12">
            <form onSubmit={handleSubmit}>
                {errors.length > 0 ? (
                    <div>
                        <h4>Failed to Sign In</h4>
                        <p>{errors.map(error => error.message).join(", ")}</p>
                    </div>
                ) : (
                    ""
                )}

                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input className="form-control" type="text" name="email" id="email" onChange={event => {
                        setEmail(event.currentTarget.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input className="form-control"type="password" name="password" id="password" onChange={event => {
                        setPassword(event.currentTarget.value)}} />
                </div>
                <input className="btn btn-secondary mt-3" type="submit" value="Sign In" />
            </form>
            </div>
        </main>
    )
}

export default SignInPage;