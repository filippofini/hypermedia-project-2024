<template>
  <Head>
    <Title>Help for Another - Helping Hands</Title>
  </Head>
    <BreadCrumbs :crumbs="BCrumbs" />
    <div class="top-container">
      <div class="back-button">
        <BackButton />
      </div>
      <div class="center-title">Help for Another</div>
    </div>
    <BandRightNoButton
      description="Violence against women can take many forms: physical, emotional, sexual, and financial. Signs of physical abuse include unexplained injuries and frequent absences. 
                  Emotional abuse may appear as low self-esteem, anxiety, or isolation. Sexual abuse signs include fear of certain people or places, and frequent injuries or infections. Financial abuse might show as limited access to money or sudden financial changes."
      image-name="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/ask_for_help/for_another/1.jpeg"
    />
    <img src="@/assets/img/help_for_another/img.jpeg" alt="immagine" class="middle-img" />
    <BandRightNoButton
      description="When approaching someone, ensure privacy and express your concerns with 'I' statements. Listen without judgment and avoid blaming. Offer support by providing information on local shelters, hotlines, and services, and offer to accompany them if needed. 
                  Reassure them that they are not alone and that there is help available. Emphasize that their safety and well-being are the top priority, and that you are there to support them every step of the way."
      image-name="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/ask_for_help/for_another/2.jpeg"                
      />
    <BandLeftNoButton
      description="If they acknowledge the abuse and want help, assist in creating a safety plan, including safe places, emergency contacts, and essential items. Encourage professional help from counselors, social workers, or legal advisors, and help them make appointments. Regularly check in to show support and encourage activities that boost self-esteem.
                  Helping a victim of violence requires compassion, patience, and knowledge of available resources. Your support can be a crucial part of their journey to safety and recovery."
      image-name="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/ask_for_help/for_another/3.jpeg"
    />
    <div class="button-container">
      <ButtonViolet name_button="Services" link="/activities/services" aria_label="Link to services"/>
      <ButtonViolet name_button="Contact Us" link="/contact_us" aria_label="Link to contact us"/>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      BCrumbs() {
        return [
          {
            label: "home",
            url: "/",
          },
  
          {
            label: "ask for help",
            url: "/ask_for_help",
          },
        ];
      },
    },
  };
  </script>
  <style scoped>
  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  
  .middle-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: auto;
    margin-bottom: 5vw;
  }
  
  @media screen and (max-width: 850px) {
    .middle-img {
      margin-bottom: 3vh;
      margin-top: 0;
    }
  
    .button-container {
      margin-bottom: 3vh;
    }
  }
  </style>
  