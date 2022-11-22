<template>
  <v-app>
    <v-app-bar density="compact" color="primary" title="Educa App" :elevation="0">
    </v-app-bar>
    <v-navigation-drawer>
      <v-list color="transparent" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Matérias"
          value="materias"
          @click="router.push('/')"></v-list-item>
      </v-list>
      <template v-slot:append>
          <div class="pa-2">
            <v-btn color="primary" block>
              Logout
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();
</script>
