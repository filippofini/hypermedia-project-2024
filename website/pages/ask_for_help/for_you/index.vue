<template>
  <Head>
    <Title>Help for you - Helping Hands</Title>
  </Head>
  <BreadCrumbs :crumbs="BCrumbs" />
  <div class="top-container">
    <div class="back-button">
      <BackButton />
    </div>
    <div class="center-title">Help for You</div>
  </div>

  <DropdownList class="list" />

  <BandRightNoButton
    description="If you recognize these situations in your life or feel unsafe, it's important to take action for your safety and well-being. Don’t hesitate to seek help; our team is ready to support you in finding a path to safety and recovery.
                Immediate and compassionate help is available, and we can guide you through your options. You can also visit our headquarters at 32, Piazza Leonardo da Vinci for face-to-face assistance and resources tailored to your needs." image-name="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/ask_for_help/for_you/1.jpg"
  />
  <BandLeftNoButton
    description="If you are experiencing any form of violence or abuse, such as physical, emotional, psychological, sexual, financial, or social isolation, it is crucial to seek help immediately. Abuse can have long-term effects on your well-being, but support is available. Reach out to us confidentially at 123-456-7890, or send an email to contact.mail@mail.com. 
                You are not alone, and we are here to provide the assistance you need." image-name="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/ask_for_help/for_you/2.jpg"
  />

  <div class="button-container">
    <ButtonViolet
      name_button="Services"
      link="/activities/services"
      aria_label="Link to services"
    />
    <ButtonViolet
      name_button="Contact Us"
      link="/contact_us"
      aria_label="Link to contact us"
    />
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
    margin-top: 2%;
    }
    .list {
    margin-bottom: 3vw;
    }

    @media screen and (max-width: 850px) {
    .button-container {
        margin-bottom: 3vh;
    }
    }
</style>
