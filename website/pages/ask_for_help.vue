<template>
    <BreadCrumbs :crumbs="BCrumbs"/>

    <div class="top">
            <div class="test">
                <BackButton />
            </div>
            <div class="center-title">
            <div class = "title">At your side</div>
        </div>
    </div>

    <div class ="button-container">
        <NuxtLink to="/ask_for_help_for_me" aria-label="Link to ask for help for me">
            <ButtonViolet name_button="Help for You"/>
        </NuxtLink>
        <NuxtLink to="/ask_for_help_for_another" aria-label="Link to ask for help for another">
            <ButtonViolet name_button="Help for Another"/>
        </NuxtLink>
        
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
     .top{
    display: flex;
    flex-direction: row;
    
    margin: 2vw;
  }
  .test{
    display: flex;
    width: 10%;
  }

  .title {
    font-family: Jost;
    font-size: 3vw;
    font-weight: 600;
    text-align: center;
    margin-top: 0vw;
    display: flex;  
    align-self: center; 
     

  }
  .center-title{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-right: 9%;
  }

    .button-container{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 50px;
        
    }
</style>