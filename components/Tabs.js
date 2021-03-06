// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const axiosPromise = axios.get('https://lambda-times-api.herokuapp.com/topics')
                        .then((res) => {

                            res.data.topics.forEach(topic => {
                                const newTab = createTabs(topic)
                                document.querySelector('.topics').appendChild(newTab)
                            })
                        })

function createTabs(topic) {
    const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = topic

    const topics = document.querySelector('.topics');
    topics.appendChild.tab;

    return tab;
}