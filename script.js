document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('pedidoForm');
  const mensagem = document.getElementById('mensagem');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const pedido = document.getElementById('pedido').value;

      if (pedido.trim() === '') {
        mensagem.textContent = 'Por favor, escreva seu pedido.';
        mensagem.style.color = 'red';
      } else {
        mensagem.textContent = 'Pedido enviado com sucesso! 🍕';
        mensagem.style.color = 'green';
        form.reset();
      }
    });
  }
});
