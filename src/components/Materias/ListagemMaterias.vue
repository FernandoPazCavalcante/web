<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row
        v-for="materia in materias"
        :key="materia.id">
        <v-col>
          <v-card
          color="primary"
          :text="materia.nome"
          variant="tonal"
          @click="goTo(materia.id)"></v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { ref, onBeforeMount } from 'vue';
  import { MateriasApi } from "../../api/materiasApi";
  const materiasApi = new MateriasApi();

  const router = useRouter();
  const materias = ref([]);

  onBeforeMount(async () => {
    materias.value.push(...(await materiasApi.getAll()).data);
  });

  function goTo(materiaId) {
    router.push({name: 'professores', params: {materiaId: materiaId }});
  }
</script>
