<template>
    <div class="cointeiner-double">
        <div class="double-sx">
            <div class="title-page-1-5">
                <p>Donate</p>
            </div>
            <div class="description">
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <ButtonViolet class="button-spacing" name_button="Donate" link="/donate" aria_label="Link to donate"/>
        </div>
        <div class="double-dx">
            <div class="title-page-1-5">
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
    .double-sx{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 7vw;
        padding-left: 7vw;
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

    .button-spacing {
        margin-top: 40px;
    }

</style>