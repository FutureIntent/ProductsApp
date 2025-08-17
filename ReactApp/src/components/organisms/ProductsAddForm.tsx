import { useState } from "preact/hooks";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "@src/configs/Axios";
import MUIPaper from "@components/molecules/MUIPaper";
import { Alert, Button, TextField, type AlertColor } from "@mui/material";
import { validateImage } from "@src/functions/helpers/validateExtension";
import type { ChangeEvent } from "preact/compat";


interface ProductAdd {
    title: string,
    description: string,
    image: any
}

interface ServerRes {
    message: string | null,
    severity: string
}

const schema = yup
    .object({
        title: yup.string().required(),
        description: yup.string().required(),
        image: yup.mixed().required()
            .test("imageAmount", "1 image required", (image: any) => {
                return image.length == 1;
            })
            .test("imageExtension", "Non image format", (image: any) => {
                return (image.length > 0) && validateImage(image[0]);
            })
            .test("imageSize", "Max image size is 10MB", (image: any) => {
                return (image.length > 0) && image[0].size <= 10485760;
            })
    })
    .required();

const ProductsAddDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

const ProductsAddForm = () => {

    const [description, setDescription] = useState<string>("");
    const [message, setMessage] = useState<ServerRes>({
        message: null,
        severity: "error"
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const handleDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.currentTarget?.value);
    }

    const onSubmit = (body: ProductAdd) => {

        Axios.get('/csrf-cookie')
            .then(() => {
                Axios.post('/products', body, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then((res) => {
                        console.log(res);
                        setMessage({
                            message: "Success",
                            severity: "success"
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        const { message } = err.response.data;
                        setMessage({
                            message: message,
                            severity: "error"
                        });
                    })
            })
            .catch((err) => {
                console.log(err);
                const { message } = err.response.data;
                setMessage({
                    message: message,
                    severity: "error"
                });
            })
    }


    return (
        <ProductsAddDiv>
            <form style={{ width: '100%', display: 'flex', maxWidth: '350px' }} onSubmit={handleSubmit(onSubmit)}>
                <MUIPaper elevation={1}>

                    <TextField {...register("title")} id="addTitle"
                        label="Title" variant="standard"
                        error={errors.title?.message ? true : false}
                        helperText={errors.title?.message ?? ""}
                    />

                    <TextField {...register("description")} id="addDescription"
                        label="Description" variant="standard"
                        value={description} onChange={handleDescription}
                        error={errors.description?.message ? true : false}
                        helperText={errors.description?.message ?? ""} multiline rows={4}
                    />

                    <TextField {...register("image")} id="addImage"
                        label="Image" variant="standard"
                        error={errors.image?.message ? true : false}
                        helperText={errors.image?.message ?? ""} type="file"
                    />

                    <Button variant="contained" type="submit">LOGIN</Button>
                    {message.message && <Alert severity={message.severity as AlertColor}>{message.message}</Alert>}
                </MUIPaper>
            </form>
        </ProductsAddDiv >
    );
}

export default ProductsAddForm;