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
      <h2>Call</h2>
      <h1>123-456-7890</h1>
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
   }

   h1 {
      font-size: 30px;
      font-weight: 1000;
      font-family: Jost;
   }

   h2 {
      font-size: 25px;
      font-weight: 500;
      font-family: Jost;
   }

</style>