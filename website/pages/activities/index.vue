<template>
    <Head>
      <Title>Activities - Helping Hands</Title>
    </Head>
    <BreadCrumbs :crumbs="BCrumbs"/>

    <div class="top-container">
      <div class="back-button">
        <BackButton />
      </div>
      <div class="center-title">
        Activities
      </div>
    </div>

    <div class="quickdescription">
        Welcome to the Activities page of our website,
         dedicated to the critical mission of ending violence against women. Here, 
         you will find a comprehensive overview of our projects and services, each carefully designed to support, 
         empower, and protect women who have experienced or are at risk of violence.
    </div>

    <BandLeftImg 
        description=
        "In our context, projects refer to structured and time-bound initiatives
        aimed at achieving specific objectives within our broader mission. These projects often involve a
        combination of research, advocacy, education, and direct support services. They are typically collaborative
        efforts involving various stakeholders, including community organizations, government agencies, and international
        partners. Our projects are driven by the latest research and best practices in the field, ensuring that we make a
        tangible impact on the livesof women and girls." 
        namebutton="Projects" 
        imageName ="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/activities/activities_project.jpg"
        link = "/activities/projects/"
        aria_label="link to projects">
    </BandLeftImg>

    <BandRightImg 
        description=
        "Our services provide direct and immediate support to women who have experienced or are at risk of violence. 
        We offer crisis intervention through 24/7 hotlines and emergency shelter, along with professional counseling and 
        therapy to help survivors heal from trauma. Legal assistance is available to guide survivors through the justice 
        system and address related legal issues. We also provide medical care, including forensic examinations and ongoing healthcare. 
        Our advocacy and case management services offer personalized support to access resources and understand rights, while our support 
        groups create a space for mutual understanding and healing. All our services are confidential, compassionate, and tailored to meet 
        the unique needs of each individual, empowering women to reclaim their lives and move toward a future free from violence."
        namebutton="Services" 
        imageName ="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/activities/activities_service.jpg" 
        link = "/activities/services/"
        aria_label="link to services"/>
    
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

  .quickdescription{
    display: flex;
    font-family: Jost;
    font-size: 2.3vh;
    font-weight: 400;
    width: 80%;
    text-align: center;
    margin-top: 0vw;
    padding-bottom: 4vw;
    padding-top:0vw;
    display: flex;  
    align-self: center;
  }

  @media screen and (max-width: 850px) {
    .quickdescription{
      margin-bottom: 3vh;
    }
    
  }
</style>