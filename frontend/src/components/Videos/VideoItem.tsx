import React from 'react';
import { Video } from './Video';
import { useHistory } from 'react-router-dom';
import * as videoService from './VideoService';
import { Badge, Box, Heading, Text, Stack } from '@chakra-ui/layout';
import ReactPlayer from 'react-player';
import { Button } from '@chakra-ui/button';

interface PropsVideo {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: PropsVideo) => {
  const history = useHistory();
  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    loadVideos();
  };

  return (
    <Box
      w='450px'
      rounded='20px'
      overflow='hidden'
      boxShadow='md'
      bg='gray.100'
      h='510px'
      mx={2}
    >
      <ReactPlayer url={video.url} />
      <Box p={5}>
        <Stack px={1} isInline align='baseline'>
          <Badge variant='solid' rounded='full' color='black' px={2}>
            New!
          </Badge>
          <Badge variant='solid' rounded='full' color='black' px={2}>
            Topic
          </Badge>
          <Text color='black' fontSize='sm'>
            Author
          </Text>
        </Stack>

        <Heading fontWeight='semibold' fontSize='md'>
          {video.title}
        </Heading>
        <Text noOfLines={2} fontWeight='light' color='black' fontSize='sm'>
          {video.description}
        </Text>
        <Box p={1} align='right'>
          <Button
            boxShadow='sm'
            _hover={{ boxShadow: 'xl' }}
            mx={1}
            bg='cyan.200'
            variant='solid'
            rounded='full'
            onClick={() => history.push(`/update/${video._id}`)}
            _active={{ boxShadow: 'lg' }}
          >
            Edit
          </Button>
          <Button
            boxShadow='sm'
            _hover={{ boxShadow: 'xl' }}
            bg='tomato'
            variant='solid'
            rounded='full'
            onClick={() => video._id && handleDelete(video._id)}
            _active={{ boxShadow: 'lg' }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoItem;
