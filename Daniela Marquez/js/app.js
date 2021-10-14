if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function () {
                console.log('ServiceWorker registered!');
            })
            .catch(function (err) {
                console.log('ServiceWorker failed', err);
            });
    });
}