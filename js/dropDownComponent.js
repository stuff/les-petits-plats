export default function dropDownComponent(
  targetElement,
  {
    label = 'Label',
    color = '#3282F7',
    placeholder = 'Search',
    list = [],
    onSelect = () => {},
  } = {}
) {
  
  const template = `
<div class="dropdown" style="--color:${color};" data-element="root">
    <div class="dropdown__icon"><i class="bi bi-chevron-down"></i></div>
    <button class="dropdown__button" type="button" data-element="button">${label}</button>
    <div class="dropdown__list">
        <div class="dropdown__listHeader">
            <input class="dropdown__input" type="text" placeholder="${placeholder}" data-element="input"/>
        </div>
        <ul class="dropdown__listContent" data-element="list-content">
        </ul>
    </div>
</div>
    `;

  let workList = list;

  targetElement.innerHTML = template;

  const rootElement = targetElement.querySelector('[data-element="root"]');
  const buttonElement = targetElement.querySelector('[data-element="button"]');
  const inputElement = targetElement.querySelector('[data-element="input"]');
  const listContent = targetElement.querySelector(
    '[data-element="list-content"]'
  );

  function resizeContainer() {
    const { width } = listContent.getBoundingClientRect();
    rootElement.style.width = width + 'px';
  }

  function populateList(filter) {
    listContent.innerHTML = '';
    workList
      .filter((item) => (filter ? item.toLowerCase().startsWith(filter) : true))
      .forEach((item) => {
        listContent.innerHTML += `<li><a href="#" data-value="${item}">${item}<a></li>`;
      });
  }

  function isOpen() {
    return rootElement.classList.contains('dropdown--open');
  }

  function close() {
    rootElement.classList.remove('dropdown--open');
    rootElement.style.width = 'auto';
    inputElement.value = '';
  }

  function open() {
    rootElement.classList.add('dropdown--open');
    inputElement.focus();
    populateList();
    resizeContainer();
  }

  function toggle() {
    if (isOpen()) {
      close();
    } else {
      open();
    }
  }

  buttonElement.addEventListener('click', () => {
    toggle();
  });

  inputElement.addEventListener('keyup', (e) => {
    populateList(e.target.value.toLowerCase());
    resizeContainer();
  });

  listContent.addEventListener('click', (e) => {
    e.preventDefault();
    const { target } = e;
    const value = target.dataset.value;

    if (!value) {
      return;
    }

    onSelect(value);
  });

  // rootElement.closest('body').addEventListener('click', (e) => {
  //   const { target } = e;
  //   if (rootElement.contains(target)) {
  //     return;
  //   }

  //   close();
  // });

  populateList();

  return {
    updateList(newList) {
      workList = newList;
      populateList()
    },

    toggle() {
      toggle();
    }
  }
}



