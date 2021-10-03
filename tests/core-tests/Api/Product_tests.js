Feature('get all product test api');
var faker= require('faker');


Scenario('create multiple simple product',async({I})=>{
    for(i=0;i<5;i++){
    const payload ={
        author_id: 2,
        name: faker.name.firstName(),
        type: "simple",
        regular_price: faker.commerce.price(10, 100),
        description: faker.commerce.productDescription(),
        short_description: faker.random.words(5),
        categories: [{
            id: 23
        }, ]
    }

    const res = await I.sendPostRequest('https://dokan.ajaira.website/wp-json/dokan/v1/products/',payload);
    I.assertEqual(res.status,200);
    //console.log(res.store.id);
    console.log(res.data);
    console.log(res.data.store.id);
    }
})

Scenario('Update Product', async({I})=>{
    const payload ={
        "id": 6807,
        
        "name": "Dina22",
        "slug": "dinoa576475"
    }
    const res = await I.sendPostRequest('https://dokan.ajaira.website/wp-json/dokan/v1/products/6807',payload);
    I.assertEqual(res.status,200);
    //console.log(res.store.id);
    console.log(res.data);
    


})  

Scenario('Get all products',async({ I })=>{
const response= await I.sendGetRequest('https://dokan.ajaira.website/wp-json/dokan/v1/products/');
//I.assertEqual(response.status,200);
console.log(response.data);
});

Scenario('Delete product', async({I})=>{
    const res = I.sendDeleteRequest('https://dokan.ajaira.website/wp-json/dokan/v1/products/6807');
    console.log('Product is delete',res.id)

})