'use strict';

//creo costante prensa da Vue
const {createApp} = Vue;


//uso funzione di Vue per creare oggetto
const titleHTML = createApp({
    data(){
        return {
            title: 'Vue Hello',
            myClass: 'verde',
            myImg: ''
        }
    },
    //utilizzo metodo per assegnare una funzione
    methods: {
        cambiaColore(){
            this.myClass ='verde';
            this.myImg = './img/ita.png';
        }
    }
});
titleHTML.mount('#app');

