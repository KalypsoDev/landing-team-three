function Progreso(id) {
    const button = document.getElementById(id);

    const span = button.querySelector('span');

    const hasta = parseInt(button.dataset.hasta);
    const sufijo = button.dataset.sufijo;

    let i = 0;

    const interval = setInterval(() => {
        span.innerHTML = ++i + sufijo;

        if (i === hasta) {
            clearInterval(interval);
        }
    }, 10)

    button.removeAttribute('onclick');
}

