import { Heading } from "dracula-ui";
import React from "react";
import InputCheckout from "../../components/InputCheckout";

type Props = {
  title: string;
  info: any;
  setInfo: any;
  errorInfo: any;
  errorEmailRegex: boolean;
  handleSubmitCep: any;
};

const InputsCheckout = ({
  title,
  info,
  setInfo,
  errorInfo,
  errorEmailRegex,
  handleSubmitCep,
}: Props) => {
  return (
    <div className="billing-details">
      <Heading mb="md">Dados de {title}</Heading>
      <InputCheckout
        id="first-name"
        label="Primeiro nome"
        color="purple"
        type="text"
        placeholder="Primeiro nome"
        value={info.firstName}
        onChange={(e: any) => setInfo({ ...info, firstName: e.target.value })}
        error={errorInfo.firstName}
      />
      <InputCheckout
        id="last-name"
        color="purple"
        type="text"
        label="Último nome"
        error={errorInfo.lastName}
        placeholder="Último nome"
        value={info.lastName}
        onChange={(e: any) => setInfo({ ...info, lastName: e.target.value })}
      />
      <InputCheckout
        id="email"
        color="purple"
        type="email"
        error={errorInfo.email}
        label="E-mail"
        placeholder="E-mail"
        value={info.email}
        onChange={(e: any) => setInfo({ ...info, email: e.target.value })}
      />
      {errorEmailRegex && (
        <p className="drac-text drac-text-red">Digite um e-mail válido.</p>
      )}
      <InputCheckout
        id="zip-code"
        color="purple"
        type="text"
        label="CEP"
        error={errorInfo.zipCode}
        placeholder="CEP"
        value={info.zipCode}
        onChange={(e: any) => {
          const newZipCode = e.target.value;
          setInfo({ ...info, zipCode: newZipCode });
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
          error={errorInfo.logradouro}
          label="Endereço"
          placeholder="Endereço"
          value={info.logradouro}
          onChange={(e: any) =>
            setInfo({ ...info, logradouro: e.target.value })
          }
        />
        <InputCheckout
          id="address-number"
          color="purple"
          type="number"
          error={errorInfo.numberAddress}
          label="Número"
          placeholder="Número"
          value={info.numberAddress}
          onChange={(e: any) =>
            setInfo({
              ...info,
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
          error={errorInfo.bairro}
          label="Bairro"
          placeholder="Bairro"
          value={info.bairro}
          onChange={(e: any) => setInfo({ ...info, bairro: e.target.value })}
        />
        <InputCheckout
          id="city"
          color="purple"
          type="text"
          error={errorInfo.city}
          label="Cidade"
          placeholder="Cidade"
          value={info.city}
          onChange={(e: any) => setInfo({ ...info, city: e.target.value })}
        />
      </div>
      <div className="second-address-inputs">
        <InputCheckout
          id="complement"
          color="purple"
          type="text"
          error={errorInfo.complemento}
          label="Complemento"
          placeholder="Complemento"
          value={info.complemento}
          onChange={(e: any) =>
            setInfo({ ...info, complemento: e.target.value })
          }
        />
        <InputCheckout
          id="state"
          color="purple"
          type="text"
          error={errorInfo.state}
          label="Estado"
          placeholder="Estado"
          value={info.state}
          onChange={(e: any) => setInfo({ ...info, state: e.target.value })}
        />
      </div>
      <InputCheckout
        id="tel"
        color="purple"
        type="text"
        error={errorInfo.tel}
        label="Telefone"
        placeholder="Telefone"
        value={info.tel}
        onChange={(e: any) => setInfo({ ...info, tel: e.target.value })}
      />
    </div>
  );
};

export default InputsCheckout;
