import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
// 전달 받은 props의 value와 props.value가 같아야 함 
// ex) bgColor === props.bgColor
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;  
`;

//Box의 모든 값을 가져옴 extending
const Circle = styled(Box)`
  border-radius : 50px;
  `;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`
// arrtribute접근 가능
const Input = styled.input.attrs({ required: true, minLength: "10" })`
  background-color: tomato;
`;

function styledCompo() {
  return (
    <Father as="header">
      {/* props사용 예시 */}
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      {/* as사용 예시 */}
      <Btn as="a" href="/">
        Log in
      </Btn>
      {/* attrs사용 예시 */}
      <Input />
    </Father>
  );
}

export default styledCompo;
