
<template>
    <div class="page">
        <div class="bar-button-disposistion">            
            <TopBar />
                        
        </div>
        <slot />
        <Footer />
    </div>
</template>
<style>
    .page{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    body {
     margin: 0;
    } 


</style>