function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    document.cookie = "cookies_accepted=true; path=/";
}

async function verifyKey() {
    const keyInput = document.getElementById('keyInput').value;
    const messageElement = document.getElementById('message');

    try {
        const response = await fetch('http://127.0.0.1:5000/verify_key', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key: keyInput })
        });

        const result = await response.json();
        messageElement.textContent = result.message;
    } catch (error) {
        messageElement.textContent = 'Error verificando la clave';
    }
}

function showAd() {
    alert('Anuncio publicitario antes de la descarga');
    // Aquí puedes integrar un sistema de anuncios real
    // Por ejemplo, puedes redirigir a una página con el anuncio:
    // window.location.href = "https://tu-anuncio-url.com";
}

