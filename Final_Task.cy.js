describe('Selectable Demo', () => {
  it('should highlight selected items', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    
// Iestatīt vārdu "Jānis" pēc 
cy.get('div.col-md-4.col-sm-6 input#firstName[placeholder="First Name"]').type('Jānis');

// Iestatīt uzvārdu "Bēziņš" 
cy.get('input#lastName[placeholder="Last Name"]').type('Bēziņš');

// Iestatīt e-pasta adresi "janis.berzins@jb.com" 
cy.get('input#userEmail[placeholder="name@example.com"]').type('janis.berzins@jb.com');

// radio box - other
cy.get('label[for="gender-radio-3"]').click();

// Talruna nr : Ievadīt ciparus "123456789" 
cy.get('input#userNumber[placeholder="Mobile Number"]').type('123456789');

// Iestatīt datumu "28. februāris 1930" 

// Noklikšķināt uz datumu lauka, lai atvērtu kalendāru
cy.get('input#dateOfBirthInput').click();

// klikskis gadam
cy.get('select.react-datepicker__year-select').select('1930');

// klikskis menesim
cy.get('select.react-datepicker__month-select').select('5');

// klikskis dienai
cy.get('.react-datepicker__day--028').click();


cy.get('#subjectsInput').type('ekonomika');

cy.get('label[for="hobbies-checkbox-3"]').click();





// Nomainiet "test.bmp" ar attiecīgo faila nosaukumu
// jaieliek "fixtures" kataloga so attela failu "test.bmp"
const fileName = 'test.bmp';

cy.fixture(fileName, 'binary')
  .then(Cypress.Blob.binaryStringToBlob)
  .then(fileContent => {
    const file = new File([fileContent], fileName, { type: 'image/bmp' });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);

    cy.get('#uploadPicture').then(element => {
      element[0].files = dataTransfer.files;
      cy.wrap(element).trigger('change', { force: true });
    });
  });



// NCR

  // nedarbojas, nevaru saprast kap'ec dropdowns neiet ...
 // cy.get('div#state') // Atrod dropdown elementu ar ID 'state'
//  .click() // Uzklikšķina uz dropdowna, lai atvērtu to
//  .contains('div.css-1uccc91-singleValue', 'NCR') // Meklē div ar klasi 'css-1uccc91-singleValue', kurā ir teksts 'NCR'
//  .click(); // Uzklikšķina uz NCR opcijas


// Delhi tas pats kas ar NCR - neizdevaas saprast 


 });
});
