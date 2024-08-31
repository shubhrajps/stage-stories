// import type { NextApiRequest, NextApiResponse } from 'next';

import { allStories, UserStory } from "@/assets/stories";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserStory[]>
) {
  const stories: UserStory[] = allStories;
  res.status(200).json(stories);
}