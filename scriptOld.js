// console.log(window.location.hash); /// chiamare in console.log #/1, al posto di http://127.0.0.1:5500/#/1 (metodo) le costanti vanno chimate prima dei metodi 

window.addEventListener('hashchange', ()=>changePage(window.location.hash)) // aggiugo evento con addEventListener e poi aggiungi una landa,   cambia il punto 1 con 2 3 ecc del http://127.0.0.1:5500/#/3 <=

function changePage(hash) {  /// navigazione multi pagina avendo solo una pagina    
    // const container = document.getElementById('page-container');
    switch (hash) {
        case '#/about':
            // container.innerHTML = '<h1>about<\h1>' 
            displayPage('about');
            break;
            case '#/gallery':
                // container.innerHTML = '<h1>gallery<\h1>'
                displayPage('gallery');
             break;
             case '#/contacts':
                // container.innerHTML = '<h1>contacts<\h1>'
                displayPage('contacts');
            break;
        default:
            // container.innerHTML = '<h1>home<\h1>'
            // container.innerHTML = Home.render() /// home.js static
            displayPage('home');
            break;
    }
}

function displayPage(pageId) {
    const container = document.getElementById('page-container');
    
    const arrayOfChildren = [...container.children]; // creo un arrai di 4 elementi  [div#home, div#about, div#gallery, div#contacts]
    

    for (const child of arrayOfChildren) { // disattiva tutte le pagine 
        child.style.display = 'none';
    }

    const selectedPage = document.getElementById(pageId); // riattivo tutte le pagine con id messi su html

    selectedPage.style.display = 'block'; 
}
