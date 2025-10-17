"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Rishi",
      role: "Founder",
      img: "/team/Rishi.jpg",
      description: `Founder of Simply Music India, Rishi is the driving force behind the label’s creative and strategic direction. 
      He started the journey with a vision to bridge classical and modern sounds, uniting diverse artists under one platform.`,
    },
    {
      name: "Samrat",
      role: "Music Composer",
      img: "/team/dada.jpg",
      description: `A gifted composer who effortlessly blends soulful melodies with energetic beats. 
      Samrat has composed several acclaimed tracks that define Simply Music's signature sound.`,
    },
    {
      name: "Sid",
      role: "Music Composer",
      img: "/team/sid.jpg",
      description: `Sid is known for his emotionally rich compositions that bring deep resonance and atmosphere to every project.`,
    },
    {
      name: "Rahul",
      role: "Lyricist",
      img: "/team/Rahul.jpg",
      description: `Rahul’s poetic artistry transforms every song into a heartfelt story.`,
    },
    {
      name: "Divakar",
      role: "Lyricist",
      img: "/team/divakar.jpg",
      description: `Divakar’s creative writing captures emotions in their purest form, turning words into art.`,
    },
    {
      name: "Khush",
      role: "Music Producer",
      img: "/team/Khush.jpg",
      description: `Khush brings rhythm, balance, and clarity to the team’s sound. 
      With a keen ear for detail, he ensures every production meets world-class quality.`,
    },
    {
      name: "Rawnak",
      role: "Music Producer",
      img: "/team/Rawnak.jpg",
      description: `A producer with a flair for experimental beats and sound textures. 
      Rawnak is always pushing creative boundaries in every mix.`,
    },
    {
      name: "Aditya",
      role: "Music Producer",
      img: "/team/Aditya.jpg",
      description: `Aditya’s fresh perspective and modern production style give Simply Music a contemporary edge.`,
    },
  ];

  return (
    <section
      id="team"
      className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-12 tracking-wide">
          Our Creative Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 place-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(member)}
              className="flex flex-col items-center text-center cursor-pointer group hover:scale-105 transition-transform duration-500"
            >
              <div className="w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_40px_rgba(249,200,14,0.3)]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold">
                {member.name}
              </h3>
              <p className="text-accent uppercase tracking-widest mt-2 text-xs sm:text-sm md:text-base">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[2000] transition-opacity duration-300">
          <div className="relative bg-white/10 border border-gray-700 rounded-3xl p-6 sm:p-10 w-[92%] max-w-lg text-center text-white shadow-2xl transform scale-100 transition-all duration-500">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-accent transition"
            >
              <X size={26} />
            </button>

            <div className="flex flex-col items-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_40px_rgba(249,200,14,0.3)]">
                <img
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-bold">
                {selectedMember.name}
              </h3>
              <p className="text-accent uppercase tracking-widest mt-2 text-sm">
                {selectedMember.role}
              </p>

              <p className="mt-5 text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm whitespace-pre-line">
                {selectedMember.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
