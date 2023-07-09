import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import SearchAppBar from '../components/navBar';
import { Container, Grid, Box } from '@mui/material';
import GameCard from '../components/cards';
import Loading from '../components/loading';
import Links from '../components/links';

export default function App() {

  const [games, setGames] = useState([])
  const [loader, setLoader] = useState(true)
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  const [jogosFiltrados, setJogosFiltrados] = useState([])

  const getGames = async () => {
    try {
      const response = await axios.get("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/", {
        headers: {
          'dev-email-address': 'caioa.m.meirelles22@gmail.com'
        }
      });
      setGames(response.data);
      setLoader(false)
    } catch (er) {
      let err = er.response.status
      setLoader(false)
      console.log(err)
      if(err == 500 || err == 502 || err == 503 || err == 504 || err == 507 || err == 508 || err == 509 ){
        setError1(true)
      }else{
        setError2(true)
      }  
    }
  }

  useEffect(() => {
    getGames()
  }, [])

  useEffect(() => {
    if (games.length >= 1) {
      setLoader(false)
      setError1(false)
      setError2(false)
      
    }
  })

  const filtrarPorNome = (nome) => {
    if (nome === '') {
      getGames()
    }
    const gamesFiltrados = games.filter((game) =>
      game.title.toLowerCase().includes(nome.toLowerCase()) ||
      game.genre.toLowerCase().includes(nome.toLowerCase())

    );
    setJogosFiltrados(gamesFiltrados);
  };

  useEffect(() => {
    setGames(jogosFiltrados)
  }, [jogosFiltrados])

  return (
    <div className="App">
      <SearchAppBar filtrarPorNome={filtrarPorNome}></SearchAppBar>
      <Links/>

      {loader ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <Loading />
        </Box>
      ) : null}

      {error1 ? <h2>O servidor fahou em responder, tente recarregar a página</h2> : null}
      {error2 ? <h2>O servidor não conseguirá responder por agora, tente voltar novamente mais tarde</h2> :null}

      <Container maxWidth='xl'>
        <Grid container spacing={12} justifyContent={'space-between'} alignItems={'flex-start'} >
          {games.map((game, key) => (
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12} key={key} >
              <GameCard
                title={game.title}
                thumbnail={game.thumbnail}
                game_url={game.game_url}
                genre={game.genre} />
            </Grid>
          ))}

        </Grid>
      </Container>

    </div>
  );
}


