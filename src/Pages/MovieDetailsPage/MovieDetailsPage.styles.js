import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Div = styled.div`
  margin-left: 50px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin-left: 10px;
  margin-bottom: 20px;
  color: rgb(241, 241, 181);
  font-size: 24px;
  line-height: 1.42;
  font-weight: 500;
`;

export const LinkNav = styled(NavLink)`
  border: 1px solid #000000;
  padding: 5px;
  margin-left: 10px;
  background: cyan;
  border-radius: 5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  color: #000000;
  text-decoration: none;

  &:hover {
    background: #2f8b57;
    color: #ffffff;
    border-color: #ffffff;
  }
`;
