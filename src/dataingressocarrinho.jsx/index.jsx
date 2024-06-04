import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Style } from './style';
import produtosData from '../produtosdocarrinho/produtos';

export default function DataIngressoCarrinho() {
  const [data, setData] = useState(new Date());
  const [carrinho, setCarrinho] = useState([]);
  const [exibirFinalizacao, setExibirFinalizacao] = useState(false);

  const aoMudar = (novaData) => {
    setData(novaData);
  };

  const adicionarProdutoNoCarrinho = (produto) => {
    const produtoExistenteIndex = carrinho.findIndex(
      (item) => item.id === produto.id
    );

    if (produtoExistenteIndex !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[produtoExistenteIndex].quantidade += 1;
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const aumentarQuantidade = (index) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((item, i) =>
        i === index ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const diminuirQuantidade = (index) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((item, i) =>
        i === index ? { ...item, quantidade: item.quantidade - 1 } : item
      )
    );
  };

  const excluirProduto = (index) => {
    setCarrinho(carrinho.filter((item, i) => i !== index));
  };

  const calcularTotal = () => {
    let total = 0;
    carrinho.forEach((produto) => {
      total += produto.preco * produto.quantidade;
    });
    return total;
  };

  const handleProsseguir = () => {
    setExibirFinalizacao(true);
  };

  const handleVoltar = () => {
    setExibirFinalizacao(false);
  };

  return (
    <Style>
      <div className="container">
        {!exibirFinalizacao ? (
          <>
            <div className="calendar-section">
              <h1>Escolha a data de utilização</h1>
              <Calendar onChange={aoMudar} value={data} />
              <p>Data selecionada: {data.toDateString()}</p>
            </div>

            <div className="products-section">
              <h2>Selecione os produtos</h2>
              <ul>
                {produtosData.map((produto, index) => (
                  <li key={index} className='product-item'>
                    <span>{produto.nome}</span> <br/>
                    <p>{produto.preco}</p>
                    <p>{produto.detalhes}</p>
                    <p>{produto.hora}</p>
                    <button onClick={() => adicionarProdutoNoCarrinho(produto)}>Adicionar</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cart-section">
              <h2>Carrinho de compras</h2>
              <ul>
                {carrinho.map((produto, index) => (
                  <li key={index} className='cart-item'>
                    <div>
                      <p>{produto.nome}</p>
                      <p>{data.toDateString()}</p>
                    </div>
                    <div className='botoesquantidade'>
                      <button onClick={() => diminuirQuantidade(index)}>-</button>
                      <p>{produto.quantidade}</p>
                      <button onClick={() => aumentarQuantidade(index)}>+</button>
                    </div>
                    <p>{produto.preco * produto.quantidade}</p>
                    <button onClick={() => excluirProduto(index)}>Excluir</button>
                  </li>
                ))}
              </ul>
              <p>Valor total: R$ {calcularTotal()}</p>
              <button onClick={handleProsseguir}>Prosseguir</button>
            </div>
          </>
        ) : (
          <div className='finalizandoCarrinho'>
            <div className="cart-finalization">
              <h2>Finalizando Carrinho</h2>
              <ul>
                {carrinho.map((produto, index) => (
                  <li key={index} className='cart-item'>
                    <div className='produtoInfo'>
                      <p>{produto.nome}</p>
                      <div className='botoesquantidade'>
                        <button onClick={() => diminuirQuantidade(index)}>-</button>
                        <p>{produto.quantidade}</p>
                        <button onClick={() => aumentarQuantidade(index)}>+</button>
                      </div>
                      <p>{produto.preco * produto.quantidade}</p>
                      <button onClick={() => excluirProduto(index)}>Excluir</button>
                    </div>
                  </li>
                ))}
              </ul>
              <p>Valor total: R$ {calcularTotal()}</p>
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Senha' />
            </div>
            <div>
              <button onClick={handleVoltar}>Voltar</button>
            </div>
          </div>
        )}
      </div>
    </Style>
  );
}
