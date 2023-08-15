<template>
  <div class="flowtext">
    Чтобы открыть помощника <br />
    нажмите на кнопку в углу
  </div>
</template>

<style scoped>
.flowtext {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  top: 40%;
  position: relative;

  background: linear-gradient(
    90deg,
    #e933ff,
    #ffb400,
    #ff3333,
    #334dff,
    #e933ff
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textflow 5s linear infinite;
}

@keyframes textflow {
  from {
    background-position: 0% center;
  }
  to {
    background-position: 200% center;
  }
}

@media (max-width: 420px) {
  .flowtext {
    font-size: 36px;
  }
}
</style>
