<template>
    <BreadCrumbs :crumbs="BCrumbs"/>
    <div class="top">
        <div class="test">
            <BackButton />
        </div>
        <div class="center-title">
            <div class="title-page">Services</div>
        </div>
    </div>
    <div class="introduction">placeholder</div>

    <div id="sorting-selector-services">
        <label for="sorting-selector-services">Sort by:</label>
        <select class="menu" id="orderServ" v-model="orderServ">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
    </div>
    <div id="services-container">
        <ProjectCard v-for = "service of sorted" :id = "service.id_service" :title  = "service.title" :link = "'/services/' + service.id_service" :year = "null" :small_desc = "service.small_desc" :image = "service.image" />
    </div>
</template>

<script setup>
  const { data: services } = await useFetch('/api/services') //get all projects

  const orderServ = ref("A-Z") //default order

  //sort the services based on the order selected by the user
  const sorted = computed(() => {

    if (orderServ.value == "A-Z")
        return [...services.value]

    else if (orderServ.value == "Z-A") //Reverse alphabetically
        return [...services.value].reverse()
  });
</script>

<script>
    export default {
        computed: {
            BCrumbs() {                
                return [

                    {
                        label: 'home',
                        url: '/',
                    },
                    {
                        label: 'all activities',
                        url: '/activities',
                    }
                ];
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
    
    .top {
        display: flex;
        flex-direction: row;
        margin: 2vw;
    }

    .test{
        display: flex;
        width: 10%;
    }

    .center-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        margin-right: 10%;
    }

    .introduction {
        margin: 6vw;
        font-family: Jost;
        font-size: 1.3vw;
        text-align: center;
        margin-top: 0vw;
        display: flex;  
        align-self: center;  
    }

    #sorting-selector-services {
        display: flex;
        font-family: Jost;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        align-self: center;
        margin: 1%;
        gap: 10px;
        font-size: 1.3vw;
        font-weight: 500;
        min-width: 17vw;
        margin-top: 0vw;
    }

    #services-container {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        align-self: center;
        gap: 2vw;
        justify-content: center;
        max-width: 90vw;
    }

    .menu {
        border-radius: 5px;
        border: 1px solid black;
        font-size: 18px;
        font-family: inherit;
        padding: 0 2vh;
        cursor: pointer;
        width: 60%;
        background-color: rgba(255, 255, 255, 0.9);
        appearance: auto;
    }
</style>