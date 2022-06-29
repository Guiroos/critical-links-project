describe('tests in home page with iPad Pro 11 view', {
  viewportHeight: 1024,
  viewportWidth: 834,
}, () => { 
  describe('tests in routes', () => {
    it('should load the home page', () => {
      cy.visit('/');
      cy.get("#home-page").should('be.visible');
    })
  })

  describe('tests in rendering components', () => {
    beforeEach(() => {
      cy.visit('/');
    })

    describe('tests in Bar component', () => {
      it('should render Bar component and its children', () => {
        cy.get("#navbar").should('be.visible');
        cy.get("#navbar-title").should('be.visible');
        cy.get("#navbar-icon-open-button").should('be.visible').click();
        cy.get("#navbar-mobile-create-student-button").should('be.visible');
        cy.get("#navbar-mobile-create-class-button").should('be.visible');
        cy.get("#navbar-mobile-manage-classes-button").should('be.visible');
      });

      describe('tests in "Create Class" button', () => {
        beforeEach(() => {
          cy.get("#navbar").should('be.visible');
          cy.get("#navbar-icon-open-button").should('be.visible').click({ force: true });
          cy.get("#navbar-mobile-create-class-button").should('be.visible').click({ force: true });
        })

        it('should open Class Form when button is clicked', () => {
          cy.get("#mobile-class-form").should('be.visible');                  
        })

        it('should close Class Form when cancel button is clicked', () => {
          cy.get("#mobile-class-form > #class-form > form > .flex > #class-form-cancel-button").should('be.visible').click({ force: true });    
          cy.get("#mobile-class-form").should('not.exist');
        })

        it('should close Class Form  when "Class Form  button is clicked', () => {
          cy.get("#mobile-class-form").should('be.visible');
          cy.get("#navbar-mobile-create-class-button").should('be.visible').click({ force: true });
          cy.get("#mobile-class-form").should('not.exist');
        }) 
      })

      describe('tests in "Create Student" button', () => {
        beforeEach(() => {
          cy.get("#navbar").should('be.visible');
          cy.get("#navbar-icon-open-button").should('be.visible').click({ force: true });
          cy.get("#navbar-mobile-create-student-button").should('be.visible').click({ force: true });
        })

        it('should open Student Form when button is clicked', () => {
          cy.get("#mobile-student-form").should('be.visible');         
        })

        it('should close Student Form when cancel button is clicked', () => {
          cy.get("#mobile-student-form > #student-form > form > .flex > #student-form-cancel-button").should('be.visible').click({ force: true });    
          cy.get("#mobile-student-form").should('not.exist');
        })

        it('should close Student Form when "Student Form" button is clicked', () => {
          cy.get("#mobile-student-form").should('be.visible');
          cy.get("#navbar-mobile-create-student-button").should('be.visible').click({ force: true });
          cy.get("#mobile-student-form").should('not.exist');
        })        
      })

      describe('tests in "Manage Classes" button', () => {
        beforeEach(() => {
          cy.get("#navbar").should('be.visible');
          cy.get("#navbar-icon-open-button").should('be.visible').click({ force: true });
          cy.get("#navbar-mobile-manage-classes-button").should('be.visible').click({ force: true });
        })

        it('should open Manage Classes when button is clicked', () => {
          cy.get("#mobile-manage-classes").should('be.visible');         
        })

        it('should show three initial classes when button clicked', () => {
          cy.get("#mobile-manage-classes").should('be.visible');         
          cy.get("#mobile-manage-classes > #manage-classes > #manage-classes-class-list").children().should('have.length', 3);
        })

        it('should close Manage Classes when "Manage Classes" button is clicked', () => {
          cy.get("#mobile-manage-classes").should('be.visible');
          cy.get("#navbar-mobile-manage-classes-button").should('be.visible').click({ force: true });
          cy.get("#mobile-manage-classes").should('not.exist');
        })
      })
    })

    describe('tests in StudentsCard component', () => {
      it('should render StudentsCard component with initial data', () => {
        cy.get("#students-card").should('be.visible');
        cy.get("#students-card").children().should('have.length', 2);
      });
    })
  })
})