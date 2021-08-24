import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: grid;
  max-width: calc(100vw - 200px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 60px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Li = styled.li`
  overflow: hidden;
  background-color: rgb(247 68 8);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const Title = styled.h2`
  text-align: center;
  color: rgb(255, 255, 255);
`;
