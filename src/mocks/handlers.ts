import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('https://swapi.dev/api/', ({request}) => {
    const url = new URL(request.url);
    if(url.searchParams.getAll('starships/?page=1&format=json')){
      return HttpResponse.json([{
            "name": "CR90 corvette",
            "films": [
            "https://swapi.dev/api/films/1/",
          ],
          }])
    }

    return HttpResponse.json([{
      title: 'A New Hope112',
    }])
  }),
 
]