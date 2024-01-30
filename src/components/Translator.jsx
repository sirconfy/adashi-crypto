// import 'flag-icon-css/css/flag-icon.min.css';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import languageDetector from 'i18next-browser-languagedetector'; // Correct import
import HttpApi from 'i18next-http-backend';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import i18next from "i18next";




i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(languageDetector)
  .use(HttpApi)
  .init({
    supportedLang: ['en', 'zh', 'ja', 'ko' ],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false } 
  });


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const Languages = [
    {
      code: 'zh',
      name: 'Chinese',
      country_code: 'cn'
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb'
    },
    {
      code: 'ja',
      name: 'Japanese',
      country_code: 'jp'
    },
  
    {
      code: 'ko',
      name: 'Korea',
      country_code: 'kr'
    },
  
  ];
  



function Translator() {
  const { t, i18n } = useTranslation();
// const selectedLanguage = i18n.language || { country_code: 'fallback_country_code' };

// console.log('i18n:', i18n);
// console.log('selectedLanguage:', selectedLanguage);
  





return(
  <>
  <div className="flex justify-end">
<Menu as="div" className="relative w-28 inline-block">
  <div>
    <Menu.Button className=" flex space-x-2 " > 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>

      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
    </Menu.Button>
  </div>

  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1">
        {Languages.map(({ code, name, country_code }) => (
          <Menu.Item key={country_code}>
            {({ active }) => (
              <button
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
                onClick={() => i18next.changeLanguage(code)}
               
              >
          <span className={`flag-icon flag-icon-${country_code.toLowerCase()} mx-2`}></span>
                {name}
              </button>
            )}
          </Menu.Item>
        ))}
      </div>
    </Menu.Items>
  </Transition>
</Menu>
</div>

<h2>{t('welcome_message')}</h2>

</>
);




}

export default Translator;
