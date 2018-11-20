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
            <div class="grid" v-if="isShowing">

                <div  class="row" v-for="n in 36">
                    <div class="cell" v-for="k in 46"></div>
                </div>

                <div v-if="isShowing" class="circle" :style="circleStyle_1"></div>
                <!--<div v-if="isShowing" class="circle" :style="circleStyle_2"></div>-->
                <!--<div v-if="isShowing" class="circle" :style="circleStyle_3"></div>-->
                <!--<div v-if="isShowing" class="circle" :style="circleStyle_4"></div>-->
                <!--<div v-if="isShowing" class="circle" :style="circleStyle_5"></div>-->

            <!-- Green Square-->
                <div class="square"  :style="square"></div> 

                <my-grid v-if="isShowing"></my-grid>
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
                m: null, //minute
                s: null, //second
                score: 0,
                seconds: 59, 
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
                this.isShowing = !this.isShowing;
                if (this.m === null ) {
                    this.timerStart();
                }
                
                
            }, //disappearance and time

            timerStart(){
                if(this.seconds - 1 >= 0){
                    this.m = parseInt(this.seconds / 60) + '';
                    this.seconds --;
                    if(this.m.length === 1){
                        this.m = '0' + this.m;
                    }
                    this.s = this.seconds - parseInt(this.seconds / 60) * 60 + '';
                    if(this.s.length === 1){
                        this.s = '0' + this.s;
                    }
                    setTimeout(() => {
                        this.timerStart();
                       
                        this.circleX_1 = Math.floor(Math.random() * 46);
                        this.circleY_1 = Math.floor(Math.random() * 36);
                       
                    }, 1000);
                    
                }else{
                    this.gameOver()
                }
            },

            gameOver(){
                this.isShowing = false;
            },

            left(){
                if(this.x > 0){
                    this.x --;
                }
            }, //move left

            right(){
                if(this.x < this.cell-1){
                    this.x ++;
                }
            }, //move right

             top(){
                if(this.y > 0){
                    this.y --;
                }
             }, //move top

             bottom(){
                if(this.y < this.row-1){
                    this.y ++;
                }
             }, //move bottom
             
             previous: function (e) {
                //console.info(green_kvadrat_left)
                //const green_kvadrat_left = this.$refs.kvadrat.getBoundingClientRect().left; 
                
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
            //    console.info(green_square)  
                green_square.left = this.x*15; //left
                green_square.top = this.y*15; //top
                return green_square; 

            },

            circleStyle_1(){
                const red_circle = {};
                
                red_circle.left = this.circleX_1*15;
                console.info(red_circle.left);
                red_circle.top  = this.circleY_1*15;
                return red_circle;
                
            }
        } 
      
    }   
    
    
</script>
