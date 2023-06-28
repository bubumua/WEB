const form = document.querySelector('#uploadForm');
const fileInput = form.querySelector('input[type="file"]');
const tokenUrl = 'https://tc.blackcatw.com/api/token?email=sdy043836@gmail.com&password=QVLX:9R)3afrn]q';
const apiUrl = 'https://tc.blackcatw.com/api/upload';
let token = '';

// Get token
fetch(tokenUrl)
    .then(response => response.json())
    .then(data => {
        if (data.status !== 200) {
            console.error(`Get token failed: code = ${data.code}, msg = ${data.msg}`);
            return;
        }
        console.log(`Token: ${data.data.token}`);
        token = data.data.token;
    });

// Upload file
form.addEventListener('submit', event => {
    event.preventDefault();

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('image', file);
    formData.append('format', 'json');

    fetch(apiUrl, {
        method: 'POST',
        body: formData,
        headers: {
            'token': `d8c0a8f71d93b909a2409e73c9186bd2`
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(`Upload success with URL: ${data.data.url}`);
        })
        .catch(error => {
            console.error(`Upload failed with error: ${error}`);
        });
});
