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
    
        cy.url().should('include', '/form-submission-success');
        cy.contains('Form submitted successfully').should('be.visible');
      });
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
    
        cy.url().should('include', '/form-submission-success');
        cy.contains('Form submitted successfully').should('be.visible');
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
    
        cy.url().should('include', '/form-submission-success');
        cy.contains('Form submitted successfully').should('be.visible');
      });
  });


// Manual test cases
### Test Case 1: Successful Form Submission with Valid Data

*Test Case ID*: TC-001  
*Test Case Description*: Verify successful form submission with valid data.  
*Pre Conditions*: The user is on the form page.

*Test Steps*:
1. Enter "John Doe" in the Name field.
2. Enter "john.doe@example.com" in the Email field.
3. Enter "password123" in the Password field.
4. Enter "password123" in the Confirm Password field.
5. Enter "1990-01-01" in the Date of Birth field.
6. Select "Male" for the Gender.
7. Select "Yes" for the Newsletter/Subscription.
8. Click on the Submit button.

*Expected Results*:
- The form is submitted successfully.
- The user is redirected to the success page.
- A success message "Form submitted successfully" is displayed.

*Post Conditions*: The form data is processed, and the user is on the success page.

### Test Case 2: Successful Form Submission with Different Valid Gender and Newsletter Options

*Test Case ID*: TC-002  
*Test Case Description*: Verify successful form submission with different valid gender and newsletter options.  
*Pre Conditions*: The user is on the form page.

*Test Steps*:
1. Enter "Jane Smith" in the Name field.
2. Enter "jane.smith@example.com" in the Email field.
3. Enter "password456" in the Password field.
4. Enter "password456" in the Confirm Password field.
5. Enter "1985-05-15" in the Date of Birth field.
6. Select "Female" for the Gender.
7. Select "No" for the Newsletter/Subscription.
8. Click on the Submit button.

*Expected Results*:
- The form is submitted successfully.
- The user is redirected to the success page.
- A success message "Form submitted successfully" is displayed.

*Post Conditions*: The form data is processed, and the user is on the success page.

### Test Case 3: Form Submission with Missing Required Fields

*Test Case ID*: TC-003  
*Test Case Description*: Verify error messages when required fields are missing.  
*Pre Conditions*: The user is on the form page.

*Test Steps*:
1. Enter "John Doe" in the Name field.
2. Leave the Email field blank.
3. Leave the Password field blank.
4. Leave the Confirm Password field blank.
5. Leave the Date of Birth field blank.
6. Click on the Submit button.

*Expected Results*:
- Error messages are displayed for each missing field:
  - "Email is required"
  - "Password is required"
  - "Confirm Password is required"
  - "Date of Birth is required"
- The form is not submitted.

*Post Conditions*: The form remains on the page with error messages displayed.

### Test Case 4: Form Submission with Mismatched Passwords

*Test Case ID*: TC-004  
*Test Case Description*: Verify error message when passwords do not match.  
*Pre Conditions*: The user is on the form page.

*Test Steps*:
1. Enter "John Doe" in the Name field.
2. Enter "john.doe@example.com" in the Email field.
3. Enter "password123" in the Password field.
4. Enter "password456" in the Confirm Password field.
5. Enter "1990-01-01" in the Date of Birth field.
6. Select "Male" for the Gender.
7. Select "Yes" for the Newsletter/Subscription.
8. Click on the Submit button.

*Expected Results*:
- An error message "Passwords do not match" is displayed.
- The form is not submitted.

*Post Conditions*: The form remains on the page with the error message displayed.

*Test Case ID*: TC-005  
*Test Case Description*: Verify error message when date of birth is left empty.  
*Pre Conditions*: The user is on the form page.

*Test Steps*:
1. Enter "John Doe" in the Name field.
2. Enter "john.doe@example.com" in the Email field.
3. Enter "password123" in the Password field.
4. Enter "password123" in the Confirm Password field.
5. Enter "" in the Date of Birth field.
6. Select "Male" for the Gender.
7. Select "Yes" for the Newsletter/Subscription.
8. Click on the Submit button.

*Expected Results*:
- An error message "Date of birth is invalid" is displayed.
- The form is not submitted.

*Post Conditions*: The form remains on the page with the error message displayed.

// Test Plan outline

1. Introduction

"The purpose of this test plan is to outline the strategy, objectives, scope, and approach for testing the registration form. The registration form is a crucial part of the application used for user sign-up which leads to the error in software."

2. Objectives

To verify that the registration form correctly captures and validates all required user information.
To ensure the form functions as expected under various conditions and inputs.
To validate the form's integration with the backend and ensure proper data storage in the database.
To identify and resolve any defects or issues related to the registration process.

3. Scope

In Scope: Testing of all fields in the registration form, including Full Name, Email Address, Password, Confirm Password, Date of Birth, Gender, Newsletter Subscription, and the Submit Button. This includes field validations, error messages, and form submission.
Out of Scope: Testing of other forms or features within the application that do not relate to the registration form.

4. Test Environment

Operating Systems: Windows, macOS, Linux
Browsers: Chrome, Firefox, Safari
Devices: Desktop, Tablet, Mobile, Laptop
Backend: Staging server with database access
Tools: Cypress, Postman, SQL database, Swagger

5. Test Data

Valid Data:

Full Name: John Doe
Email Address: john.doe@example.com
Password: Passw0rd!
Confirm Password: Passw0rd!
Date of Birth: 01/01/1998
Gender: Male
Newsletter Subscription: Yes

Invalid Data:

Full Name: ""
Email Address: john.doe@invalid
Password: short
Confirm Password: different
Date of Birth: invalid-date
Gender: Invalid option
Newsletter Subscription: Invalid option

6. Test Scenarios

Field Validation:

Verify Full Name field accepts valid input and rejects empty input.
Verify Email Address field accepts valid email format and rejects invalid formats.
Verify Password field enforces minimum length and complexity requirements.
Verify Confirm Password field matches the Password field.
Verify Date of Birth field accepts valid date format and rejects invalid formats.
Verify Gender field options are selectable and correct.
Verify Newsletter Subscription options are selectable and correct.

Form Submission:

Verify form submits successfully with all valid inputs.
Verify appropriate error messages are displayed for invalid inputs.
Verify data is correctly stored in the database upon successful submission.
Verify form does not submit when required fields are empty or invalid.

UI/UX:

Verify the form layout and alignment on different devices and browsers.
Verify the responsiveness of the form on various screen sizes.
Verify the functionality of the Submit button.

7. Test Execution Schedule

Planning and Preparation: 1 week
Test Case Design: 1 week
Test Environment Setup: 2 days
Test Execution: 2 weeks
Defect Reporting and Fixing: Ongoing during test execution
Test Closure: 2 days

8. Risks and Assumptions

Risks:
Delays in environment setup may impact the test schedule.
Incomplete or unclear requirements may lead to test case ambiguity.
Potential integration issues with the backend can cause test failures.
Assumptions:
Requirements for the registration form are finalized and well-documented.
Test environment is stable and accessible throughout the testing phase.
Necessary test data is available and valid for use.
Sufficient resources (testers, tools, time) are allocated for the testing activities.
===============================================================================================================