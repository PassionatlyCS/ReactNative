import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers :{
        Authorization:
         'Bearer nQzd8ni30HjbsU2dp3xKeuIaGd81tb0DAYm36l9FEihhgLOyrvldF6a-1Jmc4RSMWTksxg_BXShwzAWRDcVXEPTLs4zkmy315HQ7e2RyaIUAA4rmCdDy2gubkaAwYXYx'
    }
    
})