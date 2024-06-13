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
        <ButtonViolet name_button="Help for You" link="/ask_for_help_for_me" aria_label="Link to ask for help for me"/>        
        <ButtonViolet name_button="Help for Another" link="/ask_for_help_for_another" aria_label="Link to ask for help for another"/>
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

    .button-container{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 50px;  
    }

</style>