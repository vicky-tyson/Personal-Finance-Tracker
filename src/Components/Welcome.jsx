import { Link } from "react-router-dom";
import icon from "../Images/finance-icon.png";

export default function Welcome() {

const USERNAME = localStorage.getItem('name');


  return (
    <div>
        <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-screen">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">Welcome <span className="text-5xl text-sky-400">{USERNAME}</span>, your personal finance tracker designed to help you manage your finances effortlessly.</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-400"><span className="dark:text-lime-500 font-normal">Stay Organized:</span> Keep all your financial information in one place.</p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-400"><span className="dark:text-lime-500 font-normal">Save Time:</span> Streamline your financial management process with intuitive tools.</p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"><span className="dark:text-lime-500 font-normal">Achieve Goals: </span>Take control of your finances and work towards your financial goals.</p>
            <Link to='budgeting' className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
            </Link> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex h-45 w-50">
            <img src={icon} alt="web-site-logo"/>
        </div>                
    </div>
    </section>
    </div>
  )
}
