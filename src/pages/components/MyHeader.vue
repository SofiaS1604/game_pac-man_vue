<template>
    <div class="main-header">
        <nav class="navigation">
            <ul>
                <li class="navigation-list">
                    <navigation-list url="/game1">Игра_1</navigation-list>
                </li>
                <li class="navigation-list">
                  <navigation-list url="/game2">Игра_2</navigation-list>
                </li>
            </ul>
        </nav>
    </div>         
</template>
<script>

    import NavigationList from './header/NavigationList.vue';
    
    const componentsList = {};
    componentsList[NavigationList.name] = NavigationList;


    export default {
        name: 'MyHeader', 
        components: componentsList
    }

</script>
