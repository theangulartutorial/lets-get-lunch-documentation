## Recommendations

### Get Recommendations

Retrieves restaurant recommendations for an event.

```endpoint
GET /api/recommendations/{id}
```

#### Example header

```javascript
'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ld1VzZXIiLCJfaWQiOiI1YTU1MGVhNzM5ZmJjNGNhM2VlMGNlNTgiLCJpYXQiOjE1MTU1MjQzOTksImV4cCI6MTUxNTUzMTU5OX0.aLrBPqUHEpaSXYnuM5Mq8OdhCB_H6h8ieumSy8SIfro'
```

#### Example response

```json
{
  "results_found": 13791,
  "results_start": 0,
  "results_shown": 20,
  "restaurants": [
    {
      "restaurant": {
        "R": {
          "res_id": 16921606
        },
        "apikey": "c7803226951a33f15b8597c0e12d3184",
        "id": "16921606",
        "name": "Joe's Stone Crab",
        "url": "https://www.zomato.com/miami/joes-stone-crab-south-beach?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "11 Washington Ave, Miami Beach 33139",
          "locality": "South Beach",
          "city": "Miami",
          "city_id": 291,
          "latitude": "25.7684080000",
          "longitude": "-80.1353150000",
          "zipcode": "33139",
          "country_id": 216,
          "locality_verbose": "South Beach, Miami"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Seafood",
        "average_cost_for_two": 100,
        "price_range": 4,
        "currency": "$",
        "offers": [],
        "thumb": "",
        "user_rating": {
          "aggregate_rating": "4.6",
          "rating_text": "Excellent",
          "rating_color": "3F7E00",
          "votes": "2818"
        },
        "photos_url": "https://www.zomato.com/miami/joes-stone-crab-south-beach/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/miami/joes-stone-crab-south-beach/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/16921606",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/miami/joes-stone-crab-south-beach/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    }
    // Additional listings removed for brevity
  ]
}
```

### Recommendations Errors

On error, the server responds with different HTTP status codes. The JSON response body includes a `message` property with a human-readable explanation of the error. If a server error occurs, the HTTP status code will be `500` or higher.

Endpoint | HTTP Status Code | Error Message | Description
|---|---|---|---
`GET /api/recommendations/{id}` | `500` | `Something went wrong!` | A server error occurred
