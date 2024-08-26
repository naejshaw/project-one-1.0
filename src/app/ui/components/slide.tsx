import Image from "next/image";

export default function Slide({imgPath, personCity, personName, text}:{imgPath:any, personCity:string, personName:string, text:string}) {
  return (
    <div className="py-10 px-14 cursor-grab active:cursor-grabbing slide swiper-slide">
      <p className="testimonials_text">
        {text}
      </p>
      <div className="rounded-lg flex items-center gap-4 py-4 px-0 person">
        <Image
          className="w-14 h-14 rounded-lg image_person"
          src={imgPath}
          alt="Person_two"
        />
        <div className="info_person">
          <p className="text-xl font-semibold name_person">{personName}</p>
          <p className="details_person">{personCity}</p>
        </div>
      </div>
    </div>
  );
}
