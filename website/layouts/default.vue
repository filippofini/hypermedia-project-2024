
<template>
    <div >
        <div class="bar-button-disposistion">            
            <TopBar />            
        </div>
        <slot />
        <Chatbot />
        <Footer />
    </div>
</template>
<style scoped>
    .page{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
    }



</style>