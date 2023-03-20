'use strict';

// INIZIALIZZIAMO VUE 

const { createApp } = Vue
const DateTime = luxon.DateTime;



// STRUTTURA DI VUE 
createApp({
  data() {
    return {
      notification: false,
      chatCondition: false,
      activeContact: -1,
      newMessage: '',
      searchKey: '',
      openChatClass: false,
      openMenuClass: false,
      randomMessages: [
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
          lastEnter: '10/01/2020 15:30:55',
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:31:55',
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
          lastEnter: '10/01/2020 15:30:55',
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
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
          lastEnter: '10/01/2020 15:30:55',
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
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
          lastEnter: '10/01/2020 15:30:55',
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
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
          lastEnter: '10/01/2020 15:30:55',
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
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
          lastEnter: '10/01/2020 15:30:55',
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
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
          lastEnter: '10/01/2020 15:30:55',
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
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
          lastEnter: '10/01/2020 15:30:55',
          messages: [

          ]
        }
      ]

    }
  },
  methods: {

    // DATE STRING IN ISO 
    dateStringToIso(data) {
      const dataElaboration = new Date(data)
      let giorno = dataElaboration.getDate();
      let mese = dataElaboration.getMonth();
      dataElaboration.setDate(mese + 1);
      dataElaboration.setMonth(giorno - 1);
      return (dataElaboration.toISOString())

    },
    // TRASFORMA LE DATE ISO IN DATE ES.12:45
    dataIsoToTime(dataISO) {
      return (DateTime.fromISO(this.dateStringToIso(dataISO)).toFormat('T'));
    },
    // VERIFICA QUAL'E' L'UTENTE ATTIVO E RESTITUISCE LE CLASSI
    activeVerify(index) {
      if (index === this.activeContact && this.searchKey === '') {
        return ('active');
      }
    },
    // SELEZIONA UN UTENTE DAL MENU DI SINSITRA 
    selectUser(index) {
      if (this.searchKey === '') {
        this.activeContact = index
      } else {
        this.activeContact = (this.contacts.indexOf(this.filteredList()[index]))
        this.searchKey = '';
      }

      this.chatCondition = true
      this.scrollBottom()
    },
    // INVIA IL MESSAGGIO 
    sendMessage() {
      if (this.newMessage.replace(/\s+/g, '') !== '') {
        let newMessage = {
          date: DateTime.now().toFormat('ff'),
          message: this.newMessage,
          status: 'sent'
        }
        console.log(DateTime.now().toFormat('ff'))
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
    randomNumber(max) {
      return Math.floor(Math.random() * (max - 0 + 1));
    },
    // RISPOSTA AUTOMATICA DA PARTE DEL PC 
    autoMessage() {

      const user = this.activeContact

      // SIMULIAMO L'ACCESSO DEL BOT 
      setTimeout(() => {
        this.contacts[user].onlineStatus = true;
      }, 2500)
      // SIMULIAMO LA SCRITTURA DEL BOT 
      setTimeout(() => {
        this.scrollBottom();
        this.contacts[user].writing = true;
      }, 4500)
      // SIMULIAMO L'INVIO DEL MESSAGGIO DA PARTE DEL BOT
      let newMessage = {
        date: DateTime.now().toISO(),
        message: this.randomMessages[this.randomNumber(this.randomMessages.length - 1)],
        status: 'received'
      }

      setTimeout(() => {
        this.scrollBottom();
        this.contacts[user].writing = false;
        this.contacts[user].messages.push(newMessage);
        // SPOSTIAMO LA CHAT IN PRIMA POSIZIONE
        const elementToMove = this.contacts.splice(user, 1)[0]
        this.contacts.unshift(elementToMove);
        if (this.activeContact === user) {
          this.scrollTop()
        }
      }, 6000)
      // L'UTENTE TORNA OFFLINE E SETTA L'ULTIMO ACCESSO
      setTimeout(() => {
        this.contacts[user].onlineStatus = false;
        this.contacts[user].lastEnter = DateTime.now().toFormat('ff');

        
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
        let dateLastMsg = DateTime.fromISO(this.dateStringToIso(this.contacts[index].messages[indexCalc].date)).toFormat('D');

        if (dateNow === dateLastMsg) {
          return (this.dataIsoToTime(contact.messages[contact.messages.length - 1].date));
        } else {
          return (dateLastMsg)
        }
      }
    },
    // DETERMINA LA DATA DELL'ULTIMO ACCESSO DI UN UTENTE
    lastesAcces() {
      let dateNow = DateTime.now().toFormat('D');
      let dateLastEnter = DateTime.fromISO(this.dateStringToIso(this.contacts[this.activeContact].lastEnter)).toFormat('D');
      
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
      DateTime.fromISO(this.dateStringToIso(this.contacts[this.activeContact].messages[index2].date)).toFormat('D')

      const data1 = DateTime.fromISO(this.dateStringToIso(message.date)).toFormat('D');
      const data2 = DateTime.fromISO(this.dateStringToIso(this.contacts[this.activeContact].messages[index2].date)).toFormat('D')

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
        return (DateTime.fromISO(this.dateStringToIso(message.date)).toFormat('d') + '/' + DateTime.fromISO(this.dateStringToIso(message.date)).toFormat('LL'))
      }
    },
    // Verifica se il browser supporta le notifiche
    activeNotification() {
      this.notification = true
    }
  },
  mounted() {
  }
}).mount('#app');
