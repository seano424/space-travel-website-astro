import clsx from 'clsx'
import { useState } from 'react'
import json from '../../data.json'

export default function Technology() {
  const [technology, setTechnology] = useState(json.technology[0])
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-10 w-full lg:gap-32">
      <section className="lg:w-1/2">
        <img
          src={technology.images.landscape}
          alt={technology.name}
          className="w-full h-full object-cover block lg:hidden"
        />

        <img
          src={technology.images.portrait}
          alt={technology.name}
          className="w-full h-full object-cover hidden lg:block aspect-auto"
        />
      </section>

      <section className="flex flex-col items-center text-center lg:items-center lg:text-left lg:flex-row lg:gap-10 lg:w-1/2 lg:justify-center">
        <div className="flex flex-col lg:flex-row gap-10">
          <ul className="flex gap-10 justify-center lg:flex-col">
            {json.technology.map((t, index) => (
              <li key={t.name}>
                <button
                  onClick={() => setTechnology(t)}
                  className={clsx(
                    'bg-theme-dark rounded-full border-2 border-theme-accent/25 w-16 h-16  font-bold hover:border-theme-accent/50 focus:border-theme-accent/50 transition-all duration-300',
                    {
                      'bg-theme-white text-theme-dark':
                        t.name === technology.name,
                    }
                  )}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 items-center mt-10 lg:mt-0 text-center lg:items-start lg:text-left lg:justify-between">
            <h4 className="text-theme-accent/50 text-md font-serif uppercase">
              The terminology...
            </h4>
            <h2 className="text-theme-white text-lg font-serif uppercase">
              {technology.name}
            </h2>
            <p className="text-theme-accent text-base font-sans-cond max-w-xl">
              {technology.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
