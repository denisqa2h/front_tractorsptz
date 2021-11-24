<template>
  <div class="app-main-layout">
    <NavBar />
    <main class="app-content" :class="{full: !$store.state.visible}">
      <div class="app-page">


        <div>
          <div class="page-title">
            <h3>Добавление пользователя</h3>
          </div>

          <section>
            <Form @submit="save" :validation-schema="schema">
              <div class="user-container">
                <p class="flow-text">Имя пользователя:</p>
                <div class="input-field col s6 user">
                  <Field name="login" placeholder="Введите имя" type="text" class="validate"/>
                  <ErrorMessage name="login" class="helper-text invalid" />
                </div>
              </div>
              <div class="user-container">
                <p class="flow-text">Пароль:</p>
                <div class="input-field col s12 user">
                  <Field name="pass" placeholder="Введите пароль" type="password" class="validate" />
                  <ErrorMessage name="pass" class="helper-text invalid" />
                </div>
              </div>
              <div class="user-container">
                <p class="flow-text">Подтвердите пароль:</p>
                <div class="input-field col s12 user">
                  <Field name="passwordConfirmation" placeholder="Введите пароль" id="passwordConfirmation" type="password" class="validate" />
                  <ErrorMessage name="passwordConfirmation" class="helper-text invalid" />
                </div>
              </div>
              <button class="green darken-3 btn">Сохранить</button>
            </Form>
            <button class="teal lighten-2 btn rghtbtn" @click="back">Отмена</button>
          </section>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import Axios from 'axios';
import NavBar from '@/components/NavBar';

export default {
  data() {
    const schema = yup.object({
      login: yup.string().required("Поле обязательно для заполнения"),
      pass: yup.string().required("Поле обязательно для заполнения").min(8, "Пароль должен содержать 8 символов"),
      passwordConfirmation: yup.string().required("Поле обязательно для заполнения").oneOf([yup.ref("pass")], "Пароли не совпадают"),
    });
    return {
      schema,
    }
  },
  components: {
    Field,
    Form,
    ErrorMessage,
    NavBar
  },
  methods: {
    onClick() {
      this.visible = !this.visible;
    },
    back() {
      this.$router.push('/administration')
    },
    async save(values) {
      await Axios.post(`https://tractorsptz.herokuapp.com/auth/users/`, {'username': values.login, 'password': values.pass})
          .then((res) => {
            this.$router.push('/administration');
          })
          .catch((e) => {
            console.log('error', e);
            if(e === 'Error: Request failed with status code 401') {
              localStorage.clear();
              this.$router.push('/login');
            }
          })
    }
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
}

.rghtbtn {
  margin-left: 150px;
  transform: translateY(-36px);
}

.user {
  margin-left: 10px;
}
</style>
