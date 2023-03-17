
# Boolzapp - a (not very) innovative messaging platform

Applicazione di messaggistica.

------------------------------------------------------------

## Milestone 1

- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse

- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

## Milestone 2

- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione

- Click sul contatto mostra la conversazione del contatto cliccato


## Milestone 3

- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde

- Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

## Milestone 4

- Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


## Milestone 5

- Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

- Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 


## Linguaggi/framework/Librerie:

 - HTML
 - CSS
 - JAVA SCRIPT
 - [FONT AWESOME](https://fontawesome.com/)
 - [VUE JS](https://vuejs.org/)
 - [LUXON LIBRARY](https://moment.github.io/luxon/#/?id=luxon)
 - [GOOGLE FONT](https://fonts.google.com/knowledge)


## TO DO:
- sistemare la spaziatura tra un messaggio e l'altro
- far comparire il bottone invio e scomparire il registratore audio quando c'è scritto qualcosa nell'input di invio messaggi
- trovare il modo di far scorrere automaticamente in giù quando invii un messaggio
-nella lista degli utenti far apparire l'ultimo messaggio inviato / ricevuto
- Creare un array di risposte (così non risponde sempre la stessa cosa)




Bonus 1
sotto al nome del contatto nella parte in alto a destra, cambiare l’indicazione dello stato: visualizzare il testo “sta scrivendo...” nel timeout in cui il pc risponde, poi mantenere la scritta “online” per un paio di secondi e infine visualizzare “ultimo accesso alle xx:yy” con l’orario corretto
Bonus 2
dare la possibilità all’utente di cancellare tutti i messaggi di un contatto o di cancellare l’intera chat con tutti i suoi dati: cliccando sull’icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci “Elimina messaggi” ed “Elimina chat”; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l’intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra)