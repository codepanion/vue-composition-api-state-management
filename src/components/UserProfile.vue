<template>
  <div>
    <h3>User: {{ fullName }}</h3>
    <button @click="updateIsLoggedIn(false)">Logout</button>
  </div>
</template>

<script>
import useUserState from "@/store/useUserState";

export default {
  name: "UserProfile",
  setup: () => {
    const { getFullName, updateIsLoggedIn } = useUserState();

    return {
      fullName: getFullName(),
      updateIsLoggedIn,
    };
  },
};
</script>

<style></style>
