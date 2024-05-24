<template>
    <div class="alignment">
   
        <span v-for="(crumb, index) in crumbs" :key="index">
            <NuxtLink :to="crumb.url" class="links">{{crumb.label}}</NuxtLink>
            <span>&gt;</span>        
        </span>
    </div>
</template>

<script>
export default {
    props: {
        crumbs: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

    .alignment {
        display: flex;
        flex-grow: row;
        font-size: 1.2vw; 
        margin-top: 5px;
    }
    .links {        
        color: #000;
        text-decoration: none;
        margin-right: 5px;
        margin-left: 5px;
        font-family: 'Jost';
        transition: 0.3s ease; 
    }
    .links:hover {
        text-decoration: underline;
        color: #B96090;
    } 
    
</style>