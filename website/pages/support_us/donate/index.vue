<script setup>
  const props = defineProps(['description','imageName']);
  const imageSrc = computed(()=>`/_nuxt/assets/img/${props.imageName}`);
</script>

<template>

    <BreadCrumbs :crumbs="BCrumbs"/>
    <div class="top-container">
        <div class="back-button">
          <BackButton />
        </div>
        <div class="center-title">
        Donate
        </div>
    </div>
    <div class="container-donation">
      <div class="img-description">
        
          <img src="@/assets/img/nomeImmagine.jpg" alt="La mia foto personale" />
          <!--  <img :src = "imageSrc" alt="Image description"> -->
  
        <div class="description">
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <!--  <p> {{description}} </p> -->
        </div>
      </div>
      <div class="donation-form">
        <DonationForm />
      </div>
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

  .container-donation{
      display: flex;
      flex-direction: row;
      justify-content: center;
      
    }

  .img-description{
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 50%;
  }

  img{
    width: 24vw;
  }

  .description{
   word-break: break-word;
   background-color: #643173;
   color: #ffffff;
   padding: 1vw;
   width: 22vw;
   font-size: 1.2vw;
   height: 100%;
  }

  .donation-form{
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  

  @media screen and (max-width: 850px) {
  .container-donation {
    flex-direction: column;
    align-items: center;
    padding: 2vw 5.5vw 2vw 5.5vw;
    margin-bottom: 3vh;
  }

  .img-description {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }

  .description {
    width: 100%;
    padding: 2vw;
    box-sizing: border-box;
  }

  .donation-form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
}



  </style>