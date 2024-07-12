<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <Head>
      <Title>Helping Hands</Title>
    </Head>
    <div class="image-container">
      <img src = '@/assets/img/main.jpeg' width="1280" height = "536" class="mainImage" alt = "Image">
    </div>

    <BandTripleButton namebutton1="See all projects" link1 = "/activities/projects/" namebutton2="See all services" link2 = "/activities/services/" namebutton3="Activities" link3 = "/activities/" imageName = "https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/homepage/building.jpg" description="Welcome to Helping Hands Anti-Violence Center, a dedicated refuge for women experiencing abuse. Our center provides comprehensive support services including personalized psychological counseling, legal guidance, and secure emergency housing.

We are actively involved in community projects and international initiatives aimed at raising awareness and combating violence against women. Our commitment is to empower women to reclaim their lives and foster a society where every woman can live free from fear.

Join us in our mission to end violence against women and support our efforts towards a safer and more equitable world."></BandTripleButton>
    <BandLeftImg namebutton="Ask for help" link = "/ask_for_help/" imageName = "https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/homepage/askhelp.png" description="At Helping Hands Anti-Violence Center, we offer vital information to help women understand and respond to abuse. Our resources cover various forms of violence, including domestic abuse, sexual assault, and harassment. We provide clear explanations of legal rights, safety planning strategies, and confidential consultations with trained professionals. Our goal is to empower women with knowledge and resources, ensuring they can make informed decisions and take steps towards safety and healing. Whether seeking information for oneself or supporting someone else, our center is committed to providing compassionate support and guidance without judgment."></BandLeftImg>
    <BandRightImg namebutton="Support us" link = "/support_us/" imageName = "https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/homepage/donate.jpg" description="At Helping Hands Anti-Violence Center, your support is crucial in our mission to end violence against women. Donations directly fund essential services like counseling, legal aid, and emergency housing, empowering survivors to rebuild their lives. Volunteers play a vital role by offering their skills in counseling, legal assistance, or community outreach, helping us extend our reach and support more individuals in need. Together, we can create a community where every woman feels safe and empowered. Join us in advocating for a violence-free future and ensuring that every survivor receives the care and resources they deserve. Your contribution makes a meaningful impact in transforming lives and fostering a safer society for all."></BandRightImg>
</template>

<style scoped>
.mainImage{
  height:auto;
  width: 100%;
  margin-bottom: 2%;
  
}

.image-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
