import { FAVORITES } from "../mutationTypes";

const mock = [
  {
    adult: false,
    backdrop_path: "/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
    belongs_to_collection: null,
    budget: 200000000,
    genres: [
      { id: 16, name: "Animation" },
      { id: 10751, name: "Family" },
      { id: 12, name: "Adventure" },
      { id: 35, name: "Comedy" },
      { id: 14, name: "Fantasy" }
    ],
    homepage: "",
    id: 508439,
    imdb_id: "tt7146812",
    original_language: "en",
    original_title: "Onward",
    overview:
      "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
    popularity: 87.361,
    poster_path: "/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
    production_companies: [
      {
        id: 2,
        logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
        name: "Walt Disney Pictures",
        origin_country: "US"
      },
      {
        id: 3,
        logo_path: "/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png",
        name: "Pixar",
        origin_country: "US"
      }
    ],
    production_countries: [
      { iso_3166_1: "US", name: "United States of America" }
    ],
    release_date: "2020-02-29",
    revenue: 103181419,
    runtime: 102,
    spoken_languages: [{ iso_639_1: "en", name: "English" }],
    status: "Released",
    tagline: "Their quest begineth.",
    title: "Onward",
    video: false,
    vote_average: 7.9,
    vote_count: 2210
  },
  {
    adult: false,
    backdrop_path: "/q62bpQ67qaXY0u6b2wFEnQYIbPd.jpg",
    belongs_to_collection: {
      id: 10194,
      name: "Toy Story Collection",
      poster_path: "/bDSe7UCiShmiTz7kuOjMyP6mz7l.jpg",
      backdrop_path: "/9FBwqcd9IRruEDUrTdcaafOMKUq.jpg"
    },
    budget: 175000000,
    genres: [
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" }
    ],
    homepage: "https://www.pixar.com/feature-films-toy-story-4",
    id: 301528,
    imdb_id: "tt1979376",
    original_language: "en",
    original_title: "Toy Story 4",
    overview:
      'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.',
    popularity: 36.438,
    poster_path: "/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
    production_companies: [
      {
        id: 2,
        logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
        name: "Walt Disney Pictures",
        origin_country: "US"
      },
      {
        id: 3,
        logo_path: "/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png",
        name: "Pixar",
        origin_country: "US"
      }
    ],
    production_countries: [
      { iso_3166_1: "US", name: "United States of America" }
    ],
    release_date: "2019-06-19",
    revenue: 1073394593,
    runtime: 100,
    spoken_languages: [{ iso_639_1: "en", name: "English" }],
    status: "Released",
    tagline: "Get Ready to Hit the Road",
    title: "Toy Story 4",
    video: false,
    vote_average: 7.6,
    vote_count: 5208
  },
  {
    adult: false,
    backdrop_path: "/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg",
    belongs_to_collection: {
      id: 468222,
      name: "The Incredibles Collection",
      poster_path: "/vWrv5Hu4TtJD1ah8XAJjZwoY86c.jpg",
      backdrop_path: "/9eDW2dVhnzPS2HvaRdK2OlAGaLq.jpg"
    },
    budget: 200000000,
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 10751, name: "Family" }
    ],
    homepage: "https://movies.disney.com/incredibles-2",
    id: 260513,
    imdb_id: "tt3606756",
    original_language: "en",
    original_title: "Incredibles 2",
    overview:
      "Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.",
    popularity: 27.381,
    poster_path: "/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg",
    production_companies: [
      {
        id: 2,
        logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
        name: "Walt Disney Pictures",
        origin_country: "US"
      },
      {
        id: 3,
        logo_path: "/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png",
        name: "Pixar",
        origin_country: "US"
      }
    ],
    production_countries: [
      { iso_3166_1: "US", name: "United States of America" }
    ],
    release_date: "2018-06-14",
    revenue: 1242805359,
    runtime: 118,
    spoken_languages: [{ iso_639_1: "en", name: "English" }],
    status: "Released",
    tagline: "Back to work.",
    title: "Incredibles 2",
    video: false,
    vote_average: 7.5,
    vote_count: 8514
  }
];

const favorites = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    [FAVORITES.GET_LIST](state, data) {
      state.list = data;
    },
    [FAVORITES.ADD](state, data) {
      state.list.push(data);
    },
    [FAVORITES.REMOVE](state, data) {
      const { id } = data;
      state.list = state.list.filter(media => media.id !== id);
    }
  },
  actions: {
    getList({ commit }) {
      commit(FAVORITES.GET_LIST, mock);
    },
    add({ commit }, data) {
      commit(FAVORITES.ADD, data);
    },
    remove({ commit }, data) {
      commit(FAVORITES.REMOVE, data);
    }
  },
  getters: {
    favorites: state => state.list,
    totalFavorites: state => state.list.length,
    getIsFavorite: state => id => {
      return state.list.find(media => media.id === id);
    }
  }
};

export default favorites;
