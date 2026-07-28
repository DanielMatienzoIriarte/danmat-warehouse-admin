import React, { useState} from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response: any = await fetch('localhost:30000/sales/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            console.log("response", response);

            const data = response.json;
console.log("data", data);
            if (response.ok) {
                login(data.token);
                navigate();
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />

            <input type="submit">
                Sign in
            </input>
        </form>
    );
};

export default Login;