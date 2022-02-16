document.getElementById('delete-btn').
    addEventListener('click', function () {
        document.getElementById('secret-info').style.display = 'none'
    });

document.getElementById('delete-confirm').
    addEventListener('keyup', function (event) {
        const deleteBtm = document.getElementById('delete-btn')
        if (event.target.value == 'delete') {
            deleteBtm.removeAttribute('disabled')
        }
        else {
            deleteBtm.setAttribute('disabled', true);
        }
    });
