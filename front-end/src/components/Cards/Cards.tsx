import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import useSortMovies from '../../Hooks/useSortMovies';

type Props = {
  movies: any;
};

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const Cards = (props: Props) => {
  const { getGenre } = useSortMovies();

  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={4}>
        {props.movies.map((movie: any) => (
          <Grid key={movie.id} item xs={8} sm={6} md={4} lg={3}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
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
                  <Stack direction="row" spacing={5} sx={{ py: '8px' }}>
                    <Rating
                      name="read-only"
                      value={Math.round(movie.vote_average / 2)}
                      readOnly
                    />
                    <StyledRating
                      name="customized-color"
                      defaultValue={0}
                      getLabelText={(value: number) =>
                        `${value} Heart${value !== 5 ? 's' : ''}`
                      }
                      precision={1}
                      max={1}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                  </Stack>
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default Cards;
