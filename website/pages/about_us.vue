<template>
    <Head>
      <Title>About Us - Helping Hands</Title>
    </Head>
    <BreadCrumbs :crumbs="BCrumbs"/>
    <div class="top-container">
        <div class="back-button">
            <BackButton />
        </div>
        <div class="center-title">
        About Us
        </div>
    </div>
    <div class="bands">
        <BandRightNoButton description="Our Center, established 15 years ago,was originally and infancy school.The transformation of the old school building into a modern support center symbolizes hope and new beginnings for the women it serves, ensuring they receive the care and assistance they deserve." imageName="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/about_us/img1.jpg"/>
        <BandLeftNoButton description="The center offers comprehensive services, including counseling, legal assistance, and support groups, all aimed at empowering women and aiding their recovery. The Center provides a safe and secure place for women to stay, ensuring they are protected from immediate harm. Counseling services are available to help women process their experiences, develop coping strategies, and rebuild their self-esteem. Legal assistance is provided to help navigate the complexities of the legal system, including obtaining restraining orders and other necessary legal protections. Support groups offer a space for women to connect with others who have similar experiences, fostering a sense of community and mutual support." imageName="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/about_us/img2.jpg"/>
        <BandLeftImg description="The center boasts a dedicated and compassionate staff committed to empowering women and aiding their recovery. Our team includes experienced counselors who provide individual and group therapy, helping women process their trauma and develop resilience. Legal advocates are available to assist with navigating the legal system, offering support in obtaining restraining orders, child custody, and other necessary legal protections.Our team is rounded out by volunteers and community partners who assist with daily operations and provide additional resources. " imageName="https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/all_img/about_us/img3.jpg" namebutton="Team" link="/our_team" aria_label="Link to out team"/>
    </div>
</template>

<script>
import BandRightNoButton from '~/components/BandRightNoButton.vue';

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
