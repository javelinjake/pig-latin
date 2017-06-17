import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'pig-latin.component.html'
})

export class PigLatinComponent implements OnInit {

    loading = false;
    model: any = {};
    pigLatinWord = '';

    submit() {
        this.loading = true;

        const vowels = /[aioueAIOUE]/; // Vowels
        const piglatinifyWord = (word: any) => {
            var isCap = word[0].toUpperCase() === word[0];
            var piglatinWord;
            var firstVowel = word.search(vowels);

            if(firstVowel === 0) { // Words starting with a vowel
                piglatinWord =  word + "way";
            } else { // Words not starting with a vowel
                piglatinWord = word.slice(firstVowel)+word.slice(0,firstVowel).toLowerCase()+"ay";
            }
            if (isCap){
                piglatinWord = piglatinWord[0].toUpperCase() + piglatinWord.slice(1);
            }
            return piglatinWord;
        }

        this.pigLatinWord = piglatinifyWord(this.model.word);
        this.loading = false;
    }

    ngOnInit() {

    }

}
