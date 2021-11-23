import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`
// keyframes 로 애니메이션 구현 가능!
const rotationAnimation = keyframes`
    0% {
      transform:rotate(0deg);
      border-radius:0px;
    }
    50% {
      transform: rotate(360deg);
      border-radius:100px;
    }
    100% {
      transform: rotate(0deg);
      border-radius:0px;
    }
`;

const Emoji = styled.span`
   font-size:36px;`;

const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    /* styled-components안에서 변수 자체를 넣어줄 수 있음 */
    animation:${rotationAnimation} 1s linear infinite;
    /* Emoji로 설정해두면 태그를 바꿔도 동작하는 장점이 있음 */
    ${Emoji}:hover {
        font-size: 90px;
    }
`;



function animation() {
    return (
        <Wrapper>
            <Box>
                <Emoji>😀</Emoji>
            </Box>
        </Wrapper>
    )
};


export default animation;