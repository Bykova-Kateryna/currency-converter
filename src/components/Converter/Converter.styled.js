import styled from 'styled-components';

export const ConverterSection = styled.main`
  background-color: #f5ffff;
  color: #3d5c7e;
  text-align: center;
  padding: 15px 0;
  border: 1px solid #1a4370;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const ConverterInputSection = styled.div`
  padding: 15px 0;
`;
export const ConverterSelect = styled.select`
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: #04e8fe;
    color: #14c0d1;
  }
`;
