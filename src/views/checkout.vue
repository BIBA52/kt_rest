<template>
  <div class="checkout-page">
    <h1>Оформление заказа</h1>

    <form @submit.prevent="submitOrder">
      <div class="form-group">
        <label for="name">Имя</label>
        <input v-model="name" id="name" type="text" required />
      </div>

      <div class="form-group">
        <label for="phone">Телефон</label>
        <input v-model="phone" id="phone" type="tel" required pattern="^\+?\d{10,15}$" placeholder="+7xxxxxxxxxx" />
      </div>

      <div class="form-group">
        <label for="address">Адрес доставки</label>
        <textarea v-model="address" id="address" required></textarea>
      </div>

      <button type="submit" class="btn">Оформить заказ</button>
    </form>

    <div v-if="orderConfirmed" class="confirmation">
      <h2>Спасибо за заказ!</h2>
      <p>Мы приняли ваш заказ с такими данными:</p>
      <ul>
        <li><strong>Имя:</strong> {{ name }}</li>
        <li><strong>Телефон:</strong> {{ phone }}</li>
        <li><strong>Адрес:</strong> {{ address }}</li>
      </ul>
      <router-link to="/menu" class="btn">Вернуться в меню</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const phone = ref('');
const address = ref('');
const orderConfirmed = ref(false);

function submitOrder() {
  if (!name.value || !phone.value || !address.value) {
    alert('Пожалуйста, заполните все поля корректно.');
    return;
  }

 

  orderConfirmed.value = true;

  
}
</script>

<style scoped>
.checkout-page {
  max-width: 480px;
  margin: 2rem auto;
  padding: 1rem;
}

h1 {
  color: #d37c65;
  text-align: center;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.3rem;
  font-weight: 600;
}

input,
textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #516178;
}

textarea {
  resize: vertical;
  min-height: 60px;
}

.btn {
  background-color: #8bb9da;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  margin: 1rem auto 0;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #7cc3f6;
}

.confirmation {
  margin-top: 2rem;
  text-align: center;
  background: #e0f4e9;
  border: 1px solid #42b98f;
  padding: 1.5rem;
  border-radius: 8px;
}
</style>
