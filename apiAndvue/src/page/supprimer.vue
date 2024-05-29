<template>
    <div class="card">
        <div class="card-body">
            <h2>Confirmer la suppression</h2>
            <p>Voulez-vous vraiment supprimer cet élément ?</p>
            <button type="button" class="btn btn-outline-danger" @click="deleteItem">
                <i class="fas fa-trash-alt"></i> Supprimer
            </button>
            <button class="btn btn-outline-warning ms-3" @click="goToHome">
                    <i class="fas fa-arrow-left"></i><span class="ms-1">Revenir</span>
                </button>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const route = useRoute();

const deleteItem = async () => {
    try {
        const id = route.params.id;
        await axios.delete(`http://127.0.0.1:8000/api/apps/Suppression/${id}`);
        router.push('/');
    } catch (error) {
        console.error("Erreur lors de la suppression :", error);
    }
}
</script>

<style scoped>
button {
    margin-left: 160px;
    width: 120px;
    border-radius: 15px 0 15px 0;
}

router-link {
    border-radius: 15px 0 15px 0;
}

.card {
    width: 600px;
    margin-left: 250px;
    height: 200px;
    background-color: transparent;
    border-color: rgb(89, 89, 173);

}

h2 {
    color: aliceblue;
    text-align: center;

}

p {
    color: aliceblue;
    text-align: center;
}</style>