import './App.css'

function App() {
 

  return (
    <>
    <div className='px-8 py-8 bg-slate-100'>

      {/* NavBar */}
        <div  className='flex justify-between items-center'>
            <div >
                <svg width="65" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M23.016 39.2c.317 0 .574-.093.77-.28.196-.187.294-.457.294-.812v-1.82c0-.448.033-.84.098-1.176.065-.336.145-.663.238-.98l5.09-18.122 4.822 18.57c.112.384.193.682.243.895l.023.099c.047.215.07.453.07.714v1.82c0 .355.098.625.294.812.196.187.453.28.77.28h10.696c.299 0 .55-.093.756-.28.205-.187.308-.457.308-.812v-1.82c0-.373.023-.705.07-.994.047-.29.135-.677.266-1.162L54.04 7.224c.299-1.25.765-2.254 1.4-3.01.635-.756 1.363-1.311 2.184-1.666l.672-.308c.336-.168.574-.331.714-.49.14-.159.21-.369.21-.63 0-.336-.117-.607-.35-.812C58.637.103 58.287 0 57.82 0h-8.904c-.467 0-.817.103-1.05.308-.233.205-.35.476-.35.812 0 .261.06.471.182.63.121.159.313.303.574.434l.616.224c1.12.41 1.871.999 2.254 1.764s.453 1.661.21 2.688l-5.535 23.486-6.477-25.81c-.133-.58-.17-1.018-.11-1.31l.026-.104c.093-.29.317-.49.672-.602l1.232-.336c.299-.112.518-.257.658-.434a.986.986 0 0 0 .21-.63c0-.355-.112-.63-.336-.826C41.468.098 41.122 0 40.656 0H24.78c-.448 0-.789.098-1.022.294-.233.196-.35.471-.35.826 0 .224.06.415.182.574.121.159.322.294.602.406l1.176.42c.261.093.462.243.602.448.14.205.294.607.462 1.204l1.751 6.742-5.553 19.475L16.128 4.48c-.147-.49-.194-.898-.14-1.223l.028-.135c.093-.345.327-.574.7-.686l1.456-.336c.504-.168.756-.504.756-1.008 0-.336-.112-.602-.336-.798C18.368.098 18.022 0 17.556 0H1.344C.896 0 .56.098.336.294.112.49 0 .756 0 1.092c0 .224.056.434.168.63.112.196.29.35.532.462l1.232.392c.355.13.625.308.812.532.187.224.345.579.476 1.064l7.84 30.408c.112.43.191.751.238.966.047.215.07.462.07.742v1.82c0 .355.103.625.308.812.205.187.467.28.784.28h10.556Zm34.804.7c1.195 0 2.263-.29 3.206-.868a6.338 6.338 0 0 0 2.24-2.338c.55-.98.826-2.04.826-3.178 0-1.157-.275-2.212-.826-3.164a6.325 6.325 0 0 0-2.24-2.282c-.943-.57-2.011-.854-3.206-.854-1.157 0-2.207.285-3.15.854a6.325 6.325 0 0 0-2.24 2.282c-.55.952-.826 2.007-.826 3.164 0 1.139.275 2.198.826 3.178.55.98 1.297 1.76 2.24 2.338.943.579 1.993.868 3.15.868Z" fill="#00001A"/></svg>
            </div>
            <div className='pt-4'>
                <svg width="60" height="30" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fillRule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
            </div>
        </div>

      {/* Main content */}
      <div className='pt-6'>
        {/* Img section */}
        <div>
            <div className='block md:hidden'>
              <img src="./src/images/image-web-3-mobile.jpg" alt="" />
            </div>
            <div className='hidden md:block'>
              <img src="./src/images/image-web-3-desktop.jpg" alt="" />
            </div>
        
            {/* Content Area */}
            <div className='my-6'>
                <div>
                    <h1 className='text-4xl font-extrabold mb-4'>The Bright Future of Web 3.0?</h1>
                </div>
                <div>
                    <p className='text-lg opacity-90 mb-4'> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                    But is it really fulfilling its promise?</p>

                    <button className='bg-red-400 px-6 py-2 text-xl text-blue-950 font-bold tracking-widest'>READ MORE</button>
                </div>
            </div>

        </div>
        <div className='bg-slate-900 p-6 text-white'>
            <h1 className='text-yellow-600 text-4xl font-extrabold pb-4'>New</h1>
            <div className='my-4'>
                <h4 className='text-xl font-bold'>Hydrogen VS Electric Cars</h4>
                <p className='opacity-85 my-2'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr />
            <div className='my-4'>
                <h4 className='text-xl font-bold'>The Downsides of AI Artistry</h4>
                <p className='opacity-85 my-2'> What are the possible adverse effects of on-demand AI image generation?
                </p>
            </div>
            <hr />
            <div className='my-4'>
                <h4 className='text-xl font-bold'>Is VC Funding Drying Up?</h4>
                <p className='opacity-85 my-2'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>

        {/* Numbers category */}
        <div className='my-8'>
            <div className='flex my-8'>
                <div>
                    <img src="./src/images/image-retro-pcs.jpg" alt="Rectro"   />
                </div>
                <div className='flex flex-col justify-between pl-6'>
                    <p className='text-red-400 text-4xl font-bold'>01</p>
                    <p className='text-blue-900 font-extrabold text-xl'> Reviving Retro PCs</p>
                    <p className='text-gray-600'>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className='flex my-8'>
                <div>
                    <img src="./src/images/image-top-laptops.jpg" alt="Laps" className='w-40 md:w-full'   />
                </div>
                <div className='flex flex-col justify-between pl-6'>
                    <p className='text-red-400 text-4xl font-bold'> 02</p>
                    <p className='text-blue-900 font-extrabold text-xl'>Top 10 Laptops of 2022</p>
                    <p className='text-gray-600'>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className='flex my-8'>
                <div>
                    <img src="./src/images/image-gaming-growth.jpg" alt="Gaming" className='w-44 md:w-full' />
                </div>
                <div className='flex flex-col justify-between pl-6'>
                    <p className='text-red-400 text-4xl font-bold'>03</p>
                    <p className='text-blue-900 font-extrabold text-xl'>The Growth of Gaming</p>
                    <p className='text-gray-600'>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
            
            
            
            

        </div>


      </div>
      

    </div>
     


  Home
  New
  Popular
  Trending
  Categories

  
 
  
  

  
  
  

  
    </>
  )
}

export default App
