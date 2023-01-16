import { Typography } from '@mui/material';
import { RouteLink } from '../components/ArticlesItem/ArticlesItem.styled';

export const PageNotFound = () => {
  const errorCode = '4</>4';
  const errorMsg = `Error404() { message = "Page not found" }; `;

  return (
    <>
      <Typography variant="h1">{errorCode}</Typography>
      <Typography variant="body1" sx={{ mb: '30px' }}>
        {errorMsg}
      </Typography>

      <RouteLink to={`/`}>Go back</RouteLink>
    </>
  );
};
