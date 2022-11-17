function createGame(player1, name1, hour, gols, player2, name2) {
   return `
   <li>
      <div class="sele1">
         <img src="./Bandeiras dos países/${player1}.svg" alt="Bandeira do ${player1}"/>
         <div class="nome1">${name1}</div>
      </div>
      <div class="placar">
         <strong>${hour}</strong>
         <p>${gols}</p>
      </div>
      <div class="sele2">
         <img src="./Bandeiras dos países/${player2}.svg" alt="Bandeira de ${player2}"/>
         <div class="nome2">${name2}</div>
      </div>
   </li>
   `
}

let delay = - 0.4;
function createCard(date, day, games) {
   delay = delay + 0.4;
   return `
   <div class="card" style="animation-delay: ${delay}s">
		<h2>${date}<span>${day}</span></h2>
      <ul>
         ${games}
      </ul>
	</div>
   `
}

document.querySelector("#cards").innerHTML = 
   
   createCard("20/11", "domingo", createGame("qatar-bg", "Catar", "13:00", " 0 X 0", "ecuador-bg", "Equador")) +
   
   createCard("21/11", "segunda", 
   createGame("england-bg", "Inglaterra", "10:00", "0 X 0", "iran-bg", "Irã") +  
   createGame("senegal-bg", "Senegal", "13:00", "0 X 0", "netherlands-bg", "Holanda") +
   createGame("united states-bg", "Estados Unidos", "16:00", "0 X 0", "wales-bg", "Gales")) +

   createCard("22/11", "terça", 
   createGame("argentina-bg", "Argentina", "07:00", "0 X 0", "saudi arabia-bg", "Arábia Saudita") +
   createGame("denmark-bg", "Dinamarca", "10:00", "0 X 0", "tunisia-bg", "Tunísia") +
   createGame("mexico-bg", "México", "13:00", "0 X 0", "poland-bg", "Polônia") +
   createGame("france-bg", "França", "16:00", "0 X 0", "australia-bg", "Austrália")) +

   createCard("23/11", "quarta", 
   createGame("morocco-bg", "Marrocos", "07:00", "0 X 0", "croatia-bg", "Croácia") +
   createGame("germany-bg", "Alemanha", "10:00", "0 X 0", "japan-bg", "Japão") +
   createGame("spain-bg", "Espanha", "13:00", "0 X 0", "costa rica-bg", "Costa Rica") +
   createGame("belgium-bg", "Bélgica", "16:00", "0 X 0", "canada-bg", "Canadá")) +

   createCard("24/11", "quinta", 
   createGame("switzerland-bg", "Suíça", "07:00", "0 X 0", "cameroon-bg", "Camarões") +
   createGame("uruguay-bg", "Uruguai", "10:00", "0 X 0", "south korea-bg", "Coréia do Sul") +
   createGame("portugal-bg", "Portugal", "13:00", "0 X 0", "ghana-bg", "Gana") +
   createGame("brazil-bg", "Brasil", "16:00", "0 X 0", "serbia-bg", "Sérvia")) +

   createCard("25/11", "sexta", 
   createGame("wales-bg", "Gales", "07:00", "0 X 0", "iran-bg", "Irã") +
   createGame("qatar-bg", "Catar", "10:00", "0 X 0", "senegal-bg", "Senegal") +
   createGame("netherlands-bg", "Holanda", "13:00", "0 X 0", "ecuador-bg", "Equador") +
   createGame("england-bg", "Inglaterra", "16:00", "0 X 0", "united states-bg", "Estados Unidos")) +

   createCard("26/11", "sábado", 
   createGame("tunisia-bg", "Tunísia", "07:00", "0 X 0", "australia-bg", "Austrália") +
   createGame("poland-bg", "Polônia", "10:00", "0 X 0", "saudi arabia-bg", "Arábia Saudita") +
   createGame("france-bg", "França", "13:00", "0 X 0", "denmark-bg", "Dinamarca") +
   createGame("argentina-bg", "Argentina", "16:00", "0 X 0", "mexico-bg", "México")) +

   createCard("27/11", "domingo", 
   createGame("japan-bg", "Japão", "07:00", "0 X 0", "costa rica-bg", "Costa Rica") +
   createGame("belgium-bg", "Bélgica", "10:00", "0 X 0", "morocco-bg", "Marrocos") +
   createGame("croatia-bg", "Croácia", "13:00", "0 X 0", "canada-bg", "Canadá") +
   createGame("spain-bg", "Espanha", "16:00", "0 X 0", "germany-bg", "Alemanha")) +

   createCard("28/11", "segunda", 
   createGame("cameroon-bg", "Camarões", "07:00", "0 X 0", "serbia-bg", "Sérvia") +
   createGame("south korea-bg", "Coréia do Sul", "10:00", "0 X 0", "ghana-bg", "Gana") +
   createGame("brazil-bg", "Brasil", "13:00", "0 X 0", "switzerland-bg", "Suíça") +
   createGame("portugal-bg", "Portugal", "16:00", "0 X 0", "uruguay-bg", "Uruguai")) +

   createCard("29/11", "terça", 
   createGame("poland-bg", "Polônia", "12:00", "0 X 0", "qatar-bg", "Catar") +
   createGame("ecuador-bg", "Equador", "12:00", "0 X 0", "senegal-bg", "Senegal") +
   createGame("wales-bg", "Gales", "16:00", "0 X 0", "england-bg", "Inglaterra") +
   createGame("iran-bg", "Irã", "16:00", "0 X 0", "united states-bg", "Estados Unidos")) +

   createCard("30/11", "quarta", 
   createGame("tunisia-bg", "Tunísia", "12:00", "0 X 0", "france-bg", "França") +
   createGame("australia-bg", "Austrália", "12:00", "0 X 0", "denmark-bg", "Dinamarca") +
   createGame("poland-bg", "Polônia", "16:00", "0 X 0", "argentina-bg", "Argentina") +
   createGame("saudi arabia-bg", "Arábia Saudita", "16:00", "0 X 0", "mexico-bg", "México")) +

   createCard("01/12", "quinta", 
   createGame("croatia-bg", "Croácia", "12:00", "0 X 0", "belgium-bg", "Bélgica") +
   createGame("canada-bg", "Canadá", "12:00", "0 X 0", "morocco-bg", "Marrocos") +
   createGame("japan-bg", "Japão", "16:00", "0 X 0", "spain-bg", "Espanha") +
   createGame("costa rica-bg", "Costa Rica", "16:00", "0 X 0", "germany-bg", "Alemanha")) +

   createCard("02/12", "sexta", 
   createGame("ghana-bg", "Gana", "12:00", "0 X 0", "uruguay-bg", "Uruguai") +
   createGame("south korea-bg", "Coréia do Sul", "12:00", "0 X 0", "portugal-bg", "Portugal") +
   createGame("serbia-bg", "Sérvia", "16:00", "0 X 0", "switzerland-bg", "Suíça") +
   createGame("cameroon-bg", "Camarrões", "16:00", "0 X 0", "brazil-bg", "Brasil"))