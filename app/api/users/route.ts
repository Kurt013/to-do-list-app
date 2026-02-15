import prisma from '@/lib/prisma';

export async function GET(req: Request) {
  const user = await prisma.user.findMany();
  return new Response(JSON.stringify(user), { status: 200 });
}
