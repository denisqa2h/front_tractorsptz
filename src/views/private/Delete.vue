<template>
  <div class="app-main-layout">
    <NavBar />
    <main class="app-content" :class="{full: !$store.state.visible}">
      <div class="app-page">


        <div>
          <div class="page-title">
            <h3>Удаление пользователя</h3>
          </div>
          <section>
            <p class="flow-text accept">Подтвердите удаление пользователя</p>
            <div class="user-container">
              <p class="flow-text">Имя пользователя</p>
              <p class="flow-text">{{ $store.state.userlogin }}</p>
            </div>
            <button class="red accent-4 btn" @click="remove">Удалить</button>
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
    async remove() {
      await Axios
          .delete(`http://127.0.0.1:8000/api/v1/DeleteUser/` + this.$store.state.userid, {headers: {Authorization: 'Bearer ' + localStorage.getItem('access')}})
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
.rghtbtn {
  margin-left: 30px;
}

.accept {
  color: #d50000;
}
</style>
