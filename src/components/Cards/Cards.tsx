import { css } from '@emotion/react';

import { Card, CardActions } from '@mui/material';

import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

type Props = {
  movies: any;
};

const Cards = (props: Props) => {
  const convertTogenre = (genre: number) => {
    switch (genre) {
      case 28:
        return 'Action';
      case 12:
        return 'Adventure';
      case 16:
        return 'Animation';
      case 35:
        return 'Comedy';
      case 80:
        return 'Crime';
      case 99:
        return 'Documentary';
      case 18:
        return 'Drama';
      case 10751:
        return 'Family';
      case 14:
        return 'Fantasy';
      case 36:
        return 'History';
      case 27:
        return 'Horror';
      case 10402:
        return 'Music';
      case 9648:
        return 'Mystery';
      case 10749:
        return 'Romance';
      case 878:
        return 'Science Fiction';
      case 10770:
        return 'TV Movie';
      case 53:
        return 'Thriller';
      case 10752:
        return 'War';
      case 37:
        return 'Western';
      default:
        return 'Unknown';
    }
  };
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={4}>
        {props.movies.map((movie: any) => (
          <Grid key={movie.id} item xs={8} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`movie poster of ${movie.title}`}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  height="100"
                  component="div"
                >
                  {movie.title}
                </Typography>
                <Typography
                  variant="body2"
                  height="200"
                  color="textSecondary"
                  component="p"
                  sx={{ overflow: 'hidden' }}
                >
                  {movie.overview.slice(0, 100)}...
                </Typography>
                <Rating
                  name="read-only"
                  value={Math.round(movie.vote_average / 2)}
                  readOnly
                />
              </CardContent>
              <CardActions >
                <Stack
                  direction="row"
                  spacing={1}
                  
                >
                  <Chip
                    label={convertTogenre(movie.genre_ids[0])}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                  <Chip
                    label={convertTogenre(movie.genre_ids[1])}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default Cards;
