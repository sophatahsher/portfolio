import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const {
      animationData,
      width = "300px",
      height = "300px"
    } = this.props;

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: width,
            height: height
          }}
        />
      </Suspense>
    );
  }

  // render() {
  //   const animationData = this.props.animationData;
  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationData,
  //     width: animationData.width || 650,
  //     height: animationData.height || 450
  //   };

  //   return (
  //     <Suspense fallback={<Loading />}>
  //       <Lottie
  //         animationData={defaultOptions.animationData}
  //         loop={defaultOptions.loop}
  //         style={{
  //           width: `${defaultOptions.width}px`,
  //           height: `${defaultOptions.height}px`
  //         }}
  //       />
  //     </Suspense>
  //   );
  // }
}
