import React, { useEffect, useState } from "react"
import { useForm }from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from "react-toastify";

import Erro from '../error/Erro'
import AlertDialog from '../modal/AlertDialog'

import { Container, LoginPage, FormContainer, Content, Input, Button } from './style'


function LoginForm(){
    
    const [isUserValid, setIsUserValid] = useState(false);

    const validationSchema = yup.object({
        name:yup.string().required(),
        password:yup.string().required()
    });

    const { register, handleSubmit, formState:{ errors }, } = useForm({ 
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = ({ name, password }) => {

        const usuario = {
            name:name,
            password:password
        }
        localStorage.setItem('usuario', JSON.stringify(usuario))
        chechUser()
    };

    const onError = (error) => {
        if(error){
            if(error.name && error.password){
                return toast.error('Name e Password are required')
            }
            if(error.name){
                return toast.error('Name is required')
            }
            if(error.password){
                return toast.error('Password is required')
            }
        }
    };

    const chechUser = () => {
        const getUser = localStorage.getItem('usuario')

        if(getUser){
            setIsUserValid(true)
            const user = JSON.parse(getUser)
            toast.success(`Welcome ${user.name}`)
        }else{
            setIsUserValid(false)
        }
    };

    return(
        <Container>
        {!isUserValid ? (
        <LoginPage>
            <h1>Make login</h1>
            <FormContainer>
                <form onSubmit={ handleSubmit(onSubmit, onError) }>
                    <div>
                        <Content>
                            <label htmlFor="name">Name:</label>
                            <Input 
                                {...register("name")}
                                id="name"
                                name="name"
                                type="text"
                            />
                            {errors?.name?.type && <Erro />}
                        </Content>
                        <Content>
                            <label htmlFor="password">Password:</label>
                            <Input
                                {...register("password")}
                                id="password"
                                name="password"
                                type="password"
                            />
                            {errors?.password?.type && <Erro />}
                        </Content>
                    </div>
                    <div>
                        <Button type="submit">Login</Button>
                    </div>
                </form>
            </FormContainer>
        </LoginPage>
        ):(
            <AlertDialog chechUser={chechUser} />
        )}
        </Container>
    )
} 

export default LoginForm
