<template>
    <div class="container">
        <h1>{{ value }}</h1>
    </div>
</template>

<script>
export default {
    data(){

    },
    props: ['value'],
    mounted(){
        console.log('value');
    }
}
</script>