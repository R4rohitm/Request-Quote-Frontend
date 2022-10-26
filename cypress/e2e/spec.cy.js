describe('Request Form E2E Testing', () => {

  it('Visit the site -- testing', () => {
    cy.visit('http://localhost:3000/requestquote')
  })

  it("product input field exist or not -- testing", function(){
    cy.get("#product_details").should("exist");
  }); 

  it("Typing product in input field -- testing", function(){
    cy.get("#product_details").type("Mobiles");
    cy.get('[class="text-sm cursor-pointer text-gray-900 font-medium px-6 py-4 whitespace-nowrap"]').click();
  });


  it("Click transportation by -- testing", function(){
    cy.get("#transportation_by").click();
  });

  it("Select transportation by -- testing", function(){
    cy.get('ul li:first').click();
  });

  it("Click Container Type -- testing", function(){
    cy.get('[className="relative w-full cursor-default rounded-md border hover:border-[#4F46E5] border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"]').click();
  });

  // it("Select Container Type -- testing", function(){
  //   cy.get('ul li:first').click();
  // });


  // it("Select container quantity -- testing", function(){
  //   cy.get('[name="containers_quantity"]').type("13")
  // }); 
  
   
  // it("Type Location from -- testing", function(){
  //   cy.get("#location_from").type("Chennai");
  // });

  // it("Select transportation by -- testing", function(){
  //   cy.get('ul li:first').click();
  // });

  // it("Select Location to -- testing", function(){
  //   cy.get("#location_to").type("Liverpool").click();
  // });
 

  // it("Select date  -- testing", function(){
  //   cy.get('[name="ready_to_load"]').type('2022-10-31');
  // });

  // it("Associated services exist or not -- testing", function(){
  //   cy.get("#link-checkbox").should("exist").click();
  // });

  // it("Fill additional information field -- testing", function(){
  //   cy.get('[name="additional_information"]').type("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
  // }); 

  // it("Add first name in contact info -- testing", function(){
  //   cy.get('[name="first_name"]').type("Jeff")
  // }); 

  // it("Add last name in contact info -- testing", function(){
  //   cy.get('[name="last_name"]').type("Hardy")
  // }); 

  // it("Add phone number in contact info -- testing", function(){
  //   cy.get('[name="phone"]').type("123456789")
  // }); 

  // it("Add email in contact info -- testing", function(){
  //   cy.get('[name="email"]').type("jeff_hardy@outlook.com")
  // }); 

  // it("Select T&C check box -- testing", function(){
  //   cy.get("#remember").click();
  // });

  // it("Form Submition -- testing", function(){
  //   cy.get('[type="submit"]').click();
  // });

})