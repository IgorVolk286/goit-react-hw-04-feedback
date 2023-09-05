import styled from 'styled-components';

export const WrapButtons = styled.div`
  width: 900px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;
export const Button = styled.button`
  padding: 15px 40px;
  margin-left: 50px;
  border-radius: 5px;
  color: #111111;
  border: 3px solid black;
  background-color: transparent;
  font-size: 36px;
  font-weight: 600;

  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: #f6f6f6;
  }
`;
