<script setup>
  const props = defineProps(['description','imageName']);
  const imageSrc = computed(()=>`/_nuxt/assets/img/${props.imageName}`);
</script>

<template>

    <BreadCrumbs :crumbs="BCrumbs"/>
    <div class="top">
        <div class="test">
            <BackButton />
        </div>
        <div class="center-title">
            <div class = "title">Donate</div>
        </div>
    </div>
    <div class="cointainer-donation">
    <div class="img-description">
        <div class="img">
            <img src="../assets/img/nomeImmagine.jpg" alt="La mia foto personale" />
          <!--  <img :src = "imageSrc" alt="Image description"> -->
        </div>
        <div class="description">
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
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
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
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
    margin-right: 10%;
  }

  .img-description{
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 50%;
  }

  img{
    width: 50%;
    height: 50%;
  }

  .description{
   word-break: break-word;
   width: 50%;
  }

  .donation-form{
    display: flex;
    align-items: center;
    width: 50%;
  }
  
  .cointainer-donation{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
  }

  </style>