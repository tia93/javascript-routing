let pages = []


const worker = new Worker('./myWorker.js'); /// angular?

worker.addEventListener('message', logMessageFromWorker) // il worker che e qua deve ricevere i messagi

function logMessageFromWorker (message) {
    console.log('ciao pippo');
    
}

function loadPages() {
    fetch("./pages.json")
        .then(Response => Response.json())
        .then(result => displayPage(result));
}

function displayPage(loadedPages) { /// roba json
    pages = loadedPages;

    const navMenu = document.getElementById('nav-menu');

    for (const page of pages) {

        const a = document.createElement('a');
        const node = document.createTextNode(page.name);
        a.appendChild(node);
        a.href = '/#/' + page.id;
        navMenu.appendChild(a);

    }

    changePage(window.location.hash) // diventa quello qua sotto 
    //  const firstPage = pages[0]

    // const container = document.getElementById('page-container');

    // container.innerHTML =  firstPage.html;
}

window.addEventListener('hashchange', () => changePage(window.location.hash));

function changePage(hash) {

    let id = hash.replace('#/', '');  ///toglie il #

    if (id === '') {
        id = 'home'
    }

    let selectedPage;

    for (const page of pages) {
        if (page.id === id) {
            selectedPage = page;
            break;
        }
    }


    const container = document.getElementById('page-container');

    container.innerHTML = selectedPage.html;

}


function activeWorker() { // corregere
    worker.postMessage('ciao ')

}

loadPages();