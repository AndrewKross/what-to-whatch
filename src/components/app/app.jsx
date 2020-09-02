import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AppRoute } from "../../const";
import MainPage from "../main-page/main-page.jsx";
import FilmPage from "../film-page/film-page.jsx";
import MainPlayer from '../main-player/main-player.jsx';

const App = ({ allFilms, filteredFilms, filmsOnScreen }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <MainPage
          films={filteredFilms}
          filmsOnScreen={filmsOnScreen}
          promoFilmData={allFilms[0]}
        />
      </Route>
      <Route exact path={`${AppRoute.FILM}:id`}
        render={({ match }) => {
          const selectedFilm = filteredFilms.find((film) => film.id === +match.params.id);
          return (
            <FilmPage
              selectedFilm={selectedFilm}
              films={filteredFilms}
              filmsOnScreen={filmsOnScreen}
            />
          );
        }}
      />
      <Route exact path={`${AppRoute.PLAYER}:id`}
        render={({ match }) => {
          const selectedFilm = filteredFilms.find((film) => film.id === +match.params.id);
          return (
              <MainPlayer film={selectedFilm} />
          );
        }}
      />
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = (state) => ({
  allFilms: state.allFilms,
  filteredFilms: state.filteredFilms,
  filmsOnScreen: state.filmsOnScreen,
});

App.propTypes = {
  filmsOnScreen: PropTypes.number.isRequired,
  filteredFilms: PropTypes.array.isRequired,
  allFilms: PropTypes.array.isRequired,
};

export { App as AppComponent };
export default connect(mapStateToProps)(App);
