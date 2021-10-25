<template>
  <global-container>
    <side-nav-bar :text="'DashBoard'">
      <button-nav-bar :text="'Employers'" to="/employers" />
      <button-nav-bar :text="'Tasks'" />
      <button-nav-bar :text="'Schedule'" />
      <button-nav-bar :text="'Settings'" />
    </side-nav-bar>
    <div class="h-screen w-full bg-yellow-50">
      <top-side-bar />
    </div>
    <!-- <base-container> -->
      <!-- <router-view /> -->
    <!-- </base-container> -->
  </global-container>
</template>

<script lang="ts">
import BaseContainer from "./shared/BaseContainer.vue";
import DefaultBox from "./shared/DefaultBox.vue";
import ButtonForm from "./shared/_forms/ButtonForm.vue";
import InputForm from "./shared/_forms/InputForm.vue";
import GlobalContainer from "./shared/GlobalContainer.vue";
import SideNavBar from "./components/_navbar/SideNavBar.vue";
import ButtonNavBar from "./components/_navbar/ButtonNavBar.vue";
import EmployersComponent from './views/EmployersComponent.vue';
import TopSideBar from './components/_navbar/TopNavBar.vue';

import { reactive } from "vue";

export default {
  name: "Home",
  components: {
    BaseContainer,
    DefaultBox,
    ButtonForm,
    InputForm,
    GlobalContainer,
    SideNavBar,
    ButtonNavBar,
    EmployersComponent,
    TopSideBar
  },
  setup() {
    const list = [
      { id: 1, title: "Tailwind CSS" },
      { id: 2, title: "Tailwind CSS" },
      { id: 3, title: "Tailwind CSS" },
      { id: 4, title: "Tailwind CSS" },
      { id: 5, title: "Tailwind CSS" },
      { id: 6, title: "Tailwind CSS" },
      { id: 7, title: "Tailwind CSS" },
      { id: 8, title: "Tailwind CSS" },
      { id: 9, title: "Tailwind CSS" },
    ];

    const form = reactive({
      nome: "",
      email: "",
    });

    return {
      list,
      form,
    };
  },

  methods: {
    changeName() {},
  },
};
</script>

<style scoped>
.teste {
  border: 1px solid red;
}
</style>