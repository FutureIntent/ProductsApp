import styled from "styled-components";
import MUIPaper from "@components/molecules/MUIPaper";
import { Button, TextField } from "@mui/material";
import { useMemo, useState } from "preact/hooks";
import type { ChangeEvent } from "preact/compat";
import InfiniteScroll from 'react-infinite-scroll-component';
import Axios from "@src/configs/Axios";


interface ProductInstance {
    title: string,
    description: string,
    image: string
}

interface ProductDTO {
    products: ProductInstance[],
    hasMore: boolean
}

interface ProductFilters {
    title: string
}

interface ProductQuery {
    page: number,
    limit: number,
    filters: ProductFilters
}


const initialFilters: ProductFilters = {
    title: ""
}

const initialQuery: ProductQuery = {
    page: 1,
    limit: 1,
    filters: { ...initialFilters }
}

const initialProducts: ProductDTO = {
    products: [],
    hasMore: true
}


const ProductListDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
`;

const ListDiv = styled.div`
width: 100%;
height: 100vh;
`;


const ProductList = () => {

    const [query, setQuery] = useState<ProductQuery>({ ...initialQuery });
    const [filters, setFilters] = useState<ProductFilters>({ ...initialFilters });
    const [products, setProducts] = useState<ProductDTO>({ ...initialProducts });


    const handleFetch = () => {
        console.log(query);

        Axios.get('/products', {
            params: { ...query }
        })
            .then((res) => {
                // console.log(res);

                const data = res.data.products;
                setProducts((prevState) => ({ products: [...prevState.products, ...data.products], hasMore: data.hasMore }));
            })
            .catch((err) => console.log(err))
    }

    const handleScroll = () => {
        setQuery((prevState) => ({ ...prevState, page: prevState.page + 1 }));
    }

    const handleFilter = (event: SubmitEvent) => {
        setProducts({ ...initialProducts });
        setQuery({ ...initialQuery, filters: { ...filters } });

        event.preventDefault();
    }

    useMemo(handleFetch, [query]);


    return (
        <ProductListDiv>
            <form style={{ width: '100%', display: 'flex', maxWidth: '350px' }} onSubmit={handleFilter}>
                <MUIPaper elevation={1}>

                    <TextField id="filterTitle" label="Title" variant="standard" type="text" value={filters['title']}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFilters((prevState) => ({ ...prevState, title: event.currentTarget.value }))}
                    />
                    <Button variant="contained" type="submit">SEARCH</Button>

                </MUIPaper>
            </form>
            <ListDiv>
                <InfiniteScroll
                    dataLength={products['products'].length}
                    next={handleScroll}
                    hasMore={products.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {
                        products['products'].map((product) => <div style={{ borderStyle: 'solid', borderColor: 'red', borderWidth: '0.1em', marginBottom: '1em', height: '300px' }}>
                            <p>{product.title}</p>
                            <p>{product.description}</p>
                            <p>{product.image}</p>
                        </div>)
                    }
                </InfiniteScroll>
            </ListDiv>
        </ProductListDiv>
    );
}

export default ProductList;