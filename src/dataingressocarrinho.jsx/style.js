import styled from 'styled-components';

export const Style = styled.section`
  .container {
    display: flex;
    justify-content: space-around;
    background-color: #f0f8ff;
    padding: 20px;
    border-radius: 10px;
    height: 600px;
 
  }

  .calendar-section, .products-section, .cart-section, .cart-finalization {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .calendar-section {
    flex: 1;
    margin-right: 20px;
    
  }

  .products-section {
    flex: 2;
    margin-right: 20px;
  }

  .cart-section {
    flex: 1;
  }

  .products-section ul, .cart-section ul, .cart-finalization ul {
    list-style: none;
    padding: 0;
    height: 500px;
    overflow-y:scroll ;
  }

  .products-section li, .cart-section li, .cart-finalization li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .botoesquantidade {
    display: flex;
    align-items: center;
  }

  .botoesquantidade button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  .botoesquantidade p {
    margin: 0 10px;
  }

  .cart-section .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .cart-section .cart-item div {
    flex: 1;
    margin: 0 10px;
  }

  .cart-section .cart-item button {
    background-color: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .finalizandoCarrinho {
    display: flex;
    justify-content: space-between;
  }

  .finalizandoCarrinho input {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .finalizandoCarrinho button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .cart-finalization {
    flex: 3;
  }
`;
