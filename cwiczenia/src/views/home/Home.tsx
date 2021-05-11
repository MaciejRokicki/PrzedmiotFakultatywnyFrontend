import React, { ChangeEventHandler } from "react";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import movieService from "../../services/movie.service";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center'
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

    const [search, setSearch] = React.useState('');
    const [movie, setMovie] = React.useState({});

    const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const makeRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = movieService.searchByName(search, 2);

            setMovie(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className={classes.container} onSubmit={makeRequest}>
                <TextField
                    className={classes.input}
                    label="Podaj tytuł"
                    variant="filled"
                    onChange={ handleInputTextChange }
                    type="text"
                />
                <IconButton
                    className={classes.button}
                    type="submit"
                >
                    <SearchIcon />
                </IconButton>
        </form>
    )
}

export default Home