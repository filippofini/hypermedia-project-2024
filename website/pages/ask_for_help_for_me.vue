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

    <BandRightNoButton description = "If you recognize yourself in any of the above cases or are unsure about your situation, please feel free to contact us. You can reach out to us using any of our provided contact methods. We're here to help and support you."/>
    <BandLeftNoButton description = "If you find yourself in any of these situations or if you're feeling unsure or unsafe, please don't hesitate to reach out to us. Our services are here to support you whenever you need assistance. Your safety and well-being are important to us, and we are here to help in any way we can."/>

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