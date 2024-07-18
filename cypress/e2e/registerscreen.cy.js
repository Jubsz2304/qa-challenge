import registerdatas from '../fixtures/registerdatas.json'


describe('Register Screen', () => {
  beforeEach(() => {
    cy.visit('https://qastage.buildbox.one/18/cadastro/');
    cy.get('[id=btn-enroll]').click();
  })

  describe('Negatives Scenarios', () => {
    beforeEach(() => {
      cy.get('[id=signup-personal-data-firstName]').type(registerdatas.wname);
      cy.get('[id=signup-personal-data-lastName]').type(registerdatas.wsurname);
      cy.get('[id=signup-personal-data-birthDate]').type(registerdatas.wbirth_date);
      cy.get('[id=signup-personal-data-cpf]').type(registerdatas.wTax_ID);
      cy.get('[id=signup-personal-data-email]').type(registerdatas.wemail);
      cy.get('[id=signup-personal-data-email-confirm]').type(registerdatas.wemail);
      cy.get('[id=signup-personal-data-password]').type(registerdatas.wpassword);
      cy.get('[id=signup-personal-data-password-confirm]').type(registerdatas.wpassword);
      cy.get('body > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form > div.container.max-w-\\[53\\.4375rem\\].pb-\\[16\\.875rem\\] > div > div.flex.flex-col.gap-x-5.gap-y-5.lg\\:flex-row.lg\\:gap-x-8 > div.lg\\:w-7\\/12 > div > div > button').click();
      cy.get('#dropdown-button-1 > div > span:nth-child(2)').click();
      cy.get('[id=signup-personal-data-lgpd]').click();


    })

    it('THEN his register are not created', () => {
      cy.get('div > span').contains('CPF inválido.');
      cy.get('div > span').contains('Email inválido.');
      cy.get('div > span').contains('Precisa ser email');
      cy.get('[id=signup_submit_button_1]').click(); 
      cy.screenshot('Negatives_Scenarios')
    })
  })



  describe('Positives Scenarios', () => {
    beforeEach(() => {

      cy.get('[id=signup-personal-data-firstName]').type(registerdatas.name);
      cy.get('[id=signup-personal-data-lastName]').type(registerdatas.surname);
      cy.get('[id=signup-personal-data-birthDate]').type(registerdatas.birth_date);
      cy.get('[id=signup-personal-data-cpf]').type(registerdatas.Tax_ID);
      cy.get('[id=signup-personal-data-email]').type(registerdatas.email);
      cy.get('[id=signup-personal-data-email-confirm]').type(registerdatas.email);
      cy.get('[id=signup-personal-data-password]').type(registerdatas.password);
      cy.get('[id=signup-personal-data-password-confirm]').type(registerdatas.password);
      cy.get('body > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form > div.container.max-w-\\[53\\.4375rem\\].pb-\\[16\\.875rem\\] > div > div.flex.flex-col.gap-x-5.gap-y-5.lg\\:flex-row.lg\\:gap-x-8 > div.lg\\:w-7\\/12 > div > div > button').click();
      cy.get('#dropdown-button-1 > div > span:nth-child(2)').click();
      cy.get('[id=signup-personal-data-lgpd]').click();
      cy.get('[id=signup_submit_button_1]').click();
      cy.get('[id=signup-address-cep]').type(registerdatas.zip_code).trigger('change');
      cy.get('[id=signup-address-number]').type(registerdatas.residencial_number);
      cy.get('[id=signup-address-complement]').type(registerdatas.complement);
      cy.get('[id=signup_submit_button_3]').click()

    })
    it('THEN his register are created', () => {
      cy.get('body > div > div:nth-child(2) > div:nth-child(4) > div > div > div:nth-child(2) > h1').should('be.visible').contains('Thank you for joining us!');
      cy.get('[id=wide_window_button]').should('be.visible').contains('Acessar Plataforma');
      cy.screenshot('Positives_Scenarios')

    })

  })
})

