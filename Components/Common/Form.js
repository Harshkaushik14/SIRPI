import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import { Link } from 'react-router-dom';
export default function BasicTextFields({ title, setPassword, setEmail, handleAction }) {
    return (
        <div>
            <div className="heading-container">
                <h3>
                    {title} Form
                </h3>
            </div>
                <h4>OR</h4>
               <Link to="/register"><h3>Create Account</h3></Link>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="email"
                    label="Enter the Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Enter the Password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>

            <Button title={title} handleAction={handleAction}/>
        </div>
    );
}
