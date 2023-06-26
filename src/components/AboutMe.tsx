import Image from "next/image";
import profilePic from "../../public/profileImage.jpeg";

export function AboutMe() {
  return (
    <div className="text-center">
        <Image
        className="p-16 flex items-center justify-center"
          src={profilePic}
          style={{ borderRadius: "100%" }}
          alt="image of Caroline"
        ></Image>
      <br></br>
      <p>
        I’m Caroline and live in Doncaster, South Yorkshire. I have always felt
        drawn to all things spiritual and during tough times discovered Reiki I
        fell in love with the peace and relaxation it brought to my life and
        started to research the practice more.
      </p>
      <br></br>
      <p>
        After the very sudden passing of my lovely Mum two years ago, I started
        to reevaluate my life, and this led to me finding a fantastic and very
        talented Reiki Master/Medium who lived very close to me, it felt like
        fate had stepped in and found me the perfect way to learn Reiki myself.
        Fast forward to now, and I am trained in Level I and Level II Usui
        Reiki, and very excited to be starting to spread my love for Reiki and
        make it my career, as the saying goes : “If you do what you love, you’ll
        never work a day in your life”
      </p>
      <br></br>
      <p>
        I will be documenting my journey with Reiki here, as a blog, and invite
        you to follow my journey with me. Please do not hesitate to get in touch
        for more information on any treatments you are interested in Thank you
        for reading and please share my website with your family and friends
      </p>
      <br></br>
      <p>With love</p>
      <p>Caroline</p>
    </div>
  );
}
