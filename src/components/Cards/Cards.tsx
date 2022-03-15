import { Card, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';





type Props = {
    movies: any;
}

const Cards = (props: Props) => {
  return (
    <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
            {props.movies.map((movie: any) => (
                <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardMedia 
                        component="img"
                        height='200'
                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={`movie poster of ${movie.title}`}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {movie.title}
                        </Typography>
                        <Typography variant="body2"  color="textSecondary" component="p">
                          {movie.overview}
                        </Typography>
                        </CardContent>
                        <CardActions>
                         
                        </CardActions>

                    </Card>
                </ Grid>
            ))}


        </Grid>


    </Grid>

  )
}
export default Cards;