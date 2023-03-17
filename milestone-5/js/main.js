'use strict';

// INIZIALIZZIAMO VUE 
const { createApp } = Vue
const DateTime = luxon.DateTime;
// STRUTTURA DI VUE 
createApp({
  data() {
    return {
      dateNow: DateTime.now().toISO(),
      activeContact: 0,
      newMessage: '',
      searchKey: '',
      openChatClass: false,
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '2023-03-17T15:21:08.644+01:00',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '2023-03-17T15:22:08.644+01:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '2023-03-17T15:24:08.644+01:00',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: 'img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '2023-03-17T15:26:08.644+01:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '2023-03-17T15:27:08.644+01:00',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '2023-03-17T15:42:08.644+01:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: 'img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '2023-03-17T15:21:08.644+01:00',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '2023-03-17T15:22:08.644+01:00',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '2023-03-17T15:24:08.644+01:00',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: 'img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '2023-03-17T15:21:08.644+01:00',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '2023-03-17T15:25:08.644+01:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: 'img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '2023-03-17T12:26:08.644+01:00',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '2023-03-17T15:26:08.644+01:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: 'img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '2023-03-17T11:23:08.644+01:00',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '2023-03-17T12:24:08.644+01:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '2023-03-17T15:09:08.644+01:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: 'img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '2023-03-17T9:12:08.644+01:00',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '2023-03-17T10:02:08.644+01:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: 'img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '2023-03-17T21:54:08.644+01:00',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '2023-03-17T22:21:08.644+01:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '2023-03-17T23:01:08.644+01:00',
              message: 'OK!!',
              status: 'received'
            }
          ]
        }
      ]

    }
  },
  methods: {
    // TRASFORMA LE DATE ISO IN DATE ES.12:45
    dataIsoToTime(dataISO) {
      return (DateTime.fromISO(dataISO).toFormat('T'));
    },
    // VERIFICA QUAL'E' L'UTENTE ATTIVO E RESTITUISCE LE CLASSI
    activeVerify(index) {
      if (index === this.activeContact) {
        return ('active');
      }
    },
    // SELEZIONA UN UTENTE DAL MENU DI SINSITRA 
    selectUser(index) { this.activeContact = index },
    // INVIA IL MESSAGGIO 
    sendMessage() {
      let newMessage = {
        date: this.dataIsoToTime(this.dateNow) ,
        message: this.newMessage,
        status: 'sent'
      }
      this.contacts[this.activeContact].messages.push(newMessage);
      this.newMessage = ''
    },
    // RISPOSTA AUTOMATICA DA PARTE DEL PC 
    autoMessage() {
      let newMessage = {
        date: this.dateNow,
        message: 'ho ricevuto il messaggio',
        status: 'received'
      }
      setTimeout(() => {
        this.contacts[this.activeContact].messages.push(newMessage);
      }, 3000)
    },
    // FILTRA LA LISTA DI CONTATTI 
    filteredList() {
      if (this.searchKey !== '') {
        return this.contacts.filter(element => (element.name).toLowerCase().includes(this.searchKey.toLowerCase()));
      } else {
        return this.contacts;
      }
    },
    // APRI I MENU DELLE CHAT 
    toggleChatMenu() {
      this.openChatClass = !this.openChatClass;
    },
    // ELIMINA UN MESSAGGIO 
    deleteMessage(index) {
      this.contacts[this.activeContact].messages.splice(index, 1);
      console.log(data)
    },



  }
}).mount('#app');
