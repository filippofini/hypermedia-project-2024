<template>
    <BreadCrumbs :crumbs="BCrumbs"/>
    <div class="top-container">
        <div class="back-button">
            <BackButton />
        </div>
        <div class="center-title">
        Help for Another
        </div>
    </div>
    <BandRightNoButton/>
    <img src="@/assets/img/nomeImmagine.jpg" alt="immagine" class="middle-img" />
    <BandRightNoButton/>
    <BandLeftNoButton/>
    <div class ="button-container">        
        <ButtonViolet name_button="Services" link="/activities/services" aria_label="Link to services"/>        
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

  .button-container{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;        
        
    }

    .middle-img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: auto;
        margin-top: 5vw;
        margin-bottom: 5vw;
    }

    @media screen and (max-width: 850px){
        .middle-img{
            
            margin-bottom: 3vh;
            margin-top: 0;
        }

        .button-container{
            margin-bottom: 3vh;
        }
        
    }
</style>