// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import Sellerwoman from '../Assets/authentic-ethnic-africa-america-sellerwoman-workin-2022-02-10-17-57-33-utc.jpg'
// import Artisan from '../Assets/artisan-2022-03-07-23-59-27-utc.jpeg'
// import Porter from '../Assets/concentrated-potter-smoothing-out-exterior-pottery-2022-03-07-18-06-32-utc.jpg'
// import Leatherworker from '../Assets/leatherworker-teaching-young-man-in-workshop-2021-10-20-18-11-38-utc.jpg'
// import Microworkers from '../Assets/meeting-of-young-volunteers-team-in-park-2021-08-26-16-33-25-utc.jpg'
// import Painter from '../Assets/smiling-young-white-redhead-woman-2022-04-11-14-21-03-utc.jpg'
// import Porter2 from '../Assets/young-female-artisan-in-workwear-holding-paintbrus-2021-12-09-05-54-02-utc.jpg'


// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     image: Sellerwoman,
      
//   },
//   {
//     image:Artisan,
      
//   },
//   {

//     image:Porter,
      
//   },
//   {
//     image:Leatherworker,
      
//   },
//   {
//     image:Microworkers,
      
//   },
//   {
//     image:Painter,
      
//   },
//   {
//     image:
//     Porter2
//   },
// ];

// function SwipeableTextMobileStepper() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: '100%', flexGrow: 1, textAlign: 'center', border:'1px solid red'}}>
//         <h1 style={{fontSize: '35px',padding:0, }}>Coming soon</h1>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 50,
//           pl: 2,
//           bgcolor: 'background.default',
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: 400,
//                   display: 'block',
//                   maxWidth: '100%',
//                   overflow: 'hidden',
//                   width: '30%',
//                   border:'1px solid green'
//                 }}
//                 src={step.image}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

// export default SwipeableTextMobileStepper;

import Carousel from 'react-elastic-carousel'
import Item from './Item'
import Sellerwoman from '../Assets/authentic-ethnic-africa-america-sellerwoman-workin-2022-02-10-17-57-33-utc.jpg'
import Artisan from '../Assets/artisan-2022-03-07-23-59-27-utc.jpeg'
import Porter from '../Assets/concentrated-potter-smoothing-out-exterior-pottery-2022-03-07-18-06-32-utc.jpg'
import Leatherworker from '../Assets/leatherworker-teaching-young-man-in-workshop-2021-10-20-18-11-38-utc.jpg'
import Microworkers from '../Assets/meeting-of-young-volunteers-team-in-park-2021-08-26-16-33-25-utc.jpg'
import Painter from '../Assets/smiling-young-white-redhead-woman-2022-04-11-14-21-03-utc.jpg'
import Porter2 from '../Assets/young-female-artisan-in-workwear-holding-paintbrus-2021-12-09-05-54-02-utc.jpg'

const breakPoints = [
  {width:'1', itemsToShow:1},
  {width:400, itemsToShow:1},
  {width:550, itemsToShow:1},
  {width:768, itemsToShow:3},
  {width:1200, itemsToShow:4},
]

function Slider(){

  return(
    <>
    <h1 style={{textAlign:'center'}}>Coming Soon</h1>
    <div>
      <Carousel breakPoints = {breakPoints} autoScroll>
      {/* {images.map((image)=><img src={image.image} alt='carousel-img'/>)} */}
      <Item>
        <img src={Sellerwoman} alt='' style={{width:'100%',borderRadius: '10px'}}/>
      </Item>
      <Item >
        <img src={Artisan} alt='' style={{width:'100%',borderRadius: '10px'}}/>
      </Item>
      <Item>
        <img src={Porter} alt='' style={{width:'100%',borderRadius: '10px'}}/>
      </Item>
      <Item>
        <img src={Leatherworker} alt='' style={{width:'100%',borderRadius: '10px'}}/>
      </Item>
      <Item>
        <img src={Microworkers} alt='' style={{width:'100%',borderRadius: '10px'}}/>
      </Item>
      <Item>
        <img src={Painter} alt='' style={{width:'100%',borderRadius: '10px'}}/>
      </Item>
      <Item>

        <img src={Porter2} alt='' style={{width:'100%',borderRadius: '10px'}}/>
      </Item>
      
      </Carousel>
    </div>
    </>
  )
}
export default Slider;
