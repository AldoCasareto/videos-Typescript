import { Video } from './Video';
import axios from 'axios';

const url = `http://localhost:3000/videos`;

export const getVideos = async () => {
  return await axios.get(url);
};
export const CreateVideos = async (video: Video) => {
  return await axios.post(url, video);
};

export const getVideo = async (id: string) => {
  return await axios.get<Video>(`${url}/${id}`);
};
export const updateVideo = async (id: string, video: Video) => {
  return await axios.put<Video>(`${url}/${id}`, video);
};
export const deleteVideo = async (id: string) => {
  return await axios.delete<Video>(`${url}/${id}`);
};
