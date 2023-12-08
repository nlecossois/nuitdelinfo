<script setup lang="ts">
import { ref } from 'vue';

interface QuestionReponse {
  Question: string;
  Reponse: string;
  Real: string;
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const min = 1; // Valeur minimale
const max = 37; // Valeur maximale

let i = ref(getRandomNumber(min, max));

let rep = "???";
let real = "";
let colortext = "grey";

let tableauDObjets: QuestionReponse[] = [
  { Question: "Le pourcentage de la population mondiale dépendant des écosystèmes marins est de 35%.", Reponse: "P", Real: "40%"},
  { Question: "La variation annuelle moyenne des émissions mondiales de CO2 est de 5%.", Reponse: "M", Real: "3%"},
  { Question: "Il y a 12 millions de tonnes de plastique déversées annuellement dans les océans.", Reponse: "M", Real: "8 milliard"},
  { Question: "Le pourcentage des forêts mondiales détruites en deux décennies est de 5%.", Reponse: "P", Real: "10%"},
  { Question: "61 millions de tonnes de déchets électroniques générées dans le monde l'année dernière.", Reponse: "M", Real: "53.6 millions"},
  { Question: "La proportion actuelle des espèces animales en voie de disparition est de 14%.", Reponse: "P", Real: "26%"},
  { Question: "Le pourcentage des terres agricoles mondiales utilisées pour la culture de cultures transgéniques est de 20%.", Reponse: "M", Real: "12%"},
  { Question: "La superficie des zones mortes dans les océans est de 145 000 kilomètres.", Reponse: "P", Real: "245 000"},
  { Question: "Le pourcentage des fuites de méthane attribuables à l'industrie mondiale du gaz naturel est de 71%.", Reponse: "M", Real: "70%"},
  { Question: "130 pays ont atteint ou dépassé leurs objectifs en matière d’énergies renouvelables.", Reponse: "P", Real: "190"},
  { Question: "Le pourcentage de la population mondiale vivant dans des zones urbaines et contribuant significativement aux émissions de gaz à effet de serre est de 60%.", Reponse: "P", Real: "70%"},
  { Question: "250 litres d'eau douce est consommée par habitant dans les pays développés par rapport aux pays en développement.", Reponse: "P", Real: "300 litres"},
  { Question: "Le pourcentage de déchets plastiques dans les océans provenant de dix rivières majeures est de 33%.", Reponse: "P", Real: "90%"},
  { Question: "2 000 kilomètres de la forêt amazonienne est déforestée par an.", Reponse: "P", Real: "7 000"},
  { Question: "900 000 tonnes de nourriture est gaspillée dans le monde chaque année.", Reponse: "P", Real: "1,3 milliards de tonnes"},
  { Question: "20% des espèces marines sont surexploitées ou épuisées à cause de la surpêche.", Reponse: "P", Real: "33%"},
  { Question: "Le taux d’acidification des océans au cours des dernières décennies est de 60%.", Reponse: "M", Real: "30%"},
  { Question: "Le pourcentage des terres arables mondiales dégradées en raison de la désertification est de 14%.", Reponse: "P", Real: "25%"},
  { Question: "58% de la perte de biodiversité est due aux espèces envahissantes.", Reponse: "P", Real: "40%"},
  { Question: "Le pourcentage de réduction des émissions nécessaires pour atteindre les objectifs de l'Accord de Paris d'ici 2030 est de 18%.", Reponse: "M", Real: "45%"},
  { Question: "La concentration de dioxyde de carbone dans l’atmosphère a dépassé les 300 parties par million en 2021.", Reponse: "P", Real: "415 ppm"},
  { Question: "La température moyenne mondiale a augmenté d'environ 2,9 degré Celsius par rapport aux niveaux préindustriels.", Reponse: "M", Real: "1,2 degré"},
  { Question: "La déforestation mondiale élimine environ 17 millions d'hectares de forêt chaque année.", Reponse: "M", Real: "10 millions"},
  { Question: "La population d’espèces sauvages a diminué de 65% entre 1970 et 2016.", Reponse: "P", Real: "68%"},
  { Question: "2,6 million d'espèces animales et végétales sont menacées d'extinction.", Reponse: "M", Real: "1 million"},
  { Question: "En 2019, la production mondiale de déchets plastiques était d'environ 173 millions de tonnes.", Reponse: "P", Real: "368 millions de tonnes"},
  { Question: "Les énergies renouvelables représentaient environ 29% de la production mondiale d'électricité en 2018.", Reponse: "M", Real: "26,2%"},
  { Question: "Les émissions mondiales de CO2 liées à l'énergie ont atteint 4 gigatonnes en 2019.", Reponse: "P", Real: "33 gigatonnes."},
  { Question: "Selon les Nations Unies, 5 milliards de personnes dans le monde n'ont pas accès à une eau potable sûre.", Reponse: "M", Real: "2 milliards."},
  { Question: "L'agriculture est responsable d'environ 71% de la consommation d'eau mondiale.", Reponse: "M", Real: "70%"},
  { Question: "En 2020, la capacité mondiale d'énergie solaire photovoltaïque installée a dépassé 650 gigawatts (GW).", Reponse: "P", Real: "700 gigawatts"},
  { Question: "La capacité mondiale d'énergie éolienne installée a atteint plus de 984 GW en 2020.", Reponse: "M", Real: "700 GW"},
  { Question: "Environ 3 millions de tonnes de plastique entrent dans les océans chaque année.", Reponse: "P", Real: "8 millions"},
  { Question: "Les océans absorbent environ 80% du dioxyde de carbone émis dans l'atmosphère, ce qui provoque l'acidification des océans.", Reponse: "M", Real: "30%"},
  { Question: "Selon la FAO, l'agriculture est responsable d'environ 35% des émissions mondiales de gaz à effet de serre.", Reponse: "M", Real: "21%"},
  { Question: "Le rapport mondial de suivi sur l'éducation de l'UNESCO indique que 61% des pays atteignent les cibles mondiales d'éducation en matière d'environnement.", Reponse: "M", Real: "10%"},
  { Question: "72% de la surface terrestre mondiale est actuellement sous protection dans le cadre de zones de conservation.", Reponse: "M", Real: "15%"}

];

function verif(valeur: string) {

  if (valeur === tableauDObjets[i.value].Reponse) {
    rep = "Vrai";
    real = tableauDObjets[i.value].Real;
    colortext = "green"
  } else {
    rep = "Faux"
    real = tableauDObjets[i.value].Real;
    colortext = "red"
  }
  i.value = getRandomNumber(min, max);
}
</script>

<template>
  <div class="body">
    <h1 class="question">{{ tableauDObjets[i].Question }}</h1>
    <p class="rep" :style="{color : colortext}">{{ rep }} ({{ real }})</p>
    <div class="allbutton">
      <button class="button-plus" @click="() => verif('P')" value="P">Plus</button>
      <button class="button-moin" @click="() => verif('M')" value="M">Moins</button>
    </div>
  </div>
</template>


<style>
.body {
  top: 7%;
  position: absolute;
  width: 100%;
  height: 93%;
}

.rep{
  text-align: center;
  font-size: 5vw;
  margin-top: -5%;

}

.question{
  text-align: center;
  font-size: 3vw;
  margin-top: 2%;
  margin-bottom: 5%;
  color: whitesmoke;
}

.allbutton{
  margin-top: 3%;
  height: 50%;
}

.button-plus{
  margin-left: 5%;
  margin-right: 10%;
  width: 40%;
  height: 100%;
  font-size: 10vw;
  background-color:cadetblue;
}

.button-moin{
  width: 40%;
  height: 100%;
  font-size: 10vw;
  background-color: brown;
}

</style>