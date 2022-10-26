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

  it("Select Location from -- testing", function(){
    cy.get("#location_from").type("Chennai").click();
  });

  it("product input field exist or not -- testing", function(){
    cy.get('[name="containers_quantity"]').type("13")
  }); 

  it("Select Location to -- testing", function(){
    cy.get("#location_to").type("Liverpool").click();
  });

  it("Associated services exist or not -- testing", function(){
    cy.get("#link-checkbox").should("exist").click();
  });

  it("product input field exist or not -- testing", function(){
    cy.get('[name="first_name"]').type("Jeff")
  }); 

  it("product input field exist or not -- testing", function(){
    cy.get('[name="last_name"]').type("Hardy")
  }); 

  it("product input field exist or not -- testing", function(){
    cy.get('[name="phone"]').type("123456789")
  }); 

  it("product input field exist or not -- testing", function(){
    cy.get('[name="email"]').type("jeff_hardy@outlook.com")
  }); 

  it("Remember check box -- testing", function(){
    cy.get("#remember").click();
  });

})