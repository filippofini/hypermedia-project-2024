
<template>
    <Head>
        <Title>Helping Hands</Title>
    </Head>
    <main>
        <div class = "page">
            <div class="bar-button-disposistion">            
                <TopBar />            
            </div>
            <slot />
           <Chatbot/>
            <Footer></Footer>
        </div>
    </main>

</template>
<style >
    .page{
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0%;
    }



</style>