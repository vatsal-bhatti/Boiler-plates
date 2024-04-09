import React from "react";
import Card from "../../common/Card";
import Animation from "../../common/Animation/Animation";
import HappeningAnime from "../../../utils/Happeningnowsection/HappeningnowAnime.json"

function HappeningNow() {
  const cards = [1, 2, 3, 4];

  return (
    <>
      <section className="p-5 ">
        <div className="container p-4 mx-auto my-6 space-y-1 text-center">
          {/* <span className="text-base font-bold tracking-wider uppercase ">shortcut to your dream ui</span> */}
          <div className="pb-0 lg:pb-3 text-4xl font-bold md:text-4xl border-b-4 border-green-500 w-fit mx-auto ">
            Happening now<span className="text-blue-500">.</span>
            <span className="text-green-500">.</span>
            <span className="text-gray-400">.</span>
          </div>
          {/* <p>Get a jumpstart to creating your new webpage! With our fully responsive and carefully styled components you can get the structure of your website done with just a couple of clicks.</p> */}
        </div>
<div className="flex  ">  

<div className=" hidden lg:block   w-2/3  ">
    
    <div className=" w-fit h-fit flex my-[5rem]    "> <Animation path={HappeningAnime} width="105%" height="100%"/></div>
   
 </div>
 <div className="  pt-0 lg:pt-5 grid grid-cols-1 w-fit lg:w-[60%]  gap-y-6 place-items-center md:mx-auto lg:mx-0 lg:gap-5   ">

          {cards.slice(0, 3).map((card) => (
            <Card />
          ))}

<div className=" text-xl text-blue-500 font-bold text-center mx-auto    hover:text-gray-700  w-fit  ">
          <span className="py-1 border-b-4 border-white hover:border-green-500">See all</span> 
          </div>
     </div>
          

        </div>
        
        {/* <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
		<div className="flex flex-col px-8 py-6">
			<h2 className="mb-2 text-lg font-bold sm:text-xl title-font ">Components</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed ">Individual components that can be re-used multiple times in your designs.</p>
			<a className="inline-flex items-center space-x-2 text-sm " href="/components">
				<span>Learn More</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
		</div>
		<div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
			<h2 className="mb-2 text-lg font-bold sm:text-xl title-font ">Sections</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed ">Pre-made building blocks that you can stack on top of each other like Legos to build a website of your own in minutes.</p>
			<a className="inline-flex items-center space-x-2 text-sm " href="/sections">
				<span>Learn More</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
		</div>
		<div className="flex flex-col px-8 py-6">
			<h2 className="mb-2 text-lg font-bold sm:text-xl title-font ">Templates</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed ">Full pages that showcase pieces of what you can achieve with the building blocks that are in this UI kit.</p>
			<a className="inline-flex items-center space-x-2 text-sm " href="/templates">
				<span>Learn More</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
		</div>
		<div className="flex flex-col px-8 py-6">
			<h2 className="mb-2 text-lg font-bold sm:text-xl title-font ">Customization</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed ">Choose your primary color from any of the Tailwind CSS 2.0 colors. You can also view all of the components in our light and dark themes.</p>
			<a className="inline-flex items-center space-x-2 text-sm " href="/docs">
				<span>Learn More</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
		</div>
	</div> */}
      </section>
    </>
  );
}

export default HappeningNow;
