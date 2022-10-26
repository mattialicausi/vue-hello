'use strict';

//creo costante prensa da Vue
const {createApp} = Vue;


//uso funzione di Vue per creare oggetto
const titleHTML = createApp({
    data(){
        return {
            title: 'Vue Hello'
        }
    }
});
titleHTML.mount('#app');

