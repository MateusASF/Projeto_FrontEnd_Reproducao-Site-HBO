let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    console.log(data);
    fetch('https://script.google.com/macros/s/AKfycbxewNWf-q5KJAxBqpld2DPpXhSvJjOf3fwrOf1gqW6nW4b5nPhSp6U4GnBOexvux9IM/exec', {
        method: "POST",
        body: data
    })
   .then(window.location.href="../../Sergio/sergio.html");
});
