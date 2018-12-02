<template >

<div class="home-game">

    <div class="score" v-if="isShowing"> score: {{score}}</div> 
    <h1 class="title">SQUARE PAC-MAN</h1>
    <div class="time" v-if="isShowing">time: {{m}}:{{s}}</div>

    <div class="game">

        <div class="title_big" v-if="!isShowing">SQUARE PAC-MAN</div> 
        <button @click="toggleShow" v-if="!isShowing" class="button button_left">Play</button>
        <button v-if="!isShowing" class="button button_right">Result</button>
        
        <transition name="grid">
            <div class="grid" v-if="isShowing" >
               
                <my-grid v-if="isShowing"></my-grid>
                 <div class="square"  :style="square"></div>

                <div  class="row" v-for="n in 36">
                    <div class="cell" v-for="k in 46"></div>
                </div>

                <div class="" v-if="isShowing"> 
                    <div v-if="CircleShowing_1" class="circle circle_1" :style="circleStyle_1"></div>
                </div>
                <div class="" v-if="isShowing"> 
                    <div v-if="CircleShowing_2" class="circle circle_2" :style="circleStyle_2"></div>
                </div>
                <div class="" v-if="isShowing"> 
                    <div v-if="CircleShowing_3" class="circle circle_3" :style="circleStyle_3"></div>
                </div>
                <div class="" v-if="isShowing"> 
                    <div v-if="CircleShowing_4" class="circle circle_4" :style="circleStyle_4"></div>
                </div>
                <div class="" v-if="isShowing"> 
                    <div v-if="CircleShowing_5" class="circle circle_5" :style="circleStyle_5"></div>
                </div>

            <!-- Green Square-->
                 

            </div>
        </transition>
    </div> 
</div>   

