<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.items);

const removeFromCart = (id: number) => {
  cartStore.removeItem(id);
};

const clearCart = () => {
  cartStore.clearCart();
};

const total = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price, 0)
);
</script>

<template>
  <div class="cart-container">
    <h1>Корзина</h1>

    <div v-if="cartItems.length === 0" class="empty-cart">
      Ваша корзина пуста.
    </div>

    <div v-else class="cart-list">
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <div class="item-info">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <strong>{{ item.price }} ₽</strong>
        </div>
        <button class="remove-btn" @click="removeFromCart(item.id)">✕</button>
      </div>
    </div>

    <div v-if="cartItems.length > 0" class="cart-summary">
      <p><strong>Итого:</strong> {{ total }} ₽</p>
      <router-link to="/checkout" class="checkout-btn">Оформить заказ</router-link>
      <button class="clear-btn" @click="clearCart">Очистить корзину</button>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  font-family: 'Poppins', sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  background-color: #6f6f6f;
}

h1 {
  text-align: center;
  color: #72ad14;
  margin-bottom: 2rem;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  background: #967676;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  align-items: center;
}

.item-info h2 {
  margin: 0;
  font-size: 1.25rem;
  color: #333;
}

.item-info p {
  margin: 0.25rem 0;
  color: #666;
}

.item-info strong {
  color: #997773;
}

.remove-btn {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #bacc2e;
  transition: transform 0.2s;
}

.remove-btn:hover {
  transform: scale(1.2);
}

.cart-summary {
  margin-top: 2rem;
  text-align: center;
}

.checkout-btn {
  margin-top: 1rem;
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #807748;
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50px;
  transition: background 0.3s;
}

.checkout-btn:hover {
  background-color: #e87e7e;
}

.clear-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: #a5b068;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.clear-btn:hover {
  background-color: #8e2bc0;
}
</style>
