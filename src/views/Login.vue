<template>
  <div class="grey darken-1 empty-layout">
    <Form class="card auth-card" @submit="onSubmit" :validation-schema="schema">
      <div class="card-content">
        <span class="card-title">Авторизация</span>
        <small v-if="error" class="helper-text invalid">Неправильно введен логин/пароль</small>
        <div class="input-field">
          <Field name="name" type="text" />
          <ErrorMessage name="name" class="helper-text invalid" />
          <label>Логин</label>
        </div>
        <div class="input-field">
          <Field name="password" type="password"/>
          <ErrorMessage name="password" class="helper-text invalid" />
          <label>Пароль</label>
        </div>
      </div>
      <div class="card-action">
        <button class="btn waves-effect waves-light auth-submit" type="submit">Войти</button>
      </div>
    </Form>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';
import Axios from 'axios';

export default {
  name: 'login',
  data() {
    const schema = yup.object({
      name: yup.string().required("Поле обязательно для заполнения"),
      password: yup.string().required("Поле обязательно для заполнения").min(8, "Пароль должен содержать 8 символов"),
    });
    return {
      schema,
      error: false
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    async onSubmit(values) {
      await Axios.post(`http://127.0.0.1:8000/auth/jwt/create`, {'username': values.name.trim(), 'password': values.password.trim()})
          .then((res) => {
            this.$store.state.username = values.name;
            localStorage.setItem('username', values.name);
            localStorage.setItem('access', res.data.access);
            this.$store.state.token = localStorage.getItem('access');
            this.$router.push('/monitoring');
          })
          .catch((error) => {
            console.log('error', error);
            this.error = true;
          })
    },
  },
}
</script>
