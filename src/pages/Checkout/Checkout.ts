import styled from "styled-components";
import theme from "../../utils/theme";

export const WrapperCheckout = styled.main`
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
  .adjust-margin {
    margin-bottom: -0.5rem;
  }
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    padding: 1rem;
    .col {
      width: 100%;
      .pedido {
        padding: 1.5rem;
        label a {
          display: block;
        }
        #terms {
          margin-right: 0.5rem;
        }
      }
      .payment-method div input {
        margin-right: 0.5rem;
      }
    }
  }
`;
