const produtos = [
    {
        nome: "Nike Air Max 2025",
        preco: 1200,
        img: "img/nike air max.jpg",
    },
    {
        nome: "Adidas Ultraboost Light",
        preco: 1400,
        img: "img/adidas ultraboost light.jpg"
    },
    {
        nome: "Jordan 1 High OG",
        preco: 2000,
        img: "img/jordan.jpg"
    },
    {
        nome: "Puma RS-X Premium",
        preco: 900,
        img: "img/puma.jpg"
    },
    {
        nome: "Balenciaga Triple S",
        preco: 4500,
        img: "img/balenciaga.jpg"
    },
    {
        nome: "Gucci Ace Sneaker",
        preco: 3800,
        img: "img/gucci.jpg"
    }
];

let carrinho = [];

function renderProdutos(lista) {
    const div = document.getElementById("produtos");
    div.innerHTML = "";

    lista.forEach((p, index) => {
        div.innerHTML += `
            <div class="produto">
                <img src="${p.img}" alt="${p.nome}">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco}</p>
                <button onclick="add(${index})">Comprar</button>
            </div>
        `;
    });
}

function add(index) {
    carrinho.push(produtos[index]);
    atualizarCarrinho();
}

function remover(i) {
    carrinho.splice(i, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, i) => {
        total += item.preco;
        lista.innerHTML += `
            <li>
                ${item.nome} - R$ ${item.preco}
                <button onclick="remover(${i})">X</button>
            </li>
        `;
    });

    document.getElementById("cart-count").innerText = carrinho.length;
    document.getElementById("cart-total").innerText = total.toFixed(2);
}

function finalizar() {
    if (carrinho.length === 0) {
        alert("Carrinho vazio!");
        return;
    }

    alert("Compra de luxo realizada com sucesso 🛍️");
    carrinho = [];
    atualizarCarrinho();
}

function buscar() {
    const termo = document.getElementById("search").value.toLowerCase();
    const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
    renderProdutos(filtrados);
}

renderProdutos(produtos);