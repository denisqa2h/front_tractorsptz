<template>
  <div class="app-main-layout">
    <NavBar />
    <main class="app-content" :class="{full: !$store.state.visible}">
      <div class="app-page">

        <div>
          <div class="page-title">
            <h3>Мониторинг</h3>
          </div>
        </div>

        <section style="margin-bottom: 50px;">
          <table class="centered adaptive">
            <tbody>
            <tr>
              <td>14</td>
              <td>13</td>
              <td>12</td>
              <td>11</td>
              <td>10</td>
              <td>9</td>
              <td>8</td>
              <td>7</td>
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr>
              <td v-if="info19 === 3" class="red accent-4"></td>
              <td v-if="info19 === 2" class="yellow accent-4"></td>
              <td v-if="info19 === 1" class="light-green accent-4"></td>
              <td v-if="info19 === 3" class="red accent-4"></td>
              <td v-if="info19 === 2" class="yellow accent-4"></td>
              <td v-if="info19 === 1" class="light-green accent-4"></td>
              <td v-if="info19 === 3" class="red accent-4"></td>
              <td v-if="info19 === 2" class="yellow accent-4"></td>
              <td v-if="info19 === 1" class="light-green accent-4"></td>
              <td v-if="info17 === 3" class="red accent-4"></td>
              <td v-if="info17 === 2" class="yellow accent-4"></td>
              <td v-if="info17 === 1" class="light-green accent-4"></td>
              <td v-if="info15 === 3" class="red accent-4"></td>
              <td v-if="info15 === 2" class="yellow accent-4"></td>
              <td v-if="info15 === 1" class="light-green accent-4"></td>
              <td v-if="info13 === 3" class="red accent-4"></td>
              <td v-if="info13 === 2" class="yellow accent-4"></td>
              <td v-if="info13 === 1" class="light-green accent-4"></td>
              <td v-if="info11 === 3" class="red accent-4"></td>
              <td v-if="info11 === 2" class="yellow accent-4"></td>
              <td v-if="info11 === 1" class="light-green accent-4"></td>
              <td v-if="info9 === 3" class="red accent-4"></td>
              <td v-if="info9 === 2" class="yellow accent-4"></td>
              <td v-if="info9 === 1" class="light-green accent-4"></td>
              <td v-if="info7 === 3" class="red accent-4"></td>
              <td v-if="info7 === 2" class="yellow accent-4"></td>
              <td v-if="info7 === 1" class="light-green accent-4"></td>
              <td v-if="info5 === 3" class="red accent-4"></td>
              <td v-if="info5 === 2" class="yellow accent-4"></td>
              <td v-if="info5 === 1" class="light-green accent-4"></td>
              <td v-if="info3 === 3" class="red accent-4"></td>
              <td v-if="info3 === 2" class="yellow accent-4"></td>
              <td v-if="info3 === 1" class="light-green accent-4"></td>
              <td v-if="info1 === 3" class="red accent-4"></td>
              <td v-if="info1 === 2" class="yellow accent-4"></td>
              <td v-if="info1 === 1" class="light-green accent-4"></td>
              <td v-if="info1 === 3" class="red accent-4"></td>
              <td v-if="info1 === 2" class="yellow accent-4"></td>
              <td v-if="info1 === 1" class="light-green accent-4"></td>
              <td v-if="info0 === 3" class="red accent-4"></td>
              <td v-if="info0 === 2" class="yellow accent-4"></td>
              <td v-if="info0 === 1" class="light-green accent-4"></td>
            </tr>
            <tr>
              <td v-if="info19 === 3" class="red accent-4"></td>
              <td v-if="info19 === 2" class="yellow accent-4"></td>
              <td v-if="info19 === 1" class="light-green accent-4"></td>
              <td v-if="info19 === 3" class="red accent-4"></td>
              <td v-if="info19 === 2" class="yellow accent-4"></td>
              <td v-if="info19 === 1" class="light-green accent-4"></td>
              <td v-if="info19 === 3" class="red accent-4"></td>
              <td v-if="info19 === 2" class="yellow accent-4"></td>
              <td v-if="info19 === 1" class="light-green accent-4"></td>
              <td v-if="info18 === 3" class="red accent-4"></td>
              <td v-if="info18 === 2" class="yellow accent-4"></td>
              <td v-if="info18 === 1" class="light-green accent-4"></td>
              <td v-if="info16 === 3" class="red accent-4"></td>
              <td v-if="info16 === 2" class="yellow accent-4"></td>
              <td v-if="info16 === 1" class="light-green accent-4"></td>
              <td v-if="info14 === 3" class="red accent-4"></td>
              <td v-if="info14 === 2" class="yellow accent-4"></td>
              <td v-if="info14 === 1" class="light-green accent-4"></td>
              <td v-if="info12 === 3" class="red accent-4"></td>
              <td v-if="info12 === 2" class="yellow accent-4"></td>
              <td v-if="info12 === 1" class="light-green accent-4"></td>
              <td v-if="info10 === 3" class="red accent-4"></td>
              <td v-if="info10 === 2" class="yellow accent-4"></td>
              <td v-if="info10 === 1" class="light-green accent-4"></td>
              <td v-if="info8 === 3" class="red accent-4"></td>
              <td v-if="info8 === 2" class="yellow accent-4"></td>
              <td v-if="info8 === 1" class="light-green accent-4"></td>
              <td v-if="info6 === 3" class="red accent-4"></td>
              <td v-if="info6 === 2" class="yellow accent-4"></td>
              <td v-if="info6 === 1" class="light-green accent-4"></td>
              <td v-if="info4 === 3" class="red accent-4"></td>
              <td v-if="info4 === 2" class="yellow accent-4"></td>
              <td v-if="info4 === 1" class="light-green accent-4"></td>
              <td v-if="info2 === 3" class="red accent-4"></td>
              <td v-if="info2 === 2" class="yellow accent-4"></td>
              <td v-if="info2 === 1" class="light-green accent-4"></td>
              <td v-if="info2 === 3" class="red accent-4"></td>
              <td v-if="info2 === 2" class="yellow accent-4"></td>
              <td v-if="info2 === 1" class="light-green accent-4"></td>
              <td v-if="info0 === 3" class="red accent-4"></td>
              <td v-if="info0 === 2" class="yellow accent-4"></td>
              <td v-if="info0 === 1" class="light-green accent-4"></td>
            </tr>
            <tr>
              <td>28</td>
              <td>27</td>
              <td>26</td>
              <td>25</td>
              <td>24</td>
              <td>23</td>
              <td>22</td>
              <td>21</td>
              <td>20</td>
              <td>19</td>
              <td>18</td>
              <td>17</td>
              <td>16</td>
              <td>15</td>
            </tr>
            <tr>
              <td v-if="info19 === 3" class="red accent-4"></td>
              <td v-if="info19 !== 3"></td>
              <td v-if="info19 === 3" class="red accent-4"></td>
              <td v-if="info19 !== 3"></td>
              <td v-if="info19 === 3" class="red accent-4"></td>
              <td v-if="info19 !== 3"></td>
              <td v-if="info17 === 3 || info18 === 3" class="red accent-4"></td>
              <td v-if="info17 !== 3 && info18 !== 3"></td>
              <td v-if="info15 === 3 || info16 === 3" class="red accent-4"></td>
              <td v-if="info15 !== 3 && info16 !== 3"></td>
              <td v-if="info13 === 3 || info14 === 3" class="red accent-4"></td>
              <td v-if="info13 !== 3 && info14 !== 3"></td>
              <td v-if="info11 === 3 || info12 === 3" class="red accent-4"></td>
              <td v-if="info11 !== 3 && info12 !== 3"></td>
              <td v-if="info9 === 3 || info10 === 3" class="red accent-4"></td>
              <td v-if="info9 !== 3 && info10 !== 3"></td>
              <td v-if="info7 === 3 || info8 === 3" class="red accent-4"></td>
              <td v-if="info7 !== 3 && info8 !== 3"></td>
              <td v-if="info5 === 3 || info6 === 3" class="red accent-4"></td>
              <td v-if="info5 !== 3 && info6 !== 3"></td>
              <td v-if="info3 === 3 || info4 === 3" class="red accent-4"></td>
              <td v-if="info3 !== 3 && info4 !== 3"></td>
              <td v-if="info1 === 3 || info2 === 3" class="red accent-4"></td>
              <td v-if="info1 !== 3 && info2 !== 3"></td>
              <td v-if="info1 === 3 || info2 === 3" class="red accent-4"></td>
              <td v-if="info1 !== 3 && info2 !== 3"></td>
              <td v-if="info0 === 3" class="red accent-4"></td>
              <td v-if="info0 !== 3"></td>
            </tr>
            </tbody>
          </table>
        </section>

        <div>
          <div class="page-title">
            <h3>Список происшествий</h3>
          </div>
        </div>

        <section>
          <h5>Фильтры</h5>
          <nav class="filter transparent">
            <div class="nav-wrapper">
              <input class="filter-item filter-input" placeholder="№ поста">
              <p class="filter-item">Происшествие</p>
              <input class="filter-item" type="datetime-local">
            </div>
            <div style="margin-top: 5px;">
              <button class="btn">Применить</button>
              <button class="btn">Сбросить</button>
            </div>
          </nav>
          <table class="responsive-table">
            <tbody>
            <tr>
              <th>Номер поста</th>
              <th>Тип происшествия</th>
              <th>Описание</th>
              <th>Время фиксации</th>
              <th>Время устранения</th>
              <th>Изменить</th>
            </tr>
            <tr v-for="value in accidents">
              <td>{{ value.Post }}</td>
              <td>{{ value.Type }}</td>
              <td>{{ value.Description }}</td>
              <td>{{ value.FixTime }}</td>
              <td>{{ value.EndTime }}</td>
              <td><router-link to="/accident" @click="addAccident(value)"><i class="material-icons update">border_color</i></router-link></td>
            </tr>
            </tbody>
          </table>
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
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Axios from "axios";

