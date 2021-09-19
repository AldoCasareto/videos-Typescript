import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Video } from './Video';
import * as videoService from './VideoService';
import { useHistory, useParams } from 'react-router-dom';
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { Button } from '@chakra-ui/button';
import { Stack } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

interface Params {
  id?: string;
}

const VideoForm = () => {
  const initialState = {
    title: '',
    description: '',
    url: '',
  };
  const [newVideo, setNewVideo] = useState<Video>(initialState);
  const history = useHistory();
  const params = useParams<Params>();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewVideo({ ...newVideo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (params.id) getVideo(params.id);
  }, []);

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id);
    const { title, description, url } = res.data;

    setNewVideo({ title, description, url });
    console.log(res.data);
    console.log(newVideo);
    console.log(setNewVideo);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await videoService.CreateVideos(newVideo);
      setNewVideo(initialState);
      toast.success('New video created!');
    } else {
      await videoService.updateVideo(params.id, newVideo);
    }
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <FormControl id='title' isRequired>
          <FormLabel as='legend'>Title </FormLabel>
          <Input
            onChange={handleInputChange}
            id='title'
            name='title'
            type='text'
            placeholder='Title'
            value={newVideo.title}
          />
        </FormControl>
        <FormControl id='title' isRequired>
          <FormLabel as='legend'>URL </FormLabel>
          <Input
            onChange={handleInputChange}
            name='url'
            type='text'
            placeholder='Url'
            value={newVideo.url}
          />
        </FormControl>
        <FormControl id='title' isRequired>
          <FormLabel as='legend'>Description </FormLabel>
          <Textarea
            onChange={handleInputChange}
            name='description'
            placeholder='Description'
            value={newVideo.description}
          />
        </FormControl>

        <Button
          boxShadow='sm'
          _hover={{ boxShadow: 'xl' }}
          bg='cyan.200'
          variant='solid'
          rounded='full'
          type='submit'
        >
          {params.id ? 'Update' : 'Create'}
        </Button>
      </Stack>
    </form>
  );
};

export default VideoForm;
