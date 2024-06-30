<template>
    <div class="container">
        <div class="contact-info">
            <div class="title"> Contact Form </div>
            <p class="description">We are here to help you! If you have any questions, information requests, or need assistance, please don't hesitate to contact us. Fill out the form below with your details, and our support team will respond as soon as possible. We are committed to providing you with fast and efficient service. Thank you for choosing to contact us! </p>
            <h3 class="title-page-2">contact.mail@mail.com</h3>
            <div class="socials">
                <a href="https://www.instagram.com" target=”_blank” aria-label="Link to Instagram"><img src="../assets/img/contacts/instagram_logo_hover.png" alt="Instagram Logo" class="instagram-footer"></a>
                <a href="https://www.facebook.com" target=”_blank” aria-label="Link to Facebook"><img src="../assets/img/contacts/facebook_logo_hover.png" alt="Facebook Logo" class="facebook-footer"></a>
                <a href="https://twitter.com/home" target=”_blank” aria-label="Link to Twitter"><img src="../assets/img/contacts/twitter_logo_hover.png" alt="Twitter Logo" class="twitter-footer"></a>
            </div>
        </div>
        
        <div class="form">
            <ContactForm />
        </div>
    </div>
</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
    .container{
        display: flex;
        padding: 2vw 5.5vw 2vw 5.5vw;
        flex-direction: row;
        justify-content: center;
        background-color: #A78BCA;
        margin-bottom: 2%;
    }

    .contact-info{
        font-family: Jost;
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-right: 6vw;
    }

    .form{
        font-family: Jost;
        display: flex;
        flex-direction: column;
        background-color: #643173;
        padding: 1vw;
        border-radius:20px;
        width: 50%;
    }

    .socials{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.3vw;
        
    }

    .instagram-footer, .facebook-footer, .twitter-footer{
        width: 3.3vw;
        height: auto;
        position: relative;
        transition: 0.1 ease-in-out; 
        padding: 0.5vw;
        
    }

    .instagram-footer:hover, .facebook-footer:hover, .twitter-footer:hover {
        transform: scale(1.1);
    }

    .instagram-footer:active, .facebook-footer:active, .twitter-footer:active {
        transform: scale(1);
    }

    .title{
        font-family: Jost;
        font-size: 4vh;
        font-weight: 600;
        margin-bottom: 2vw;
    }

    @media screen and (max-width: 850px) {
        .container{
            display: flex;           
            flex-wrap:wrap;
            justify-content: center;
            align-items: center; 
            margin-bottom: 3vh;

        }
        .title,.description,.title-page-2{
            text-align: center;
            
        }
        .contact-info{
            padding-right: 0;
            width: 100%;
        }
        .form{
            width: 100%;
        }
        .instagram-footer, .facebook-footer, .twitter-footer{
            width: 6vw;
        }       

    }

</style>