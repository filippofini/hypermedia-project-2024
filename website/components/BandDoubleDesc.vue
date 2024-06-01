<template>
    <div class="cointeiner-double">
        <div class="double-sx">
            <div class="title">
                <p>Donate</p>
            </div>
            <div class="description">
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <ButtonViolet class="button-spacing" name_button="Donate" link="/donate" aria_label="Link to donate"/>
        </div>
        <div class="double-dx">
            <div class="title">
                <p>Volunteer</p>
            </div>
            <div class="description">
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <ButtonViolet class="button-spacing" name_button="Volunteer" link="/volunteer" aria_label="Link to volunteer"/>
        </div>
    </div>
</template>


<style scoped>
    .cointeiner-double{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .title {
        font-family: Jost;
        font-size: 30px;
        margin-bottom: 30px;
    }   
    .double-sx{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 7vw;
        padding-left: 7vw;
        font-size: 1.2vw; 
        font-family: 'Jost'; 
        background-color: color;
        align-items: center;
        
    }
    .double-dx{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 7vw;
        padding-left: 7vw;
        font-size: 1.2vw; 
        font-family: 'Jost'; 
        background-color: color;
        align-items: center;   
    }

    .description{
        max-width: 100%;
        word-break: break-word;
    }

    .button-spacing {
        margin-top: 40px;
    }

</style>