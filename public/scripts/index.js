let uploadBtn = document.getElementById('upload-btn');

uploadBtn.addEventListener('click', () => {
    let input = document.querySelector('input');
    if(input.value.length === 0) {
        alert('Please upload a file');
    }
    else {
        let progress = document.getElementById('upload-progress');
        progress.style.display = 'block';

        let formData = new FormData();
        formData.append('photo', input.files[0]);
        setTimeout(() => {
            fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData
            }).then(res => res.json())
            .then(json => {
                progress.style.display='none';
                let notification = document.getElementById('notification');
                notification.style.left = '0px';
                console.log(json);
                document.querySelector('form').reset();
                let div = document.querySelector('div');
                let link = document.createElement('a');
                let img = document.createElement('img');
                img.src = '/uploaded/' + json.fileName;
                link.href = 'http://localhost:3000/images/' + json.fileName;
                link.appendChild(img);
                div.appendChild(link);
            }).catch(err => console.log(err));
        }, 1000);
    }
});

let previewName = document.getElementById('filenamepreview');
let inputElement = document.querySelector('input');

inputElement.addEventListener('change', () => {
    previewName.innerHTML = inputElement.files[0].name;
});

document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
      $notification = $delete.parentNode;
  
      $delete.addEventListener('click', () => {
        $notification.parentNode.removeChild($notification);
      });
    });
});