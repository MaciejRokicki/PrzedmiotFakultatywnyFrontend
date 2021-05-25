import React from "react";

import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";

import movieService from "../../services/movie.service";
import { Page } from "../../entities/page";
import { Movie } from "../../entities/movie";
import { useAction } from "../../hooks/useAction";
import { FavoriteService } from "../../services/favorite.service";
import { MoviesToWatchService } from "../../services/moviesToWatch.service";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center'
        },
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
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center'
        },
        buttonItem: {
            alignSelf: 'center'
        },
        media: {
            width: '300px',
            height: '450px',
        },
        input: {
            margin: '10px 0px 10px 10px',
            width: '100%',
            maxWidth: '750px',
            alignSelf: 'stretch'
        },
        button: {
            borderRadius: '5px',
            marginRight: '10px',
            height: '56px',
            width: '56px',
            alignSelf: 'center'
        }
    }),
);

const Home = () => {
    const classes = useStyles();

    const favoriteActions = useAction(FavoriteService);
    const moviesToWatchActions = useAction(MoviesToWatchService);

    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [previousPageAvailable, setPreviousPageAvailable] = React.useState<boolean>(false);
    const [nextPageAvailable, setNextPageAvailable] = React.useState<boolean>(true);

    const [search, setSearch] = React.useState<string>('');
    const [pageResult, setPageResult] = React.useState<Page<Movie>>();

    const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const searchMovies = async (page: number) => {
        try {
            const response = await movieService.searchByName(search, page);

            setPageResult(response);
        } catch (error) {
            console.log(error);
        }
    }

    const makeRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrentPage(1);
        await searchMovies(1);
    };

    const nextPage = async () => {
        const tmp: number = currentPage + 1;
        await searchMovies(tmp);

        setCurrentPage(tmp);

        setPreviousPageAvailable(true);
        if (tmp === pageResult?.Pages) {
            setNextPageAvailable(false);
        }
    }
    const previousPage = async () => {
        const tmp: number = currentPage - 1;
        await searchMovies(tmp);

        setCurrentPage(tmp);

        setNextPageAvailable(true);
        if (tmp === 1) {
            setPreviousPageAvailable(false);
        }
    }

    return (
        <div>
            <form className={classes.container} onSubmit={makeRequest}>
                <TextField
                    className={classes.input}
                    label="Tytuł"
                    variant="filled"
                    onChange={handleInputTextChange}
                    type="text"
                />
                <IconButton
                    className={classes.button}
                    type="submit"
                >
                    <SearchIcon />
                </IconButton>
            </form>
            {pageResult ? (
                <div>
                    <div>
                        {pageResult.CurrentPage === pageResult.Pages ? (
                            <span>{(pageResult.CurrentPage - 1) * 10 + pageResult.TotalResults % 10} z { pageResult.TotalResults} wyników</span>
                        ) : (
                            <span>{pageResult.CurrentPage * 10}  z { pageResult.TotalResults} wyników</span>
                        )}
                    </div>
                    <div className={classes.movieContainer}>
                        {pageResult.Items.map((movie: Movie, id: number) => {
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
                                            onClick={() => { moviesToWatchActions.setNewMovieToWatch(movie) }}>
                                            <MovieCreationIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => { favoriteActions.setNewFavorite(movie) }}>
                                            <FavoriteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            )
                        })}
                    </div>
                    <div className={classes.buttonContainer}>
                        <div className={classes.buttonItem}>
                            <IconButton
                                onClick={previousPage}
                                disabled={!previousPageAvailable}>
                                <ArrowBackIcon />
                            </IconButton>
                            {pageResult.CurrentPage} / {pageResult.Pages}
                            <IconButton
                                onClick={nextPage}
                                disabled={!nextPageAvailable}>
                                <ArrowForwardIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            ) : (
                null
            )}
        </div>
    )
}

export default Home