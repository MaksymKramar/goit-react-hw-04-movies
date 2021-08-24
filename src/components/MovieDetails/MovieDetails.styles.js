import styled from "@emotion/styled";

export const Btn = styled.button`
  top: 15px;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  padding: 10px;
  margin: 10px;
  background: chartreuse;
  border-radius: 10px;
  font-weight: 600;
  font-size: 24px;
  line-height: 18px;
  color: #000000;
  text-decoration: none;

  &:hover {
    background: #2f8b57;
    color: #ffffff;
    border-color: #ffffff;
  }
`;

export const Container = styled.div`
  display: flex;
  max-width: 882px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const Img = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  margin-right: 50px;
  border-radius: 10px;
  border: 2px solid #ffffff;
`;

export const Div = styled.div`
  padding-left: 40px;
`;

export const MovieTitle = styled.h2`
  margin: 0;
  margin-bottom: 35px;
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
  color: red;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.42;
  color: rgb(255, 255, 255);
`;

export const Span = styled.span`
  margin: 3px;
  padding-left: 4px;
  display: inline-block;
  border: 2px solid #ffffff;
  border-radius: 7px;
  color: #ffffff;
  background-color: green;
`;

export const MovieDescrTitle = styled.h3`
  margin-left: 10px;
  margin-bottom: 20px;
  color: yellow;
  font-size: 24px;
  line-height: 1.42;
  font-weight: 500;
`;

export const MovieDescriptionText = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.17;
  color: #ffffff;
`;

export const Li = styled.li`
  list-style: inside;
  color: #ffffff;
`;
