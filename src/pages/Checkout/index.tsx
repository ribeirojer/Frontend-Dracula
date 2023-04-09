import { useContext, useEffect, useState } from "react";
import {
  Anchor,
  Button,
  Checkbox,
  Heading,
  Paragraph,
  Radio,
} from "dracula-ui";
import { CartExtract } from "../../interfaces/Product";
import { data } from "../../utils/cardsData";
import InputCheckout from "../../components/InputCheckout";
import { IAddress2 } from "../../interfaces/User";
import { hasTrueFields, validateCheckoutData } from "../../utils";
import { useNavigate } from "react-router-dom";
import { WrapperCheckout } from "./Checkout";
import InputsCheckout from "./InputsCheckout";
import { UserContext } from "../../App";

type Props = {};

const Checkout = (props: Props) => {
  const [dados, setDados] = useState(data);
  const { cartItems, user } = useContext(UserContext);

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
    paymentMethod: false,
    termsAgreed: false,
  });
  const [errorShippingInfo, setErrorShippingInfo] = useState({
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
  const [errorEmailRegex, setErrorEmailRegex] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShippingAddress, setIsShippingAddress] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  async function handleSubmitCep(event: any) {
    event.preventDefault();
    const response = await fetch(
      `https://brasilapi.com.br/api/cep/v1/${event.target.value}`
    );
    const data: IAddress2 = await response.json();
    setPaymentInfo({
      ...paymentInfo,
      zipCode: data.cep,
      logradouro: data.street,
      bairro: data.neighborhood,
      city: data.city,
      state: data.state,
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    user &&
      setPaymentInfo({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        zipCode: "",
        logradouro: user.address?.zipCode,
        numberAddress: "0",
        complemento: "",
        bairro: user.address?.street,
        city: user.address?.city,
        state: user.address?.state,
        tel: user.phoneNumber,
      });
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
    user && setCreateAccount(false);
    const errors = validateCheckoutData({
      ...data.paymentInfo,
      paymentMethod,
      termsAgreed,
      createAccount,
      password,
      confirmPassword,
    });
    setErrorPaymentInfo(errors);
    setErrorEmailRegex(errors.emailRegex);
    setErrorPassword(errors.password);
    setErrorConfirmPassword(errors.confirmPassword);
    const isValid = hasTrueFields(errors);
    !isValid && navigate("/success");
    // Aqui você pode enviar os dados para a API ou realizar outras operações com eles
  };

  const sumPrice =
    cartItems.length &&
    cartItems.reduce(
      (acc: number, product: CartExtract) =>
        acc + product.quantity * data[product.id - 1].price,
      0
    ) + shippingCost;

  return (
    <WrapperCheckout>
      <div className="col">
        <InputsCheckout
          title="Pagamento"
          info={paymentInfo}
          setInfo={setPaymentInfo}
          errorInfo={errorPaymentInfo}
          errorEmailRegex={errorEmailRegex}
          handleSubmitCep={handleSubmitCep}
        ></InputsCheckout>
        {!user && (
          <div
            className={`input-checkbox ${createAccount ? "adjust-margin" : ""}`}
          >
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
        )}
        {!user && createAccount && (
          <div className="billing-details">
            <InputCheckout
              id="password"
              label="Senha"
              error={errorPassword}
              color="purple"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <InputCheckout
              id="confirmpassword"
              color="purple"
              error={errorConfirmPassword}
              label="Confirme a senha"
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e: any) => setConfirmPassword(e.target.value)}
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
          <InputsCheckout
            title="Envio"
            info={shippingInfo}
            setInfo={setShippingInfo}
            errorInfo={errorShippingInfo}
            errorEmailRegex={errorEmailRegex}
            handleSubmitCep={handleSubmitCep}
          ></InputsCheckout>
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
              <Heading size="sm">SUBTOTAL</Heading>
            </div>
            {cartItems.map((product: CartExtract) => (
              <div className="line" key={product.id}>
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
              <Heading color="purple">TOTAL</Heading>
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
                checked={paymentMethod === "Pagamento por Pix"}
                onChange={() => setPaymentMethod("Pagamento por Pix")}
              />
              <label htmlFor="payment-2">Pagamento por Pix</label>
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
            {errorPaymentInfo.paymentMethod && (
              <p className="drac-text drac-text-red">
                Selecione um método de pagamento.
              </p>
            )}
          </div>
          <div className="inputchInputCheckout-checkbox drac-text">
            <Checkbox
              id="terms"
              color="purple"
              type="checkbox"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
            />
            <label htmlFor="terms">
              Eu li e aceito os{" "}
              <Anchor target={"_blank"}>termos e condições</Anchor>
            </label>
            {errorPaymentInfo.termsAgreed && (
              <p className="drac-text drac-text-red">
                É preciso aceitar os termos e condições.
              </p>
            )}
          </div>
          <Button onClick={handleSubmit} color="purple">
            Finalizar Pedido
          </Button>
        </div>
      </div>
    </WrapperCheckout>
  );
};

export default Checkout;
