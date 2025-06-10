<template>
  <div class="home">
    <div class="hero">
      <h1 class="headline">Добро пожаловать в <span>Варюшину Забегаловку😇</span></h1>
      <p class="subtext">Свежие и вкусные блюда с доставкой прямо к вам домой</p>
      <router-link to="/menu" class="cta-button">Перейти в меню</router-link>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.home {
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  background: linear-gradient(to right, #688cb0, #8290f9);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.hero .headline {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-in-out;
}

.hero .headline span {
  color: #64bb80;
}

.hero .subtext {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  animation: fadeIn 1.5s ease-in-out;
}

.cta-button {
  padding: 0.75rem 2rem;
  background-color: #977248;
  color: #2c3e50;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  animation: fadeIn 2s ease-in-out;
}

.cta-button:hover {
  background-color: #d9a162;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
