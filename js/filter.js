const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

const listItemsMarkup = createListItemsMarkup(tech);

refs.list.innerHTML = listItemsMarkup;

refs.input.addEventListener('input', _.debounce(onInputSymbols,900));

function createListItemsMarkup(list) {
    return list.map((element) => {
        return `<li>${element.label}</li>`;
    }).join('');
}

function onInputSymbols(e) {
    const search = e.target.value.toLowerCase();
    const filteredItems = tech.filter(item =>
        item.label.toLowerCase().includes(search),
    );
    console.log(filteredItems);
    refs.list.innerHTML = createListItemsMarkup(filteredItems);
}