import { Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { Video } from './Video';
import VideoItem from './VideoItem';
import * as videoService from './VideoService';

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await videoService.getVideos();
    setVideos(res.data);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <Flex>
      {videos.map((video) => {
        return (
          <div>
            <VideoItem video={video} loadVideos={loadVideos} />
          </div>
        );
      })}
    </Flex>
  );
};

export default VideoList;
