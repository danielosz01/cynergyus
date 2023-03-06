import { SyntheticEvent, useState, useEffect, useRef } from "react";



const CENTER_COUNT = 6;
const RADIUS = 600;
const TOTAL_ROW = 2;



const PhotoSphere = () => {
  //console.log(props.imageData)




  const imageData = [
    './src/assets/cynergy-11.svg',
    './src/assets/cynone.svg',
    '',
    './src/assets/formlabs.svg',
    './src/assets/google.svg',
    './src/assets/iso.svg',
    './src/assets/lg.svg',
    './src/assets/lglogo.png',
    './src/assets/tcl.svg',
    './src/assets/tmobile.svg',
    './src/assets/atat-12.svg',
    './src/assets/google.svg',

    './src/assets/tcl.svg',
    './src/assets/iso.svg',
    './src/assets/atat-12.svg',
    './src/assets/glowforge-10.svg',
    './src/assets/verkada.svg',
    './src/assets/zte.svg',

  ];

  


  
  const el = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const animId = useRef<number>(0);

  let rid:number;
  let mouseShift:number = 0;


  useEffect(() => {

    const items = el.current!.children;
    if (items.length == 0) return;

    // Setup and distribute items in correct positions
    const angleDivision = (90 / TOTAL_ROW) * Math.PI / 180;
    let radius, ypos, rowItemsCount = CENTER_COUNT;
    let indexCount = 0;

    for (let k = 0; k < TOTAL_ROW; k++) {

      radius = RADIUS * Math.cos(k * angleDivision);
      ypos = RADIUS * Math.sin(-k * angleDivision);
      rowItemsCount = CENTER_COUNT / (k + 1);

      let angleUnit = 360 / rowItemsCount;

      for (let i = 0; i < rowItemsCount; i++) {

        const angleRad = angleUnit * i  * Math.PI / 180;
        const xp = Math.cos(angleRad) * radius;
        const zp = Math.sin(angleRad) * radius;

        // Upper item
        const item = items[indexCount] as HTMLDivElement;
        item.className = 'photosphere-item';
        item.style.transform = `translateY(${ypos}px) translateX(${xp}px) translateZ(${zp}px)`;
        indexCount++;

        // Lower item
        const item2 = items[indexCount] as HTMLDivElement;
        item2.className = 'photosphere-item';
        item2.style.transform = `translateY(${-ypos}px) translateX(${xp}px) translateZ(${zp}px)`;
        indexCount++;

        // Save item data
        item.dataset.radius = item2.dataset.radius = radius.toString();
        item.dataset.angle = item2.dataset.angle = angleRad.toString();
        item.dataset.ypos = ypos.toString();
        item2.dataset.ypos = (-ypos).toString();
      }
    }

    // Update animation
    cancelAnimationFrame(animId.current);
    const updateFrame  = () => {

      animId.current = requestAnimationFrame(updateFrame);

      const items = el.current!.children;
      if (items.length == 0) return;

      for (let i = 0; i < items.length; i++) {

        const item = items[i] as HTMLDivElement;
        let angle = parseFloat(item.dataset.angle!);
        const ypos = parseFloat(item.dataset.ypos!);
        const radius = parseFloat(item.dataset.radius!);
        angle += mouseShift;
        item.dataset.angle = angle.toString();
        const xp = Math.cos(angle) * radius;
        const zp = Math.sin(angle) * radius;
        item.style.transform = `translateY(${ypos}px) translateX(${xp}px) translateZ(${zp}px)`;
      }
    }
    updateFrame();

    // Calculate mouse shift
    const onMouseMove = (e:MouseEvent) => {
      mouseShift = (e.clientX / innerWidth - 0.5) * 0.05;
    }
    document.body.addEventListener('mousemove', onMouseMove);
  }, [imageData]);

  const pickImage = (imgUrl:string, props) => {
    let url = imgUrl.toString();
    console.log(url)
    if (url.contains('google')) {
      console.log(props)
      props.handleStep01Click();
    }
    img.current!.style.backgroundImage = `url(${imgUrl})`;
    img.current!.style.transform = 'scale(1, 1)';

  }

  return (
    <div className="container my-4">
      <div className="photosphere" ref={el}>
        {imageData.map((it, index) => 
          <div 
              onClick={() => pickImage(it)}
              key={index} 
              style={{backgroundImage:`url(${it})`}}
              className='photosphere-item'>
          </div>)
        }
      </div>
      <div 
          onClick={() => {img.current!.style.transform = 'scale(0.0, 0.0)'}}
          className='image-display' 
          ref={img}>
      </div>
    </div>
  )
}

export default PhotoSphere

