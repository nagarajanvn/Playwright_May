import {test, expect} from '@playwright/test'
import { request } from 'node:http'

var userid = "ff8081819d82fab6019ea815fa58523a"

test('GetMethod', async({request})=>
{
    // pass the get url
    const response = await request.get("https://api.restful-api.dev/objects")
    
    // print the response json
    console.log(await response.json())

    // verify the status code as 200
    expect(response.status()).toBe(200)
    console.log(response.statusText)
})

test('Post Method', async({request})=>
{
    const response = await request.post("https://api.restful-api.dev/objects",
        {
        
            data: {
                "name": "Apple MacBook Pro 16",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                },
            headers:{
                "Accept":"application/json"
            }  
        } });
        console.log(await response.json())
        expect(response.status()).toBe(200)

        var res = await response.json()
        userid = res.id
        console.log(userid)

    })

    test('Put method', async({request})=>
    {
        const response = await request.put("https://api.restful-api.dev/objects/ff8081819d82fab6019ea815fa58523a",

            {
            data: {
            "id": userid,
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2026,
               "price": 2222.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB",
               "color": "silver"
            },
            headers:{
                "Accept":"application/json"
            }  
         } });
    console.log(await response.json())
    expect(response.status()).toBe(200);
})

test('Patch Method', async({request})=>
{
    const response = await request.patch("https://api.restful-api.dev/objects/ff8081819d82fab6019ea815fa58523a",
        {
            data:
            {
                "name": "Apple MacBook M5 Pro"
            },
            headers:
            {
                Accept: "application/json"
            }
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test('Get Single value', async({request})=>
{
    const response = await request.get("https://api.restful-api.dev/objects/ff8081819d82fab6019ea815fa58523a")
    console.log(await response.json())
    expect(response.status()).toBe(200)
})
test('Delete Method', async({request})=>
{
    const response = await request.delete("https://api.restful-api.dev/objects/ff8081819d82fab6019ea815fa58523a")
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test('Get value', async({request})=>
{
    const response = await request.get("https://api.restful-api.dev/objects/ff8081819d82fab6019ea80540705224")
    console.log(await response.json())
    expect(response.status()).toBe(404)
})