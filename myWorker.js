
self.addEventListener('message', messageReccived) // ascolta l'eventi messaggi, ti arriverrano dei messagi e se ti arriva fai il log

function messageReccived(massage) {
    console.log(massage.data);
    postMessage('ecco, sono un pronto');
}