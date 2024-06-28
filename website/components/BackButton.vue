<template>  
    <button class="button-container">
        <a href="" class="b-button" @click.prevent="$router.back()" role="button" aria-label="Back button" >
            <img src="@/assets/img/bb_arrow.png" alt = "back button" ></img>
        </a>  
    </button>
</template>

<style scoped>
    button {
        border: solid;     
        cursor: pointer;
    }

    .button-container {        
        width: 3vw;
        height: 3vw;
        min-width: 40px;
        min-height: 40px;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color:  #B6244F; 
        border-color:#871b3b ;
        transition: all 0.2s ease-out;
    }

    .b-button {
        color: white;
        font-weight: bolder;
        font-size: xx-large;
        border-radius: 50%;
        text-decoration: none;

              
        
    }

    .b-button img{
        object-fit: contain;   
        width: 90%;
        height: 90%;
        display: flex;
        align-items: center;
    }

    .button-container:hover {
        background-color: #871b3b;
        border-color:#871b3b ;
    }

    .button-container:active {
        background-color: #871b3b;
        border-color:#871b3b ;
    }
</style>

