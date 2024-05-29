<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const user = ref({
    nom: '',
    devise: '',
    email: ''
});
const errorMessage = ref('');

const getUser = async () => {
    try {
        const id = route.params.id;
        const response = await axios.get(`http://127.0.0.1:8000/api/apps/liste/${id}`);
        user.value = response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            errorMessage.value = 'Utilisateur non trouvé';
        } else {
            errorMessage.value = 'Une erreur est survenue lors de la récupération de l\'utilisateur';
        }
        console.error("Erreur de récupération :", error);
    }
}

const updateUser = async () => {
    try {
        const id = route.params.id;
        await axios.put(`http://127.0.0.1:8000/api/apps/modifier/${id}`, user.value);
        router.push('/');
    } catch (error) {
        errorMessage.value = 'Une erreur est survenue lors de la mise à jour de l\'utilisateur';
        console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
    }
}

onMounted(async () => {
    await getUser();
});
</script>

<template>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <div class="card">
        <div class="card-body">
            <h2>Modifier l'utilisateur</h2>
            <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
            <form @submit.prevent="updateUser" v-if="!errorMessage">
                <div class="mb-3">
                    <input type="text" id="nom" v-model="user.nom" />
                </div>
                <div class="mb-3">
                    <input type="text" id="devise" v-model="user.devise" />
                </div>
                <div class="mb-3">
                    <input type="email" id="email" v-model="user.email" />
                </div>
                <button type="submit" class="btn btn-outline-primary">
                    <i class="fas fa-save"></i><span class="ms-1">Enregistrer</span>
                </button>
                <button class="btn btn-outline-warning ms-3" @click="goToHome">
                    <i class="fas fa-arrow-left"></i><span class="ms-1">Revenir</span>
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 600px;
    margin-left: 250px;
    height: 340px;
    background-color: transparent;
    border-color: rgb(89, 89, 173);

}

input {
    background-color: transparent;
    text-decoration: antiquewhite;
    width: 455px;
    height: 50px;
    color: aliceblue;
    margin-left: 10%;
    border-radius: 15px;
    text-align: center;
    
}

button {
    margin-left: 150px;
    width: 130px;
    border-radius: 15px 0 15px 0;
}

router-link {
    border-radius: 15px 0 15px 0;
}

h2 {
    text-align: center;
    color: wheat;

}

.btn-outline-warning {
    border-radius: 15px 0 15px 0 15px;
}
</style>
