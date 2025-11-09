import TextType from '../components/TextType'
import cafe from '../../public/cafe.png'
import './Home.css'
import CircularGallery from '../components/CircularGallery'
import ScrollAnimation from '../components/ScrollAnimation'


export default function Home() {
  return (
    <>
    <div 
    className="flex flex-col justify-center items-center h-150 font-bold text-4xl"
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
        className="text-green-200 mt-10"
      />
    <CircularGallery bend={3} textColor="black" borderRadius={0.05} scrollEase={0.02}/>
    </div>

    <div className="flex flex-row gap-4 w-full justify-evenly">
    <ScrollAnimation animation="slideRight" once={false} duration={2} className="p-8">
        <h1 className="text-4xl font-bold">Scroll animation</h1>
        <p className="text-lg">Dine with us</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Click me</button>
        <div className="bg-red-500 w-10 h-10"></div>
        <div className="bg-green-500 w-10 h-10"></div>
        <div className="bg-yellow-500 w-10 h-10"></div>
        <div className="bg-purple-500 w-10 h-10"></div>
        <div className="bg-orange-500 w-10 h-10"></div>
    </ScrollAnimation>
    <ScrollAnimation animation="slideLeft" once={false} duration={2} className="p-8">
        <h1 className="text-4xl font-bold">Scroll animation</h1>
        <p className="text-lg">Picture here</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Click me</button>
        <div className="bg-red-500 w-10 h-10"></div>
        <div className="bg-green-500 w-10 h-10"></div>
        <div className="bg-yellow-500 w-10 h-10"></div>
        <div className="bg-purple-500 w-10 h-10"></div>
        <div className="bg-orange-500 w-10 h-10"></div>
    </ScrollAnimation>
    </div>
    </>
  );
}