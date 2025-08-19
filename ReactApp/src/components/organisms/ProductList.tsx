import styled from "styled-components";
import MUIPaper from "@components/molecules/MUIPaper";
import { Button, TextField } from "@mui/material";
import { useMemo, useState } from "preact/hooks";
import type { ChangeEvent } from "preact/compat";
import InfiniteScroll from 'react-infinite-scroll-component';
import Axios from "@src/configs/Axios";
import MUICard from "../molecules/MUICard";
import { theme } from "@src/configs/Media";


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
min-height: 100vh;
`;

const CardDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`;


const ProductList = () => {

    const [query, setQuery] = useState<ProductQuery>({ ...initialQuery });
    const [filters, setFilters] = useState<ProductFilters>({ ...initialFilters });
    const [products, setProducts] = useState<ProductDTO>({ ...initialProducts });
    const [loading, setLoading] = useState<boolean>(true);


    const handleFetch = () => {
        setLoading(true);

        Axios.get('/products', {
            params: { ...query }
        })
            .then((res) => {
                // console.log(res);

                const data = res.data.products;
                setProducts((prevState) => ({ products: [...prevState.products, ...data.products], hasMore: data.hasMore }));
                setLoading(false);
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
    console.log(theme.breakpoints);

    return (
        <ProductListDiv>
            <form style={{ width: '100%', display: 'flex', maxWidth: '350px' }} onSubmit={handleFilter}>
                <MUIPaper elevation={1}>

                    <TextField id="filterTitle" label="Title" variant="standard" type="text" value={filters['title']}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFilters((prevState) => ({ ...prevState, title: event.currentTarget.value }))}
                    />
                    <Button variant="contained" type="submit" disabled={loading}>SEARCH</Button>

                </MUIPaper>
            </form>
            <ListDiv>
                <InfiniteScroll
                    dataLength={products['products'].length}
                    next={handleScroll}
                    hasMore={products.hasMore}
                    loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <CardDiv>
                        {products['products'].map((product) => <MUICard {...product} />)}
                    </CardDiv>
                </InfiniteScroll>
            </ListDiv>
        </ProductListDiv>
    );
}

export default ProductList;