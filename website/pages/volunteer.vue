<template>

    <div class ="background-container">

        <BreadCrumbs :crumbs="BCrumbs"/>

        <div class="top">
            <div class="test">
                <BackButton />
            </div>
            <div class="center-title">
            <div class = "title-page">Become a volunteer</div>
        </div>
    </div>
     
    <div class ="container">


        <ImageUpTextDown class="description" description="Become a vital part of our team and contribute to our mission of making a meaningful difference in the lives of others." imageName="/volunteer/volunteer1.png" title="Join our team"/> 
        <ImageUpTextDown class="description" description="Every contribution, no matter how small, plays a significant role in creating a greater impact than we could ever achieve alone" imageName="/volunteer/volunteer2.png" title="Combine our efforts"/> 
        <ImageUpTextDown class="description"  description="By standing together, we can advocate for change, support those in need, and work towards a shared vision of a better tomorrow" imageName="/volunteer/volunteer3.png" title="Unite for a common cause"/> 
    </div>

    </div>

    <div class="button">
        
        <ButtonViolet name_button="Join us" link="/contact_us" aria_label="Link to contact us"/>
        
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
                        label: 'support us',
                        url: '/support_us'

                    }
                    
                ];
            }
        }
    }
</script>

<style scoped>
    .background-container{        
        background-color: #FFCDDC;        
    }
    .container{
        display: flex;        
        flex-direction: row;
        background-color: #FFCDDC;
        justify-content: center;
      
        
    }

    .button{
        display: flex;        
        justify-content: center;        
        margin: 2%;
    }

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
     
</style>

