import Image from 'next/image'
import React from 'react'

function Team() {
  return (
    // <div className='flex flex-col items-center justify-between'>

    <div
      style={{
        backgroundImage: `url("/images/xx.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "auto",
      }}
      className="flex items-end  justify-center"
    >
      <div className="flex flex-col items-center justify-center bg-white/50 text-sky-700 w-10/12 rounded-md mb-10 gap-1 border">
        <p className="text-3xl font-extrabold text-center bg-sky-400 px-4 text-white rounded-lg mt-2">
          انا غازي 
        </p>
        <p className="text-xl font-semibold text-center ">
          امتلك من الخبرة في مجال ميكانيكا السيارات مايزيد عن 15 سنة
        </p>
        <p className="text-xl">انا غازي </p>
        <p className="text-xl  text-center">
          اجيد فحص السيارت بالكمبيوتر لجميع انواع السيارات
        </p>
        <p className="text-xl font-extrabold bg-sky-400 px-4 text-white rounded-lg mb-4">
          للتواصل جوال : 0562971923
        </p>
      </div>
    </div>

  );
}

export default Team
