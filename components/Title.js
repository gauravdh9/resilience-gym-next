
import styled from "styled-components";
const Span = styled.span`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 70%;
    height: 2px;
    background: ${({color})=>color};
    margin: auto;
    left: 0;
    right: 0;
  }
`;
const Title = ({className,text,color}) => {
    return (
        <Span className={`${className} heading` } color={color}>
            {text}
        </Span>
    )
}

export default Title
