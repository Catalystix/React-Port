import React from "react";

export default function About() {
    return (

        <section class="bg-none opacity-1 dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-300 md:text-5xl lg:text-6xl dark:text-white">About Me</h1>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300">As a Full-Stack software engineer I'm enthusiastic to work collaboratively in groups to solve problems and provide creative solutions.
                    I have earned a Full-Stack development certificate from UNC Chapel Hill where I had experience implementing MVC architectural frameworks, mobile-first development, version control with Git, Node.js, Express.js, Sequelize.js, Next.js MongoDB, SQL, NoSQL , Advanced JavaScript, Bootstrap, Handlebars, jQuery, HTML, and CSS. I concurrently co-operate an Adventure Rental business, managing operations</p>

                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" class="opacity-0 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="#" class="opacity-0 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-300 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Learn more
                    </a>
                </div>
            </div>
        </section>

    );
}