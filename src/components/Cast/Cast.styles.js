import styled from "@emotion/styled";

export const Div = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem 2rem;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 2rem;
  padding: 20px;
  list-style: none;
`;

export const Li = styled.li`
  border-radius: 20px;
  box-shadow: 0.3rem 0.4rem 0.4rem rgb(0 0 0 / 40%);
  overflow: hidden;
  transition: transform 0.25s ease-in-out;
  background-color: rgb(40, 138, 141);
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.4s ease-out;
`;

export const PNameActors = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  text-align: center;
  font-size: 18px;
  line-height: 1.17;
  color: #ffffff;
`;

export const PCharacter = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-weight: 400;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  line-height: 1.17;
  color: #e4bbbb;
`;
