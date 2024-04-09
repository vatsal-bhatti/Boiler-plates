import React from "react";
import Animation from "../../common/Animation/Animation";
import ViewDetailsAnimation from "../../../utils/ViewDetailsPage/ViewDetailAnimation.json";
import EventDetailsIcon from "../../../utils/ViewDetailsPage/Olympic Torch.json"
import PrizePoolAnimation from "../../../utils/ViewDetailsPage/PrizeAnimation.json"
import PerksAnimation from "../../../utils/ViewDetailsPage/Perks Animation.json"
import { Button } from "../../common/Button";

function DetailsBlock({ details }) {
    return (
      <div className="w-full mt-5">
        {details.map((detail, index) => (
          <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-transparent rounded-md w-16 h-11">
            <Animation path={detail.icon.path} width={detail.icon.width} height={detail.icon.height}/>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 border-b-2 border-green-500 w-fit pb-1">{detail.title}</h4>
              {index === 2 ? (
                <ul className="mt-1 text-gray-500 ">
                  {detail.subDetails.map((perk) => (
                    <li>{perk}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1 text-gray-500 ">
                  <ul>
                    {detail.subDetails.map((subDetail) => (
                      <li>
                        {subDetail.title}: {subDetail.Description}
                      </li>
                    ))}
                  </ul>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
    

function ViewDetailsPage() {
    const detail = [
        {
          title: "Event Details",
          icon: {path:EventDetailsIcon,width:"65%",height:"100%"},
         
          subDetails: [
            
            { title: "Date", Description: "15-16 april" },
            { title: "Mode", Description: "offline" },
            { title: "Venue", Description: `Echelon Institute of Technology ,
            Kheri-Manjhawali Road, Naharpar, Kabulpur Patti Mahtab,
            Faridabad, Haryana 121101` },
            { title: "Duration", Description: "36 Hours" },
        ],
        },
        {
            title: "Prize Pool",
            icon: {path:PrizePoolAnimation,width:"110%",height:"100%"},
            subDetails: [
              
            {title:"Prize",Description:"500000"}
          ],
          },
          {
            title: "Exclusive Perks",
            icon: {path:PerksAnimation,width:"110%",height:"100%"},
            subDetails: [
              
               " Free Swags",
                "Networking with Industry Experts🌐",
               " Goodies💯",
               " Accommodation",
                "Meals and Much More🔥✨",
          ],
          },
      ];



  return (
    <>
      <div className="container flex flex-col lg:flex-row p-8 justify-center items-center lg:h-full mx-auto  lg:gap-10   w-full ">
        <div className="flex items-center justify-center w-full lg:w-auto ">
          <Animation path={ViewDetailsAnimation} width="100%" height="100%" />
        </div>
        <div className="flex flex-wrap items-center w-full lg:w-fit  p-3 md:p-5 ">
          <div className=" w-full ">
            <div className="flex flex-col w-full ">
              <h3 className="max-w-3xl text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight md:text-4xl border-b-4 border-green-500 w-fit pb-1 ">
                Hackathon Name
              </h3>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl  ">
                Hackathon About Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Recusandae, fugiat voluptatibus, aperiam
                dolorum ipsa est porro corporis quos magnam pariatur architecto
                minus maiores maxime atque perspiciatis et iusto, fuga suscipit!
              </p>
            </div>
            <DetailsBlock details={detail} />
            <div className=" ml-[75px]  md:mx-auto my-10  w-fit">
            <Button
              variant="primary"
              buttonStyle="m-0 bg-blue-500 font-bold py-4  px-6"
            >
              Apply Now
            </Button>
            </div>
           

          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDetailsPage;
