describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
    .then(function($el) {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number')
    .then(function($el) {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound')
    .then(function($el) {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image changes when party horn selected', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image')
    .then(function($el) {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
  });

  it('Sound changes when party horn selected', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#horn-sound')
    .then(function($el) {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes when volume input > 66', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-image')
    .then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Volume image changes when volume input 33 < x < 67', () => {
    cy.get('#volume-number').clear().type('50');
    cy.get('#volume-image')
    .then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes when volume input 0 < x < 34', () => {
    cy.get('#volume-number').clear().type('3');
    cy.get('#volume-image')
    .then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes when volume input < 1', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image')
    .then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Honk button disabled when textbox input empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn')
    .then(function($el) {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Honk button disabled when textbox input non-number', () => {
    cy.get('#volume-number').clear().type('ab');
    cy.get('#honk-btn')
    .then(function($el) {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error shown when number outside of range typed in textbox input', () => {
    cy.get('#volume-number').clear().type('-1');
    cy.get('input:invalid')
    .then(function($el) {
      expect($el).to.exist;
    })
  });
});
