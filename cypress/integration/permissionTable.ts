/// <reference types="cypress" />

import store from '../../src/store';

describe('Permissions table tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });


    it('Should turn a column off', () => {
        
        cy.get('.all-row td + td input[type=checkbox]:first').click();

        cy.get('.check-modulerow-0')
            .each(e => {
                expect(e.get(0).classList.contains('Mui-checked')).to.be.false;
            });

        cy.get('.check-submodulerow-0')
            .each(e => {
                expect(e.get(0).classList.contains('Mui-checked')).to.be.false;
            });
    });


    it('Should turn a module off', () => {

        cy.get('.check-modulerow-0:first').click();

        cy.get('.check-submodulerow-0:first')
            .each(e => {
                expect(e.get(0).classList.contains('Mui-checked')).to.be.false;
            });
    });


    it('Should turn a submodule off', () => {

        const firstSubmodule = cy.get('.check-submodulerow-0:first');
        
        firstSubmodule.click();

        firstSubmodule.should('not.have.class', 'Mui-checked');
    });


    it('Should sign up', () => {

        const signUpButton = cy.get('.button-wrapper button');

        signUpButton.click().then(() => {
            setTimeout(() => {
                expect(store.getState().checklist.output).to.not.be.undefined;
            }, 1000);
        });
    });
});