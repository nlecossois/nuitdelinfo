<script setup lang="ts">
import { ref } from 'vue';
let res1 = 'TATA';
let res2 = 'TOTO';
let res3 = 'TETE';
let response = 'TATA';
let card1: string;
let card2: string;
let card3: string;
let question:string = 'tema la taille du rat';

    function CheckAnswer(value: string){
        if (value == response){
            if (value == res1){
                card1 = 'res1'
                card2 = 'res2'
                card3 = 'res3'
            }
            else if(value == res2){
                card1 = 'res2'
                card2 = 'res1'
                card3 = 'res3'
            }
            else if (value == res3) {
                card1 = 'res3'
                card2 = 'res2'
                card3 = 'res1'
            }
         } else if(value != response){
            if (response == res1) {
            card1 = 'res1'
            card2 = 'res2'
            card3 = 'res3'
            }
            else if (response == res2) {
                card1 = 'res2'
                card2 = 'res1'
                card3 = 'res3'
            }
            else if (response == res3) {
                card1 = 'res3'
                card2 = 'res2'
                card3 = 'res1'
            }
         }
            let elem1 = document.getElementById(card1) as HTMLElement
            elem1.style.background = 'green'
            let elem2 = document.getElementById(card2) as HTMLElement
            elem2.style.background = 'red'
            let elem3 = document.getElementById(card3) as HTMLElement
            elem3.style.background = 'red'
            let footer = document.getElementById('footer') as HTMLElement
            footer.style.display = 'flex'
    }
    function nextQuestion(){
        let elem1 = document.getElementById('res1') as HTMLElement
        elem1.style.background = 'white'
        let elem2 = document.getElementById('res2') as HTMLElement
        elem2.style.background = 'white'
        let elem3 = document.getElementById('res3') as HTMLElement
        elem3.style.background = 'white'
        let footer = document.getElementById('footer') as HTMLElement
        footer.style.display = 'none'
        res1 = 'Rouge'
        res2 = 'Vert'
        res3 = 'Violet'
        question ="Quelle est la couleur de l'herbe ?"
        response = 'Vert'
    }
</script>

<template>
    <div class="body">
        <div class="question">
            {{ question }}
        </div>
        <div class="responses">
            <div class="res" @click="CheckAnswer(res1)">
                <Card :pt="{ body: { id: 'res1' } }">
                    <template #title> Answer 1 </template>
                    <template #content>
                        <p class="m-0">
                            {{ res1 }}
                        </p>
                    </template>
                </Card>
            </div>
            <div class="res" @click="CheckAnswer(res2)">
                <Card :pt="{ body: { id: 'res2' } }">
                    <template #title>  Answer 2 </template>
                    <template #content>
                        <p class="m-0">
                            {{ res2 }}
                        </p>
                    </template>
                </Card>
            </div>
            <div class="res" @click="CheckAnswer(res3)">
                <Card :pt="{ body: { id: 'res3' } }">
                    <template #title>  Answer 3 </template>
                    <template #content>
                        <p class="m-0" >
                            {{ res3 }}
                        </p>
                    </template>
                </Card>
            </div>
        </div>
        <div class="footer" id="footer">
            <div class="response">
                {{ response }}
            </div>
            <div class="next">
                <Button class="pi pi-arrow-right" @click="nextQuestion()"> Next</Button>
            </div>
        </div> 
    </div>
</template>

<style>
    .question{
        display:flex;
        width: 100%;
        justify-content: center;
    }
    .responses{
        padding-top: 5%;
        display: flex;
        justify-content:space-between ;
    }
    .res{
        width: 32%;
    }
    .footer{
        display:none;
        flex-direction: column;
        align-items: center;
    }

</style>