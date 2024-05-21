<template>
    <footer>
        <div class="bottom">
                <div class="number">
                    <h3>Number:</h3>
                    <p>1-800-123-4567</p>
                </div>
                <div class="email">
                    <h3>Email:</h3>
                    <p>@example.com</p>
                </div>
                <div class="address">
                    <h3>Headquarters:</h3>
                    <p>1234 Street Name, City Name, United States</p>
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
        text-align: center;
        margin-top: auto;
        color: white;
        font-family: 'Jost'; 
    }

    .bottom {
               
        padding: 0px 20px 0px 20px;
        margin-bottom: 10px;        
        display: flex;
        justify-content: space-between;
        align-items: center;

        
    }

    .socials{
        display: flex;
        justify-content: space-evenly;
        align-items: center;   
        max-width: 25%;
             
        
    }

   

    .instagram-footer, .facebook-footer, .twitter-footer{
        max-width:40%;
        height: auto;
        margin: 0 0;
        padding: 0 0;        
    }

    .number, .email, .address{
        margin: 0;
        padding: 0;
        font-size: small;
    }

</style>