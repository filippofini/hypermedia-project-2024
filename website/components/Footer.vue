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
                <a href="https://www.instagram.com" target=”_blank” aria-label="Link to Instagram"><img src="../assets/img/contacts/instagram_logo.png" alt="Instagram Logo" class="instagram-footer"></a>
                <a href="https://www.facebook.com" target=”_blank” aria-label="Link to Facebook"><img src="../assets/img/contacts/instagram_logo.png" alt="Facebook Logo" class="facebook-footer"></a>
                <a href="https://twitter.com/home" target=”_blank” aria-label="Link to Twitter"><img src="../assets/img/contacts/instagram_logo.png" alt="Twitter Logo" class="twitter-footer"></a>
            </div>

        </div>
    </footer>
</template>

<style scoped>
    footer{
        background-color: #B96090;
        flex-shrink: 0;
        text-align: center;
        margin-top: auto;
        color: white;
    }

    .bottom {
        display: flex;
        justify-content: space-evenly;
        gap: 10rem;
    }

    .socials{
        display: flex;
        justify-content: center;
        align-items: center;   
    }

    .instagram-footer, .facebook-footer, .twitter-footer{
        max-width: 15%;
        height: auto;;
    }

</style>