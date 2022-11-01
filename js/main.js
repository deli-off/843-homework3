let UserName = prompt('Как вас зовут?');

if (UserName === 'Alex') {
    let account = prompt('Номер счёта')

    if (account === '7777') {
        let money = prompt('Сколько обналичить?')

        if (money <= 10000) {
            alert(10000 - money)
        } else {
            alert('Недостаточно средств')
        }
    } else {
        alert('Пользователь ненайден')
    }
} else {
    alert('Пользователь ненайден')
}





// let usName = prompt('Введите свое имя').toLowerCase().trim()

// if (usName[0] === 'a') {
//     let usAge = prompt('Возраст')

//     if (usAge > 20 && usAge < 40) {
//         let money = prompt('Сколько у вас денег?В $-долларах')

//         if (money > 100) {
//             alert('Добро пожаловать в клуб!')
//         } else {
//             alert('Мы не можем вас пропускать')
//         }
//     } else {
//         alert('Ваш возраст не подходит')
//     }
// } else {
//     alert('Вас нет в списке приглашенных!')
// }