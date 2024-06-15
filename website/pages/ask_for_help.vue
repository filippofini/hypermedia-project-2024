<template>
    <BreadCrumbs :crumbs="BCrumbs"/>

    <div class="top-container">
        <div class="back-button">
            <BackButton />
        </div>
        <div class="center-title">
        At your side
        </div>
    </div>

    <div class ="button-container">
        <NuxtLink class = "link" to="/ask_for_help_for_me" aria-label="Link to ask for help for me">
            Help for you
        </NuxtLink>

        <NuxtLink class = "link" to="/ask_for_help_for_another" aria-label="Link to ask for help for me">
            Help for another
        </NuxtLink>
        <!--
        <ButtonViolet name_button="Help for You" link="/ask_for_help_for_me" aria_label="Link to ask for help for me"/>        
        <ButtonViolet name_button="Help for Another" link="/ask_for_help_for_another" aria_label="Link to ask for help for another"/>-->
     </div>

    <BandRightNoButton description="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" imageName="nomeImmagine.jpg"/>
    <BandLeftNoButton description="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"  />
    
</template>

<script>
  export default {
      computed: {
          BCrumbs() {                
              return [

                  {
                      label: 'home',
                      url: '/'
                  }
                  
              ];
          }
      }
  }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

    .button-container{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
         
    }

    .link{
      font-family: 'Jost';
      font-size: 1.2vw;
      font-weight: 300;
      text-align: left;
      color:black;
      text-decoration: none;
      text-decoration: underline;
    }

    .link:hover{
      text-decoration: none;
    }

</style>