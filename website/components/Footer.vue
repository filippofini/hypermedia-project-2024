<template>
    <footer>
        <div class="bottom">
            <div class="informations">
                <div class="number">
                    <b>Number</b>
                    <p>1-800-123-4567</p>
                </div>
                <div class="email">
                    <b>Email</b>
                    <p>@example.com</p>
                </div>
                <div class="address">
                    <b>Headquarters</b>
                    <p>1234 Street Name, City Name, United States</p>
                </div> 
            </div>
            <div class="socials">
                <a href="https://www.instagram.com" target=”_blank” aria-label="Link to Instagram"><img src="../assets/img/contacts/instagram_logo_hover.png" width = "512" height = "512" alt="Instagram Logo" class="instagram-footer"></a>
                <a href="https://www.facebook.com" target=”_blank” aria-label="Link to Facebook"><img src="../assets/img/contacts/facebook_logo_hover.png" width = "512" height = "512" alt="Facebook Logo" class="facebook-footer"></a>
                <a href="https://twitter.com/home" target=”_blank” aria-label="Link to Twitter"><img src="../assets/img/contacts/twitter_logo_hover.png" width = "512" height = "512" alt="Twitter Logo" class="twitter-footer"></a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
    footer{
        background-color: #B96090;
        flex-shrink: 0;
        border-top: 5px solid #F2D3E7;
        color: #000000;
        font-family: 'Jost';
        font-size: 0.9vw;
    }

    b{
        font-size: 1vw;
    }

    .socials{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2vw;

    }

    .instagram-footer, .facebook-footer, .twitter-footer{
        width: 2.5vw;
        height: auto;
        position: relative;
        transition: 0.1 ease-in-out; 
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
    }
    
    .informations{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10vw;
        padding-top: 1.5vw;
        padding-bottom: 1vw;
    }

   .contacts{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3.0vw;  
    }

    @media screen and (max-width: 768px) {

        .bottom {
            flex-direction: column-reverse;
            text-align: center;
            margin-top: 0; 
        }

        .informations{
            flex-direction: column-reverse;
            gap: 1.0vw;
            padding-bottom: 0;
        }

        .address, .number, .email{
            padding: 0; 
        }

        .socials{
            margin-top: 1.5vw;
        }
    }

</style>