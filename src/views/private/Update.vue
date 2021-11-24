<template>
  <div class="app-main-layout">
    <NavBar />
    <main class="app-content" :class="{full: !$store.state.visible}">
      <div class="app-page">


        <div>
          <div class="page-title">
            <h3>Редактирование пользователя</h3>
          </div>

          <section>
            <Form @submit="update" :validation-schema="schema">
              <div class="user-container">
                <p class="flow-text">Имя пользователя:</p>
                <div class="input-field col s6 user">
                  <Field name="login" placeholder="Введите имя" type="text" class="validate" :value="$store.state.userlogin"/>
                  <ErrorMessage name="login" class="helper-text invalid" />
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
    test(values) {

    },
    async update(values) {
      await Axios
          .patch(`https://tractorsptz.herokuapp.com/api/v1/ChangeRole/` + this.$store.state.userid, {'username': values.login}, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access')
            },
          })
          .then(() => {
            this.$router.push('/administration');
          }).catch((e) => {
            console.log('error', e);
            if(e === 'Error: Request failed with status code 401') {
            localStorage.clear();
            this.$router.push('/login');
            }
          });
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
