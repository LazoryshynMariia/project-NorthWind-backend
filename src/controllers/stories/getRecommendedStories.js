import { getRecommendedStories as getRecommendedStoriesService } from '../../services/stories/getRecommendedStories.js';
import { addSavesCountToStories } from '../../services/savedStories/getSavesCount.js';

export async function getRecommendedStories(req, res, next) {
  try {
    const stories = await getRecommendedStoriesService();
    const storiesWithSavesCount = await addSavesCountToStories(stories);

    return res.status(200).json({
      status: 200,
      message: 'Successfully found recommended stories',
      data: storiesWithSavesCount,
    });
  } catch (error) {
    next(error);
  }
}
