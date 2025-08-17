import { Alert, Button, TextField } from "@mui/material";
import styled from "styled-components";
import MUIPaper from "@components/molecules/MUIPaper";;
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "@src/configs/Axios";
import { useState } from "preact/hooks";


interface LoginInterface {
    email: string,
    password: string
}

const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required();

const LoginFormDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

const LoginForm = () => {

    const { VITE_CLIENT_URL } = import.meta.env;

    const [message, setMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (body: LoginInterface) => {
        Axios.get('/csrf-cookie')
            .then(() => {
                Axios.post('/login', body)
                    .then(() => window.location.replace(VITE_CLIENT_URL + "/"))
                    .catch((err) => {
                        console.log(err);

                        const { message } = err.response.data;
                        setMessage(message);
                    })
            })
            .catch((err) => console.log(err))
    }


    return (
        <LoginFormDiv>
            <form style={{ width: '100%', display: 'flex', maxWidth: '350px' }} onSubmit={handleSubmit(onSubmit)}>
                <MUIPaper elevation={1}>

                    <TextField {...register("email")} id="loginEmail"
                        label="Email" variant="standard" type="email"
                        error={errors.email?.message ? true : false}
                        helperText={errors.email?.message ?? ""}
                    />

                    <TextField {...register("password")} id="loginPassword"
                        label="Password" variant="standard"
                        type="password" error={errors.password?.message ? true : false}
                        helperText={errors.password?.message ?? ""}
                    />

                    <Button variant="contained" type="submit">LOGIN</Button>
                    {message && <Alert severity="error">{message}</Alert>}
                </MUIPaper>
            </form>
        </LoginFormDiv >
    );
}

export default LoginForm;