<template>
    <Head>
      <Title>Contact Us - Helping Hands</Title>
    </Head>
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
   <BandLeftNoButton description="To reach us from Milano Centrale, exit the station and take Metro Line 2 (Green) towards Cologno Nord/Gessate. Get off at Piola Station. Exit the station and walk along Via Giovanni Pacini, then turn right onto Via Edoardo Bassini. Continue straight until you reach Piazza Leonardo da Vinci. The main entrance of Politecnico di Milano will be on your right. The total travel time is approximately 15-20 minutes." imageName="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/contact_us/polimi.jpg"/>
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
      margin-left: 3vw;
      align-items: start;
   }

   @media screen and (max-width: 850px) {
        .phone-number{
            display: flex;            
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: Jost;
        }

    }

</style>