document.addEventListener('DOMContentLoaded', () => {
    console.log("Painel carregado. Iniciando monitoramento...");

    function fetchHealthData() {
        const data = {
            uptime: "99.98%",
            latency: "150ms",
            errors: "0.05%"
        };

        document.querySelector('[data-metric="uptime"]').textContent = data.uptime;
        document.querySelector('[data-metric="latency"]').textContent = data.latency;
        document.querySelector('[data-metric="errors"]').textContent = data.errors;
        
        const latencyCard = document.getElementById('latency');
        const latencyValue = parseInt(data.latency);
        
        if (latencyValue > 200) {
             latencyCard.style.backgroundColor = '#ffcccc'; 
        }
    }

    fetchHealthData();
});