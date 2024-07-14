describe('ELite IT form submission ', () => {
    it('should fill and submit the form with first positive scenario', () => {
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
    
    it('should fill and submit the form with second positive scenario', () => {
        // Visit the form page
        cy.visit('www.eliteit.com/form_submission');
  
        cy.get('input[name="name"]').type('John Doe');
        
        cy.get('input[name="email"]').type('john.doe@example.com');
  
        cy.get('input[name="password"]').type('password123');
        
        cy.get('input[name="confirmPassword"]').type('password123');
        
        cy.get('input[name="dateOfBirth"]').type('1990-01-01');
       
        cy.get('input[name="gender"][value="female"]').check();
    
        cy.get('input[name="newsletter"][value="no"]').check();
    
        cy.get('button[type="submit"]').click();
    
        cy.contains('Form submitted successfully').should('be.visible');
      });

      //Automated negative scenarios

      it('should fill and submit the form with first negative scenario', () => {
        // Visit the form page
        cy.visit('www.eliteit.com/form_submission');
  
        cy.get('input[name="name"]').type('John Doe');
        //rigix error in email
        cy.get('input[name="email"]').type('john.doeexamplecom');
  
        cy.get('input[name="password"]').type('password123');
        
        cy.get('input[name="confirmPassword"]').type('password123');
        
        cy.get('input[name="dateOfBirth"]').type('1990-01-01');
       
        cy.get('input[name="gender"][value="male"]').check();
    
        cy.get('input[name="newsletter"][value="yes"]').check();
    
        cy.get('button[type="submit"]').click();
    
        cy.contains('Form did not submit, Try Again').should('be.visible');
      });

      it('should fill and submit the form with second negative scenario', () => {
        // Visit the form page
        cy.visit('www.eliteit.com/form_submission');
  
        cy.get('input[name="name"]').type('John Doe');
        
        cy.get('input[name="email"]').type('john.doe@example.com');
  
        cy.get('input[name="password"]').type('password123');
        //mismatch error in confirm password
        cy.get('input[name="confirmPassword"]').type('pass123');
        
        cy.get('input[name="dateOfBirth"]').type('1990-01-01');
       
        cy.get('input[name="gender"][value="male"]').check();
    
        cy.get('input[name="newsletter"][value="yes"]').check();
    
        cy.get('button[type="submit"]').click();

        cy.contains('Form did not submit, Try Again').should('be.visible');
      });

      it('should fill and submit the form with third negative scenario', () => {
        // Visit the form page
        cy.visit('www.eliteit.com/form_submission');
  
        cy.get('input[name="name"]').type('John Doe');
        
        cy.get('input[name="email"]').type('john.doe@example.com');
  
        cy.get('input[name="password"]').type('password123');
        
        cy.get('input[name="confirmPassword"]').type('password123');
        //date of birth is missing
        cy.get('input[name="dateOfBirth"]').type('');
       
        cy.get('input[name="gender"][value="male"]').check();
    
        cy.get('input[name="newsletter"][value="yes"]').check();
    
        cy.get('button[type="submit"]').click();

        cy.contains('Form did not submit, Try Again').should('be.visible');
      });
  });




