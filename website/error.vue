<template>    
    <NuxtLayout>
        <div class="error-area">
            <div class="error-header">                   
                <div class="error-404">404</div>  
            </div>
            <div class="title-page-1-5">Sorry, we couldn't find the page you where looking for...</div><br>
            
                
                <div class="dx">                    
                    <div class="error-text">You can visit our website at:</div>
                    <ButtonViolet class="hp-button" name_button = "Homepage" link="/"></ButtonViolet>
                </div>           

        </div> 
    </NuxtLayout>            

</template>



<style>

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

    
    .error-area {
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

    @media screen and (max-width: 800px) {
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-top: 10vh;
        }
    }

</style>