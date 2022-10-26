describe('Request Form E2E Testing', () => {

  it('Visit the site -- testing', () => {
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

  it("Select Location to -- testing", function(){
    cy.get("#location_to").type("Liverpool").click();
  });

  it("Select container quantity -- testing", function(){
    cy.get('[name="containers_quantity"]').type("13")
  }); 
 

  it("Select date  -- testing", function(){
    cy.get('[name="ready_to_load"]').type('2022-10-31');
  });

  // it("Associated services exist or not -- testing", function(){
  //   cy.get("#link-checkbox").should("exist").click();
  // });

  it("Fill additional information field -- testing", function(){
    cy.get('[name="additional_information"]').type("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
  }); 

  it("Add first name in contact info -- testing", function(){
    cy.get('[name="first_name"]').type("Jeff")
  }); 

  it("Add last name in contact info -- testing", function(){
    cy.get('[name="last_name"]').type("Hardy")
  }); 

  it("Add phone number in contact info -- testing", function(){
    cy.get('[name="phone"]').type("123456789")
  }); 

  it("Add email in contact info -- testing", function(){
    cy.get('[name="email"]').type("jeff_hardy@outlook.com")
  }); 

  it("Select T&C check box -- testing", function(){
    cy.get("#remember").click();
  });

  it("Form Submition -- testing", function(){
    cy.get('[type="submit"]').click();
  });

})