import { Product } from '../types';

export const fetchGoogleSheets = async (url: string): Promise<Product[]> => {
  return fetch(url)
    .then((response) => response.body)
    .then((rb) => {
      if (!rb) return null;
      const reader = rb.getReader();

      return new ReadableStream({
        start(controller) {
          // The following function handles each data chunk
          function push() {
            // "done" is a Boolean and value a "Uint8Array"
            reader.read().then(({ done, value }) => {
              // If there is no more data to read
              if (done) {
                console.log('done', done);
                controller.close();
                return;
              }
              // Get the data and send it to the browser via the controller
              controller.enqueue(value);
              push();
            });
          }

          push();
        },
      });
    })
    .then((stream) => {
      // Respond with our stream
      return new Response(stream).text();
    })
    .then((result) => {
      // parse to json format
      const responseJSON = JSON.parse(
        result
          .split('\n')[1]
          .replace(/(^google\.visualization\.Query\.setResponse\(|\);$)/g, '')
      );
      return responseJSON.table.rows;
    });
};
