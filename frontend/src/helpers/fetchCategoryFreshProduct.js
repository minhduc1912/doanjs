const { default: SummaryApi } = require("../common")

const fetchCategoryFreshProduct = async(category)=>{
    const response = await fetch(SummaryApi.categoryFreshProduct.url,{
        method : SummaryApi.categoryFreshProduct.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    })

    const dataResponse = await response.json()

    return dataResponse
}

export default fetchCategoryFreshProduct