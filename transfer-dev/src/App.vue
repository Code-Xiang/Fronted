<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { Transfer } from '../modules/xueweiUi'
// import {  Transfer } from '@/components/xueweiUi'
const data = [
  {
    title: '华为',
    data: [
      {
        id: 1,
        phone_name: 'Mate 40 Pro',
        disabled: false
      },
      {
        id: 2,
        phone_name: 'Mate 50 Pro',
        disabled: true
      },
      {
        id: 3,
        phone_name: 'Mate 60 Pro',
        disabled: true
      },
      {
        id: 4,
        phone_name: 'Mate Xs Pro',
        disabled: false
      },
    ]
  },
  {
    title: '小米',
    data: [
      {
        id: 1,
        phone_name: 'MI 40 Pro',
        disabled: false
      },
      {
        id: 2,
        phone_name: 'MI 50 Pro',
        disabled: true
      },
      {
        id: 3,
        phone_name: 'MI 60 Pro',
        disabled: true
      },
      {
        id: 4,
        phone_name: 'MI Xs Pro',
        disabled: false
      },
    ]
  },
  {
    title: 'iphone',
    data: [
      {
        id: 1,
        phone_name: 'iphone 11 Pro',
        disabled: false
      },
      {
        id: 2,
        phone_name: 'iphone 12 Pro',
        disabled: true
      },
      {
        id: 3,
        phone_name: 'iphone 13 Pro',
        disabled: true
      },
      {
        id: 4,
        phone_name: 'iphone 14 Pro',
        disabled: false
      },
    ]
  }
]
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
      <transfer></transfer>
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
