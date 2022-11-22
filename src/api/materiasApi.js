import axios from "axios";
export class MateriasApi {
  #urlBase = "http://localhost:8080/api";
  async getAll() {
    return await axios.get(`${this.#urlBase}/materias`);
  }
  async getProfessores(materiaId) {
    return await axios.get(`${this.#urlBase}/materias/${materiaId}/professores`);
  }
}
