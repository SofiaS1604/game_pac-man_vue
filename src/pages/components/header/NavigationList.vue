<template>
        <a v-if="url" :href="url" class="navigation-item"><slot/></a>
    
</template>
<script>

    export default {
        name: 'NavigationList',
        props:{
            url:{
                type: String, 
                default: null
            }
        }
    }

</script>
