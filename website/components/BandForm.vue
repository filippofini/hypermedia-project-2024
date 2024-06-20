<template>
    <div class="container">
        <div class="contact-info">
            <div class="title"> Contact Form </div>
            <p class="description"> Siamo qui per aiutarti! Se hai domande, richieste di informazioni o necessiti di assistenza, non esitare a contattarci. Compila il modulo sottostante con i tuoi dettagli e il nostro team di supporto ti risponderà il prima possibile. Ci impegniamo a fornirti un servizio rapido ed efficiente. Grazie per aver scelto di contattarci! </p>
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
        background-color: #FFCDDC;
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
        background-color: #52417D;
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
        font-size: 3vh;
        font-weight: 500;
        margin-bottom: 2vw;
    }

    @media screen and (max-width: 800px) {
        .container{
            display: flex;            
            flex-direction: column;
            flex-wrap:wrap;
            justify-content: center;
            align-items: center;            
        }
        .title,.description,.title-page-2{
            text-align: center;
            
        }
        .contact-info{
            padding-right: 0;
            width: 100%;
        }
        .form{
            width: 90%;
        }
        .instagram-footer, .facebook-footer, .twitter-footer{
            width: 6vw;
        }       

    }

</style>