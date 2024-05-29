<template>
    <BreadCrumbs :crumbs="BCrumbs"/>

    <NuxtLink to="/volunteer" aria-label="Link to volunteer">
        <ButtonViolet name_button="volunteer"/>
    </NuxtLink>

    
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