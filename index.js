
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

// const produtos = [];



let body = document.querySelector('body');

let header = document.createElement('header');

let principal = document.createElement('main');

let container = document.createElement('section');
container.setAttribute('class', 'container');

let divCabe = document.createElement('div');
divCabe.setAttribute('class', 'cabecalho');

let divCabeSpan1 = document.createElement('span');
divCabeSpan1.innerText = 'Total';

let divCabeSpan2 = document.createElement('span');
divCabeSpan1.innerText = 'Valor';

let tagUl = document.createElement('ul');
tagUl.setAttribute('class', 'lista__carrinho');

let subtotal = document.createElement('div');
subtotal.setAttribute('class', 'subtotal');

let mensagemSubtotal = document.createElement('div');
subtotal.setAttribute('class', 'mensagem');


body.append(header)
body.append(principal)





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
              preco.innerText = arr[i].preco;
        
        
        li.append(nome, preco)
        item.appendChild(li);

    }
}

criarItem(1, 'Matheus', `R$: ${'1.00'}`)
criarItem(1, 'Matheus', `R$: ${'1.00'}`)
criarItem(1, 'Matheus', `R$: ${'1.00'}`)
criarItem(1, 'Matheus', `R$: ${'1.00'}`)
criarItem(1, 'Matheus', `R$: ${'1.00'}`)
criarCard(produtos);
// console.log(criarCard(produtos));

