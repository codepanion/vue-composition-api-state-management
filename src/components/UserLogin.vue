<template>
  <form @submit.prevent="onSubmit()">
    <label>
      Email:
      <input type="email" v-model="userForm.email" />
    </label>

    <label>
      Password:
      <input type="password" v-model="userForm.password" />
    </label>

    <button type="submit" :disabled="userState.loading">
      {{ userState.loading ? "Loading..." : "Submit" }}
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import { login } from "@/api";
import useUserState from "@/store/useUserState";

export default {
  name: "UserLogin",
  setup: () => {
    const userForm = ref({
      email: "",
      password: "",
    });

    const { state: userState, updateUserData, updateLoading } = useUserState();

    const onSubmit = () => {
      updateLoading(true);
      login()
        .then((data) => updateUserData(data))
        .finally(() => updateLoading(false));
    };

    return {
      userForm,
      onSubmit,
      userState,
    };
  },
};
</script>

<style></style>
