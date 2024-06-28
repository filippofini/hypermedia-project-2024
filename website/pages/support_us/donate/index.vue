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
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
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

  .img-description{
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 50%;
  }

  img{
    width: 24vw;
    padding-left: 50%;
  }

  .description{
   word-break: break-word;
   background-color: #643173;
   color: #ffffff;
   padding: 1vw;
   width: 22vw;
   height: 100%;
  }

  .donation-form{
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  
  .container-donation{
    display: flex;
    flex-direction: row;
    justify-content: center;
    
  }

  @media screen and (max-width: 850px) {
  .container-donation {
    flex-direction: column;
    align-items: center;
    padding: 2vw 5.5vw 2vw 5.5vw;
  }

  .img-description {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 50%;
    height: auto;
    padding-left: 0;
  }

  .description {
    width: 50%;
    height: auto;
    padding: 1vh;
    background-color: #643173;
    color: #ffffff;
    word-break: break-word;
  }

  .donation-form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
}



  </style>