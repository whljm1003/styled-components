import styled from 'styled-components';

/*
    Title의 color 와 Wrapper의 background-color 의 props는 index.js에서 ThemeProvider한테 온 것이다. 
*/

const Title = styled.h1`
    color: ${props => props.theme.textColor};
`

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.backgroundColor};
`
function Themems() {
    return (
        <Wrapper>
            <Title>Hello world!</Title>
        </Wrapper>
    )
};


export default Themems;