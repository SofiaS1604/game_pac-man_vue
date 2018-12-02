<template>
        <div>
            <!-- Horizontal Block 6 Square -->
                <horizontal-grid6 class="wall_grid wall-1"></horizontal-grid6>
                <horizontal-grid6 class="wall_grid wall-5"></horizontal-grid6>
                <horizontal-grid6 class="wall_grid wall-7"></horizontal-grid6>
                <horizontal-grid6 class="wall_grid wall-8"></horizontal-grid6>
                <horizontal-grid6 class="wall_grid wall-9"></horizontal-grid6>
                <horizontal-grid6 class="wall_grid wall-17"></horizontal-grid6>
                <horizontal-grid6 class="wall_grid wall-24"></horizontal-grid6>
                <horizontal-grid6 class="wall_grid wall-25"></horizontal-grid6>
                <horizontal-grid6 class="wall_grid wall-33"></horizontal-grid6>
                <horizontal-grid6 class="wall_grid wall-33"></horizontal-grid6>
                <horizontal-grid6 class="wall_grid wall-38"></horizontal-grid6>
                <horizontal-grid6 class="wall_grid wall-43"></horizontal-grid6>

            <!-- Horizontal Block 10 Square -->
                <horizontal-grid10 class="wall_grid wall-2"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-12"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-14"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-20"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-21"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-32"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-37"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-39"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-40"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-41"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-44"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-45"></horizontal-grid10>
                <horizontal-grid10 class="wall_grid wall-46"></horizontal-grid10>

            <!-- Vertically Block -->
                <vertically-grid class="wall_grid wall-3"></vertically-grid>
                <vertically-grid class="wall_grid wall-4"></vertically-grid>
                <vertically-grid class="wall_grid wall-6"></vertically-grid>
                <vertically-grid class="wall_grid wall-10"></vertically-grid>
                <vertically-grid class="wall_grid wall-11"></vertically-grid>
                <vertically-grid class="wall_grid wall-13"></vertically-grid>
                <vertically-grid class="wall_grid wall-15"></vertically-grid>
                <vertically-grid class="wall_grid wall-16"></vertically-grid>
                <vertically-grid class="wall_grid wall-18"></vertically-grid>
                <vertically-grid class="wall_grid wall-19"></vertically-grid>
                <vertically-grid class="wall_grid wall-22"></vertically-grid>
                <vertically-grid class="wall_grid wall-23"></vertically-grid>
                <vertically-grid class="wall_grid wall-26"></vertically-grid>
                <vertically-grid class="wall_grid wall-27"></vertically-grid>
                <vertically-grid class="wall_grid wall-28"></vertically-grid>
                <vertically-grid class="wall_grid wall-29"></vertically-grid>
                <vertically-grid class="wall_grid wall-30"></vertically-grid>
                <vertically-grid class="wall_grid wall-31"></vertically-grid>
                <vertically-grid class="wall_grid wall-34"></vertically-grid>
                <vertically-grid class="wall_grid wall-35"></vertically-grid>
                <vertically-grid class="wall_grid wall-36"></vertically-grid>
                <vertically-grid class="wall_grid wall-42"></vertically-grid>
                <vertically-grid class="wall_grid wall-47"></vertically-grid>
        </div>
</template>
<script>
    import verticallyGrid from './grid/verticallyGrid.vue';
    import horizontalGrid6 from './grid/horizontalGrid6.vue';
    import horizontalGrid10 from './grid/horizontalGrid10.vue';
 
  
    const componentsList = {};
    componentsList[verticallyGrid.name] = verticallyGrid;
    componentsList[horizontalGrid10.name] = horizontalGrid10;
    componentsList[horizontalGrid6.name] = horizontalGrid6;
    

    export default {
        name: 'MyGrid',
        components: componentsList   
    }
</script>


