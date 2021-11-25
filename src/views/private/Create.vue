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
              <div>
                <p class="flow-text">Выберите роль</p>
                <div class="user-container change" @click="onSuperuser">
                  <p class="text" v-if="is_superuser"><i class="material-icons yes">check</i>Администратор</p>
                  <p class="text" v-if="!is_superuser">Администратор</p>
                </div>
                <div class="user-container change" @click="onStaff">
                  <p class="text" v-if="is_staff"><i class="material-icons yes">check</i>Мастер</p>
                  <p class="text" v-if="!is_staff">Мастер</p>
                </div>
                <div class="user-container change" @click="onGuest">
                  <p class="text" v-if="guest"><i class="material-icons yes">check</i>Гость</p>
                  <p class="text" v-if="!guest">Гость</p>
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
      is_staff: false,
      is_superuser: false,
      guest: true
    }
  },
  components: {
    Field,
    Form,
    ErrorMessage,
    NavBar,
  },
  methods: {
    onClick() {
      this.visible = !this.visible;
    },
    onSuperuser() {
      this.is_superuser = !this.is_superuser;
      this.is_staff = false;
      this.guest = false;
    },
    onStaff() {
      this.is_superuser = false;
      this.is_staff = !this.is_staff;
      this.guest = false;
    },
    onGuest() {
      this.is_superuser = false;
      this.is_staff = false;
      this.guest = !this.guest;
    },
    back() {
      this.$router.push('/administration')
    },
    async save(values) {
      await Axios.post(`http://127.0.0.1:8000/auth/users/`, {'username': values.login, 'password': values.pass, 'is_staff': this.is_staff, 'is_superuser': this.is_superuser})
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

.text{
  font-size: 17px;
}

.yes{
  color: #1b5e20;
}

.change{
  cursor: pointer;
}
</style>
