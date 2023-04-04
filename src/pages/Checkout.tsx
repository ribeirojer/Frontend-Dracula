import { useEffect, useState } from "react";
import {
  Anchor,
  Button,
  Checkbox,
  Heading,
  Input,
  Paragraph,
  Radio,
} from "dracula-ui";
import styled from "styled-components";
import theme from "../utils/theme";
import { CartExtract } from "../interfaces/Product";
import { data } from "../utils/cardsData";
import InputCheckout from "../components/InputCheckout";
import { IAddress } from "../interfaces/User";
import { validateCheckoutData } from "../utils";
import { useNavigate } from "react-router-dom";

type Props = {};

const WrapperCheckout = styled.main`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  .col {
    width: 50%;
    h2 {
      text-align: center;
      margin-bottom: 1rem;
    }
  }
  .billing-details {
    input {
      margin-top: 4px;
    }
    p {
      margin-top: 2px;
    }
  }
  .input-checkbox {
    input {
      margin-top: unset;
    }
    margin: 1rem 0;
    display: flex;
    gap: 4px;
    align-items: center;
  }
  li {
    list-style-type: none;
    margin-right: 1rem;
    font-weight: 500;
  }
  .line {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  .pedido {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    border: 1px solid ${theme.dracula.purple};
    button {
      margin-top: 1rem;
    }
  }
  .payment-method {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  textarea {
    display: block;
    font-size: var(--font-md);
    min-height: var(--spacing-40);
    padding: var(--spacing-4);
    margin-top: 1rem;
    -webkit-appearance: textfield;
    background: var(--blackSecondary);
    border: 0.3rem solid transparent;
    border-radius: var(--rounded-lg);
    box-sizing: border-box;
    outline: none;
    transition: all 0.3s ease-in-out;
    width: 100%;
    font-family: Fira Code, monospace;
    color: var(--purple);
  }
  .first-address-inputs {
    display: flex;
    gap: 1rem;
    div:nth-child(2) {
      width: 35%;
    }
  }
  .second-address-inputs {
    display: flex;
    gap: 1rem;
    div {
      width: 50%;
    }
  }
`;

