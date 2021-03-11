<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <user-login v-if="!userState.isLoggedIn" />
  <user-profile v-else />
  <movie-list />
  Number of movies: {{ numberOfMovies }}
</template>

<script>
import useMovieState from "@/store/useMovieState";
import useUserState from "@/store/useUserState";
import MovieList from "./components/MovieList";
import UserLogin from "./components/UserLogin";
import UserProfile from "./components/UserProfile";

export default {
  name: "App",
  components: { MovieList, UserLogin, UserProfile },
  setup: () => {
    const { getNumberOfMovies } = useMovieState();
    const { state: userState, getIsLoggedIn } = useUserState();

    return {
      numberOfMovies: getNumberOfMovies(),
      isLoggedIn: getIsLoggedIn(),
      userState,
    };
  },
};
</script>
