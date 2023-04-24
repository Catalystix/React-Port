import React from "react";
import NavLinks from "../Navigation";


export default function Footer() {
    return (
        

<footer class=" fixed inset-x-0 bottom-0 opacity-1 bg-none rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-300 sm:text-center dark:text-gray-300">© 2023 <a href="https://github.com/Catalystix" class="hover:underline">Catalyst™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        
        <li>
            <a href="https://www.linkedin.com/in/drew-greenblatt33/" class="mr-4 hover:underline md:mr-6">LinkedIn</a>
        </li>
        <li>
            <a href="#" className={NavLinks} class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>



      );
}