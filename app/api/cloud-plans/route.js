import { getCloudPlans } from '../../lib/cloudPlans';

export async function GET() {
  const data = await getCloudPlans();

  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
