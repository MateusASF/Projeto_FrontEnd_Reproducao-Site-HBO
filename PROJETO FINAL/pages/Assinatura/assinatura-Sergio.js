let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    console.log(data);
    fetch('https://script.google.com/macros/s/AKfycbxG4yNNjFbZqea1Lax2PZa9H1k5Bj-3xb_wuhG8oKe1Hv_cXOv60fzzTnLk9XAz1tV2/exec', {
        method: "POST",
        body: data
    })
   .then(window.location.href="../Sergio/sergio.html");
});
