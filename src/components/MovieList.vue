<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
        <span v-if="movie.requiresLogin">(login required)</span>
        <button v-if="isLoggedIn" @click="removeMovie(movie.id)">x</button>
      </li>
    </ul>
    <button v-if="isLoggedIn" @click="onAddMovieClick()">Add Movie</button>
  </div>
</template>

<script>
import useUserState from "@/store/useUserState";
import useMovieState from "@/store/useMovieState";

export default {
  name: "MovieList",
  setup: () => {
    const {
      addMovie,
      removeMovie,
      getNumberOfMovies,
      getMovies,
    } = useMovieState();
    const { getIsLoggedIn } = useUserState();

    const onAddMovieClick = () => {
      addMovie({
        id: getNumberOfMovies().value + 1,
        title: `Movie ${getNumberOfMovies().value + 1}`,
        requiresLogin: false,
      });
    };

    return {
      movies: getMovies(),
      onAddMovieClick,
      isLoggedIn: getIsLoggedIn(),
      removeMovie,
    };
  },
};
</script>

<style></style>
