import styled from "styled-components";
import ProductList from "@components/organisms/ProductList";


const IndexDiv = styled.div`
width: 100%;
`;

const IndexTemplate = () => {


    return (
        <IndexDiv>
            <ProductList />
        </IndexDiv>
    );
}

export default IndexTemplate;