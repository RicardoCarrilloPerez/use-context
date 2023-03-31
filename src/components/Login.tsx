import React, { useContext } from 'react'
import { User } from '../interfaces/User';
import { UserContext } from './hooks/UseContext';
const Login = () => {
    const {user, updateUser } = useContext(UserContext);
        return (
            <div>
                <h1>Login</h1>
                    <pre>
                        {JSON.stringify(user, null, 2)}
                    </pre>
                        <button
                            className='btn btn-primary'
                            onClick = { () => updateUser(new User(1,'Rodrigo','Bobadilla')) }
                        >
                            Modificar contexto
                        </button>
            </div>
        )
}

export default Login