import styled from '@emotion/styled';

export const TopBtn = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ebf5fc;

  background-color: #6a9bd8;
  border-radius: 50%;
  opacity: 0.7;
  transition: opacity 200ms ease-in-out;

  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
