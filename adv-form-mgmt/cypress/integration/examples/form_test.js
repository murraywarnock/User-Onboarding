describe("User Onboarding App", () => {

    beforeEach(() => {
      // arbitrary code we want running before our tests run
      cy.visit("http://localhost:3000");
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    const nameInput = () => cy.get('input[name="username"]');
    const emailInput = () => cy.get('input[name="email"]');
    const pwdInput = () => cy.get('input[name="password"]');
    const termsInput = () => cy.get('input[name="terms"]');
    const submitBtn = () => cy.get('button[id="submit"]');

     // here go our tests
  it("sanity test to make sure tests work", () => {
    // 'expect' is an assertions
    // there can be many assertions per test
    // though inside the 'it' statement (the test),
    // usually those assertions are logically grouped together
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({}); // not strict (==)
    expect({}).to.eql({}); // strict (===)
  });
  it("input name contains name provided", () => {
    nameInput()
      .should("exist")
      .type("This is a name")
      .should("have.value", "This is a name")

  });
  it("input email contains email address provided", () => {
    emailInput()
      .should("exist")
      .type("account@server.xxx")
      .should("have.value", "account@server.xxx")

  });  it("input name contains password provided", () => {
    pwdInput()
      .should("exist")
      .type("password")
      .should("have.value", "password")

  });
  it("terms checkbox can be checked", () => {
    termsInput()
      .should("exist")
      .check()
      .should("be.checked")
  
    });
    // The following does not test the submit functionality, only the form behavior
    it("user can submit valid data", () => {
      submitBtn()
        .should("not.be.enabled")

      nameInput()
        .should("have.value", "")
        .type("Fred Flintstone")
    
      emailInput()
        .should("have.value", "")
        .type("account@server.xxx")

      pwdInput()
        .should("have.value", "")
        .type("Thisis1v@lid")

      termsInput()
        .should("not.be.checked")
        // .should("have.value", false && "no")
        .check()
        .should("be.checked")

        submitBtn()
        .should("be.enabled")

    
    });

}); 