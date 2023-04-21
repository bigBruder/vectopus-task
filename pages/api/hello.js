// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

const arrColor = [
  'd424d4', 
  'b00eb0', 
  '0eb06c', 
  '07eb88', 
  'eb8507', 
  '07dceb', 
  '2baeb5', 
  '063f42',
  '6bd5db',
  'c332d9',
  'd93479',
  '991c52',
  '56d932',
  'bbd934',
  'd9f743',
  'de1d9a',
  'bfcc4e',
  'be41e8',
];
const apiUrl = 'https://dummyimage.com/275.png/';

export const imgList = arrColor.map((color, index) => ({
  url: `${apiUrl}${color}`,
  name: index,
}))

const apiIconsUrl = 'https://dummyimage.com/40.png/';

export const iconsList = arrColor.slice(0, 15).map((color, index) => ({
    url: `${apiIconsUrl}${color}`,
    name: index,
}))

const bigIllustrationUrl = 'https://dummyimage.com/300.png/';

const smallIllustartionUrl = 'https://dummyimage.com/150.png/';

export const illustrationList = [];

(function illustrationListCounter() {
  while(illustrationList.length < 4) {
    const randomIndexBig = Math.floor((Math.random() * arrColor.length))
    const randomIndexSmallFirst = Math.floor((Math.random() * arrColor.length))
    const randomIndexSmallSecond = Math.floor((Math.random() * arrColor.length))

    const ilustartionObj = {
      urlBig: `${bigIllustrationUrl}${arrColor[randomIndexBig]}`,
      urlSmallFirst: `${smallIllustartionUrl}${arrColor[randomIndexSmallFirst]}`,
      urlSmallSecond: `${smallIllustartionUrl}${arrColor[randomIndexSmallSecond]}`,
    }

    illustrationList.push(ilustartionObj);
  }
})()

