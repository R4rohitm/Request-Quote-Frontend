describe('Request Form E2E Testing', () => {

  // Form Testing -scenario-1 (FCL-shipment)

  it('Visit the site -- testing', () => {
    cy.visit('https://intoglo-page.netlify.app/requestquote')
  })

  it("product input field exist or not -- testing", function(){
    cy.get("#product_details").should("exist");
  }); 

  it("Typing product in input field -- testing", function(){
    cy.get("#product_details").type("inr");
    cy.get("#product_details").should("inr");
    // cy.get('h2').first().click();
  });

  it("Check transportation by field exist or not -- testing", function(){
    cy.get("#transportation_by").should("exist");
  });

  it("Click transportation by -- testing", function(){
    cy.get("#transportation_by").click();
  });


  it("Select transportation by -- testing", function(){
    cy.get('ul li:first').click();
  });

  it("Container type -- testing", function(){
    cy.get("#container_type").should("exist");
    cy.get("#container_type").click();
    cy.get('ul>li').eq(4).click();
  }); 

  it("Check container quantity exist or not -- testing", function(){
    cy.get('[name="containers_quantity"]').should("exist");
  }); 

  it("Select container quantity -- testing", function(){
    cy.get('[name="containers_quantity"]').type("13")
  }); 
  
   
  it("Type Location from -- testing", function(){
    cy.get("#location_from").type("Chennai");
    cy.get('#locfrom').should("exist").click();
  });


  it("Select Location to -- testing", function(){
    cy.get("#location_to").type("Liverpool");
    cy.get('#locto').should("exist").click();
  });
 

  it("Select date  -- testing", function(){
    cy.get('[name="ready_to_load"]').type('2022-10-31');
  });



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

  // it("Form Submition -- testing", function(){
  //   cy.get('[type="submit"]').click();
  // });

  // it("Form Submition -- testing", function(){
  //   cy.get('[class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"]').should("exist").click();
  // });
   
  // it("Await for 3 seconds for new request",function(){
  //   cy.wait(3000)
  // })

  // it("product input field exist or not -- testing", function(){
  //   cy.get("#product_details").should("exist");
  // }); 

  // it("Typing product in input field -- testing", function(){
  //   cy.get("#product_details").type("Tires");
  //   cy.get('[class="text-sm cursor-pointer text-gray-900 font-medium px-6 py-4 whitespace-nowrap"]').click();
  // });

  // it("Click transportation by -- testing", function(){
  //   cy.get("#transportation_by").click();
  // });

  // it("Select transportation by -- testing", function(){
  //   cy.get('ul>li').eq(1).click();
  // });

  // it("Select Weight -- testing", function(){
  //   cy.get('[name="weight"]').type("25")
  // }); 

  // it("Select Volume -- testing", function(){
  //   cy.get('[name="volume"]').type("35")
  // });

  // it("Type Location from -- testing", function(){
  //   cy.get("#location_from").type("Chennai");
  //   cy.get('#locfrom').should("exist").click();
  // });


  // it("Select Location to -- testing", function(){
  //   cy.get("#location_to").type("Liverpool");
  //   cy.get('#locto').should("exist").click();
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

  







  // it("product input field exist or not -- testing", function(){
  //   cy.get("#product_details").should("exist");
  // }); 

  // it("Typing product in input field -- testing", function(){
  //   cy.get("#product_details").type("Horses");
  //   cy.get('[class="text-sm cursor-pointer text-gray-900 font-medium px-6 py-4 whitespace-nowrap"]').click();
  // });

  // it("Click transportation by -- testing", function(){
  //   cy.get("#transportation_by").click();
  // });

  // it("Select transportation by -- testing", function(){
  //   cy.get('ul>li').eq(2).click();
  // });

  // it("Select Ship type -- testing", function(){
  //      cy.get("#ship_type").click();
  //   cy.get('ul>li').eq(5).click();
  // });

  // it("Fill gross weight -- testing", function(){
  //   cy.get('[name="gross_weight"]').type("45");
  // });

  // it("Fill gross weight -- testing", function(){
  //   cy.get('[name="loading_rate"]').type("25");
  // });

  // it("Fill gross weight -- testing", function(){
  //   cy.get('[name="discharging_rate"]').type("15");
  // });

  // it("Type Location from -- testing", function(){
  //   cy.get("#location_from").type("Chennai");
  //   cy.get('#locfrom').should("exist").click();
  // });


  // it("Select Location to -- testing", function(){
  //   cy.get("#location_to").type("Liverpool");
  //   cy.get('#locto').should("exist").click();
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
  //   cy.get('[name="first_name"]').type("Jordan")
  // }); 

  // it("Add last name in contact info -- testing", function(){
  //   cy.get('[name="last_name"]').type("Henderson")
  // }); 

  // it("Add phone number in contact info -- testing", function(){
  //   cy.get('[name="phone"]').type("8967534521")
  // }); 

  // it("Add email in contact info -- testing", function(){
  //   cy.get('[name="email"]').type("Jordan@lfc.com")
  // }); 

  // it("Select T&C check box -- testing", function(){
  //   cy.get("#remember").click();
  // });

  // it("Form Submition -- testing", function(){
  //   cy.get('[type="submit"]').click();
  // });


})