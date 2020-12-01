<template>
    <div>
        <div class="header">
            <HeaderDetails></HeaderDetails>
        </div>
         <div>
             <router-view></router-view>
         </div>
        <div>
            <FooterDetails></FooterDetails>
        </div>
    </div>
</template>
<script>
import HeaderDetails from '../../components/HeaderDetails'
import FooterDetails from '../../components/FooterDetails'
export default {
    components:{
        HeaderDetails,
        FooterDetails
    }
}
</script>
<style scoped>

</style>