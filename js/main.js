
var passKey = document.getElementById('passkey');
var error = document.getElementById('error');
var message = document.getElementById('message');

function checkAccess() {
    // alert(passKey.value)
    if (passKey.value === '') {
        console.log('Provide Access Key')
        passKey.style.borderColor = 'red'
        error.innerHTML = 'Provide Access Key';

    } else {
        if (passKey.value !== 'ProJectPassKey@1') {
            console.log('Incorrect passkey')
            error.innerHTML = 'Incorrect Access key ' + `<br>` + 'Contact the Admin if forgoten';
            passKey.style.borderColor = 'red'
        } else {
            passKey.style.borderColor = 'rgb(21, 255, 0)'
            message.innerHTML = 'Access Granted ' + `<br>` + 'Thanks for patronage';
            setTimeout(() => {
                // window.location.href = '/ChatPage.html';
                window.location = 'https://docs.google.com/forms/d/e/1FAIpQLScDgpkUVU2QVclGCtz6lWbQBNkuzcTbVK3HfrTXsvvH08mcEQ/viewform';
            }, 1000);
        }

    }
}