<template>
    <BreadCrumbs :crumbs="BCrumbs"/>

    
    <ButtonViolet name_button="volunteer" link="/volunteer" aria_label="Link to volunteer"/>
    

    
</template>
<script>
    export default {
        computed: {
            BCrumbs() {                
                return [

                    {
                        label: 'home',
                        url: '/'
                    }
                    
                ];
            }
        }
    }
</script>