describe('tests in home page with desktop view', {
  viewportHeight: 1024,
  viewportWidth: 1440,
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
        cy.get("#navbar-create-student-button").should('be.visible');
        cy.get("#navbar-create-class-button").should('be.visible');
        cy.get("#navbar-manage-classes-button").should('be.visible');
      });

      describe('tests in "Create Student" button', () => {
        beforeEach(() => {
          cy.get("#navbar").should('be.visible');
          cy.get("#navbar-create-student-button").click();
        })

        it('should open Student Form when button is clicked', () => {
          cy.get("#student-form").should('be.visible');        
        })

        it('should close Student Form when cancel button is clicked', () => {
          cy.get("#student-form").should('be.visible');
          cy.get("#student-form-cancel-button").click();
          cy.get("#student-form").should('not.exist');  
        })

        it('should close Student Form when is clicked outside the form', () => {
          cy.get("#student-form").should('be.visible');
          cy.get("#navbar-close-student-form-button").click('right' , { force: true });
          cy.get("#student-form").should('not.exist'); 
        })
      })

      describe('tests in "Create Class" button', () => {
        beforeEach(() => {
          cy.get("#navbar").should('be.visible');
          cy.get("#navbar-create-class-button").click();
        })

        it('should open Class Form when button is clicked', () => {
          cy.get("#class-form").should('be.visible');        
        })

        it('should close Student Form when cancel button is clicked', () => {
          cy.get("#class-form").should('be.visible');
          cy.get("#class-form-cancel-button").click();
          cy.get("#class-form").should('not.exist');  
        })

        it('should close Student Form when is clicked outside the form', () => {
          cy.get("#class-form").should('be.visible');
          cy.get("#navbar-close-class-form-button").click('right' , { force: true });
          cy.get("#class-form").should('not.exist'); 
        })
      })

      describe('tests in "Manage Classes" button', () => {
        beforeEach(() => {
          cy.get("#navbar").should('be.visible');
          cy.get("#navbar-manage-classes-button").click();
        })

        it('should open Class Form when button is clicked', () => {
          cy.get("#manage-classes").should('be.visible');        
        })

        it('should show three initial classes when button clicked', () => {
          cy.get("#manage-classes").should('be.visible');
          cy.get("#manage-classes-class-list").children().should('have.length', 3);
        })

        it('should close Student Form when is clicked outside the form', () => {
          cy.get("#manage-classes").should('be.visible');
          cy.get("#navbar-close-manage-classes-button").click('right' , { force: true });
          cy.get("#manage-classes").should('not.exist'); 
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