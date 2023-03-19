'use strict';

// INIZIALIZZIAMO VUE 
// Vue.use(EmojiPicker)
const { createApp } = Vue
const DateTime = luxon.DateTime;

// STRUTTURA DI VUE 
createApp({
  data() {
    return {
      // dateNow: DateTime.now().toISO(), <- NON E' DINAMICA QEUSTA COSA
      chatCondition: false,
      activeContact: -1,
      newMessage: '',
      searchKey: '',
      openChatClass: false,
      openMenuClass: false,
      randomMessages:[
        'Heilà ciaoo!',
        'Io sto bene tu?',
        'Ti ho detto di non scrivermi più!',
        'Volareeeee'
      ],
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/avatar_1.jpg',
          visible: true,
          onlineStatus: false,
          writing: false,
          lastEnter: '2023-03-17T15:24:08.644+01:00',
          messages: [
            {
              date: '2023-03-17T15:21:08.644+01:00',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '2023-02-17T15:22:08.644+01:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '2023-03-17T15:24:08.644+01:00',
              message: 'Tutto fatto!',
              status: 'received'
            },
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
            },
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
            },
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
            },
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
          onlineStatus: false,
          writing: false,
          lastEnter: '2023-03-17T15:24:08.644+01:00',
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
          onlineStatus: false,
          writing: false,
          lastEnter: '2023-03-17T15:24:08.644+01:00',
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
          onlineStatus: false,
          writing: false,
          lastEnter: '2023-03-17T15:24:08.644+01:00',
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
          onlineStatus: false,
          writing: false,
          lastEnter: '2023-03-17T15:24:08.644+01:00',
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
          onlineStatus: false,
          writing: false,
          lastEnter: '2023-03-17T15:24:08.644+01:00',
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
              date: '2021-03-11T15:09:08.644+01:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: 'img/avatar_7.jpg',
          visible: true,
          onlineStatus: false,
          writing: false,
          lastEnter: '2023-03-17T15:24:08.644+01:00',
          messages: [
            {
              date: '2023-03-17T15:09:08.644+01:00',
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
          visible: false,
          onlineStatus: false,
          writing: false,
          lastEnter: '2023-03-17T15:24:08.644+01:00',
          messages: [

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
      32
      if (index === this.activeContact) {
        return ('active');
      }
    },
    // SELEZIONA UN UTENTE DAL MENU DI SINSITRA 
    selectUser(index) {
      this.activeContact = index
      this.chatCondition = true
      this.scrollBottom()
    },
    // INVIA IL MESSAGGIO 
    sendMessage() {
      if (this.newMessage.replace(/\s+/g, '') !== '') {
        let newMessage = {
          date: this.dataIsoToTime(DateTime.now().toISO()),
          message: this.newMessage,
          status: 'sent'
        }
        this.scrollBottom()
        this.contacts[this.activeContact].messages.push(newMessage);
        this.newMessage = '';
        // SPOSTIAMO LA CHAT IN PRIMA POSIZIONE
        const elementToMove = this.contacts.splice(this.activeContact, 1)[0]
        this.contacts.unshift(elementToMove);
        console.log(this.contacts)
        this.activeContact = 0
        this.scrollTop()

        this.autoMessage();
      }
    },
    // NUMERO CASUALE 
    randomNumber(max){
      return Math.floor(Math.random() * (max - 0 + 1));
    },
    // RISPOSTA AUTOMATICA DA PARTE DEL PC 
    autoMessage() {

      // SIMULIAMO L'ACCESSO DEL BOT 
      setTimeout(() => {
        this.contacts[this.activeContact].onlineStatus = true;
      }, 2500)
      // SIMULIAMO LA SCRITTURA DEL BOT 
      setTimeout(() => {
        this.scrollBottom();
        this.contacts[this.activeContact].writing = true;
      }, 4500)
      // SIMULIAMO L'INVIO DEL MESSAGGIO DA PARTE DEL BOT
      let newMessage = {
        date: DateTime.now().toISO(),
        message: this.randomMessages[this.randomNumber(this.randomMessages.length - 1)],
        status: 'received'
      }
      setTimeout(() => {
        this.scrollBottom();
        this.contacts[this.activeContact].writing = false;
        this.contacts[this.activeContact].messages.push(newMessage);
        // SPOSTIAMO LA CHAT IN PRIMA POSIZIONE
        const elementToMove = this.contacts.splice(this.activeContact, 1)[0]
        this.contacts.unshift(elementToMove);
        console.log(this.contacts)
        this.activeContact = 0
        this.scrollTop()
      }, 6000)
      // L'UTENTE TORNA OFFLINE E SETTA L'ULTIMO ACCESSO
      setTimeout(() => {
        this.contacts[this.activeContact].onlineStatus = false;
        this.contacts[this.activeContact].lastEnter = DateTime.now().toISO();
      }, 8000)
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
    // CHIUDI I MENU DELLE CHAT 
    closeChatMenu() {
      this.openChatClass = false;
    },
    // ELIMINA UN MESSAGGIO 
    deleteMessage(index) {
      this.contacts[this.activeContact].messages.splice(index, 1);
    },
    // DETERMINA IL TESTO DELL'ULTIMO MESSAGGIO INVIATO DA UN UTENTE 
    lastText(contact) {
      if (contact.messages.length > 0) {
        return (contact.messages[contact.messages.length - 1].message)
      } else {
        return ('Nessun Messaggio.');
      }
    },
    // DETERMINA LA DATA DELL'ULTIMO MESSAGGIO INVIATO DA UN UTENTE
    latesData(contact, index) {
      if (contact.messages.length > 0) {
        let indexCalc = this.contacts[index].messages.length - 1;
        let dateNow = DateTime.now().toFormat('D');
        let dateLastMsg = DateTime.fromISO(this.contacts[index].messages[indexCalc].date).toFormat('D');

        if (dateNow === dateLastMsg) {
          return (this.dataIsoToTime(contact.messages[contact.messages.length - 1].date));
        } else {
          return (dateLastMsg);
        }
      }
    },
    // DETERMINA LA DATA DELL'ULTIMO ACCESSO DI UN UTENTE
    lastesAcces() {
      let dateNow = DateTime.now().toFormat('D');
      let dateLastEnter = DateTime.fromISO(this.contacts[this.activeContact].lastEnter).toFormat('D');
      if (dateNow === dateLastEnter) {
        return (this.dataIsoToTime(this.contacts[this.activeContact].lastEnter))
      } else {
        return ((dateLastEnter) + ' alle ' + (this.dataIsoToTime(this.contacts[this.activeContact].lastEnter)))
      }
    },
    // FUNZIONE CHE SROLLA AUTOMATICAMENTE LA PAGINA IN GIU
    scrollBottom() {
      setTimeout(() => {
        let element = document.querySelector('.boxChat .main')
        element.scroll({ top: 100000000, behavior: 'smooth' });
      }, 1)
    },
    // FUNZIONE CHE SROLLA AUTOMATICAMENTE LA PAGINA IN SU
    scrollTop() {
      setTimeout(() => {
        let element = document.querySelector('#boxContacts .userList')
        element.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 1)
    },
    // TOGGLE MENU CONTATTO 
    toggleMenuHeader() {
      this.openMenuClass = !this.openMenuClass;
    },
    // CHIUDI MENU CONTATTO 
    closeMenuHeader() {
      this.openMenuClass = false;
    },
    // CANCELLA TUTTA LA CHAT DELL'UTENTE ATTIVO
    clearChat() {
      this.contacts[this.activeContact].messages.length = 0;
    },
    // CANCELLA IL CONTATTO ATTIVO
    deleteUser() {
      // SE RIMANE SOLO UN CONTATTO NELL'ELENCO 
      if (this.contacts.length <= 1) {
        this.contacts.length = 0;
        this.chatCondition = false;
        this.activeContact = -1;
      }
      // SE IL CONTATTO E' L'ULTIMO DELL'ELENCO
      else if (this.contacts.length === this.activeContact + 1) {
        this.activeContact--
        this.contacts.splice(this.contacts.length - 1, 1)
      }
      // IN UNA SITUAZIONE NORMALE
      else {
        this.contacts.splice(this.activeContact, 1)
      }
    },
    // VERIFICO SE INSERIRE LA DATA OPPURE NO 
    dateVerify(index, message) {
      let index2
      if (index === 0) {
        index2 = 0;
      } else {
        index2 = index - 1
      }
      DateTime.fromISO(this.contacts[this.activeContact].messages[index2].date).toFormat('D')

      const data1 = DateTime.fromISO(message.date).toFormat('D');
      const data2 = DateTime.fromISO(this.contacts[this.activeContact].messages[index2].date).toFormat('D')

      if (data1 !== data2 || index === 0) {
        return true
      }
    },

    // TESTO DA INSERIRE NEL BANNER DELLA DATA 
    textDateChange(message) {
      let dataAttuale = DateTime.now().toFormat('D');
      if (DateTime.fromISO(message.date).toFormat('D') === dataAttuale) {
        return ('Oggi')
      }
      else {
        return (DateTime.fromISO(message.date).toFormat('d') + '/' + DateTime.fromISO(message.date).toFormat('LL'))
      }
    }
  }
}).mount('#app');
