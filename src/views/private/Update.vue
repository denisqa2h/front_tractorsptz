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
              <div>
                <p class="flow-text">Выберите роль</p>
                <div class="user-container change" @click="onSuperuser">
                  <p class="text" v-if="this.$store.state.usersuperuser"><i class="material-icons yes">check</i>Администратор</p>
                  <p class="text" v-if="!this.$store.state.usersuperuser">Администратор</p>
                </div>
                <div class="user-container change" @click="onStaff">
                  <p class="text" v-if="this.$store.state.userstaff"><i class="material-icons yes">check</i>Мастер</p>
                  <p class="text" v-if="!this.$store.state.userstaff">Мастер</p>
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
    });
    return {
      schema,
      guest: true
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
    onSuperuser() {
      this.$store.state.usersuperuser = !this.$store.state.usersuperuser;
      this.$store.state.userstaff = false;
      this.guest = false;
    },
    onStaff() {
      this.$store.state.usersuperuser = false;
      this.$store.state.userstaff = !this.$store.state.userstaff;
      this.guest = false;
    },
    onGuest() {
      this.$store.state.usersuperuser = false;
      this.$store.state.userstaff = false;
      this.guest = !this.guest;
    },
    back() {
      this.$router.push('/administration')
    },
    test(values) {

    },
    async update(values) {
      await Axios
          .patch(`http://127.0.0.1:8000/api/v1/ChangeRole/` + this.$store.state.userid, {'username': values.login, 'is_staff': this.$store.state.userstaff, 'is_superuser': this.$store.state.usersuperuser}, {
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
