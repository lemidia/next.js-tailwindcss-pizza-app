import React from "react";

function Footer() {
  return (
    <div className="h-[700px] bg-stone-800 flex">
      <div className="flex-1">
        <img className="h-[100%] object-cover" src="/img/bg.png" alt="" />
      </div>
      <div className="text-white flex flex-[2] items-start justify-around p-14 space-x-8">
        <h2 className="text-3xl flex-1 font-bold">
          Oh Yes, we did. the Lama Pizza, well baked slice of pizza.
        </h2>
        <div className="flex-1 space-y-4 font-light">
          <h3 className="text-2xl font-bold text-yellow-400">
            Find Our Restaurants
          </h3>
          <p>
            1654 R.Don Road #304. <br />
            NewYork, 85022 <br />
            (602) 867-1010
          </p>
          <p>
            2356 K. Laquie Rd #235. <br /> NewYork, 85022 <br />
            (602) 867-1010
          </p>
          <p>
            1614 E, Erwin St #235. <br /> NewYork, 85022 <br />
            (602) 867-1010
          </p>
          <p>
            1614 W. Caroll St #235. <br /> NewYork, 85022 <br />
            (602) 867-1010
          </p>
        </div>
        <div className="flex-1 space-y-4 font-light">
          <h3 className="text-2xl font-bold text-yellow-400">Working Horus</h3>
          <p>
            Monday until Sriday <br />
            9:00 - 22:00
          </p>
          <p>
            saturday - Sunday <br />
            12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
