<template>
    <div>
        <div class="header">
            <Header></Header>
        </div>
        <van-row class="headerDetails">
            <van-col span="24"> <HeaderDetails></HeaderDetails></van-col>
        </van-row>
        <div class="headerDetails">
           
        </div>
        <div>
            <FooterDetails></FooterDetails>
        </div>
    </div>
</template>
<script>
import Header from '../../components/Header'
import HeaderDetails from '../../components/HeaderDetails'
import FooterDetails from '../../components/FooterDetails'
export default {
    components:{
        HeaderDetails,
        FooterDetails,
        Header
    }
}
</script>
<style scoped>
.headerDetails{
    padding-top: 50px;
}
.headerDetails{
    width: 100%
}
</style>
