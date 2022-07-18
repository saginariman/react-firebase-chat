import React, { useContext, useState } from 'react'
import { Context } from '..';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { Container, Grid, TextField, Button, Avatar } from '@mui/material'
import Loader from './Loader';
import firebase from 'firebase/compat/app';

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('');
    }

    if(loading){
        return <Loader/>
    }
    return (
        <Container>
            <Grid container
                style={{height:window.innerHeight - 50, marginTop: 20}}
                justifyContent="center"
            >
                <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
                    {messages.map((message) => 
                        <div 
                            style={{
                                margin: 10,
                                border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                width: '50%',
                                padding: 5,
                            }}
                            key={message.createdAt}
                        >
                            <Grid container>
                                <Avatar src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: '80%'}}
                >
                    <TextField 
                        fullWidth  
                        variant={"outlined"}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button onClick={sendMessage} variant={"outlined"}>Отправить</Button>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Chat