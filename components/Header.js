// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    const header = document.createElement('div');
        header.classList.add('header');

    const date = document.createElement('div');
        date.classList.add('date');
        date.textContent = 'March 28, 2020';

    const h1 = document.createElement('h1');
        h1.textContent = 'Lambda Times';

    const temp = document.createElement('span');
        temp.classList.add('temp');
        temp.textContent = '98\xB0';


    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);
    
    const headerContainer = document.querySelector('.header-container');
    headerContainer.appendChild(header);

    return headerContainer;
}

Header();
