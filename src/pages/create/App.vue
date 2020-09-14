<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Lotes</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link active" href="create">Create</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="read">Read</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="update">Update</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="delete">Delete</a>
          </li>
        </ul>
      </div>
    </nav>

    <!--Tabela-->
    <div class="container mt-4">
      <input class="mr-4" type="number" placeholder="ID" v-model="ID"/>
      <input class="mr-4" type="text" placeholder="Nome" v-model="Nome"/>
      <input class="mr-4" type="number" placeholder="Lotes" v-model="Lotes"/>
      <button class="btn btn-primary" v-on:click="additem">Salvar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Read",

  data() {
    return {
      ID: "",
      Nome: "",
      Lotes: ""
    };
  },
  created() {
    
  },
  methods: {
    // ainda sem funcionar
    additem: axios.post("http://192.168.100.82:8081/api", {
       /*  INSERT INTO lotes(id,nome,lotes)
VALUES (26,'teste1',14) */
      })
      .then(function (response) {
        console.log(response);
      })
  },
};
</script>