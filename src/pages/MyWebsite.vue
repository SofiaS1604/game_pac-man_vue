<template>
    <div>
        <my-header></my-header>
        <form action="">
            Login <input type="text" v-model="login">
            Password <input type="password" v-model="password">
            <input type="button" value="Войти"> 
            <div class="reg_a">Регистрация</div>
        </form>
    </div>    
</template>
<script>

    import MyHeader from '../pages/components/MyHeader.vue';
    const componentList = {};
    componentList[MyHeader.name] = MyHeader;    

    export default {
        name: 'MyWebsite',
        components: componentList,
        data(){
            return{
                login: '',
                password: '',
            }
        }
    }

</script>
