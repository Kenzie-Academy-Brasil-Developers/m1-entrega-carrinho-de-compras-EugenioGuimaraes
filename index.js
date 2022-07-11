
// let x = `
// <header>
// </header>
// <main>
//     <section class="container">
//         <div class="cabecalho">
//             <span>Total</span>
//             <span>Valor</span>
//         </div>
//         <ul class="lista__carrinho">
//         </ul>
//         <div class="subtotal">
//             <div class="mensagem">
//                 <span>Subtotal</span>
//                 <span>valor</span>
//             </div>
//             <button type="submit" name="finalizar">Finalizar compra</button>
//         </div>
//     </section>
// </main>
// `
// let body = document.querySelector('body');
// body.innerHTML = x;

const produtos = [];



let body = document.querySelector('body');

let header = document.createElement('header');

let titulo = document.createElement('h1');
titulo.setAttribute('class', 'containerHeader')
titulo.innerText = 'Virtual Market'

let principal = document.createElement('main');

let container = document.createElement('section');
container.setAttribute('class', 'container');

let divCabe = document.createElement('div');
divCabe.setAttribute('class', 'cabecalho');

let divCabeSpan1 = document.createElement('span');
divCabeSpan1.innerText = 'Total';

let divCabeSpan2 = document.createElement('span');
divCabeSpan2.innerText = 'Valor';

let tagUl = document.createElement('ul');
tagUl.setAttribute('class', 'lista__carrinho');

let subtotal = document.createElement('div');
subtotal.setAttribute('class', 'subtotal');

let divMensagemSubtotal = document.createElement('div');
divMensagemSubtotal.setAttribute('class', 'mensagem');

let divMensagemSubtotalSpan1 = document.createElement('span');
divMensagemSubtotalSpan1.innerText = 'Subtotal';

let divButton = document.createElement('button');
divButton.innerText = `Finalizar compra`;

body.append(header, principal);
header.append(titulo)
principal.append(container);
container.append(divCabe, tagUl, subtotal);
divCabe.append(divCabeSpan1, divCabeSpan2);
subtotal.append(divMensagemSubtotal, divButton);


function criarItem(id, nome, preco){
    return produtos.push({
        id: id,
        nome: nome,
        preco: preco
    });
}

function criarCard(arr){
    const item = document.querySelector('.lista__carrinho')
    for(let i = 0; i < arr.length; i++){
        const li = document.createElement('li');
        const nome = document.createElement('span')
              nome.innerText = arr[i].nome;
        const preco = document.createElement('span')
              preco.innerText = `R$: ${arr[i].preco}`;
        
        
        li.append(nome, preco)
        item.appendChild(li);

    }
}

function somar(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i].preco;
    }
    return total;
}

criarItem(1, 'Uva crimson', 44.99)
criarItem(2, 'Vinho canção', 17.98)
criarItem(3, 'Água dee coco', 8.99)
criarItem(4, 'Mamão', 9.98)
criarItem(5, 'Água tônica', 17.98)
criarCard(produtos);

// console.log(produtos);

let divMensagemSubtotalSpan2 = document.createElement('span');
divMensagemSubtotalSpan2.innerText = `R$: ${somar(produtos)}`;

divMensagemSubtotal.append(divMensagemSubtotalSpan1,divMensagemSubtotalSpan2);