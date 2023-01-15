import { IArticle } from "../../types/types";
import { useLocation } from "react-router-dom";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { RouteLink } from "./ArticlesItem.styled";
import { getHighlightedText } from "../../helpers/highlightedText";

export const ArticlesItem = ({
  id,
  title,
  summary,
  imageUrl,
  publishedAt,
  filterValue,
}: IArticle | any) => {
  const date = new Date(publishedAt);
  const dateNormalize = date.toDateString();
  const location = useLocation();

  return (
    <Grid item component="li" xs={12} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          sx={{ height: 240, width: 1 }}
          image={imageUrl}
          title={title}
        />

        <CardContent>
          <Typography variant="body2">{dateNormalize}</Typography>

          <Typography component="h2" variant="h5">
            {getHighlightedText(title, filterValue)}
          </Typography>
          <Typography variant="body1">
            {getHighlightedText(summary, filterValue)}
          </Typography>
        </CardContent>

        <CardActions>
          <RouteLink to={`/article/${id}`} state={{ from: location }}>
            Read more
          </RouteLink>
        </CardActions>
      </Card>
    </Grid>
  );
};
