<template>    
    <NuxtLayout>
        <div class="container">
            <div class="error-header">                   
                <div class="error-type">404</div>  
            </div>
            <div class="title-page-1-5">Sorry, we couldn't find the page you where looking for...</div><br>
            
                
                <div class="dx">                    
                    <div class="error-message">You can visit our website at:</div>
                    <ButtonViolet class="hp-button" name_button = "Homepage" link="/"></ButtonViolet>
                </div>           

        </div> 
    </NuxtLayout>            

</template>



<style scoped>

    .hp-button {
        scale: 1.5;
        margin-top: 10%;
    }

    .error-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow: hidden;
    }

    
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 78.5vh;
        width: 100%;
    }
    .dx {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 850px) {
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-top: 3vh;
        }
    }

</style>