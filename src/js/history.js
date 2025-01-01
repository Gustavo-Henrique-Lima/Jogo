document.addEventListener('DOMContentLoaded', () => {
    const scrollWrapper = document.getElementById('scroll-wrapper');
    const videoContainer = document.getElementById('video-container');
    const historyVideo = document.getElementById('history-video');

    // Detectar o fim da animação
    scrollWrapper.addEventListener('animationend', () => {
        // Esconde o texto rolante
        scrollWrapper.style.display = 'none';

        // Mostra o vídeo
        videoContainer.style.display = 'flex';

        // Inicia o vídeo automaticamente
        historyVideo.play();
    });
});
