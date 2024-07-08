import { http, HttpResponse } from 'msw'
export const handlers = [

  http.get('https://swapi.dev/api/films/1/', ({request}) => {
    console.log("aaaa",request.url);
    return HttpResponse.json({
      title: 'A New Hope',
    });
  }),
 
]