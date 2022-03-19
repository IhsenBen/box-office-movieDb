import { Card, CardActions } from '@mui/material';

import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

import useSortMovies from '../../Hooks/useSortMovies';

type Props = {
  movies: any;
};

const Cards = (props: Props) => {
  const { getGenre } = useSortMovies();

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
              <CardActions>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label={getGenre(movie.genre_ids[0])}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                  {movie.genre_ids[1] ? (
                    <Chip
                      label={getGenre(movie.genre_ids[1])}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ) : (
                    ''
                  )}
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
