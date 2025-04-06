import react from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Login(){
    return(
        <div>
            <h1>Login Page</h1>
            <form>
                <div className="form-group">
                    <label for="username">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}


export default Login;
