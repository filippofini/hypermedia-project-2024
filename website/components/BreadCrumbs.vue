<template>
    <div class="alignment">
   
        <span v-for="(crumb, index) in crumbs" :key="index">
            <NuxtLink :to="crumb.url" class="links">{{crumb.label}}</NuxtLink>
            <span class="description">&gt;</span>        
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
        font-size: 2.5vh; 
        margin-top: 10px;
        margin-left: 2vw;
        font-weight: bold;
    }
    .links {        
        font-family: Jost;
        font-size: 2.8vh;
        font-weight: bold;
        margin-right: 5px;
        margin-left: 5px;
        color: #B6244F;
        text-decoration: underline; 
    }
    .links:hover {
        text-decoration: none;
    } 

    @media screen and (max-width: 850px) {

        .links {
            font-size: 2.3vh;
        }
    }
    
</style>