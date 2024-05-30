<template>
    <div class="container">
        <div class="contact-info">
            <h1> Contact Form </h1>
            <p class="contact-text"> Siamo qui per aiutarti! Se hai domande, richieste di informazioni o necessiti di assistenza, non esitare a contattarci. Compila il modulo sottostante con i tuoi dettagli e il nostro team di supporto ti risponderà il prima possibile. Ci impegniamo a fornirti un servizio rapido ed efficiente. Grazie per aver scelto di contattarci! </p>
            <h3 class="contact-mail">contact.mail@mail.com</h3>
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
    .container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: #FFCDDC;
    }

    .contact-info{
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 40px;
    }

    .form{
        display: flex;
        flex-direction: column;
        background-color: #52417D;
        padding: 10px;
        border-radius: 20px;
        width: 50%;
        margin: 40px;
    }

    h1{
        margin-left: 20px;
        margin-top: 20px;
    }

    .contact-text{
       max-width: 80%;
       margin-top: 20px;
       margin-left: 20px;
       word-break: break-word;
    }

    .contact-mail{
        margin-top: 60px;
        width: 90%;
        text-align: center;
    }

    .socials{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 90%;
    }

    .instagram-footer, .facebook-footer, .twitter-footer{
        width: 50px;
        height: auto;
        position: relative;
        transition: 0.1 ease-in-out; 
        padding: 10px;
    }

    .instagram-footer:hover, .facebook-footer:hover, .twitter-footer:hover {
        transform: scale(1.1);
    }

    .instagram-footer:active, .facebook-footer:active, .twitter-footer:active {
        transform: scale(1);
    }

</style>