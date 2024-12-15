<template>
  <form action="">
    <div class="row g-3 align-items-center">
      <h1>Login</h1>
      <div class="col-auto d-block mx-auto">
        <input
          type="email"
          class="form-control"
          placeholder="Enter Your Email"
          v-model="state.email"
        />
        <span class="error-feedback" v-if="v$.email.$error">{{
          v$.email.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          type="password"
          class="form-control"
          placeholder="Enter Your password"
          v-model="state.pass"
        />
        <span class="error-feedback" v-if="v$.pass.$error">{{
          v$.pass.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <button type="submit" @click="UserLogin()" class="btn btn-primary">
          Login
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          @click="redirectTo({ val: 'signup' })"
          class="btn btn-secondary"
        >
          Sign Up
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "LoginForm",
  // composition API
  setup() {
    //data
    const state = reactive({
      pass: "",
      email: "",
    });
    //validations
    const rules = computed(() => {
      return {
        email: { required, email },
        pass: { required },
      };
    });

    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  data() {
    return {
      pass: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["redirectTo"]),
    SignUpPage() {
      this.$router.push({ name: "Signup" });
    },
    UserLogin() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Form Validated Successfully");
      } else {
        console.log("Form Validation Failed");
      }
    },
  },
};
</script>

<style></style>
