<template>
      <BreadCrumbs :crumbs="BCrumbs"/>
      <div class="top">
            <div class="test">
                <BackButton />
            </div>
            <div class="center-title">
                <div class = "title-page">Help for Another</div>
            </div>
        </div>
      <BandRightNoButton/>
      <img src="@/assets/img/nomeImmagine.jpg" alt="immagine" class="middle-img" />
      <BandRightNoButton/>
      <BandLeftNoButton/>
      <div class ="button-container">        
        <ButtonViolet name_button="Services" link="/services" aria_label="Link to services"/>        
        <ButtonViolet name_button="Contact Us" link="/contact_us" aria_label="Link to contact us"/>       
        
    </div>
</template>

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
                        label: 'ask for help',
                        url: '/ask_for_help'

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

    .middle-img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        height: auto;
        margin-top: 5vw;
        margin-bottom: 5vw;
    }
</style>