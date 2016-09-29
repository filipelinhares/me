var projects = [
  {
    name: 'Tribo Viva',
    description: '[pt-BR] Plataforma de consumo colaborativo',
    repo: 'codelandev/tribo-viva'
  },
  {
    name: 'Serenata de Amor',
    description: '[pt-BR] Robôs lutando contra a corrupção no Brasil',
    repo: 'datasciencebr/serenata-de-amor'
  },
  {
    name: 'funkcss',
    description: 'funkss is a functional CSS library.',
    repo: 'filipelinhares/funkcss'
  },
  {
    name: 'toth',
    description: 'Styleguide generator that just work',
    repo: 'filipelinhares/toth'
  },
  {
    name: 'Awesome Slack',
    description: 'A list of communities powered by Slack',
    repo: 'filipelinhares/awesome-slack'
  },
  {
    name: 'ress',
    description: 'Modern CSS reset',
    repo: 'filipelinhares/ress'
  },
  {
    name: 'onde-ta',
    description: '[pt-BR] Rastreie suas encomendas',
    repo: 'filipelinhares/onde-ta'
  },
  {
    name: 'cssguard',
    description: 'An easy way to test your CSS',
    repo: 'filipelinhares/cssguard'
  },
  {
    name: 'hex-color-resolve',
    description: 'Resolve hex colors shorthand.',
    repo: 'filipelinhares/hex-color-resolve'
  },
  {
    name: 'Email notes',
    description: 'Notes about styling emails',
    repo: 'filipelinhares/email-template-notes'
  },
  {
    name: 'typ',
    description: 'A simple and minimal typography template',
    repo: 'filipelinhares/typ'
  },
  {
    name: 'CSS comments',
    description: 'CSS/SASS Comments pattern',
    repo: 'filipelinhares/css-comments'
  },
  {
    name: 'Monroe theme',
    description: 'An oh-my-zsh theme',
    repo: 'filipelinhares/monroe-theme'
  },
  {
    name: 'Typography guide',
    description: 'Some tips to keep your typography consistent',
    repo: 'filipelinhares/typography-guide'
  },
  {
    name: 'gpeto',
    description: 'Modularize your assets',
    repo: 'filipelinhares/gpeto'
  },
  {
    name: 'Mussarela',
    description: 'An useful and simple set of SASS mixins!',
    repo: 'filipelinhares/mussarela'
  },
  {
    name: 'Autoput',
    description: 'Fill all inputs in your form, easy and fast',
    repo: 'filipelinhares/autoput'
  },
  {
    name: 'dotvim',
    description: ':w',
    repo: 'filipelinhares/dotvim'
  },
  {
    name: 'WAI-ARIA cheatsheet',
    description: 'Aria roles and attr cheatsheet.',
    repo: 'filipelinhares/WAI-ARIA-cheatsheet'
  },
  {
    name: 'Vuejs Snippets',
    description: 'Vuejs Snippets for Sublime Text',
    repo: 'filipelinhares/vuejs-snippets-sublime'
  }
];

// Projects

var container = document.querySelector('.container');
var errrorMessage = document.querySelector('.error');

var generateElement = function (element, className, data) {
  var element = document.createElement(element);
  element.classList.add(className);
  element.textContent = data;

  return element;
};

var mount = function (data) {

  var piece = generateElement('div', 'piece')
  var card = generateElement('div', 'Card')
  var title = generateElement('h3', 'Card-title', data.name)
  var infos = generateElement('div', 'Card-header')
  var desc = generateElement('p', 'Card-desc', data.description)
  var link = generateElement('a', 'Card-link')

  link.href = 'http://github.com/' + data.repo;

  infos.appendChild(title)
  infos.appendChild(desc)
  card.appendChild(infos)
  link.appendChild(card)
  piece.appendChild(link)
  container.appendChild(piece);

  setTimeout(function () {
    card.classList.add('placed')
  }, 250)
};

projects.forEach(mount)
