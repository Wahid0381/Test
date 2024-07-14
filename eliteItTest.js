describe('ELite IT form submission ', () => {
    it('should fill and submit the form', () => {
      // Visit the form page
      cy.visit('www.eliteit.com/form_submission');

      cy.get('input[name="name"]').type('John Doe');
      
      cy.get('input[name="email"]').type('john.doe@example.com');

      cy.get('input[name="password"]').type('password123');
      
      cy.get('input[name="confirmPassword"]').type('password123');
      
      cy.get('input[name="dateOfBirth"]').type('1990-01-01');
     
      cy.get('input[name="gender"][value="male"]').check();
  
      cy.get('input[name="newsletter"][value="yes"]').check();
  
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/form-submission-success');
      cy.contains('Form submitted successfully').should('be.visible');
    });
  });