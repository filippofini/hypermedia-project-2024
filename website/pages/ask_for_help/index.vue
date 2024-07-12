<template>
    <Head>
      <Title>Ask for help - Helping Hands</Title>
    </Head>
    <BreadCrumbs :crumbs="BCrumbs"/>

    <div class="top-container">
        <div class="back-button">
            <BackButton />
        </div>
        <div class="center-title">
        At your side
        </div>
    </div>

    <div class ="button-container">

        <ButtonViolet name_button="Help for You" link="/ask_for_help/for_you" aria_label="Link to ask for help for me"/>      
        <ButtonViolet name_button="Help for Another" link="/ask_for_help/for_another" aria_label="Link to ask for help for another"/>
    </div>

    <BandRightNoButton description="If you are experiencing violence, it's essential to know that help and support are available. At Helping Hands Anti-Violence Center, we provide resources to empower you to take action. Recognize the signs of abuse, understand your legal rights, and create a safety plan. Reach out to our center for confidential counseling, legal advice, and access to emergency housing." imageName="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/ask_for_help/askhelp_img1.jpeg"/>
    <BandLeftNoButton description="Moreover, you can make a difference in someone else's life. Learn to recognize signs of abuse in others, listen without judgment, and offer support. Direct individuals to resources like ours for professional assistance. Together, we can break the cycle of violence and create a community where everyone feels safe and supported."  imageName="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/ask_for_help/askhelp_img2.jpeg"/>
    
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

    .button-container{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 2%;
         
    }

    .link{
      font-family: 'Jost';
      font-size: 2.3vh;
      font-weight: 300;
      text-align: left;
      padding-bottom: 2vw;
      color:black;
      text-decoration: none;
      text-decoration: underline;
    }

    .link:hover{
      text-decoration: none;
    }

    @media screen and (max-width: 850px) {
        .button-container{
            margin-top: 3vh;
            margin-bottom: 3vh;
        }
    }

</style>