</template>
<script>

    import MyGrid from './components/myGrid.vue';
  
    const componentsList = {};
    componentsList[MyGrid.name] = MyGrid;
   
    export default {
        name: 'Game',
        components: componentsList,
        watch: { },
        data(){
            return{
                x: 1, //left and right
                y: 1, //top and bottom
                cell:  46, //  width 
                row: 36,//  height
                isShowing: false,   
                CircleShowing_1: false,
                CircleShowing_2: false,
                CircleShowing_3: false,
                CircleShowing_4: false,
                CircleShowing_5: false,
                m: null, //minute
                s: null, //second
                score: 0,
                seconds: 120, 
                circleX_1: null,
                circleY_1: null,
                circleX_2: null,
                circleY_2: null,
                circleX_3: null,
                circleY_3: null,
                circleX_4: null,
                circleY_4: null, 
                circleX_5: null,
                circleY_5: null
            }
        },

        

        
        methods: {
            toggleShow() {
                this.CircleShowing_1 = !this.CircleShowing_1;
                this.CircleShowing_2 = !this.CircleShowing_2;
                this.CircleShowing_3 = !this.CircleShowing_3;
                this.CircleShowing_4 = !this.CircleShowing_4;
                this.CircleShowing_5 = !this.CircleShowing_5;
                this.isShowing = !this.isShowing;
                
                
                if (this.m === null ) {
                    this.timerStart();
                    this.drawCircle();
                    this.gameScore();
                }
                
                
            }, //disappearance and time

            timerStart(){

                
                if (this.seconds > 0) {
                    this.seconds--;
                    this.m = parseInt(this.seconds / 60) + '';
                    if (this.m.length === 1) {
                      this.m = '0' + this.m;
                    }
                    this.s = this.seconds - parseInt(this.seconds / 60) * 60 + '';
                    if (this.s.length === 1) {
                      this.s = '0' + this.s;
                    }
                    setTimeout(() => {
                      this.timerStart();
                    }, 1000);
        
                    
                    
                }else{
                    this.gameOver();

                    
                }
            },

            drawCircle(){

                this.circleX_1 = Math.floor(Math.random() * 46);
                this.circleX_2 = Math.floor(Math.random() * 46);
                this.circleX_3 = Math.floor(Math.random() * 46);
                this.circleX_4 = Math.floor(Math.random() * 46);
                this.circleX_5 = Math.floor(Math.random() * 46);
                this.circleY_5 = Math.floor(Math.random() * 36);
                this.circleY_1 = Math.floor(Math.random() * 36);
                this.circleY_2 = Math.floor(Math.random() * 36);
                this.circleY_3 = Math.floor(Math.random() * 36);
                this.circleY_4 = Math.floor(Math.random() * 36);
                
                setTimeout(() => {
                   this.drawCircle();
                   this.CircleShowing_1 = true;
                   this.CircleShowing_2 = true;
                   this.CircleShowing_3 = true;
                   this.CircleShowing_4 = true;
                   this.CircleShowing_5 = true;
                   this.gameBlock();
                   
                }, 5000)
            },

            gameBlock(){
                var wall = document.getElementsByClassName('wall_grid');
                console.info(wall);
                
            },

            gameScore(){
                
                if(this.circleX_1*15 === this.x*15 && this.circleY_1*15 === this.y*15){
                    if(this.CircleShowing_1 === true){
                        this.score += 1;
                        this.CircleShowing_1 = false;
                    }
                }

                if(this.circleX_2*15 === this.x*15 && this.circleY_2*15 === this.y*15){
                    if(this.CircleShowing_2 === true){
                        this.score += 1;
                        this.CircleShowing_2 = false;
                    }else{
                        this.score += 0;
                    }
               }

                if(this.circleX_3*15 === this.x*15 && this.circleY_3*15 === this.y*15){
                    if(this.CircleShowing_3 === true){
                        this.score += 1;
                        this.CircleShowing_3 = false;
                    }   
                }

                if(this.circleX_4*15 === this.x*15 && this.circleY_4*15 === this.y*15){
                    if(this.CircleShowing_4 === true){
                        this.score += 1;
                        this.CircleShowing_4 = false;
                    }
                }

                if(this.circleX_5*15 === this.x*15 && this.circleY_5*15 === this.y*15){
                    if(this.CircleShowing_5 === true){
                        this.score += 1;
                        this.CircleShowing_5 = false;
                    }
                }

                setTimeout(() => {
                    this.gameScore()
                },10)

                
            },

            gameOver(){
                this.isShowing = false; 
                     
            },

            left(){
                if(this.x > 0){
                    if(this.x === 23 && (this.y === 3 || this.y === 4) || 
                    this.x === 10 && this.y < 10 ||
                    this.x === 20 && (this.y === 9 || this.y === 8) ||
                    this.x === 30 && this.y < 8 ||
                    this.x === 35  && (this.y > 4 && this.y < 10) ||
                    this.x === 43  && (this.y > 2 && this.y < 25) ||
                    this.x === 20  && (this.y > 17 && this.y < 25) ||
                    this.x === 15   && (this.y < 18 && this.y > 9)){

                    }else{
                        this.x --;
                    }
                    
                }
            }, //move left

            right(){
                if(this.x < this.cell-1){
                    if(this.x === 7 && this.y < 10 ||
                     this.x === 2 && (this.y === 3 || this.y === 4) ||
                     this.x === 12 && (this.y === 3 || this.y === 4) || 
                     this.x === 27 && this.y < 8 ||
                     this.x === 32  && (this.y > 2 && this.y < 10) ||
                     this.x === 40  && (this.y > 4 && this.y < 25) ||
                     this.x === 12  && (this.y > 9 && this.y < 18) ||
                     this.x === 7  && (this.y === 18 || this.y === 19) ||
                     this.x === 17  && (this.y > 17 && this.y < 25)){

                    }else{
                        this.x ++;
                    }

                    
                }
            }, //move right

             top(){
                if(this.y > 0){
                    if((this.x > 2 && this.x < 8) && this.y === 5 || 
                    (this.x > 7 && this.x < 20) && (this.y < 11 && this.y > 9) ||
                    (this.x > 12 && this.x < 23)  && this.y === 5 ||
                    (this.x === 28 || this.x === 29) && this.y === 8 ||
                    this.y === 10  && (this.x === 33 || this.x === 34) ||
                    this.y === 5  && (this.x > 34 && this.x < 42) ||
                    this.x > 40   &&  (this.y < 26 && this.y > 23) ||
                    (this.x > 7 && this.x < 20)  && this.y === 20 ||
                    (this.x === 18  ||  this.x === 19) &&  this.y === 25){

                    }else{
                        this.y --;
                    }
                    
                }
             }, //move top

             bottom(){
                if(this.y < this.row-1){
                    if((this.x > 2 && this.x < 8)  && this.y === 2 || 
                    (this.x > 12 && this.x < 23)  && this.y === 2 || 
                    (this.x > 32 && this.x < 43)  && this.y === 2 ||
                    this.y === 7 && (this.x > 9 && this.x < 20) ||
                    this.x > 41 && this.y === 22 ||
                    (this.x > 7 && this.x < 13)  && this.y === 17||
                    (this.x > 14 && this.x < 20)  && this.y === 17 ){

                    }else{
                        this.y ++;
                    }
                    
                }
             }, //move bottom
             
             previous: function (e) {

                switch(e.keyCode){
                    case 37: //left arrow
                        this.left();
                        break;
                    case 38: //top arrow   
                        this.top();
                        break;
                    case 39: //right arrow
                        this.right()
                        break;
                    case 40: //bottom arrow
                        this.bottom()
                        break;         
                }
            },
        },
         
        mounted() {
            window.addEventListener('keydown',  this.previous) // the number of the pressed button on the keyboard is checked by the method prevision
        },

        computed:{
            square(){
                const green_square = {};  
                green_square.left = this.x*15; //left
                green_square.top = this.y*15; //top
                return green_square; 
            },

            circleStyle_1(){
                const red_circle = {};
                red_circle.left = this.circleX_1*15;
                red_circle.top  = this.circleY_1*15;
                return red_circle;    
            },

            circleStyle_2(){
                const red_circle = {};
                red_circle.left = this.circleX_2*15;
                red_circle.top  = this.circleY_2*15;
                return red_circle;
            },

            circleStyle_3(){
                const red_circle = {};
                red_circle.left = this.circleX_3*15;
                red_circle.top  = this.circleY_3*15;
                return red_circle;
                
            },

            circleStyle_4(){
                const red_circle = {};
                red_circle.left = this.circleX_4*15;
                red_circle.top  = this.circleY_4*15;
                return red_circle;
            },

            circleStyle_5(){
                const red_circle = {};
                red_circle.left = this.circleX_5*15;
                red_circle.top  = this.circleY_5*15;
                return red_circle;
            },

            
        } 
    }   
    
    
</script>
