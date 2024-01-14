     // Link para faixa de áudio
     const audioUrl = "../audio/flick-2.mp3";
      
     // Sinalizador para rastrear a reprodução da trilha de áudio
     let isAudioPlayed = false;
     
     // Obtenha todos os elementos com a classe ".button"
     const buttons = document.querySelectorAll(".button");
     
     // Adicione um manipulador de eventos "mouseover" a cada elemento
     buttons.forEach(button => {
       button.addEventListener("mouseover", function() {
         // Baixar faixa de áudio
         const audio = new Audio(audioUrl);
     
         // Reproduzir faixa de áudio
         audio.play();
     
         // Defina um sinalizador de que a trilha de áudio foi reproduzida
         isAudioPlayed = true;
       });
     });
     var audio = new Audio("../audio/ambient-wave.mp3");
      
      // manipulador de eventos 'terminado' para repetição
      audio.addEventListener('ended', function() {
          // Retroceda o áudio até o início antes de reproduzi-lo novamente
          audio.currentTime = 0;
          // Reinicie a reprodução
          audio.play();
      });
      
      document.addEventListener("click", function() {
          // Iniciar a reprodução quando clicado
          audio.play();
      });