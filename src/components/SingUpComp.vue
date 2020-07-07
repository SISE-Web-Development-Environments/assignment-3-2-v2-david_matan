<template>
  <span>
    <div class="sign-up-form">
      <form>
        <div class="form-row">
          <label for="username">Username</label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.username.$model"
            :class="{'is-invalid': $v.username.$error,  'is-valid': !$v.username.$invalid }"
            placeholder="Enter User Name"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.username.required">
              User name is required.
              <br />
            </span>
            <span v-if="!$v.username.onlyLetters">
              User name must be in english letters
              <br />
            </span>
            <span v-if="!$v.username.maxLength">
              User name must be between 3 to 8 letters
              <br />
            </span>
            <span v-if="!$v.username.minLength">
              User name must between 3 to 8 letters
              <br />
            </span>
          </div>
        </div>
        <div class="form-row">
          <label>First Name</label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.firstname.$model"
            :class="{'is-invalid': $v.firstname.$error,  'is-valid': !$v.firstname.$invalid }"
            placeholder="Enter First Name"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.firstname.required">
              Firstname is required.
              <br />
            </span>
            <span v-if="!$v.firstname.englishLetter">
              Firstname must be in english.
              <br />
            </span>
          </div>
        </div>
        <div class="form-row">
          <label>Last Name</label>
          <input
            class="form-control"
            type="text"
            v-model.trim="$v.lastname.$model"
            :class="{'is-invalid': $v.lastname.$error,  'is-valid': !$v.lastname.$invalid }"
            placeholder="Enter Last Name"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.lastname.required">
              Lastname is required.
              <br />
            </span>
            <span v-if="!$v.lastname.englishLetter">
              Lastname must be in english.
              <br />
            </span>
          </div>
        </div>
        <div class="form-row">
          <label for="email">Email address</label>
          <input
            class="form-control"
            type="email"
            placeholder="Enter Email"
            v-model.trim="$v.email.$model"
            :class="{'is-invalid': $v.email.$error,  'is-valid': !$v.email.$invalid }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.email.required">
              Email is required.
              <br />
            </span>
            <span v-if="!$v.email.email">
              The Email address field is not a valid e-mail address.
              <br />
            </span>
          </div>
        </div>
            <div class="form-row">
          <label for="profileURL">profile picture</label>
          <input
            class="form-control"
            type="url"
            placeholder="Enter profile URL"
            v-model.trim="$v.profile.$model"
            :class="{'is-invalid': $v.profile.$error,  'is-valid': !$v.profile.$invalid }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.profile.required">
              profile url is required.
              <br />
            </span>
            <span v-if="!$v.profile.email">
              The url address field is not a valid url address.
              <br />
            </span>
          </div>
        </div>
        <div class="form-row">
          <label class="my-1 mr-2" for="countrySelect">Country</label>
          <select
            class="form-control"
            v-model.trim="$v.country.$model"
            :class="{'is-invalid': $v.country.$error,  'is-valid': !$v.country.$invalid }"
          >
            <option value disabled selected>Select your country</option>
            <option v-for="c in countryList" :key="c.name">{{ c.name }}</option>
          </select>
        </div>
        <div class="form-row">
          <label for="password">password</label>
          <input
            class="form-control"
            type="password"
            placeholder="Enter Password"
            v-model.trim="$v.password.$model"
            :class="{'is-invalid': $v.password.$error,  'is-valid': !$v.password.$invalid }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.password.required">
              Password is required.
              <br />
            </span>
            <span v-if="!$v.password.minLength || !$v.password.maxLength">
              The password must be between 5 to 10.
              <br />
            </span>
            <span v-if="!$v.password.mustWithNumSL">
              The password needs to contain at least one
              <br />number and at least one special characters.
              <br />
            </span>
          </div>
        </div>
        <div class="form-row">
          <label for="password">Confirmation Password</label>
          <input
            class="form-control"
            type="password"
            placeholder="Enter Confirmation Password"
            v-model.trim="$v.repassword.$model"
            :class="{'is-invalid': $v.repassword.$error,  'is-valid': !$v.repassword.$invalid }"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.repassword.required">
              Confirmation password is required.
              <br />
            </span>
            <span v-if="!$v.repassword.sameAsPassword">
              Must Confirmation password be the same as password.
              <br />
            </span>
          </div>
        </div>

        <button type="submit" v-on:click="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </span>
</template>

<script>
import {
  required,
  maxLength,
  minLength,
  sameAs,
  alpha,
  email,
  url
} from "vuelidate/lib/validators";
let countries = require("../countries.json");
const mustWithNumSL = value =>
  /\d/.test(value) && /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g.test(value);
export default {
  name: "SignUpcomp",
  data() {
    return {
      countryList: countries,
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      repassword: "",
      email: "",
      profile:"",
      country: ""
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(8),
      onlyLetters: alpha
    },
    firstname: {
      required,
      englishLetter: alpha
    },
    lastname: {
      required
    },
    email: {
      required,
      email
    },
    profile:{
      required,
      url
    },
    country: {
      required
    },
    password: {
      required,
      mustWithNumSL,
      minLength: minLength(5),
      maxLength: maxLength(10)
    },
    repassword: {
      required,
      sameAsPassword: sameAs("password")
    }
  },
  methods: {async submit(){
          this.$v.$touch()
     if (!this.$v.$invalid) {
   try {
        console.log(this.username)
        console.log(this.password)
        console.log(this.country)
        console.log(this.email)
        console.log(this.firstname)
        console.log(this.lastname)
        const response = await this.axios.post(
          "https://david-matan-recipe-api-server.herokuapp.com/api/users/",
          {
            username: this.username,
            password: this.password,
            email: this.email,
            firstname: this.firstname,
            lastname: this.lastname,
            country: this.country,
            confirmpassword: this.repassword,
            url:this.profile
          }
        );
        if( response.status==200){this.$router.push("/");}
        else if(response.status==400){
          console.log(response.body)
        }
        console.log(response);
      } catch (err) {

        
        console.log(err.response);
      }
  }
  }
  }
}
</script>

<style>
.sign-up-form {
  width: 300px;
  margin: 10vh auto;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.6);
  background: rgba(160, 160, 160, 0.5);
  padding: 20px;
  text-align: center;
  border-radius: 30px;
  display: inline-block;
}

.sign-up-form h1 {
  color: white;
  margin-bottom: 20px;
}

/* Clear floats after the columns */

.form-control {
  border-radius: 20px;
  padding: 7px;
  margin: 1px 0;
  width: 100%;
  border: 1px solid #999;
  outline: none;
}
</style>