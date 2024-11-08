const fechaFinalizacion = new Date('2024-11-13T17:00:00-03:00');

        function actualizarTemporizador() {
            const ahora = new Date();
            const diferencia = fechaFinalizacion - ahora;

            if (diferencia <= 0) {
                document.querySelector('.temporizador').innerText = '¡Ya empezo Talleres - Rafaela -- VAMOS ROJO ---!';
                clearInterval(intervalo);
                return;
            }

            // Calcular horas, minutos y segundos
            const horas = Math.floor(diferencia / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            document.querySelector('.temporizador').innerHTML = 
                `<h1>${horas} Horas</h1>
                <h2>${minutos < 10 ? `0${minutos}` : minutos} Minutos</h2>
                <H3>${segundos < 10 ? `0${segundos}` : segundos} Segundos</h3>
                <h6>Talleres vs Atletico Rafaela - LA BATALLA FINAL`;
        }

        const intervalo = setInterval(actualizarTemporizador, 1000);