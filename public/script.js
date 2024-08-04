document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/contacts')
        .then(res => res.json())
        .then(contacts => {
            const list = document.getElementById('contact-list')
            list.innerHTML = '';
            contacts.forEach(contact => {
                const listItem = document.createElement('li');
                listItem.className = 'list-item'
                listItem.innerHTML = `
                <div class="list-item-imagem">
                    <img src="${contact.image}" alt="${contact.name}">
                </div>

                <div class="list-item__content">
                    <p class="list-item__name">${contact.name}</p>
                    <p class="list-item__email">${contact.email}</p>
                </div>

                <div class="list-item__actions">
                    <a href="#"><img src="iamges/delete.png"></a>
                    <a href="#"><img src="iamges/edit.png"></a>
                </div>
                `;
                list.appendChild(listItem);
            })
        })
})