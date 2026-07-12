import { getRecommendedStories as getRecommendedStoriesService } from '../../services/stories/getRecommendedStories.js';

export async function getRecommendedStories(req, res, next) {
  try {
    const stories = await getRecommendedStoriesService();

    return res.status(200).json({
      status: 200,
      message: 'Successfully found recommended stories',
      data: stories,
    });
  } catch (error) {
    next(error);
  }
}
