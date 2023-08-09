document.addEventListener('click', (e) => {
    if (e.target.localName === 'input' && e.target.type === 'checkbox') {
        const tareaId = e.target.getAttribute('id').replace('check', 'tarea');
        const tarea = document.getElementById(tareaId);
        
        if (e.target.checked) {
            tarea.classList.add('red');
        } else {
            tarea.classList.remove('red');
        }
    }
});
