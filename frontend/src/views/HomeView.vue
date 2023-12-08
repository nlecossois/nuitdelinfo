<script setup lang="ts">

function scrollToSection() {
  // Récupérer l'élément de la section cible par son ID
  var sectionToScrollTo = document.getElementById('sectionToScrollTo');

  // Faire défiler la page jusqu'à la section cible
  if (sectionToScrollTo) {
    window.scrollTo({
      top: sectionToScrollTo.offsetTop,
      behavior: 'smooth' // Pour un défilement fluide, si pris en charge par le navigateur
    });
  }
}

</script>

<template>
  <div class="body">
    <div class = "main-part">
      <div class = "main-part-text">
        <h1 class = "main-part-text-h1">
          L'écologie au cœur de notre vie
        </h1>
        <h2 class = "main-part-text-h2">
          L'écologie, c'est quoi ? Et comment agir.
        </h2>
        <Button class = "main-part-text-button" @click="() =>scrollToSection()">
          Apprendre en s'amusant
        </button>
      </div>
      <img src="../assets/img/home-ecologie.jpg" alt="home-ecologie" class="main-part-img">
    </div>
    <div class="second-part">
      <h2 class="second-part-h2">L'écologie c'est quoi ? et comment agir.</h2>
      <p class ="second-part-p">L'écologie étudie les interactions entre les êtres vivants et leur environnement. Pour agir en faveur de l'écologie, adoptez des pratiques éco-responsables, favorisez la conservation de l'énergie, gérez les déchets de manière durable, et soutenez des initiatives locales et globales pour préserver la biodiversité.</p>

    </div>
    <div class="tird-part" id="sectionToScrollTo">
      <a href="http://127.0.0.1:5173/quiz">
        <Card class="tird-part-card" oncl>
          <template #header>
            <img class="card1-img"  alt="factguess" src="../assets/img/quizz.png" style="width: 100%;height: 100%;border-radius: 10%;"/>
            <p class="card-titre-1">Quiz</p>
          </template>
        </Card></a>
      <a href="http://127.0.0.1:5173/map">
        <Card class="tird-part-card2">
          <template #header>
            <img class="card2-img" alt="earth" src="../assets/img/earth.png" style="width: 100%;height: 100%;border-radius: 10%;"/>
            <p class="card-titre-2">Carte</p>
          </template>
        </Card></a>
      <a href="http://127.0.0.1:5173/guess">
        <Card class="tird-part-card">
          <template #header>
            <img class="card3-img filter-class"  alt="factguess" src="../assets/img/guess.jpg" style="width: 100%;height: 100%;border-radius: 10%;"/>
            <p class="card-titre-3">Guess</p>
          </template>
        </Card></a>
    </div>
    <div class="four-part">
      <h2 class="four-part-h2">Voici l'impact écologique sur l'augmentation de la température</h2>
      <img class="four-part-img-france" src="../assets/img/france.png" alt="carte-france">
      <img class="four-part-img-temp" src="../assets/img/temp.png" alt="carte-france">
    </div>
    <div class="five-part" style="padding-left: 3%;background-color: rgb(67, 67, 67);">
      <div style="display: flex;">
        <div class="five-part-value1">
          <img class="five-part-img1" src="../assets/img/biodiversite.png" alt="bio diversité">
          <p class="five-part-p1">Variété des formes de vie sur Terre, essentielle pour l'équilibre des écosystèmes.</p>
        </div>
        <div class="five-part-value1">
          <img class="five-part-img1" src="../assets/img/green.png" alt="Empreinte écologique">
          <p class="five-part-p1">Mesure de l'impact humain sur l'environnement, incluant la consommation de ressources et la production de déchets.</p>
        </div>
      </div>
      <div style="display: flex;">
        <div class="five-part-value1">
          <img class="five-part-img1" src="../assets/img/clim.png" alt="Changement climatique">
          <p class="five-part-p1">Altérations à long terme des conditions météorologiques moyennes, principalement causées par les activités humaines.</p>
        </div>
        <div class="five-part-value1">
          <img class="five-part-img1" src="../assets/img/devdurable.png" alt="Développement durable">
          <p class="five-part-p1">Répondre aux besoins actuels sans compromettre la capacité des générations futures, intégrant économie, société et environnement.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.main-part{
  display: flex;
  background-color: rgb(67, 67, 67);
  width: 100%;
}

.main-part-text{
  color: whitesmoke;
  text-align: center;
  width: 50%;

}
.main-part-text-h1{
  font-size: 10vh;
  font-weight: bold;
}

.main-part-text-h2{
  margin-top: 1%;
  font-size: 1.6vw;
}

.main-part-text-button{
  margin-top: 10%;
  padding: 30px;
  font-size: 1vw;
}

.main-part-img{
  right: 0%;
  width: 50%;
}

.second-part{
  background-color: rgb(49, 49, 49);
  text-align: -webkit-center;
  padding-top: 3%;
  padding-bottom: 3%;
}

.second-part-p{
  font-size: 3vh;
  width: 50%;
  margin-top: 1%;
}

.second-part-h2{
  font-weight: bold;
  font-size: 5vh;
  color: whitesmoke;
}

.tird-part{
  background-color: rgb(67, 67, 67);
  display: flex;
  justify-content: center;
  padding-top: 10%;
  padding-bottom: 10%;
  gap: 10rem;
}

.tird-part-card1{
  width: 20vw;
  height: 60vh;
  background-color: antiquewhite;
  border-radius: 10%;
}
.tird-part-card1-img{
  width: 100%;
  height: 100%;
  border-radius: 10%;
}

.p-card-header{
  height: 100%;
}

.tird-part-card{
  width: 25em;
  height: 35em;
  border-radius: 10%;
}

.card1-img:hover{
  filter: blur(5px) brightness(0.5);
}

.card2-img:hover{
  filter: blur(5px) brightness(0.5);
}


.card3-img:hover{
  filter: blur(5px) brightness(0.5);
}


.card-titre-1{

  color: whitesmoke;
  font-size: 2vw;
  text-align: center;

}

.card-titre-2{
  font-size: 2vw;
  color: whitesmoke;
  text-align: center;

}

.card-titre-3{

  color: whitesmoke;
  font-size: 2vw;
  text-align: center;

}

.tird-part-card2{
  width: 25em;
  height: 35em;
  border-radius: 10%;

}
.four-part{
  background-color: rgb(49, 49, 49);
  padding-top: 3%;
  padding-bottom: 3%;
}

.four-part-h2{
  color: whitesmoke;
  font-size: 3vw;
  font-weight: bold;
  text-align: center;
}

.four-part-img-france{
  width: 80%;
  margin-left: 12%;
}

.four-part-img-temp{
  width: 30%;
  margin-left: 35%;
}

.five-part-img1{
  width: 40%;
  height: 50%;
}

.five-part-p1{
  font-size: 1.2vw;
  width: 50%;
  margin-top: 5%;
  margin-left: 3%;
}

.five-part-value1{
  display: flex;
}
</style>