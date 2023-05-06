import { RiCheckboxBlankCircleFill, RiPlayFill } from "react-icons/ri"

export const Hero = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* information */}
      <div className="md:col-span-5 flex items-center justify-center p-8">
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl font-bold leading-[7.5rem]">
            We Design Impactful Digital 
            <span className="text-primary py-2 px-6 border-8 border-primary relative">
              Products 
              <RiCheckboxBlankCircleFill className="text-base absolute -left-5 -top-5 text-white p-2 bg-primary rounded-full box-content" /> 
              <RiCheckboxBlankCircleFill className="text-base absolute -right-5 -top-5 text-white p-2 bg-primary rounded-full box-content" /> 
              <RiCheckboxBlankCircleFill className="text-base absolute -bottom-5 -left-5 text-white p-2 bg-primary rounded-full box-content" /> 
              <RiCheckboxBlankCircleFill className="text-base absolute -bottom-5 -right-5 text-white p-2 bg-primary rounded-full box-content" /> 
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">Help find solutions with intitutive and in accordance with client business goals. We provide a high-quality services.</p>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-white text-xl py-2 px-6 rounded-xl">
              Contact Us
            </button>
            <button className="flex items-center text-left gap-4 text-xl py-2 px-6 rounded-xl">
              <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />
              Watch our <br/> introduction video
            </button>
          </div>
        </div>
      </div>
      <div className="md:col-span-3">Image</div>
    </section>
  )
}
