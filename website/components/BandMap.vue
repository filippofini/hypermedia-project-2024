<template>
     <div class="map-container">
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.5880670256283!2d9.224681274798554!3d45.4781014325131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f67dd11753%3A0x8e30fae1774a3377!2sPolitecnico%20di%20Milano!5e0!3m2!1sit!2sit!4v1716458331202!5m2!1sit!2sit" width="600" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Map showing the location of our company"></iframe>
            <div class="map-description">
                <div class="text-2">We are here</div><br>
                <div class="map-address">Politecnico di Milano<br>Piazza Leonardo da Vinci, 32<br>Milan, Italy</div>
            </div>
        </div>
</template>

<style scoped>
.map-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-family: 'Jost';
}
.map{
    width: 40vw;
    height: 50vh;
}

.map-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Jost';
    
}

.text-2 {
    font-size: 4vh;
    font-weight: 600;
    font-family: 'Jost';
    text-align: center;
}

.map-address {
    font-size: 2.3vh;
    font-weight: 300;
    font-family: 'Jost';
    text-align: center;
}

@media screen and (max-width: 850px) {
    .map-container{
        display: flex;            
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;                  
    }
    .map-description{
        margin-bottom: 3vh;
    }
    .map{
        width: 80vw;
        height: 40vh;
        margin-bottom: 3vh;
    }
}

</style>
