'use client'
import Image from 'next/image';
import Link from 'next/link';
import Newsletter from '../../components/Newsletter';
import { useTranslations } from 'next-intl';

import team_bg from "../../../../public/img/team-bg.png";
import team_Call from "../../../../public/img/call.svg";
import team_mail from "../../../../public/img/mail.svg";

const Page = () => {
  const t = useTranslations("Team");

  return (
    <>
      {/* HERO */}
      <section className="hero-banner">
        <div className="hero-wrapper">
          <div className="hero-img">
            <Image src={team_bg} alt="hero" />
          </div>
          <div className="hero-content">
            <h1>{t("heroTitle")}</h1>
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <div className="team py py-b">
        <div className="container">
          <div className="team-wrapper py">
            {t.raw("members").map((member, idx) => (
              <div className="team-box" key={idx}>
                <div className="team-img">
                  {/* You can optionally map images dynamically too */}
                  <Image src={idx === 0 ? require("../../../../public/img/team-2.jpeg") : require("../../../../public/img/team-1.jpeg")} alt={member.name} />
                </div>
                <div className="team-content">
                  <div className="team-title">
                    <h2>{member.name}</h2>
                    <span>{member.degree}</span>
                  </div>
                  <div className="team-text">
                    <p>{member.role}</p>
                  </div>
                  <div className="team-text">
                    <p>{member.description}</p>
                  </div>
                  <div className="team-call">
                    <Image src={team_Call} alt="call" />
                    <Link href={`tel:${member.phone}`} aria-label={`Call ${member.name}`}>
                      <span>Telefon:</span> {member.phone}
                    </Link>
                  </div>
                  <div className="team-call">
                    <Image src={team_mail} alt="mail" />
                    <Link href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                      <span>E-Mail:</span> {member.email}
                    </Link>
                  </div>
                  <div className="team-text-cont">
                    <p>{member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Page;
