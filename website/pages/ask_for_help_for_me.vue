<template>
   <BreadCrumbs :crumbs="BCrumbs"/> 
   <div class="top-container">
            <div class="back-button">
                <BackButton />
            </div>
            <div class="center-title">
            Help for You
            </div>
        </div>
    
    <DropdownList class="list"/>

    <BandRightNoButton/>
    <BandRightNoButton/>
    <BandLeftNoButton/>
    <BandRightNoButton/>

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

  .button-container{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 2%;
        
        
        
    }
    .list{
        margin-bottom: 3vw;
    }
  </style>