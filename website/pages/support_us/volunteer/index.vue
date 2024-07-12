<template>
    <Head>
      <Title>Volunteer - Helping Hands</Title>
    </Head>
    <div>

        <BreadCrumbs :crumbs="BCrumbs"/>

        <div class="top-container">
            <div class="back-button">
                <BackButton />
            </div>
            <div class="center-title">
            Become a volunteer
            </div>
        </div>
     
        <div class ="container">
            <ImageUpTextDown class="description" description="Become a vital part of our team and contribute to our mission of making a meaningful difference in the lives of others. Your involvement helps provide essential support and resources, fostering positive change and empowerment within our community." imageName="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/volunteer/volunteer1.png" title="Join our team"/> 
            <ImageUpTextDown class="description" description="Every contribution, no matter how small, plays a significant role in creating a greater impact than we could ever achieve alone. Together, we amplify our efforts, creating a ripple effect of positive outcomes that extend far beyond individual actions." imageName="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/volunteer/volunteer2.png" title="Combine our efforts"/> 
            <ImageUpTextDown class="description" description="By standing together, we can advocate for change, support those in need, and work towards a shared vision of a better tomorrow. Our collective strength and unified efforts drive meaningful progress and inspire hope for a brighter future." imageName="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/volunteer/volunteer3.png" title="Unite for a common cause"/> 
        </div>

    </div>

    <div class="button"> 
        <ButtonViolet name_button="Join us" link="/contact_us" aria_label="Link to contact us"/>  
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

    .container{
        display: flex;        
        flex-direction: row;
        justify-content: space-around;     
        
    }

    .button{
        display: flex;        
        justify-content: center;        
        margin-top: 2%;
    }

    @media screen and (max-width: 850px) {
        .container{
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            margin-top: 3vh;
        }

        .description{
            margin-bottom: 5vh;
        }

        .button{
            margin-bottom: 3vh;
        }

    }

</style>

