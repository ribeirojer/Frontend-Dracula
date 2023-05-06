/// <reference types="cypress" />

describe("Checkout", () => {
  beforeEach(() => {
    cy.visit("/checkout");
  });

  it("Fills out payment information and processes order", () => {
    cy.get("#first-name").type("John");
    cy.get("#last-name").type("Doe");
    cy.get("#email").type("john.doe@example.com");
    cy.get("#zip-code").type("12228340");
    cy.get("#logradouro").type("Rua A");
    cy.get("#address-number").type("123");
    cy.get("#complement").type("Ap 123");
    cy.get("#bairro").type("Centro");
    cy.get("#city").type("São Paulo");
    cy.get("#state").type("SP");
    cy.get("#tel").type("11999999999");

    cy.get("#payment-1").click();
    cy.get("#terms").click();

    cy.contains("Finalizar Pedido").click();

    cy.url().should("include", "/success");
  });
/**
  it("should validate required fields", () => {
    cy.get("[data-cy=checkout-button]").click();

    cy.get("[data-cy=error-message]").should("be.visible");
    cy.get("[data-cy=error-message]").contains("First name is required");
    cy.get("[data-cy=error-message]").contains("Last name is required");
    cy.get("[data-cy=error-message]").contains("Email is required");
    cy.get("[data-cy=error-message]").contains("Zip code is required");
    cy.get("[data-cy=error-message]").contains("Address is required");
    cy.get("[data-cy=error-message]").contains("Number is required");
    cy.get("[data-cy=error-message]").contains("City is required");
    cy.get("[data-cy=error-message]").contains("State is required");
    cy.get("[data-cy=error-message]").contains("Phone number is required");
  });

  it("should validate invalid email address", () => {
    cy.get("[data-cy=checkout-email]").type("invalid-email");

    cy.get("[data-cy=checkout-button]").click();

    cy.get("[data-cy=error-message]").should("be.visible");
    cy.get("[data-cy=error-message]").contains("Invalid email address");
  });

  it("should display success message when checkout is successful", () => {
    cy.get("[data-cy=checkout-first-name]").type("John");
    cy.get("[data-cy=checkout-last-name]").type("Doe");
    cy.get("[data-cy=checkout-email]").type("johndoe@example.com");
    cy.get("[data-cy=checkout-zip-code]").type("12345");
    cy.get("[data-cy=checkout-address]").type("123 Main St");
    cy.get("[data-cy=checkout-number]").type("10");
    cy.get("[data-cy=checkout-complement]").type("Apt 1");
    cy.get("[data-cy=checkout-neighborhood]").type("Downtown");
    cy.get("[data-cy=checkout-city]").type("San Francisco");
    cy.get("[data-cy=checkout-state]").type("CA");
    cy.get("[data-cy=checkout-phone]").type("555-5555");

    cy.get("[data-cy=checkout-button]").click();

    cy.get("[data-cy=success-message]").should("be.visible");
    cy.get("[data-cy=success-message]").contains("Order placed successfully!");
  }); */
});
