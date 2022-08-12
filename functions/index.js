import functions from 'firebase-functions';

export const maps = functions.runWith({ invoker: 'public' }).https.onRequest((request, response) => {
  console.log("didn't timeout");

  return response.status(200).send('Hello from Firebase!');
});
