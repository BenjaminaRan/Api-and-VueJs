<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

const users = ref([]);
const router = useRouter();
//afficher les données
const getUsers = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/apps/liste");
    users.value = await response.data;
    console.log(users);
}


//suppression
const confirmDelete = (id) => {

    router.push({ path: `/supprimer/${id}` });
}
const modifyUser = (id) => {
    router.push({ path: `/modifier/${id}` });
}

onMounted(async () => {
    await getUsers()
    console.log(users)
})
</script>

<template>
    <h1>listes des utilisateurs</h1>
    <div class="btnajout">
        <router-link to="/ajouter" class="btn btn-outline-primary"> <i class="fas fa-plus"></i> Ajouter un
            utilisateur</router-link>
    </div>
    <div class="table-container">

        <table class="table table-bordered border-primary table-transparent">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Devise</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(m, i) in users" :key="i">
                    <td> {{ m.id }}</td>
                    <td>{{ m.nom }}</td>
                    <td>{{ m.devise }}</td>
                    <td>{{ m.email }}</td>
                    <td>
                        <button type="button" class="btn btn-outline-warning me-2" @click="modifyUser(m.id)"> <i
                                class="fas fa-edit"></i>Modifier</button>
                        <button type="button" class="btn btn-outline-info" @click="confirmDelete(m.id)"><i
                                class="fas fa-trash-alt"></i>Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.table-container {
    position: absolute;
    display: flex;
    margin-top: -13%;
    margin-left: -25%;
    width: 850px;
    height: 152px;
    text-align: center;
}

.table-transparent,
.table-transparent th,
.table-transparent td {
    background-color: transparent !important;
    color: aliceblue;
}

button {
    border-radius: 15px 2px 15px 2px;
}


.btnajout {
    position: absolute;
    margin-top: -16%;
    margin-left: -24%;
    width: 850px;

}

h1 {
    position: absolute;
    margin-top: -22%;
    color: aliceblue;
    text-align: center;
    margin-left: -10%;
}

.btn-outline-primary {
    border-radius: 15px 0 15px 0;
}
</style>
