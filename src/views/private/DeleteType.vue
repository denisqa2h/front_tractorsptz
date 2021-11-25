<template>
  <div class="app-main-layout">
    <NavBar />
    <main class="app-content" :class="{full: !$store.state.visible}">
      <div class="app-page">


        <div>
          <div class="page-title">
            <h3>Удаление типа происшествий</h3>
          </div>

          <section>
            <p class="flow-text accept">Подтвердите удаление происшествия</p>
            <div>
              <p class="flow-text">Название происшествия</p>
              <p class="flow-text">{{ this.$store.state.typename }}</p>
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
import Axios from 'axios';
import NavBar from '@/components/NavBar';


export default {
  data() {
    return {
    }
  },
  components: {
    NavBar,
  },
  methods: {
    onClick() {
      this.visible = !this.visible;
    },
    back() {
      this.$router.push('/administration')
    },
    async remove() {
      await Axios.delete(`https://tractorsptz.herokuapp.com/api/v1/AccidentsType/` + this.$store.state.idtype, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access')
        }
      })
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
.rghtbtn {
  margin-left: 30px;
}
</style>
