<template>
  <form action="">
    <div class="row g-3 align-items-center">
      <h1>Sign Up</h1>
      <div class="col-auto d-block mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Your First Name"
          v-model="firstname"
        />
        <span class="error-feedback" v-if="v$.firstname.$error">{{
          v$.firstname.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Your Last Name"
          v-model="lastname"
        />
        <span class="error-feedback" v-if="v$.lastname.$error">{{
          v$.lastname.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          type="email"
          class="form-control"
          placeholder="Enter Your Email"
          v-model="email"
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
          v-model="pass"
        />
        <span class="error-feedback" v-if="v$.pass.$error">{{
          v$.pass.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <button type="submit" @click="signUpNow()" class="btn btn-primary">
          Sign Up Now
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          @click="redirectTo({ val: 'Login' })"
          class="btn btn-secondary"
        >
          Login
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "SignUpForm",
  data() {
    return {
      v$: useValidate(),
      firstname: "",
      lastname: "",
      pass: "",
      email: "",
    };
  },
  validations() {
    return {
      firstname: { required },
      lastname: { required },
      email: { required, email },
      pass: { required, minLength: minLength(10) },
    };
  },
  methods: {
    ...mapActions(["redirectTo"]),
    LoginPage() {
      this.$router.push({ name: "Login" });
    },
    signUpNow() {
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

<style lang="scss" scoped>
.error-feedback {
  color: red;
  font-size: 0.85em;
}
</style>
