import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useState } from 'react';
import './App.css'; 

const navigation = [
  { name: 'Scan', href: '#', current: true },
  { name: 'History', href: '#', current: false },
  { name: 'Analytics', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (

    <div className="App">

    <Disclosure as="nav" className="bg-[#1A1A1A]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <p class="text-2xl	font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-600">SecureCode.</p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      
    </Disclosure>
    
    <div className="relative mt-2 rounded-md shadow-sm flex items-center mx-4 my-2 left-center-element">
              <input
                type="text"
                name="input-prompt"
                id="input-prompt"
                className="bg-[#1A1A1A] block rounded-md border-0 py-60 pl-20 pr-20 text-white ring-1 ring-inset ring-[#373737] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:gray-700 sm:text-sm sm:leading-6"
                placeholder="Kindly paste your code here"
                value={inputValue} 
                onChange={handleInputChange} 
              />
            </div>

  <div class="relative mt-2 rounded-md shadow-sm flex items-center mx-4 my-2 right-center-element">
  <p
    className="bg-[#1A1A1A] block rounded-md border-0 py-60 pl-20 pr-20 text-white ring-1 ring-inset ring-[#373737] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:gray-700 sm:text-sm sm:leading-6"
    type="text"
    name="input-prompt"
    id="input-prompt"
  >
    {inputValue ? inputValue : 'Output will be here'}
  </p>
</div>

<footer class="bg-[#1A1A1A] text-center dark:bg-[#1A1A1A] lg:text-left fixed bottom-0 w-full">
  <div class="bg-black/5 p-4 text-center text-surface dark:text-white">
    Made with love 💛
  </div>
</footer>

    </div>
  )
}
