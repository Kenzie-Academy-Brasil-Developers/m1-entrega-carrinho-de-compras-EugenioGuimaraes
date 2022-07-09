
let x = `
<header>
</header>
<main>
    <section class="container">
        <div class="cabecalho">

        </div>
        <ul class="lista__carrinho">
        </ul>
        <div class="subtotal">
            <div>
                <span>Subtotal</span>
                <span>valor</span>
            </div>
            <button>
            </button>
        </div>
    </section>
</main>
`
let body = document.querySelector('body');
body.innerHTML = x;

const produtos = [];




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

criarItem(1, 'Matheus', `R$: ${'10.00'}`)
criarItem(1, 'Matheus', `R$: ${'10.00'}`)
criarItem(1, 'Matheus', `R$: ${'10.00'}`)
criarItem(1, 'Matheus', `R$: ${'10.00'}`)
criarItem(1, 'Matheus', `R$: ${'10.00'}`)
criarCard(produtos);
// console.log(criarCard(produtos));

