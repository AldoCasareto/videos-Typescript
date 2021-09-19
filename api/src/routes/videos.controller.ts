import { RequestHandler } from 'express';
import Video from './Video';

export const createVideos: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({ message: 'please upload a different video' });
  const newVideo = new Video(req.body);
  await newVideo.save();
  res.json(newVideo);
};

export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id);
  res.json(videoFound);
};

export const getVideos: RequestHandler = async (req, res) => {
  const allVideos = await Video.find();
  return res.json(allVideos);
};
export const deleteVideo: RequestHandler = async (req, res) => {
  const deleteVideo = await Video.findByIdAndDelete(req.params.id);
  return res.json(deleteVideo);
};

// export const deleteVideos: RequestHandler = (req, res) =>
//   res.json('getting videos');
export const updateVideo: RequestHandler = async (req, res) => {
  const updateVideo = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(updateVideo);
};
