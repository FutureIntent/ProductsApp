import styled from "styled-components";
import MUIPaper from "@components/molecules/MUIPaper";
import { Button, TextField } from "@mui/material";
import { useMemo, useRef, useState } from "preact/hooks";
import type { ChangeEvent } from "preact/compat";
import InfiniteScroll from 'react-infinite-scroll-component';


interface ProductDTO {
    title: string,
    description: string,
    image: string
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

const ProductListDiv = styled.div`
width: 100%;
`;

const ListDiv = styled.div`
width: 100%;
`;

const ProductList = () => {

    const [query, setQuery] = useState<ProductQuery>({
        page: 1,
        limit: 1,
        filters: {
            ...initialFilters
        }
    });
    const [filters, setFilters] = useState<ProductFilters>({ ...initialFilters });
    const [products, setProducts] = useState<ProductDTO[]>([]);
    const listRef = useRef<any>();

    const handleFetch = () => {
        console.log(query);

        setTimeout(() => {
            setProducts((prevState) => [...prevState, ...Array(5).fill({
                title: 'zxc',
                description: 'zzz',
                image: 'cxz'
            })]);
        }, 1500);

    }

    const handleFilter = (event: SubmitEvent) => {
        setProducts([]);
        setQuery((prevState) => ({ ...prevState, page: 1, filters: { ...filters } }));

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
            <ListDiv ref={listRef}>
                <InfiniteScroll
                    dataLength={products.length}
                    next={handleFetch}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    scrollableTarget={listRef}
                >
                    {
                        products.map((product) => <div style={{ borderStyle: 'solid', borderColor: 'red', borderWidth: '0.1em', marginBottom: '1em' }}>
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