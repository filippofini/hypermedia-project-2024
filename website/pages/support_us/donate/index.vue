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

          <img src="../assets/img/nomeImmagine.jpg" alt="La mia foto personale" />
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
   height: 10vw;
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
        .container-donation{
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

    }

  </style>