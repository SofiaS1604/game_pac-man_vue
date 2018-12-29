<template>
    <div>
        <my-header></my-header>
        <form action="">
            Login <label>
          <input type="text" v-model="login">
        </label>
          Password <label>
          <input type="password" v-model="password">
        </label>
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
            };
        }
    };

</script>
