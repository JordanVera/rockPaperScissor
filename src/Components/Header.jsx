import 'animate.css';

const Header = ({ scoreCount }) => {
  // const headerRef = useRef('#header');

  // useEffect(() => {
  //   if (headerRef.current) {
  //     // Set the initial opacity to 0 using GSAP
  //     gsap.set(headerRef.current, { opacity: 0 });

  //     // Animate the header to fade in
  //     gsap.to(headerRef.current, {
  //       opacity: 1,
  //       duration: 0.5,
  //       ease: 'ease-in-out', // Adjust the easing here
  //     });
  //   }
  // }, []);

  return (
    <div id="header" className="animate__animated animate__fadeIn">
      <div className="left-element">
        <h2>Rock</h2>
        <h2>Paper</h2>
        <h2>Scissors</h2>
      </div>
      <div className="right-element score">
        <h3>SCORE</h3>
        <h2>{scoreCount}</h2>
      </div>
    </div>
  );
};
export default Header;
