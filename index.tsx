import * as React from 'react'
import { useTransition as useNavigation } from "@remix-run/react";

import * as NProgress from 'nprogress';

type ProgressProps = {
    color?: string;
    startPosition?: number;
    stopDelayMs?: number;
    height?: number;
    showSpinner?: boolean;
    easing?: string;
    speed?: number;
    trickle?: boolean;
    trickleSpeed?: number
}

const defaultConfig: Required<ProgressProps> = {
  color: '#3366FF',
  startPosition: 0.2,
  stopDelayMs: 0,
  height: 2,
  showSpinner: false,
  easing: 'ease',
  speed: 200,
  trickle: true,
  trickleSpeed: 800
}

export default function Progress(props: ProgressProps) {
    const navigation = useNavigation()
    const config = React.useMemo(() => {
      return {
        ...defaultConfig,
        ...props
      }
    }, [props])

    if(navigation.state === 'loading') NProgress.start()

    React.useEffect(() =>  {
        if(navigation.state !== 'loading') NProgress.done()
    }) 

    React.useEffect(() => {
      NProgress.configure({
        minimum: config.startPosition,
        showSpinner: config.showSpinner,
        easing: config.easing,
        speed: config.speed,
        trickle: config.trickle,
        trickleSpeed: config.trickleSpeed
      })
    }, [])

    // https://unpkg.com/nprogress@0.2.0/nprogress.css
    return <style>{`
    #nprogress {
      pointer-events: none;
    }
    
    #nprogress .bar {
      background: ${config.color};
    
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
    
      width: 100%;
      height: ${config.height}px;
    }
    
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #29d, 0 0 5px ${config.color};
      opacity: 1.0;
    
      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
    
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
    
      border: solid 2px transparent;
      border-top-color: ${config.color};
      border-left-color: ${config.color};
      border-radius: 50%;
    
      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }
    
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    
    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    `}</style>
}