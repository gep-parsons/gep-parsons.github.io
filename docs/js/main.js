const burger_icon = document.querySelector('#burger_icon');

function hidden_or_not () {
    const dropdown_menu = document.querySelector('#dropdown_menu');
    if (dropdown_menu.classList.contains('hidden')) {
    dropdown_menu.classList.remove('hidden'); 
    }
    else {
        dropdown_menu.classList.add('hidden');
    }
}

burger_icon.addEventListener('click', hidden_or_not);