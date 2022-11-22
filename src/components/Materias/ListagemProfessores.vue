<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row
        v-for="professor in professores"
        :key="professor.id">
        <v-col>
          <v-card
            class="mx-auto"
            max-width="344"
            color="primary"
            :text="professor.nome"
            variant="tonal">
            <v-rating
              v-model="rating"
              readonly
            ></v-rating>
            <v-card-actions>
              <Datepicker v-model="date"></Datepicker>
              <v-btn variant="outlined" @click="agendarLive(professor)">
                Agendar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  import { useRouter } from "vue-router";
  import { ref, onBeforeMount, defineProps } from 'vue';
  import { MateriasApi } from "../../api/materiasApi";
  import { AlunosApi } from "../../api/alunosApi";
  const materiasApi = new MateriasApi();
  const alunosApi = new AlunosApi();
  const rating = Math.floor(Math.random() * 5);
  const props = defineProps(['materiaId'])
  const router = useRouter();
  const date = ref();

  const professores = ref([]);

  onBeforeMount(async () => {
    professores.value.push(...(await materiasApi.getProfessores(props.materiaId)).data.professores);
  });

  async function agendarLive(professor) {
    try {
      if(!date.value)
      {
        alert("por favor, selecione uma data e hora para agendar a aula");
        return;
      }

      var response = await alunosApi.postLive("77cca4b7-38cd-4835-afc3-c9385a5e1288", {
        "professor": {
          "id": professor.id,
        },
        "aluno": {
          "id": "77cca4b7-38cd-4835-afc3-c9385a5e1288",
        },
        "data": date.value.toISOString()
      })
      if(response.status === 200)
      {
        alert("Aula agendada com sucesso!");
      }
      else if(response.status > 299)
      {
        alert("Não foi possível agendar sua aula, tente novamente mais tarde");
      }
    } catch (error) {
      alert("Não foi possível agendar sua aula, tente novamente mais tarde");
    }
    router.push("/");
  }
</script>
