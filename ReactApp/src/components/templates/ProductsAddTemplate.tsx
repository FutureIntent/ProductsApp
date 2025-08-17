import styled from "styled-components";
import ProductsAddForm from "@components/organisms/ProductsAddForm";


const ProductsAddDiv = styled.div`
width: 100%;
`;

const ProductsAddTemplate = () => {


    return (
        <ProductsAddDiv>
            <ProductsAddForm />
        </ProductsAddDiv>
    );
}

export default ProductsAddTemplate;