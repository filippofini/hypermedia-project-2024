<template>
   <BreadCrumbs :crumbs="BCrumbs"/>
   <div class="top-container">
      <div class="back-button">
         <BackButton />
      </div>
      <div class="center-title">
      Contact Us
      </div>
   </div>
   <div class="phone-number">
      <div class="title-page-1-5">Call</div>
      <div class="title-page">123-456-7890</div>
   </div>
   <BandLeftNoButton description="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" imageName="nomeimmagine.jpg"/>
   <BandForm />
   <BandMap />
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

   .phone-number {
      display: flex;
      flex-direction: column;
      font-family: Jost;
      margin-left: 30px;
      align-items: start;
   }

</style>