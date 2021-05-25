import { useSelector } from "react-redux";

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { useAction } from "../../hooks/useAction";
import { Movie } from "../../entities/movie";
import { FavoriteService } from "../../services/favorite.service";
import favoriteSelector from "../../store/selectors/favorite.selector";

const useStyles = makeStyles(() =>
    createStyles({
        movieContainer: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        movieItem: {
            margin: '10px',
            width: '300px',
            display: 'flex',
            flexWrap: 'wrap'
        },
        card: {
            alignSelf: 'flex-start',
        },
        cardActions: {
            alignSelf: 'flex-end'
        },
        media: {
            width: '300px',
            height: '450px',
        }
    }),
);

const Favorite = () => {
    const classes = useStyles();

    const favoriteActions = useAction(FavoriteService);
    const favorites = useSelector(favoriteSelector.getAll);

    return (
        <div>
            {favorites ? (
                <div className={classes.movieContainer}>
                    { favorites.map((movie: Movie, id: number) => {
                        return (
                            <Card key={id} className={classes.movieItem}>
                                <CardActionArea className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={movie.Poster}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {movie.Title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardActions}>
                                    <IconButton
                                        onClick={() => { favoriteActions.setDeleteFavorite(movie) }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        )
                    })}
                </div>
            ) : (
                null
            )}
        </div>
    )
}

export default Favorite