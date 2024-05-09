import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'he39d1od',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 300 CORS policy
// sanity cors add http://localhost:3000
export default client;