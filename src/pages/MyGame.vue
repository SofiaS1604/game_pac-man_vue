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

            <!-- Green Square-->
                <div class="kvadrat" :style="kvadrat"></div> 

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
                seconds: 10

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
                    }, 1000);
                }else{
                    this.isShowing = false;
                }
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
            kvadrat(){
                const green_kvadrat = {};  
                green_kvadrat.left = this.x*15; //left
                green_kvadrat.top = this.y*15; //top
                return green_kvadrat; 

            }             
        } 
      
    }   
    
    
</script>
