export const fadeSlide = {
     initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit:    { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export const popin = {
    initial : { scale: 0, y: 0 , x: 0},
    animate : { scale: 1, y: 0 , x:0 , transition :{ duration: 0.25 } },
};