export default {
  components: {
    NavBar,
  },
  data () {
    return {
      info: null,
      accidents: null,
      info0: 0,
      info1: 0,
      info2: 0,
      info3: 0,
      info4: 0,
      info5: 0,
      info6: 0,
      info7: 0,
      info8: 0,
      info9: 0,
      info10: 0,
      info11: 0,
      info12: 0,
      info13: 0,
      info14: 0,
      info15: 0,
      info16: 0,
      info17: 0,
      info18: 0,
      info19: 0,
    }
  },
  created() {
    this.api();
    this.$store.state.timer = setInterval(this.api, 1000);
  },
  methods: {
    onClick() {
      this.visible = !this.visible;
    },
    addAccident(value) {
      this.$store.state.accidentid = value.id;
      this.$store.state.post = value.Post;
      this.$store.state.type = value.Type;
      this.$store.state.description = value.Description;
      this.$store.state.fixtime = value.FixTime;
      this.$store.state.endtime = value.EndTime;
      clearInterval(this.$store.state.timer);
    },
    api() {
      Axios
          .get('https://tractorsptz.herokuapp.com/api/v1/Buttons', {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access')
            }
          })
          .then((response) => {
            this.info = response.data;
            this.info0 = this.info[0].Btype;
            this.info1 = this.info[1].Btype;
            this.info2 = this.info[2].Btype;
            this.info3 = this.info[3].Btype;
            this.info4 = this.info[4].Btype;
            this.info5 = this.info[5].Btype;
            this.info6 = this.info[6].Btype;
            this.info7 = this.info[7].Btype;
            this.info8 = this.info[8].Btype;
            this.info9 = this.info[9].Btype;
            this.info10 = this.info[10].Btype;
            this.info11 = this.info[11].Btype;
            this.info12 = this.info[12].Btype;
            this.info13 = this.info[13].Btype;
            this.info14 = this.info[14].Btype;
            this.info15 = this.info[15].Btype;
            this.info16 = this.info[16].Btype;
            this.info17 = this.info[17].Btype;
            this.info18 = this.info[18].Btype;
            this.info19 = this.info[19].Btype;
          })
          .catch((e) => {
            console.log('error ', e);
            if(e === 'Error: Request failed with status code 401') {
              localStorage.clear();
              this.$router.push('/login');
            }
          });
      Axios
          .get('https://tractorsptz.herokuapp.com/api/v1/Accidents', {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access')
            }
          })
          .then((response) => {
            this.accidents = response.data;
          })
          .catch((e) => {
            console.log('error ', e);
            if(e === 'Error: Request failed with status code 401') {
              localStorage.clear();
              this.$router.push('/login');
            }
          });
    },
  },
}
</script>

<style scoped>
.filter {
  color: black;
  margin-bottom: 50px;
  font-style: normal;
  font-size: 18px;
  line-height: 35px;
}

.filter-item{
  max-width: 175px;
}

.filter-item:last-child {
  margin-right: 10px;
}

.filter-item:first-child {
  margin-left: 10px;
  max-width: 100px;
}

.filter-input {
  text-align: center;
}

.btn {
  margin-right: 10px;
}

.update {
  color: #1b5e20;
}

::placeholder {
  color: black;
}

:focus::-webkit-input-placeholder {
  color: transparent
}

:focus::-moz-placeholder {
  color: transparent
}

:focus:-moz-placeholder {
  color: transparent
}

:focus:-ms-input-placeholder {
  color: transparent
}

@media screen and (max-width: 550px) {
  .filter-item {
    font-size: 10px;
  }
  .filter-item:first-child {
    max-width: 80px;
  }
}

@media screen and (max-width: 400px) {
  .adaptive {
    transform: translateX(-21px);
  }
}
</style>