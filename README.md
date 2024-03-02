**Griglia Campo Minato**
===
### **Consaegna 1**
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

### **Consegna 2**
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
### **Bonus 1**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

### **BONUS 2 **
- accendere tutte le bombe
- congelare la griglia


## Svolgimento 1:
1. Creiamo un ciclo FOR per la generezione dei nostri quadrati.
2. Creiamo un function per aggiungere il div e la classe per i quadrati
3. al click del quadrato compare un numero grazie al contatore
4. con toggle facciamo comparire e scomparire il numero al click
5. facciamo in modo con un IF che il numero non rimanga 
6. con unaltra funzione aggiungiamo al click del quadrato il colore 

## Svolgimento 2:
1. Creiamo la variabile per il numero di bombe
2. creiamo un array vuoto al cui interno dovranno essere inserite i numeri che diventeranno bombe
3. creiamo un randomizer per estrarre le 16 bombe
  - il randomizer avrà bisogno di una validazione, perchè potrebbe essere gia stato estratto
4. inseriamo il numeri nell'array 
5. stampiamo le bombe nelle celle in base alla difficoltà
6. al click della cella:
  - verificare se non è una bomba
  - se è una bomba fermiamo il gioco e mostriamo il punteggio
  - se non è una bomba contiamo il punteggio 
  - se il il punmteggio è uguale alle celle - le bombe abbiamo vinto

## bonus 1;
1. aggiungo il bottone e il select ad una variabile
2. al click del bottone leggiamo il value del select
3. con unaltro if decidiamo quale ciclo usare
4. con un if decidiamo la grandezza dei quadrati