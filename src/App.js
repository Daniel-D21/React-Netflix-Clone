
import './App.css';
import Banner from './component/Banner/Banner';
import Nav from './component/Nav/Nav';
import Row from './component/Row/Row';
import requests from './request';
//6016191caba80ad6c7f82dae7e53c5a1
function App() {
  const { fethTrending, fetchNetflixOriginals, fetchTopRatedMovies, fetchActionMovies, fetchComedyMovies, fetchHorrorMovies, fetchRomanceMovies, fetchDocumentaries } = requests
  

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={fethTrending} />
      <Row title='Top Rated' fetchUrl={fetchTopRatedMovies}/>
      <Row title='Action movies' fetchUrl={fetchActionMovies}/>
      <Row title='Comedy movies' fetchUrl={fetchComedyMovies}/>
      <Row title='Horror movies' fetchUrl={fetchHorrorMovies}/>
      <Row title='Romance movies' fetchUrl={fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={fetchDocumentaries }/>
    </div>
  );
}

export default App;
