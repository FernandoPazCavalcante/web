import axios from "axios";
export class AlunosApi {
  #urlBase = "http://localhost:8080/api";
  async postLive(professorId, body) {
    return await axios.post(`${this.#urlBase}/alunos/${professorId}/AgendarLive`, body);
  }
}
