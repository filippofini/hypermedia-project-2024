<template>
    <div class="container-double">
        <div class="double-sx">
            <div class="title-page-1-5">
                <p>Donate</p>
            </div>
            <div class="description">
                <p>Support our mission by making a donation. Your contribution helps us fund vital projects, expand our reach, and make a difference. Every donation, big or small, matters. Thank you for your generosity!</p>
            </div>
            <ButtonViolet class="button-spacing" name_button="Donate" link="/support_us/donate" aria_label="Link to donate"/>
        </div>
        <div class="double-dx">
            <div class="title-page-1-5">
                <p>Volunteer</p>
            </div>
            <div class="description">
                <p>
                    Join us as a volunteer and make a meaningful impact. Your time and skills can help us achieve our goals and support our community. Together, we can make a difference. Sign up today!
                </p>
            </div>
            <ButtonViolet class="button-spacing" name_button="Volunteer" link="/support_us/volunteer" aria_label="Link to volunteer"/>
        </div>
    </div>
</template>


<style scoped>
    .container-double{
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
        font-family: 'Jost'; 
        background-color: color;
        align-items: center;   
    }

    .button-spacing {
        margin-top: 2vw;
    }

    @media screen and (max-width: 850px) {
        .container-double{
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 3vh;
        }
        .double-dx{
            margin-top: 3vh;
        }

    }


</style>