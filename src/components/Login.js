import React, { useContext } from 'react'
import { Container, Grid, Box, Button } from '@mui/material'
import { Context } from '..';
import firebase from 'firebase/compat/app';

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider);
    }

    return (
    <Container>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{height: window.innerHeight - 50}}
        >
            <Grid
                style={{width: 400, background: 'lightgray'}}
                container
                direction="column"
                alignItems="center"
            >
                <Box p={5}>
                    <Button onClick={login} variant="outlined">Войти с помощью Google</Button>
                </Box>
            </Grid>
        </Grid>

    </Container>
    )
}

export default Login