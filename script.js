const inputField = document.getElementById('input-field');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputField.value === '') {
        alert('Please enter a task');
    }else {
        let li = document.createElement('li');
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        
    }
    inputField.value = '';
    listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }

});}