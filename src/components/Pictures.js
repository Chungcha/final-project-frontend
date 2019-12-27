import React from "react"
import { Divider } from "semantic-ui-react"
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel"  

import CustomDotGroup from "./CustomDotGroup";


// export default class Pictures extends React.Component{

//     render(){
//         return(
//             <div>
//                 Restaurant Pictures box       
//             </div>
//         )
//     }

// }

const Pictures = (props) => (
        <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={3}
        >
            <Slider>
                <Slide tag="a" index={0}>
                    <Image src={props.pictures[0]}/>
                </Slide>
                <Slide tag="a" index={1}>
                    <Image src={props.pictures[1]}/>
                </Slide>
                <Slide tag="a" index={2}>
                    <Image src={props.pictures[2]}/>
                </Slide>
            </Slider>

            <Divider />
            <CustomDotGroup slides={3}/>

        </CarouselProvider>
)

export default Pictures
