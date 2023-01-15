import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";
import { IArticle } from "../../types/types";
import { getHighlightedText } from "../../helpers/highlightedText";

export const ArticlesDetails = ({
  title,
  imageUrl,
  summary,
  publishedAt,
  filterValue,
}: IArticle | any) => {
  const date = new Date(publishedAt);
  const dateNormalize = date.toDateString();

  return (
    <>
      <Box sx={{ mt: "40px", mx: "auto", width: 0.7 }}>
        <Card sx={{ height: 1 }}>
          <CardMedia
            sx={{ height: 340, width: 1 }}
            image={imageUrl}
            title={title}
          />

          <CardContent>
            <Typography variant="body2">{dateNormalize}</Typography>

            <Typography component="h2" variant="h5">
              {getHighlightedText(title, filterValue)}
            </Typography>

            <Typography variant="body1">
              {" "}
              {getHighlightedText(summary, filterValue)}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
