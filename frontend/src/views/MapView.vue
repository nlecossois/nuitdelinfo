<script setup lang="ts">
import { ref } from 'vue';

interface info {
  titre: string;
  info: string;
}

let tableauDObjets: info[] = [
  {titre: "Les éléphants, ingénieurs forestiers ",info:"Les éléphants jouent un rôle essentiel dans la préservation de l'écosystème en tant qu'ingénieurs forestiers. Leurs déplacements et leur habitude de manger des arbres contribuent à façonner la structure des forêts."},
  {titre:"La communication des arbres ",info:"Les arbres sont capables de communiquer entre eux. Lorsqu'un arbre est attaqué par des insectes, il peut libérer des composés chimiques dans l'air pour avertir d'autres arbres voisins de se préparer à une éventuelle attaque."},
  {titre:"Les oiseaux en plastique ",info:"Certains oiseaux, comme les corbeaux, ont appris à utiliser des morceaux de plastique pour construire leurs nids. Cela souligne le problème croissant de la pollution plastique et son impact sur la faune."},
  {titre:"Les loutres de mer et leur poche à outils ",info:"Les loutres de mer utilisent des pierres et des objets durs pour ouvrir des coquillages. Elles ont même une 'poche à outils' sous leur patte, où elles transportent des roches spéciales pour faciliter cette tâche."},
  {titre:"La migration des papillons ",info:"Certains papillons, comme le monarque, parcourent des milliers de kilomètres lors de leur migration annuelle entre le Canada et le Mexique. C'est l'une des migrations les plus longues et étonnantes du règne animal."},
  {titre:"Les champignons mycorhiziens",info:"Les champignons mycorhiziens forment des associations symbiotiques avec les racines des plantes, aidant à la croissance et à la santé des plantes en échange de nutriments. Cette collaboration est essentielle pour de nombreux écosystèmes."},
  {titre:"Le recyclage des cadavres d'animaux par les vautours",info:"Les vautours jouent un rôle écologique crucial en recyclant les cadavres d'animaux. Leur estomac acide leur permet de consommer des carcasses contaminées par des bactéries pathogènes sans être affectés."},
  {titre:"Les plantes hyperaccumulatrices",info:"Certains types de plantes, appelées 'hyperaccumulatrices', sont capables d'absorber et de stocker des métaux lourds dans leurs tissus. Elles sont étudiées pour dépolluer les sols contaminés."},
  {titre:"La pluie de poissons",info:"Il existe des phénomènes météorologiques rares appelés 'pluies de poissons', où des poissons sont transportés par des vents forts depuis des zones d'eau et tombent comme une pluie dans des endroits éloignés."},
  {titre:"Les coraux, architectes marins",info:"Les coraux sont de véritables architectes marins, construisant des récifs qui abritent une biodiversité incroyable. Malheureusement, ils sont menacés par le blanchissement dû au changement climatique et à d'autres pressions environnementales."},
]



let i = ref(0)

function switchcard(valeur: string){
  if (valeur === 'n'){
    if(i.value === 9){
      i.value = 0
    }else{
      i.value = i.value+1
    }

  }else{
    if (i.value === 0 ){
      i.value = 9
    }
    else{
      i.value = i.value-1}
  }
}

</script>

<template class="card-body">
  <div class="body">
    <Card class="card" :pt="{ title: { class: 'card-title' },content:{class: 'card-content'}, footer: {class: 'card-footer'} }">
      <template #title >{{ tableauDObjets[i].titre }}</template>
      <template #content>
        <p class="m-0">
          {{ tableauDObjets[i].info }}
        </p>
      </template>
      <template #footer>
        <Button @click= "() => switchcard('p')" icon="pi pi-chevron-left" label="Preview" />
        <Button @click="() => switchcard('n')" icon="pi pi-chevron-right" label="Next"  style="margin-left: 35%" />
      </template>
    </Card>

  </div>
</template>
<style>

.card{
  width: 30%;
  height: 50em;
  margin-top: 7%;
  margin-left: 35%;
  border-radius: 5%;
}

.card-body{
  text-align: center;
}

.card-title{
  font-weight: bold;
  font-size: 2vw;
}

.card-content{
  margin-top: 5%;
  font-size: 1vw;
}

.card-footer{
  height: 25%;
  text-align: center;
}



</style>