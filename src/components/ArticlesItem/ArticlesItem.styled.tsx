import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RouteLink = styled(Link)`
  padding: 10px 20px;

  color: #6a9bd8;
  text-decoration: none;

  background-color: transparent;
  border: 1px solid #6a9bd8;
  border-radius: 5px;

  transition: color 150ms ease-in-out, background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #6a9bd8;
  }
`;
