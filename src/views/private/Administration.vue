<template>
  <div class="app-main-layout">
    <NavBar />
    <main class="app-content" :class="{full: !$store.state.visible}">
      <div class="app-page">


        <div>
          <div class="page-title">
            <h3>Управление доступом сотрудников</h3>
          </div>

          <div class="page-title">
            <button @click="onSubmit()" class="waves-effect waves-light btn">Добавить нового пользователя</button>
          </div>

          <section>
            <ul class="collection with-header">
              <li class="collection-header"><h4>Имя пользователя</h4></li>
              <li class="collection-item" v-for="value in info"><div>{{ value.username }}<router-link to="/delete" class="secondary-content" @click="addID(value)"><i class="material-icons right delete">delete</i></router-link><router-link to="/update" class="secondary-content" @click="addID(value)"><i class="material-icons update">border_color</i></router-link></div></li>
            </ul>
            <ul class="pagination">
              <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
              <li class="active teal lighten-2"><a href="#!">1</a></li>
              <li class="waves-effect"><a href="#!">2</a></li>
              <li class="waves-effect"><a href="#!">3</a></li>
              <li class="waves-effect"><a href="#!">4</a></li>
              <li class="waves-effect"><a href="#!">5</a></li>
              <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
            </ul>
          </section>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
import Axios from 'axios';
import NavBar from '@/components/NavBar';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      info: null,
      test: null,
    }
  },
  mounted() {
    Axios
        .get('https://tractorsptz.herokuapp.com/api/v1/all-profiles', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
          }
        })
        .then((response) => {
          this.info = response.data;
        })
        .catch((e) => {
          console.log('error ', e);
          if(e === 'Error: Request failed with status code 401') {
            localStorage.clear();
            this.$router.push('/login');
          }
        });
  },
  methods: {
    onClick() {
      this.visible = !this.visible;
    },
    onSubmit() {
      this.$router.push('/create')
    },
   addID(value) {
      this.$store.state.userid = value.id;
      this.$store.state.userlogin = value.username;
    },
  }
}
</script>

<style scoped>
.update {
  color: #1b5e20;
}

.delete {
  color: #d50000;
}
</style>