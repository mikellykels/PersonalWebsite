import { purgeCache } from '@netlify/functions';

export default async () => {
  console.log('Purging cache after deploy');
  await purgeCache();
  return new Response('Cache purged!', { status: 202 });
};