const Checkout = (props: Props) => {
  const [dados, setDados] = useState(data);
  const [paymentInfo, setPaymentInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    logradouro: "",
    numberAddress: "",
    complemento: "",
    bairro: "",
    city: "",
    state: "",
    tel: "",
  });
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    logradouro: "",
    numberAddress: "",
    complemento: "",
    bairro: "",
    city: "",
    state: "",
    tel: "",
  });
  const [errorPaymentInfo, setErrorPaymentInfo] = useState({
    firstName: false,
    lastName: false,
    email: false,
    zipCode: false,
    logradouro: false,
    numberAddress: false,
    complemento: false,
    bairro: false,
    city: false,
    state: false,
    tel: false,
  });
  const [createAccount, setCreateAccount] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isShippingAddress, setIsShippingAddress] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [productsOnCart, setProductsOnCart] = useState<CartExtract[]>([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate()
  
  async function handleSubmitCep(event: any) {
    event.preventDefault();
    const response = await fetch(
      `https://viacep.com.br/ws/${event.target.value}/json/`
    );
    const data: IAddress = await response.json();
    console.log(data);
    setPaymentInfo({
      ...paymentInfo,
      zipCode: data.cep.split("-").join(""),
      logradouro: data.logradouro,
      bairro: data.bairro,
      city: data.localidade,
      state: data.uf,
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const existingCart = localStorage.getItem("Cart");
    if (existingCart) {
      const parsedCart: CartExtract[] = JSON.parse(existingCart);
      setProductsOnCart(parsedCart);
    }
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      paymentInfo,
      createAccount,
      password,
      confirmPassword,
      isShippingAddress,
      shippingInfo,
      additionalInfo,
      paymentMethod,
      termsAgreed,
      shippingCost,
      totalPrice,
    };
    const isValid = validateCheckoutData(data.paymentInfo);
    isValid && navigate('/sucesso');
    console.log(data);
    // Aqui você pode enviar os dados para a API ou realizar outras operações com eles
  };

  const sumPrice =
    productsOnCart.reduce(
      (acc, product) => acc + product.quantity * data[product.id - 1].price,
      0
    ) + shippingCost;

  return (
    <WrapperCheckout>
      <div className="col">
        <div className="billing-details">
          <Heading mb="md">Dados de Pagamento</Heading>
          <InputCheckout
            id="first-name"
            label="Primeiro nome"
            color="purple"
            type="text"
            placeholder="Primeiro nome"
            value={paymentInfo.firstName}
            onChange={(e: any) =>
              setPaymentInfo({ ...paymentInfo, firstName: e.target.value })
            }
            error={errorPaymentInfo.firstName}
          />
          <InputCheckout
            id="last-name"
            color="purple"
            type="text"
            label="Último nome"
            error={errorPaymentInfo.lastName}
            placeholder="Último nome"
            value={paymentInfo.lastName}
            onChange={(e: any) =>
              setPaymentInfo({ ...paymentInfo, lastName: e.target.value })
            }
          />
          <InputCheckout
            id="email"
            color="purple"
            type="email"
            error={errorPaymentInfo.email}
            label="E-mail"
            placeholder="E-mail"
            value={paymentInfo.email}
            onChange={(e: any) =>
              setPaymentInfo({ ...paymentInfo, email: e.target.value })
            }
          />
          <InputCheckout
            id="zip-code"
            color="purple"
            type="text"
            label="CEP"
            error={errorPaymentInfo.zipCode}
            placeholder="CEP"
            value={paymentInfo.zipCode}
            onChange={(e: any) => {
              const newZipCode = e.target.value;
              setPaymentInfo({ ...paymentInfo, zipCode: newZipCode });
              if (newZipCode.length === 8) {
                handleSubmitCep(e);
              }
            }}
          />
          <div className="first-address-inputs">
            <InputCheckout
              id="logradouro"
              color="purple"
              type="text"
              error={errorPaymentInfo.logradouro}
              label="Endereço"
              placeholder="Endereço"
              value={paymentInfo.logradouro}
              onChange={(e: any) =>
                setPaymentInfo({ ...paymentInfo, logradouro: e.target.value })
              }
            />
            <InputCheckout
              id="address-number"
              color="purple"
              type="number"
              error={errorPaymentInfo.numberAddress}
              label="Número"
              placeholder="Número"
              value={paymentInfo.numberAddress}
              onChange={(e: any) =>
                setPaymentInfo({
                  ...paymentInfo,
                  numberAddress: e.target.value,
                })
              }
            />
          </div>
          <div className="second-address-inputs">
            <InputCheckout
              id="bairro"
              color="purple"
              type="text"
              error={errorPaymentInfo.bairro}
              label="Bairro"
              placeholder="Bairro"
              value={paymentInfo.bairro}
              onChange={(e: any) =>
                setPaymentInfo({ ...paymentInfo, bairro: e.target.value })
              }
            />
            <InputCheckout
              id="city"
              color="purple"
              type="text"
              error={errorPaymentInfo.city}
              label="Cidade"
              placeholder="Cidade"
              value={paymentInfo.city}
              onChange={(e: any) =>
                setPaymentInfo({ ...paymentInfo, city: e.target.value })
              }
            />
          </div>
          <div className="second-address-inputs">
            <InputCheckout
              id="complement"
              color="purple"
              type="text"
              error={errorPaymentInfo.complemento}
              label="Complemento"
              placeholder="Complemento"
              value={paymentInfo.complemento}
              onChange={(e: any) =>
                setPaymentInfo({ ...paymentInfo, complemento: e.target.value })
              }
            />
            <InputCheckout
              id="state"
              color="purple"
              type="text"
              error={errorPaymentInfo.state}
              label="Estado"
              placeholder="Estado"
              value={paymentInfo.state}
              onChange={(e: any) =>
                setPaymentInfo({ ...paymentInfo, state: e.target.value })
              }
            />
          </div>
          <InputCheckout
            id="tel"
            color="purple"
            type="text"
            error={errorPaymentInfo.tel}
            label="Telefone"
            placeholder="Telefone"
            value={paymentInfo.tel}
            onChange={(e: any) =>
              setPaymentInfo({ ...paymentInfo, tel: e.target.value })
            }
          />
        </div>
        <div className="input-checkbox">
          <Checkbox
            id="create-account"
            color="purple"
            type="checkbox"
            checked={createAccount}
            onChange={(e: any) => setCreateAccount(e.target.checked)}
          />
          <label htmlFor="create-account" className="drac-text">
            Criar conta?
          </label>
        </div>
        {createAccount && (
          <div className="billing-details">
            <InputCheckout
              id="password"
              label="Senha"
              error={false}
              color="purple"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <InputCheckout
              id="confirmpassword"
              color="purple"
              error={false}
              label="Confirme a senha"
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e: any) => setconfirmPassword(e.target.value)}
            />
          </div>
        )}
        <div className="input-checkbox">
          <Checkbox
            id="shiping-address"
            color="purple"
            type="checkbox"
            checked={isShippingAddress}
            onChange={(e: any) => setIsShippingAddress(e.target.checked)}
          />
          <label htmlFor="shiping-address" className="drac-text">
            Enviar para um endereço diferente?
          </label>
        </div>
        {isShippingAddress && (
          <div className="billing-details">
            <InputCheckout
              id="shipping-first-name"
              error={false}
              label="Primeiro nome"
              color="purple"
              type="text"
              placeholder="Primeiro nome"
              value={shippingInfo.firstName}
              onChange={(e: any) =>
                setShippingInfo({
                  ...shippingInfo,
                  firstName: e.target.value,
                })
              }
            />
            <InputCheckout
              id="shipping-last-name"
              error={false}
              label="Último nome"
              color="purple"
              type="text"
              placeholder="Último nome"
              value={shippingInfo.lastName}
              onChange={(e: any) =>
                setShippingInfo({ ...shippingInfo, lastName: e.target.value })
              }
            />
            <InputCheckout
              id="shipping-email"
              error={false}
              label="E-mail"
              color="purple"
              type="email"
              placeholder="E-mail"
              value={shippingInfo.email}
              onChange={(e: any) =>
                setShippingInfo({ ...shippingInfo, email: e.target.value })
              }
            />
            <InputCheckout
              id="shipping-address"
              error={false}
              label="Endereço"
              color="purple"
              type="text"
              placeholder="Endereço"
              value={shippingInfo.logradouro}
              onChange={(e: any) =>
                setShippingInfo({ ...shippingInfo, logradouro: e.target.value })
              }
            />
            <InputCheckout
              id="shipping-city"
              error={false}
              label="Cidade"
              color="purple"
              type="text"
              placeholder="Cidade"
              value={shippingInfo.city}
              onChange={(e: any) =>
                setShippingInfo({ ...shippingInfo, city: e.target.value })
              }
            />
            <InputCheckout
              id="shipping-state"
              error={false}
              label="Estado"
              color="purple"
              type="text"
              placeholder="País"
              value={shippingInfo.state}
              onChange={(e: any) =>
                setShippingInfo({ ...shippingInfo, state: e.target.value })
              }
            />
            <InputCheckout
              id="shipping-zip-code"
              error={false}
              label="CEP"
              color="purple"
              type="text"
              placeholder="CEP"
              value={shippingInfo.zipCode}
              onChange={(e: any) =>
                setShippingInfo({ ...shippingInfo, zipCode: e.target.value })
              }
            />
            <InputCheckout
              id="shipping-tel"
              error={false}
              label="Telefone"
              color="purple"
              type="tel"
              placeholder="Telefone"
              value={shippingInfo.tel}
              onChange={(e: any) =>
                setShippingInfo({ ...shippingInfo, tel: e.target.value })
              }
            />
          </div>
        )}
        <textarea
          placeholder="Informações adicionais"
          value={additionalInfo}
          onChange={(e: any) => setAdditionalInfo(e.target.value)}
        ></textarea>
      </div>
      <div className="col">
        <div className="pedido">
          <Heading mb="md">Seu Pedido</Heading>
          <div className="order-summary">
            <div className="line">
              <Heading size="sm">PRODUTO</Heading>
              <Heading size="sm">TOTAL</Heading>
            </div>
            {productsOnCart.map((product, index) => (
              <div className="line" key={index}>
                <Paragraph>
                  {product.quantity}x {dados[product.id - 1].name}
                </Paragraph>
                <Paragraph>
                  {(
                    product.quantity * dados[product.id - 1].price
                  ).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Paragraph>
              </div>
            ))}
            <div className="line">
              <Paragraph>Expedição</Paragraph>
              <Heading size="sm">
                {shippingCost === 0 ? "Grátis" : `$${shippingCost}`}
              </Heading>
            </div>
            <div className="line">
              <Paragraph>TOTAL</Paragraph>
              <Heading color="purple">
                {sumPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Heading>
            </div>
          </div>
          <div className="payment-method">
            <div className="drac-text">
              <Radio
                id="payment-1"
                color="purple"
                checked={paymentMethod === "Transferência bancária direta"}
                onChange={() =>
                  setPaymentMethod("Transferência bancária direta")
                }
              />
              <label htmlFor="payment-1">Transferência bancária direta</label>
            </div>
            <div className="drac-text">
              <Radio
                id="payment-2"
                color="purple"
                checked={paymentMethod === "Pagamento por cheque"}
                onChange={() => setPaymentMethod("Pagamento por cheque")}
              />
              <label htmlFor="payment-2">Pagamento por cheque</label>
            </div>
            <div className="drac-text">
              <Radio
                id="payment-3"
                color="purple"
                checked={paymentMethod === "Sistema Paypal"}
                onChange={() => setPaymentMethod("Sistema Paypal")}
              />
              <label htmlFor="payment-3">Sistema Paypal</label>
            </div>
          </div>
          <div className="inputchInputCheckout-checkbox drac-text">
            <Checkbox
              color="purple"
              type="checkbox"
              id="terms"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
            />
            <label htmlFor="terms">
              Eu li e aceito os{" "}
              <Anchor target={"_blank"}>termos e condições</Anchor>
            </label>
          </div>
          <Button onClick={handleSubmit} color="purple" disabled={!termsAgreed}>
            Finalizar Pedido
          </Button>
        </div>
      </div>
    </WrapperCheckout>
  );
};

export default Checkout;
