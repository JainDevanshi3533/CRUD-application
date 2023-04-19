import styled from "@emotion/styled";

import {Button, FormControl, FormGroup, Input, InputLabel, Typography} from '@mui/material';
import { useState } from "react";

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;

    & > div{
        margin-top:20px;
    }
`;

const defaultValue = {
    name:'',
    username:'',
    email:'',
    phone:''
}
const AddUser = () =>{
    const [user, setUser] = useState(defaultValue);
    const onValueChange = (e)=> {
        // console.log(e.target.name,e.target.value);
        //when key is a variable as well.. then we put in the square brackets..
        setUser({...user,[e.target.name]:e.target.value});
        // console.log(user);
    }

    const addUserDetails = () =>{
        
    }
    return(
        <Container>
            <Typography variant="h4"  >Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>E-mail</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=> addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;