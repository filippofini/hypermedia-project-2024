<template>
    <footer>
        <div class="bottom">
            <div class="informations">
                <div class="contacts">
                    <div class="number">
                        <b>Number</b>
                        <p>1-800-123-4567</p>
                    </div>
                    <div class="email">
                        <b>Email</b>
                        <p>@example.com</p>
                    </div>
                </div>
                <div class="address">
                    <b>Headquarters</b>
                    <p>1234 Street Name, City Name, United States</p>
                </div>
            </div>    

            <div class="socials">
                <a href="https://www.instagram.com" target=”_blank” aria-label="Link to Instagram"><img src="../assets/img/contacts/instagram_logo_hover.png" alt="Instagram Logo" class="instagram-footer"></a>
                <a href="https://www.facebook.com" target=”_blank” aria-label="Link to Facebook"><img src="../assets/img/contacts/facebook_logo_hover.png" alt="Facebook Logo" class="facebook-footer"></a>
                <a href="https://twitter.com/home" target=”_blank” aria-label="Link to Twitter"><img src="../assets/img/contacts/twitter_logo_hover.png" alt="Twitter Logo" class="twitter-footer"></a>
            </div>

        </div>
    </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
    footer{
        background-color: #B96090;
        flex-shrink: 0;
        margin-top: auto;
        border-top: 5px solid #F2D3E7;
        min-height: 1vh;
        color: white;
        font-family: 'Jost'; 
    }

    .socials{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
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

    .bottom {                
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
    .informations{
        display: flex;
        flex-direction: row;
        gap: 70px;
    }

    .number, .email, .address{
        font-size: 13px;
        padding: 10px;
    }

   .contacts{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 70px;  
    }

    @media screen and (max-width: 768px) {

        .bottom {
            flex-direction: column-reverse;
            text-align: center;
            margin-top: 0; 
        }

        .informations{
            flex-direction: column-reverse;
            gap: 10px;
        }

        .address, .number, .email{
            padding: 0; 
        }

    }

</style>