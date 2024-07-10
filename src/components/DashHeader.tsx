import { styled } from "styled-components";

const DashHeader = () => {
  return (
    <Container>
      <h1>E-CHILD</h1>
      <Left>
        <Circle>O</Circle>
        <p>Ogbonna Finbarr</p>
      </Left>
    </Container>
  );
};

export default DashHeader;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ff6f61;
  display: flex;

  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 50px;
    background-color: #ff6f61;
    position: absolute;
    bottom: -50px;
    left: 0;
    clip-path: polygon(
      0% 100%,
      10% 80%,
      20% 100%,
      30% 80%,
      40% 100%,
      50% 80%,
      60% 100%,
      70% 80%,
      80% 100%,
      90% 80%,
      100% 100%
    );
  }
`;
const Circle = styled.div``;
const Left = styled.div``;
