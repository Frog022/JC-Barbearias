// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário de agendamento pelo ID
    const form = document.getElementById('booking-form');

    // Adiciona um "ouvinte" para o evento de submit do formulário
    form.addEventListener('submit', (e) => {
        // Previne o comportamento padrão de recarregar a página
        e.preventDefault();

        // Obtém os valores dos campos do formulário
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;

        // Verifica se todos os campos estão preenchidos
        if (name && phone && service) {
            // Número de telefone do barbeiro (SUBSTITUA PELO SEU NÚMERO)
            // Agora com o número correto: +55 22 99792-4768
            const barbershopNumber = '5522997924768'; 

            // Monta a mensagem para o WhatsApp
            // A mensagem é codificada para URL para garantir que caracteres especiais funcionem
            const message = `Olá, gostaria de agendar um horário.%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*Telefone:* ${encodeURIComponent(phone)}%0A*Serviço Desejado:* ${encodeURIComponent(service)}`;
            
            // Monta a URL completa do WhatsApp
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${barbershopNumber}&text=${message}`;

            // Abre a URL em uma nova aba do navegador
            window.open(whatsappUrl, '_blank');
        } else {
            // Exibe um alerta se os campos não estiverem preenchidos
            alert('Por favor, preencha todos os campos do formulário.');
        }
    });
});