function chowMessage() {
    let userName = prompt('Как вас зовут?');
    if (confirm(`Вы уверены, что вас зовут ${userName}?`)){
        alert(`Привет, ${userName}, у  вас красивое имя!`);
    } else {
        alert(`Привет, незнакомец!`);
    }   
};
chowMessage();