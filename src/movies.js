import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "f0f619fb73f28b210028d7f1f3c1ecea";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGY2MTlmYjczZjI4YjIxMDAyOGQ3ZjFmM2MxZWNlYSIsInN1YiI6IjY2NmVhNGMyYzllYjQ4ODYyYThjOTVjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rsFIlo4yHEZi4zpDxsoZy645HU7GlRiN40y9AvKbLAM",
  },
};

export const getTrendMovie = async () => {
  try {
    const response = await axios.get(
      `trending/movie/day?api_key=${API_KEY}language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.log("Sorry something went wrong:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}include_adult=false&language=en-US&page=1`,
      options
    );
    return response.data;
  } catch (error) {
    console.log("Sorry something went wrong:", error);
    throw error;
  }
};

export const moviesDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.log("Sorry something went wrong:", error);
    throw error;
  }
};

export const moviesCredits = async (movieId) => {
  try {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
      options
    );
    response.data;
  } catch (error) {
    console.log("Sorry something went wrong:", error);
    throw error;
  }
};

export const moviesReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
      options
    );
    return response.data;
  } catch (error) {
    console.log("Sorry something went wrong:", error);
    throw error;
  }
};
