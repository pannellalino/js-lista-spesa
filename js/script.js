/*
Abbiamo un array di alimenti.
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.

Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).

Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while
*/

const alimenti = [
  'pasta',
  'pane',
  'tonno',
  'pancetta',
  'pomodori'];

  
  let c = 0;
  let text ='';
  
  while(alimenti[c]){
    text += alimenti[c];
    c++;
    console.log(alimenti[c]);
  }
  
  const output = document.getElementById("output");
  
  output.innerHTML = alimenti;