import TextType from '../components/TextType'
import cafe from '../../public/cafe.png'
import './Home.css'
import CircularGallery from '../components/CircularGallery'
import ScrollAnimation from '../components/ScrollAnimation'


export default function Home() {
  return (
    <>
    <div 
    className="flex flex-col justify-center items-center lg:h-200 font-bold text-4xl"
    style={{ 
      backgroundImage: `url(${cafe})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
    }}
    >
     <TextType
        text={["Welcome to GrabPanda", "Order your favorite food", "Enjoy your meal!"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="text-green-200 mt-10 lg:text-4xl text-2xl"
      />
    <CircularGallery bend={3} textColor="black" borderRadius={0.05} scrollEase={0.02}/>
    </div>

    <div className="flex flex-col lg:flex-row gap-4 w-full justify-evenly items-center lg:items-start h-100">
    <ScrollAnimation animation="slideRight" once={false} duration={2} className="p-8 pb-0 lg:pb-8 lg:w-1/2 place-content-center h-full" delay={0.8}>
        <h1 className="text-4xl font-bold font-pacifico text-green-400">Dine with us</h1>
        <p className="text-lg font-pacifico text-gray-400">Experience the best dining experience with us</p>
        <p className="font-merriweather text-gray-700">Enjoy the fresh air and ambiance of our outdoor area or enjoy a comfortable and climate-controlled dining experience within our indoor area, paired with impeccable service that ensures every moment of your visit is perfect.</p>
    </ScrollAnimation>
    <ScrollAnimation animation="slideLeft" once={false} duration={2} className="p-8 pt-0 lg:pt-8 lg:w-1/2" delay={0.8}>
        <img src="https://images.pexels.com/photos/3534750/pexels-photo-3534750.jpeg?cs=srgb&dl=pexels-adrien-olichon-1257089-3534750.jpg&fm=jpg"
        className="lg:w-3/4 lg:h-96 w-full h-full rounded-lg"
        alt="Dine with us"></img>
    </ScrollAnimation>
    </div>
    </>
  );
}