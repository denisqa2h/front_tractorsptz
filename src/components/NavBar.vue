<template>
    <nav class="navbar teal lighten-2">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#" @click.prevent="onClick()">
            <i class="material-icons black-text">dehaze</i>
          </a>
          <img class="responsive-img" src="@/assets/images/logo64.png" alt="logo" width="64" height="64">
        </div>

        <ul class="right">
          <li>
            <a class="dropdown-trigger black-text" href="#" data-target="dropdown" ref="dropdown">
              {{ $store.state.username }}
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul id='dropdown' class='dropdown-content'>
              <li class="divider" tabindex="-1"></li>
              <li>
                <router-link to="/" class="black-text" @click="clear">
                  <i class="material-icons">assignment_return</i>Выйти
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav app-sidenav" :class="{open: $store.state.visible}">
      <li>
        <router-link to="/monitoring" class="pointer" active-class="grey lighten-3">Мониторинг</router-link>
      </li>
      <li>
        <router-link to="/administration" class="pointer" active-class="grey lighten-3" @click="adm">Администрирование</router-link>
      </li>
    </ul>
</template>

<script>
export default {
  mounted() {
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true
    });
  },
  methods: {
    onClick() {
      this.$store.state.visible = !this.$store.state.visible;
    },
    clear() {
      localStorage.clear();
      clearInterval(this.$store.state.timer);
    },
    adm() {
      clearInterval(this.$store.state.timer);
    }
  }
}
</script>

<style scoped>
</style>