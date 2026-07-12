import createHttpError from 'http-errors';
import { getStoryById as getStoryByIdService } from '../../services/stories/getStoryById.js';
import { addSavesCountToStory } from '../../services/savedStories/getSavesCount.js';

export async function getStoryById(req, res, next) {
  try {
    const { storyId } = req.params;

    const story = await getStoryByIdService(storyId);

    if (!story) {
      throw createHttpError(404, 'Story not found');
    }

    const storyWithSavesCount = await addSavesCountToStory(story);

    res.status(200).json({
      status: 200,
      message: 'Successfully found story',
      data: storyWithSavesCount,
    });
  } catch (error) {
    next(error);
  }
}
