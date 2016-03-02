var projects = [
  {
    name: 'funkcss',
    description: 'Funktional CSS'
  },
  {
    name: 'toth',
    description: 'Styleguide generator that just work'
  },
  {
    name: 'awesome-slack',
    description: 'A list of communities powered by Slack'
  },
  {
    name: 'sanilize.css',
    description: 'A merge between sanitize.css and normalize.css'
  },
  {
    name: 'onde-ta',
    description: '[pt-BR] Rastreie suas encomendas'
  },
  {
    name: 'cssguard',
    description: 'An easy way to test your CSS'
  },
  {
    name: 'hex-color-resolve',
    description: 'Resolve hex colors shorthand.'
  },
  {
    name: 'email-template-notes',
    description: 'Notes about styling emails'
  },
  {
    name: 'typ',
    description: 'A simple and minimal typography template'
  },
  {
    name: 'css-comments',
    description: 'CSS/SASS Comments pattern'
  },
  {
    name: 'monroe-theme',
    description: 'An oh-my-zsh theme'
  },
  {
    name: 'typography-guide',
    description: 'Some tips to keep your typography consistent'
  },
  {
    name: 'gpeto',
    description: 'Modularize your assets'
  },
  {
    name: 'mussarela',
    description: 'An useful and simple set of SASS mixins!'
  },
  {
    name: 'autoput',
    description: 'Fill all inputs in your form, easy and fast'
  },
  {
    name: 'dotvim',
    description: ':w'
  },
  {
    name: 'WAI-ARIA-cheatsheet',
    description: 'Aria roles and attr cheatsheet.'
  },
  {
    name: 'vuejs-snippets-sublime',
    description: 'Vuejs Snippets for Sublime Text'
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

  link.href = 'http://github.com/filipelinhares/' + data.name;

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
