import { css } from '@emotion/react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Paper, Typography } from '@mui/material';
import * as contentful from 'contentful';
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import KermitImage from '../assets/img/kermit.jpg';
import ImageTeichkonzertBaeume from '../assets/img/teichkonzert-baeume.jpg';
import ImageTeichkonzertEingang from '../assets/img/teichkonzert-eingang.jpg';
import ImageTeichkonzertFroschdirigent from '../assets/img/teichkonzert-froschdirigent.jpg';
import ImageTeichkonzertMusik from '../assets/img/teichkonzert-musik.jpg';
import ImageTeichkonzertTeich from '../assets/img/teichkonzert-teich.jpg';
import ImageTeichkonzertWerkstatt from '../assets/img/teichkonzert-werkstatt.jpg';
import Card from '../components/card/Card';
import { Container } from '../components/container/container.style';
import MuICard from '../components/mui-card/MuiCard';

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const Item = (props) => {
  return (
    <Paper sx={{ position: "relative" }}>
      <Image style={{}} src={props.item.image} alt={"Testing NextJs Image"} />
      <div style={{ maxWidth: '50%', position: 'absolute', top: '50%', left: '50%', fontSize: '40px', textAlign: 'center', transform: 'translate(-50%, -50%)', }}>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
      </div>
    </Paper>
  )
}

export default function ProductPage(props) {
  const color = 'white'

  var items = [
    {
      name: "Musik",
      description: "Ein Ort des Gesangs und der Klänge...",
      image: ImageTeichkonzertMusik
    },
    {
      name: "Alte Mühle",
      description: "Ein Ort der Geschichte...",
      image: ImageTeichkonzertEingang,
    },
    {
      name: "Natur",
      description: "Ein Ort der Natur...",
      image: ImageTeichkonzertFroschdirigent,
    },
    {
      name: "Entdecken",
      description: "Ein Ort zum Entdecken...",
      image: ImageTeichkonzertBaeume,
    },
    {
      name: "",
      description: "Ein Ort zum ",
      image: ImageTeichkonzertTeich
    },
    {
      name: "Kreativität",
      description: "",
      image: ImageTeichkonzertWerkstatt
    }
  ]


  console.log(props)
  return (
    <>
      <Carousel
        className='carousel-teichkonzert'
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosNewIcon />}
        cycleNavigation={false}
      >
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
      <Container>
        <h1 css={css`background-color: red;`}>{props.heading}</h1>
        <div
          css={css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
      color: ${color};
    }
  `}
        >
          Hover to change color.
        </div>
        <Image src={KermitImage} alt={"Testing NextJs Image"} />
        <Card />
        <MuICard />
        <Box>
          <Typography>I am a text</Typography>
        </Box>
      </Container>
    </>)
}

export async function getStaticProps() {
  // get data from headless cms
  const post = await client.getEntry('3PZ8ZrN0Yawx9r1lOcMPnR')
  const posts = await client.getEntries()
  const category = await client.getContentType('productReview')

  return {
    props: {
      heading: await post?.fields?.heading,
      posts: await posts?.items,
      category: await category,
    },
  }

}
