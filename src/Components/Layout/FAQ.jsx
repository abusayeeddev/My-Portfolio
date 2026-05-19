import React, { useState } from 'react'

const Customars = () => {
  const [open, setOpen] = useState(null);
  const faqData = [
    {
    question: "Who are you?",
    answer: "I am a frontend web developer and portfolio designer."
  },
  {
    question: "What services do you provide?",
    answer: "I provide website design, frontend development, and responsive UI design."
  },
  {
    question: "Which technologies do you use?",
    answer: "I use HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap."
  },
  {
    question: "Do you create responsive websites?",
    answer: "Yes, all my websites are fully responsive for mobile, tablet, and desktop."
  },
  {
    question: "Can you redesign old websites?",
    answer: "Yes, I can redesign and modernize old websites."
  },
  {
    question: "How can I contact you?",
    answer: "You can contact me through email, WhatsApp, or the contact form."
  }
  ];




  return (
    <div className="w-full  p-4">
      {faqData.map((item, index)=>(
        <div className="w-full py-2.5 px-2.5 bg-bgclr text-center shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-[15px_0_15px_0] border border-textMain mb-4" >
          <div className="flex items-center justify-between cursor-pointer" onClick={()=> setOpen(open===index ? null: index)}>
            <h3 className="font-medium text-[22px] text-primary duration-100 hover:text-textSub capitalize  cursor-pointer">{item.question}</h3>
              <span>{open === index ? '-' : '+'}</span>
          </div>
          
          <div className={`overflow-hidden duration-500 ${open === index ? 'max-h-50 mt-4' : 'max-h-0'}`}>
            <p className=' text-[16px] capitalize text-gray-400 text-start'>{item.answer}</p>
          </div>
          
        </div>
      ))}
      
    </div>
  )
}

export default Customars
