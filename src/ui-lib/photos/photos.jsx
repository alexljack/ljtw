import Image from 'next/image'
import clsx from 'clsx'

import image1 from '@/images/photos/london-aerial.jpg'
import image2 from '@/images/photos/javascript-cup.jpg'
import image4 from '@/images/photos/typescript.png'
// import javascript from '@/images/tech_logos/javascript.png'
// import typescript from '@/images/tech_logos/typescript.png'
// import nodejs from '@/images/tech_logos/nodejs.png'
// import react from '@/images/tech_logos/react_logo.png'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Photos
