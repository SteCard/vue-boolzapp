"use strict";

// RICHIAMO FUNZIONE CREATE_APP DA VUE.JS
const {createApp} = Vue;

// FUNZIONE CREATE_APP
createApp({
    // FUNZIONE DATA CON OGGETTO RETURN
    data(){
        return{
            // DEFINIZIONE VARIABILI VUE.JS
            activeChat : 0,

            userMessage : '',

            // CONTACTS ARRAY
            contacts: [
                {
                    // CONTACT INFO
                    name    : 'Michele',
                    avatar  : './img/avatar_1.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Fabio',
                    avatar  : './img/avatar_2.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Samuele',
                    avatar  : './img/avatar_3.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Alessandro B.',
                    avatar  : './img/avatar_4.jpg',

                    // CONTACT MESSAGES ARRAY          
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Alessandro L.',
                    avatar  : './img/avatar_5.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Claudia',
                    avatar  : './img/avatar_6.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Federico',
                    avatar  : './img/avatar_7.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Davide',
                    avatar  : './img/avatar_8.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                    visible : true,
                },
            ]            
        }
    },
    // FUNZIONE METHODS
    methods:{
        
        // QUANDO L'UTENTE CLICCA SUL CONTATTO, RENDO ATTIVA LA CHAT DI QUEL CONTATTO
        changeChat(index){
            this.activeChat = index;
        },

        // QUANDO L'UTENTE CLICCA INVIO DOPO AVER INSERITO IL MESSAGGIO NELL'INPUT, VIENE PUSHATO IL NUOVO MESSAGGIO NELL'ARRAY MESSAGES DEL CONTATTO ATTIVO
        newMessage(){
            // CONTROLLO CHE L'UTENTE NON HA LASCIATO IL CAMPO INPUT VUOTO
            if(this.userMessage !== ''){

                // CREO UN NUOVO OGGETTO DA PUSHARE NELL'ARRAY MESSAGES DEL CONTATTO ATTIVO
                let object = {
                    date: 'oggi',
                    message: this.userMessage,
                    status: 'sent'
                };

                // PUSHO IL NUOVO OGGETTO NELL'ARRAY MESSAGES DEL CONTATTO ATTIVO
                this.contacts[this.activeChat].messages.push(object);

                // RIPRISTINO IL CAMPO INPUT E LA VARIABILE USER_MESSAGE
                this.userMessage = '';

                // RICHIAMO LA FUNZIONE AUTO_MESSAGE
                this.autoMessage();
            }
        },
        
        // QUANDO L'UTENTE CLICCA INVIO DOPO AVER INSERITO IL MESSAGGIO NELL'INPUT, RICHIAMO LA FUNZIONE AUTO_MESSAGE
        autoMessage(){
            // AVVIO UNA TIMING FUNCTION SET_TIME_OUT CHE DOPO 1 SECONDO MI INVIA UN MESSAGGIO AUTOMATICO
            setTimeout(() => {
    
                // CREO UN NUOVO OGGETTO DA PUSHARE NELL'ARRAY MESSAGES DEL CONTATTO ATTIVO
                let object = {
                    date: 'oggi',
                    message: 'ok',
                    status: 'received'
                };
    
                // PUSHO IL NUOVO OGGETTO NELL'ARRAY MESSAGES DEL CONTATTO ATTIVO
                this.contacts[this.activeChat].messages.push(object);
            }, 1000);
        }
    }
}).mount('#app'); // COLLEGO L'APP VUE.JS AL DOM HTML