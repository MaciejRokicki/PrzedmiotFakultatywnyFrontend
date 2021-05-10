import React from 'react';

import NavPanel from '../../components/NavPanel';
import moveiService from '../../services/movies.service';

const Home = () => {
    const [search, setSearch] = React.useState('harry potter');
    const [movie, setMovie] = React.useState({});

    // // TAK NIE ROBI
    // React.useEffect(() => {
    //     const makeRequest = async () => {
    //         try
    //         {
    //             const response = await fetch(
    //                 `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&plot=full`
    //             ).then(response => response.json())
    //             console.log(response);
    //         } catch(error) {
    //             console.log(error);
    //         }

    //     };
    //     makeRequest();
    // }, [search]);

    // React.useEffect(() => {
    //     const makeRequest = async () => {
    //         try
    //         {
    //           const response: any = await http.get('http://www.omdbapi.com/', {
    //               apikey:  apiKey,
    //               s: search,
    //               plot: 'full',
    //           });

    //           setMovie(response);
    //           console.log(movie);
    //         } catch(error) {
    //             console.log(error);
    //         }

    //     };
    //     makeRequest();
    // }, [search]);

    React.useEffect(() => {
        const makeRequest = async () => {
            try
            {
              const response = moveiService.searchByName(search, 1);

              setMovie(response);
              console.log(movie);
            } catch(error) {
                console.log(error);
            }

        };
        makeRequest();
    }, [search]);

    return(
        <div>
            <NavPanel />
            This is home page
        </div>
    )
}

export default Home 