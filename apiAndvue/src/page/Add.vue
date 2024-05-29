<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const nom = ref('');
const devise = ref('');
const email = ref('');

const router = useRouter();

const goToHome = () => {
  router.push('/'); 
};

const addUser = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/apps/ajouter', {
            nom: nom.value,
            devise: devise.value,
            email: email.value
        });
        console.log(response.data);

        nom.value = '';
        devise.value = '';
        email.value = '';
        router.push('/');
    } catch (error) {
        console.error("erreur kely:", error);
    }
};

</script>

<template>

    <div class="card">
        <div class="card-body">
            <h2>Ajouter un utilisateur</h2>
            <br>
            <form @submit.prevent="addUser">
                <div class="mb-3">
                    <input type="text" v-model="nom" placeholder="Nom..." required />
                </div>
                <div class="mb-3">
                    <input type="text" v-model="devise" placeholder="Devise..." required />
                </div>
                <div class="mb-3">
                    <input type="email" v-model="email" placeholder="Email..." required />
                </div>

                <button type="submit" class="btn btn-outline-info"> <i class="fas fa-plus"></i> Ajouter</button>
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
    height: 350px;
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
}

button {
    margin-left: 180px;
    width: 120px;
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