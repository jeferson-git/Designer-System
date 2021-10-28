<template>
  <global-container class="bg-yellow-50">
    <side-nav-bar :icon="mdiViewDashboard" :text="'DashBoard'">
      <ul>
        <div v-for="item in menu" :key="item.id">
          <li>
            <button-nav-bar
              style="display: block; padding: 15px"
              @click="arrowSidePosition(item.id)"
              :text="item.text"
              :icon="item.icon"
              :to="item.to"
              :id="item.id"
            />
          </li>
        </div>
      </ul>
    </side-nav-bar>
    <div class="bg-yellow-50 float-left h-full w-full box-border div-container">
      <top-side-bar />
      <base-container
        :buttonsSideBar="buttonsValue"
        :arrowPosition="this.positionButton.arrow"
      >
        <router-view />
      </base-container>
    </div>
  </global-container>
</template>

<script lang="ts">
import BaseContainer from "./shared/BaseContainer.vue";
import DefaultBox from "./shared/DefaultBoxViews.vue";
import ButtonForm from "./shared/_forms/ButtonForm.vue";
import InputForm from "./shared/_forms/InputForm.vue";
import GlobalContainer from "./shared/GlobalContainer.vue";
import SideNavBar from "./components/_navbar/SideNavBar.vue";
import ButtonNavBar from "./components/_navbar/ButtonNavBar.vue";
import EmployersComponent from "./views/EmployersComponent.vue";
import TopSideBar from "./components/_navbar/TopNavBar.vue";

import { reactive } from "vue";

import menuItems from "./config/menu.js";

import { mdiViewDashboard } from "@mdi/js";

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
    TopSideBar,
  },
  setup() {
    const menu = menuItems;
    const buttonsValue = menuItems.length;
    const positionButton = reactive({
      arrow: 0,
    });

    return {
      mdiViewDashboard,
      menu,
      buttonsValue,
      positionButton,
    };
  },

  methods: {
    arrowSidePosition(id: string) {
      this.positionButton.arrow = parseInt(id) * 58;
    },
  },
};
</script>

<style scoped>
.div-container {
  width: calc(100% - 192px);
}
</style>