document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterBtn = document.getElementById('showRegisterBtn');
    const showLoginBtn = document.getElementById('showLoginBtn');
    const registerBox = document.getElementById('registerBox');
    const confirmationModal = document.getElementById('confirmationModal');
    const modalMessage = document.getElementById('modalMessage');
    const modalButton = document.getElementById('modalButton');
    const closeModal = document.getElementById('closeModal');

    // Alternar entre login e registro
    showRegisterBtn.addEventListener('click', function() {
        document.querySelector('.auth-box').style.display = 'none';
        registerBox.style.display = 'block';
    });

    showLoginBtn.addEventListener('click', function() {
        registerBox.style.display = 'none';
        document.querySelector('.auth-box').style.display = 'block';
    });

    // Lidar com login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(loginForm);
        
        fetch('/login', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = data.redirect;
            } else {
                showModal(data.message);
            }
        })
        .catch(error => {
            showModal('Erro ao tentar fazer login');
        });
    });

    // Lidar com registro
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(registerForm);
        
        fetch('/register', {
            method: 'POST',
            body: formData
        })
        
        .then(response => response.json())
        .then(data => {
            showModal(data.message);
            if (data.success) {
                modalButton.onclick = function() {
                    confirmationModal.style.display = 'none';
                    registerBox.style.display = 'none';
                    document.querySelector('.auth-box').style.display = 'block';
                    registerForm.reset();
                };
            } else {
                modalButton.onclick = function() {
                    confirmationModal.style.display = 'none';
                };
            }
        })
        .catch(error => {
            showModal('Erro ao tentar cadastrar');
        });
    });

    // Função para mostrar modal
    function showModal(message) {
        modalMessage.textContent = message;
        confirmationModal.style.display = 'block';
    }

    // Fechar modal
    closeModal.onclick = function() {
        confirmationModal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == confirmationModal) {
            confirmationModal.style.display = 'none';
        }
    };
});

function openAddModal() {
    document.getElementById('add-modal').style.display = 'flex';
}

function closeAddModal() {
    document.getElementById('add-modal').style.display = 'none';
}

// Certifique-se de que o botão existe antes de adicionar o event listener
document.addEventListener('DOMContentLoaded', function() {
    var addBtn = document.getElementById('add-product-btn');
    if (addBtn) {
        addBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openAddModal();
        });
    }
});


function handleEditButtonClick(btn) {
    document.getElementById('edit-name').value = btn.getAttribute('data-name');
    document.getElementById('edit-quantity').value = btn.getAttribute('data-quantity');
    document.getElementById('edit-serial_number').value = btn.getAttribute('data-serial');
    document.getElementById('edit-expiration_date').value = btn.getAttribute('data-expiration');
    document.getElementById('edit-form').action = '/edit_product/' + btn.getAttribute('data-id');
    document.getElementById('edit-modal').classList.add('active');
}
function closeEditModal() {
    document.getElementById('edit-modal').classList.remove('active');
}
// Fechar ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    var editModal = document.getElementById('edit-modal');
    if (event.target === editModal) {
        closeEditModal();
    }
});

