describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/requestquote')
  })

  it("button should exist", function(){
    cy.get(".btn").should("exist");
    cy.get(".notThere").should("not.exist");
});
})