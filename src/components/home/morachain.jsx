import React from 'react'
import coin from "../../assets/coin-lg.png"
const Morachain = () => {
  return (
    <section className=" body-font">
  <div className="container px-8 md:px-[20px] 2xl:px-[120px] lg:px-10 pt-24 pb-[20px] md:pb-[0px] mx-auto flex flex-col md:flex-row flex-wrap md:flex-nowrap">
    <div className="lg:w-3/5 md:w-1/2 md:pr-[2rem] lg:pr-[4rem] pr-0 mt-[60px]">
      <h1 className=" font-medium text-[2.5rem] sm:text-[2rem] xl:text-[3rem] 2xl:text-[4rem] text-gray-900">What is Morachain?</h1>
      <p className=" mt-4 text-[13px] md:text-[15px] xl:text-[18px] font-semibold">Poke slow-carb mixtape knausgaard, typewriter street Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt temporibus fuga inventore nisi fugit quos voluptas voluptatum aspernatur voluptatibus corrupti beatae doloremque exercitationem eius, architecto modi reiciendis quis molestias! Aliquam? art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
    </div>
    <div className="lg:w-[40%] md:w-1/2 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 ]">
      <img src={coin} alt="" className='relative z-0' />
    </div>
  </div>
</section>
  )
}

export default Morachain