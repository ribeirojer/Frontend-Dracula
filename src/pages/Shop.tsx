import styled from 'styled-components'
import Button from '../components/Button';

type Props = {}

const Wrapper = styled.section`
  background-color: var(--cor-B);
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 120px 0 1rem 0;
  }
  
#checkout-page {
  background-color: var(--bg-color);
  color: var(--primary-color);
}

#fade {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

#fade .spinner-border {
  width: 60px;
  height: 60px;
}

.hide {
  display: none !important;
}

`;

const Formu = styled.form`
  width: 100%;
  input {
    width: 56%;
    padding: 8px 16px;
    color: var(--cor-B);
    border-radius: 45px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border: 2px solid var(--cor-B);
    font-weight: 700;
    cursor: text;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;
const Shop = (props: Props) => {
  
  return (
    <Wrapper id="checkout-page">
      <div id="fade" className="hide">
        <div id="loader" className="spinner-border text-info hide" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div id="message" className="hide">
          <div className="alert alert-light" role="alert">
            <h4>Mensagem:</h4>
            <p></p>
            <button id="close-message" type="button" className="btn btn-secondary">
              Fechar
            </button>
          </div>
        </div>
      </div>
      <h2>Cadastre o seu endereço</h2>
      <p>Preencha os campos para podermos enviar seus produtos</p>
      <Formu id="address-form">
        <div>
            <input type="text" id="cep" name="cep" placeholder="Digite o seu CEP" maxLength={8} minLength={8} required />
            <label htmlFor="cep">Digite o seu CEP</label>
        </div>
        <div>
          <div>
            <input type="text" id="address" name="address" placeholder="Rua" disabled required data-input />
            <label htmlFor="address">Rua</label>
          </div>
          <div>
            <input
              type="text"
              id="number"
              name="number"
              placeholder="Digite o número da residência"
              disabled
              required
              data-input
            />
            <label htmlFor="number">Digite o número da residência</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="text"
              id="complement"
              name="complement"
              placeholder="Digite o complemento"
              disabled
              data-input
            />
            <label htmlFor="complement">Digite o complemento</label>
          </div>
          <div>
            <input
              type="text"
              id="neighborhood"
              name="neighborhood"
              placeholder="Bairro"
              disabled
              required
              data-input
            />
            <label htmlFor="neighborhood">Bairro</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Cidade"
              disabled
              required
              data-input
            />
            <label htmlFor="city">Cidade</label>
          </div>
          <div>
            <select
              id="region"
              disabled
              required
              data-input
            >
              <option selected>Estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
        </div>
        <Button cor="" texto="Cadastrar"></Button>
      </Formu>
    </Wrapper>
  )
}

export default Shop;
    /*<div>
        <div>Carrinho</div>
        <p>fluxo principal</p>
        <p>bem organizado com os produtos que o usuário escolheu</p>
        <p>ao fechar a compra obter informações de endereço</p>
        <p>confirmar enderecos e informações</p>
        <p>desenvonver métodos de pagamento</p>
    </div>*/

    
/*
#message {
  width: 40%;
}

.alert.alert-light p {
  border-bottom: 1px solid #333;
  padding: 1.2em 0;
}

#order-form-container {
  padding: 1.5em;
}

#steps {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  position: relative;
}

.step {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.step i {
  background-color: var(--secondary-bg-color);
  width: 45px;
  height: 45px;
  line-height: 45px;
  border-radius: 50%;
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 0.3em;
}

.step .active {
  background-color: var(--secondary-color);
}

.step p {
  color: var(--text-color);
}

.line {
  border-bottom: 1px solid var(--border-color);
  position: absolute;
  top: 22.5px;
  width: 90%;
  left: 5%;
  z-index: -1;
}

#order-form-container {
  max-width: 700px;
}

#order-form-container input,
#order-form-container select {
  background-color: var(--bg-color);
  border: 2px solid var(--border-color);
  color: var(--primary-color);
}

#order-form-container select {
  padding: 1rem 0.75rem;
}

#order-form-container label {
  color: var(--text-color);
}

#order-form-container input:disabled,
#order-form-container select:disabled {
  background-color: var(--secondary-bg-color);
  color: var(--text-color);
}

#order-form-container input:focus {
  border-color: var(--secondary-color);
}

#order-form-container .form-floating > label {
  left: 1em;
}

#save-btn {
  background-color: #25cc88;
  border: none;
  height: 3em;
  width: 8em;
  border-radius: 1.5em;
}

@media (min-width: 500px) {
  #save-btn {
    width: 8em;
  }
}
 */

/*
  const addressForm = document.querySelector("#address-form");
  const cepInput = document.querySelector("#cep");
  const addressInput = document.querySelector("#address");
  const cityInput = document.querySelector("#city");
  const neighborhoodInput = document.querySelector("#neighborhood");
  const regionInput = document.querySelector("#region");
  const formInputs = document.querySelectorAll("[data-input]");
  const closeButton = document.querySelector("#close-message");
// Validate CEP Input
cepInput!.addEventListener("keypress", (e) => {
  const onlyNumbers = /[0-9]|\./;
  const key = String.fromCharCode(e.keyCode);

  console.log(key);

  console.log(onlyNumbers.test(key));

  // allow only numbers
  if (!onlyNumbers.test(key)) {
    e.preventDefault();
    return;
  }
});

// Evento to get address
cepInput!.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;

  //   Check if we have a CEP
  if (inputValue.length === 8) {
    getAddress(inputValue);
  }
});

// Get address from API
const getAddress = async (cep: any) => {
  toggleLoader();

  cepInput!.blur();

  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(apiUrl);

  const data = await response.json();

  console.log(data);
  console.log(formInputs);
  console.log(data.erro);

  // Show error and reset form
  if (data.erro === "true") {
    if (!addressInput.hasAttribute("disabled")) {
      toggleDisabled();
    }

    addressForm.reset();
    toggleLoader();
    toggleMessage("CEP Inválido, tente novamente.");
    return;
  }

  // Activate disabled attribute if form is empty
  if (addressInput.value === "") {
    toggleDisabled();
  }

  addressInput.value = data.logradouro;
  cityInput.value = data.localidade;
  neighborhoodInput.value = data.bairro;
  regionInput.value = data.uf;

  toggleLoader();
};

// Add or remove disable attribute
const toggleDisabled = () => {
  if (regionInput.hasAttribute("disabled")) {
    formInputs.forEach((input) => {
      input.removeAttribute("disabled");
    });
  } else {
    formInputs.forEach((input) => {
      input.setAttribute("disabled", "disabled");
    });
  }
};

// Show or hide loader
const toggleLoader = () => {
  const fadeElement = document.querySelector("#fade");
  const loaderElement = document.querySelector("#loader");

  fadeElement.classList.toggle("hide");
  loaderElement.classList.toggle("hide");
};

// Show or hide message
const toggleMessage = (msg) => {
  const fadeElement = document.querySelector("#fade");
  const messageElement = document.querySelector("#message");

  const messageTextElement = document.querySelector("#message p");

  messageTextElement.innerText = msg;

  fadeElement.classList.toggle("hide");
  messageElement.classList.toggle("hide");
};

// Close message modal
closeButton.addEventListener("click", () => toggleMessage());

// Save address
addressForm.addEventListener("submit", (e) => {
  e.preventDefault();

  toggleLoader();

  setTimeout(() => {
    toggleLoader();

    toggleMessage("Endereço salvo com sucesso!");

    addressForm.reset();

    toggleDisabled();
  }, 1000);
});
*/
