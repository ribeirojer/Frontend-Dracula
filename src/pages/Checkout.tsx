import { useState } from "react";
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
      margin-bottom: 1rem;
    }
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
`;

const Checkout = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [tel, setTel] = useState("");
  const [createAccount, setCreateAccount] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isShippingAddress, setIsShippingAddress] = useState(false);
  const [shippingFirstName, setShippingFirstName] = useState("");
  const [shippingLastName, setShippingLastName] = useState("");
  const [shippingEmail, setShippingEmail] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingZipCode, setShippingZipCode] = useState("");
  const [shippingTel, setShippingTel] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [productList, setProductList] = useState([
    { name: "Nome do produto vai aqui", quantity: 1, price: 980.0 },
    { name: "Nome do produto vai aqui", quantity: 2, price: 980.0 },
  ]);
  const [shippingCost, setShippingCost] = useState(0);
  const [totalPrice, setTotalPrice] = useState(
    productList.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    ) + shippingCost
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      address,
      city,
      country,
      zipCode,
      tel,
      createAccount,
      password,
      confirmPassword,
      isShippingAddress,
      shippingFirstName,
      shippingLastName,
      shippingEmail,
      shippingAddress,
      shippingCity,
      shippingCountry,
      shippingZipCode,
      shippingTel,
      additionalInfo,
      paymentMethod,
      termsAgreed,
      productList,
      shippingCost,
      totalPrice,
    };
    console.log(data);
    // Aqui você pode enviar os dados para a API ou realizar outras operações com eles
  };

  return (
    <WrapperCheckout>
      <div className="col">
        <div className="billing-details">
          <Heading mb="md">Dados de Entrega</Heading>
          <Input
            color="purple"
            type="text"
            name="first-name"
            placeholder="Primeiro nome"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            color="purple"
            type="text"
            name="last-name"
            placeholder="Último nome"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            color="purple"
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            color="purple"
            type="text"
            name="address"
            placeholder="Endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            color="purple"
            type="text"
            name="city"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            color="purple"
            type="text"
            name="country"
            placeholder="País"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Input
            color="purple"
            type="text"
            name="zip-code"
            placeholder="CEP"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <Input
            color="purple"
            type="tel"
            name="tel"
            placeholder="Telefone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <div className="input-checkbox">
            <Checkbox
              color="purple"
              type="checkbox"
              id="create-account"
              checked={createAccount}
              onChange={(e) => setCreateAccount(e.target.checked)}
            />
            <label htmlFor="create-account">Criar conta?</label>
            {createAccount && (
              <div>
                <Input
                  color="purple"
                  type="password"
                  name="password"
                  placeholder="Coloque sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  color="purple"
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
        <Checkbox
          color="purple"
          type="checkbox"
          id="shiping-address"
          checked={isShippingAddress}
          onChange={(e) => setIsShippingAddress(e.target.checked)}
        />
        <label htmlFor="shiping-address">
          Enviar para um endereço diferente?
        </label>
        {shippingAddress && (
          <div className="billing-details">
            <Input
              color="purple"
              type="text"
              name="shipping-first-name"
              placeholder="Primeiro nome"
              value={shippingFirstName}
              onChange={(e) => setShippingFirstName(e.target.value)}
            />
            <Input
              color="purple"
              type="text"
              name="shipping-last-name"
              placeholder="Último nome"
              value={shippingLastName}
              onChange={(e) => setShippingLastName(e.target.value)}
            />
            <Input
              color="purple"
              type="email"
              name="shipping-email"
              placeholder="E-mail"
              value={shippingEmail}
              onChange={(e) => setShippingEmail(e.target.value)}
            />
            <Input
              color="purple"
              type="text"
              name="shipping-address"
              placeholder="Endereço"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
            />
            <Input
              color="purple"
              type="text"
              name="shipping-city"
              placeholder="Cidade"
              value={shippingCity}
              onChange={(e) => setShippingCity(e.target.value)}
            />
            <Input
              color="purple"
              type="text"
              name="shipping-country"
              placeholder="País"
              value={shippingCountry}
              onChange={(e) => setShippingCountry(e.target.value)}
            />
            <Input
              color="purple"
              type="text"
              name="shipping-zip-code"
              placeholder="CEP"
              value={shippingZipCode}
              onChange={(e) => setShippingZipCode(e.target.value)}
            />
            <Input
              color="purple"
              type="tel"
              name="shipping-tel"
              placeholder="Telefone"
              value={shippingTel}
              onChange={(e) => setShippingTel(e.target.value)}
            />
          </div>
        )}
        <textarea
          placeholder="Informações adicionais"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
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
            {productList.map((product, index) => (
              <div className="line" key={index}>
                <Paragraph>
                  {product.quantity}x {product.name}
                </Paragraph>
                <Paragraph>${product.quantity * product.price}</Paragraph>
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
              <Heading color="purple">${totalPrice.toFixed(2)}</Heading>
            </div>
          </div>
          <div className="payment-method">
            <div className="">
              <Radio
                color="purple"
                checked={paymentMethod === "Transferência bancária direta"}
                onChange={() =>
                  setPaymentMethod("Transferência bancária direta")
                }
              />
              <label htmlFor="payment-1">Transferência bancária direta</label>
            </div>
            <div className="">
              <Radio
                color="purple"
                checked={paymentMethod === "Pagamento por cheque"}
                onChange={() => setPaymentMethod("Pagamento por cheque")}
              />
              <label htmlFor="payment-1">Pagamento por cheque</label>
            </div>
            <div className="">
              <Radio
                color="purple"
                checked={paymentMethod === "Sistema Paypal"}
                onChange={() => setPaymentMethod("Sistema Paypal")}
              />
              <label htmlFor="payment-1">Sistema Paypal</label>
            </div>
          </div>
          <div className="input-checkbox">
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
