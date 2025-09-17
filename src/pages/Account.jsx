import React from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'

const Account = () => {
  return (

    <div>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src='WhatsApp Image 2024-06-17 at 10.57.23 PM.jpeg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Countries API Project</Heading>
      <Text>
        This Nextjs Project is currently being worked on by 3 members and is at 25% completion.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Flexible
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to Daily Task
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Food order application</Heading>

      <Text py='2'>
        remind to order food for the project members before the end of the week
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Order a delivery
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </div>



  )
}

export default Account