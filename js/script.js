// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

var app = new Vue({
  el: "#root",
  data: {
    message: "Hello Vue!!",
    // Bonus: Aggiungere un’immagine presa anch’essa da un data
    image: "https://italiancoders.it/wp-content/uploads/2018/01/vue.png",
    //Bonus : alternative text
    altText: "Vue background",
    //Bonus: classi
    mieClassi: "hide",
  },
  // Altro possibile Bonus:
  // gestire una funzione, al click faccio apparire o sparire il contenuto della pagina
  methods: {
    genFunction: function () {
      if (this.mieClassi === "hide") {
        this.mieClassi = "show";
      } else {
        this.mieClassi = "hide";
      }
    },
  },
});
