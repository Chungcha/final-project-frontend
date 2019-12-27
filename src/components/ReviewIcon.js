import React from "react"
import regular_0 from "../web_and_ios/regular/regular_0.png"
import regular_1_half from "../web_and_ios/regular/regular_1_half.png"
import regular_1 from "../web_and_ios/regular/regular_1.png"
import regular_2_half from "../web_and_ios/regular/regular_2_half.png"
import regular_2 from "../web_and_ios/regular/regular_2.png"
import regular_3_half from "../web_and_ios/regular/regular_3_half.png"
import regular_3 from "../web_and_ios/regular/regular_3.png"
import regular_4_half from "../web_and_ios/regular/regular_4_half.png"
import regular_4 from "../web_and_ios/regular/regular_4.png"
import regular_5 from "../web_and_ios/regular/regular_5.png"
import { render } from "@testing-library/react"


// const ReviewIcon = (props) => {

//     iconPicker = (props) => {
//         switch (props && props.rating) {
//             case 0:
//                 return regular_0
//             case 1:
//                 return regular_1
//             case 1.5:
//                 return regular_1_half
//             case 2:
//                 return regular_2
//             case 2.5:
//                 return regular_2_half
//             case 3:
//                 return regular_3
//             case 3.5:
//                 return regular_3_half
//             case 4:
//                 return regular_4
//             case 4.5:
//                 return regular_4_half
//             case 5:
//                 return regular_5
                    
//         }
//     }

//     return(
//         <div>
//             {props.rating}
//             <img src={this.iconPicker()}/>
//         </div>
//     )
// }

// export default ReviewIcon


export default class ReviewIcon extends React.Component {


    constructor(props){
        super(props)
    }


    iconPicker = () => {
        switch (this.props.rating) {
            case 0:
                return regular_0
            case 1:
                return regular_1
            case 1.5:
                return regular_1_half
            case 2:
                return regular_2
            case 2.5:
                return regular_2_half
            case 3:
                return regular_3
            case 3.5:
                return regular_3_half
            case 4:
                return regular_4
            case 4.5:
                return regular_4_half
            case 5:
                return regular_5
                    
        }
    }

    render(){
        return(
            <div>
                <img src={this.iconPicker()}/>
            </div>
        )
    }
}