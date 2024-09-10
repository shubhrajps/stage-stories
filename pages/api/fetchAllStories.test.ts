import { allStories } from '@/assets/stories';
import handler from './fetchAllStories';
import { NextApiRequest, NextApiResponse } from 'next';

describe('API Route: /api/fetchAllStories', () => {
  it('responds with all user stories', async () => {
    const req: NextApiRequest = { method: 'GET' } as any;
    const res: NextApiResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(allStories);
  });
});