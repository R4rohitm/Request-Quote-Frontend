describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/requestquote')
  })

  it("product input field exist or not -- testing", function(){
    cy.get("#product_details").should("exist");
  });

  it("Typing product in input field -- testing", function(){
    cy.get("#product_details").type("Mobiles");
  });

})