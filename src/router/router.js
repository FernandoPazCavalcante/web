import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import ListagemMaterias from "@/components/Materias/ListagemMaterias.vue";
import ListagemProfessores from "@/components/Materias/ListagemProfessores.vue";

const routes = [
  // {
  //   path: "/",
  //   component: HelloWorld
  // },
  {
    path: "/",
    component: ListagemMaterias
  },
  {
    name: "professores",
    path: "/professores/:materiaId",
    component: ListagemProfessores,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
